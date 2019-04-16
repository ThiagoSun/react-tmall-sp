import React, {Suspense} from 'react'
// import { Router } from 'react-router'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { ConnectedRouter } from 'connected-react-router'
import { Provider } from 'react-redux'
import PropTypes from 'prop-types'
import PageLayout from 'layouts/PageLayout';

class App extends React.Component {
  static propTypes = {
    store: PropTypes.object.isRequired,
    routes: PropTypes.array.isRequired,
    history: PropTypes.object.isRequired
  };

  shouldComponentUpdate () {
    return false
  }

  render () {
    return (
      <Provider store={this.props.store}>
        <ConnectedRouter history={this.props.history}>
          <PageLayout>
            <BrowserRouter>
              <Suspense fallback={<div>Loading...</div>}>
                <Switch>
                  {
                    this.props.routes.map((r, key) => {
                      return (
                        <Route
                          render={props => (<r.component {...props} routes={r.routes} />)}
                          exact={!!r.exact}
                          key={r.path + key}
                          path={r.path}
                        />
                      )
                    })
                  }
                </Switch>
              </Suspense>
            </BrowserRouter>
          </PageLayout>
        </ConnectedRouter>
        {/*<Router history={this.props.history} children={this.props.routes} />*/}
      </Provider>
    )
  }
}

export default App
