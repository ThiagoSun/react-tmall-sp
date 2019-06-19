import { handleAPI } from 'lib/utils';
import {fetch} from 'whatwg-fetch';
import dayjs from 'dayjs';

// ------------------------------------
// Constants
// ------------------------------------

export const FETCH_QUERY_PROGRESS_SUCCESS = 'FETCH_QUERY_PROGRESS_SUCCESS(CEOSearch)';
export const START_PROGRESS = 'START_PROGRESS(CEOSearch)';
export const END_PROGRESS = 'END_PROGRESS(CEOSearch)';
export const GET_LIST = 'GET_LIST(CEOSearch)';
export const FORMAT_LIST = 'FORMAT_LIST(CEOSearch)';
export const FORMAT_LIST_COMPLETED = 'FORMAT_LIST_COMPLETED(CEOSearch)';

// ------------------------------------
// Actions
// ------------------------------------

export const startProgress = (requestBody) => {
  return async (dispatch, getState) => {
    await dispatch({
      type: START_PROGRESS
    });
    console.log(START_PROGRESS);
    await dispatch(fetchQueryProgress(requestBody));
  }
}

export const fetchQueryProgress = (requestBody) => {
  return (dispatch, getState) => {
    window.index = 0;
    handleAPI(async () => {
      const loopFunc = async () => {
        const response = await fetchQueryProgressAPI(requestBody[window.index]);
        await dispatch({
          type: FETCH_QUERY_PROGRESS_SUCCESS,
          response
        });
        let last_index = response.results.length ? response.results[response.results.length - 1].sub_id : null;
        let last_contribution_receipt_date = response.results.length ? response.results[response.results.length - 1].contribution_receipt_date : null;
        if (response.pagination.count > response.pagination.per_page) {
          for (let i = 1; i < Math.ceil(response.pagination.count / response.pagination.per_page); i++) {
            const response2 = await fetchQueryProgressAPI(Object.assign({}, requestBody[window.index], {
              last_index,
              last_contribution_receipt_date
            }));
            last_index = response2.results[response2.results.length - 1].sub_id;
            last_contribution_receipt_date = response2.results[response2.results.length - 1].contribution_receipt_date;
            await dispatch({
              type: FETCH_QUERY_PROGRESS_SUCCESS,
              response: response2
            });
          }
        }
        window.index ++;
        if (window.index === requestBody.length) {
          clearTimeout(window.timer);
          await dispatch({
            type: END_PROGRESS
          });
          console.log(END_PROGRESS);
          console.log('response data', getState().ceoSearch.list)
        } else {
          await loopFunc();
        }
      }
      await loopFunc();
    }, dispatch);
  }
}

const fetchQueryProgressAPI = async (
    {contributor_name, min_date, max_date, two_year_transaction_period, contributor_employer, originCompanyName, originName, last_index, last_contribution_receipt_date}
  ) => {
  const body = {
    api_key: '5yyI90SU3Xb73TVlv4wrEhQxYcCwMWCywQiGdYbJ',
    sort_hide_null: false,
    sort_nulls_last: false,
    contributor_name,
    two_year_transaction_period,
    min_date,
    max_date,
    contributor_employer,
    sort: 'contribution_receipt_date',
    per_page: 100,
    is_individual: true,
    last_index,
    last_contribution_receipt_date
  };
  let url = 'https://api.open.fec.gov/v1/schedules/schedule_a/?';
  for (const [key, value] of Object.entries(body)) {
    if (value !== undefined) {
      url += `${key}=${value}&`
    }
  }
  if (contributor_employer.split(' ').length >= 2) {
    url += `contributor_employer=${contributor_employer.replace(new RegExp(' ', 'g'), '')}`;
  }
  if (url[url.length - 1] === '&') {
    url = url.substring(0, url.length - 1);
  }
  const response = await fetch(url);
  const handleRes = await response.json();
  for (const item of handleRes.results.values()) {
    item.realName = originName;
    item.companyName = originCompanyName;
  }
  return handleRes;
}

export const formatList = () => {
  return async (dispatch, getState) => {
    await dispatch({
      type: FORMAT_LIST
    })
    const list = await getState().ceoSearch.list;
    const formattedList = [];
    for (const [index, item] of list.entries()) {
      if (index === 0) {
        formattedList.push(item);
        continue;
      }
      let findFlag = false;
      for (const [index2, item2] of formattedList.entries()) {
        if (item.name === item2.name && item.year === item2.year && item.party === item2.party) {
          item2.money += item.money;
          findFlag = true;
          break;
        }
      }
      if (!findFlag) {
        formattedList.push(item);
      }
    }
    console.log('formatted data:', formattedList)
    await dispatch({
      type: FORMAT_LIST_COMPLETED,
      formattedList: formattedList
    })
  }
}

export const actions = {
  fetchQueryProgress,
  startProgress,
  formatList
}

// ------------------------------------
// Action Handlers
// ------------------------------------
const ACTION_HANDLERS = {
  [FETCH_QUERY_PROGRESS_SUCCESS]: (state, action) => {
    const oldList = state.list;
    const newList = oldList.concat(action.response.results.filter((item) => {
      const ceoNameArr = ['CEO', 'C.E.O.', 'CHIEF EX', 'CHIEFEX', 'C E O'];
      const contributor_occupation = item.contributor_occupation || '';
      const contributor_employer = item.contributor_employer || '';
      const contribution_receipt_amount = item.contribution_receipt_amount;

      return contributor_occupation.toUpperCase().indexOf('RETIRED') === -1 &&
        contributor_occupation.toUpperCase().indexOf('FORMER') === -1 &&
        contribution_receipt_amount >= 200 &&
        (contributor_occupation.toUpperCase().includes(ceoNameArr[0])
          || contributor_occupation.toUpperCase().includes(ceoNameArr[1])
          || contributor_occupation.toUpperCase().includes(ceoNameArr[2])
          || contributor_occupation.toUpperCase().includes(ceoNameArr[3])
          || contributor_occupation.toUpperCase().includes(ceoNameArr[4])
          || contributor_employer.toUpperCase().includes(ceoNameArr[0])
          || contributor_employer.toUpperCase().includes(ceoNameArr[1])
          || contributor_employer.toUpperCase().includes(ceoNameArr[2])
          || contributor_employer.toUpperCase().includes(ceoNameArr[3])
          || contributor_employer.toUpperCase().includes(ceoNameArr[4]))
    }).map(item => {
      return {
        name: item.realName,
        year: dayjs(item.contribution_receipt_date).year(),
        party: item.committee.party || 'XXX',
        company: item.companyName,
        occupation: item.contributor_occupation,
        money: item.contribution_receipt_amount,
        date: item.contribution_receipt_date,
      }
    }));
    return Object.assign({}, state, {
      list: newList
    })
  },
  [FORMAT_LIST_COMPLETED]: (state, action) => {
    return Object.assign({}, state, {
      formattedList: action.formattedList
    })
  }
}

// ------------------------------------
// Reducer
// ------------------------------------
const initialState = {
  list: [],
  formattedList: []
};
export default function ceoSearchReducer (state = initialState, action) {
  const handler = ACTION_HANDLERS[action.type]

  return handler ? handler(state, action) : state
}
