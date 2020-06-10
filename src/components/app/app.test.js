import React from 'react'
import renderer from 'react-test-renderer'
import App from './app'
import {BrowserRouter as Router} from "react-router-dom";
import {Provider} from "react-redux";
import thunk from "redux-thunk";
import {createLogger} from "redux-logger";
import {applyMiddleware, createStore} from "redux";
import reducer from "../../reducers";

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(reducer, applyMiddleware(...middleware))


it('renders without crashing', () => {
  const tree = renderer
      .create(
          <Provider store={store}>
            <Router>
              <App />
            </Router>
          </Provider>
      )
      .toJSON();

  expect(tree).toMatchSnapshot();
})
