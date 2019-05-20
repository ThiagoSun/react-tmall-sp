import React from 'react';
import PropTypes from 'prop-types';
import XLSX from 'xlsx';

export default class CEOSearch extends React.PureComponent{
  constructor(props) {
    super(props);
    this.state = {

    };
    this.inputData = [];
    this.requestBody = [];
    this.autoDownload = null;
  }

  static propTypes = {
    fetchQueryProgress: PropTypes.func,
    startProgress: PropTypes.func,
    formatList: PropTypes.func,
    formattedList: PropTypes.array
  };

  componentWillUnmount() {
  }

  handleFile = (e) => {
    const files = e.target.files, f = files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      const data = new Uint8Array(e.target.result);
      const workbook = XLSX.read(data, {type: 'array'});
      /* DO SOMETHING WITH workbook HERE */

      for (const [sheetName, sheetData] of Object.entries(workbook.Sheets)) {
        const jsonData = XLSX.utils.sheet_to_json(sheetData);
        console.log('excel data:', jsonData);
        for (const [index, item] of jsonData.entries()) {
          let name = item['CEO Name'];
          let nameArr = [];
          let compName = item['Company Name'];
          let compNameArr = [];

          // 公司处理
          if (compName.indexOf(' -CL') !== -1) {
            compName = compName.substring(0, compName.indexOf(' -CL'))
          }
          compNameArr = compName.split(' ');
          if (compNameArr[compNameArr.length - 1].length <= 3 && compNameArr[compNameArr.length - 2] !== '&' && compNameArr.length > 1) {
            compNameArr.pop();
          }
          if (compNameArr.length >= 3) {
            compNameArr = compNameArr.slice(0, 2);
          }
          compName = compNameArr.join(' ');
          if (compName.indexOf(' CORP') !== -1) {
            compName = compName.substring(0, compName.indexOf(' CORP'))
          }
          if (compName.indexOf(' CORP/MI') !== -1) {
            compName = compName.substring(0, compName.indexOf(' CORP/MI'))
          }

          // 姓名处理
          nameArr = name.split(',');
          if (nameArr[nameArr.length - 1].indexOf('II') === -1 && nameArr.length > 1) {
            nameArr.pop();
          }
          name = nameArr.join(',');
          this.inputData.push({
            contributor_name: name.trim(),
            contributor_employer: compName,
            originCompanyName: item['Company Name']
          })
        }
      }
      this.generateBody();
    };
    reader.readAsArrayBuffer(f);
  };

  generateBody = () => {
    const minYear = 1980;
    const maxYear = 2020;
    for (const [index, item] of this.inputData.entries()) {
      for (let i = minYear; i <= maxYear; i+=2) {
        const body = {
          ...item,
          two_year_transaction_period: i,
          min_date: `01/01/${i - 1}`,
          max_date: `12/31/${i}`
        };
        this.requestBody.push(body);
      }
    }
    console.log('request data:', this.requestBody)
  };

  startProgress = () => {
    this.props.startProgress(this.requestBody);
  }

  startFormat = async() => {
    await this.props.formatList();
    const newWorkbook = XLSX.utils.book_new();
    console.log(this.props.formattedList)
    let newWorksheet = XLSX.utils.json_to_sheet(this.props.formattedList, {});
    XLSX.utils.book_append_sheet(newWorkbook, newWorksheet, 'SheetJS');

    XLSX.writeFile(newWorkbook, `${Date.now()}.xlsx`);

    // const wbout = XLSX.write(newWorkbook, { bookType: 'xlsx', bookSST: false, type: 'binary' });
    // const url = window.URL.createObjectURL(new Blob([new Buffer(wbout, 'binary')], { type: 'application/octet-stream' }));
    // if (this.autoDownload) {
    //   this.autoDownload.href = url;
    //   this.autoDownload.download = decodeURIComponent(`${Date.now()}.xlsx`);
    //   this.autoDownload.click();
    // }
    // window.URL.revokeObjectURL(url);
  }

  render() {
    return <div style={{fontSize: '14px', padding: '30px'}}>
      <p>
        <input type={'file'} onChange={this.handleFile} />
      </p>
      <p>导入excel之后：</p>
      <p>
        <button onClick={this.startProgress}>跑起来！</button>
      </p>
      <p>数据跑完后：</p>
      <p>
        <button onClick={this.startFormat}>导出表格</button>
      </p>
      <a style={{ height: '0px', width: '0px' }} href='' ref={(i) => { this.autoDownload = i; }} />
    </div>;
  }
};
