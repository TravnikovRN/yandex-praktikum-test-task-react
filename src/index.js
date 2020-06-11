import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { createLogger } from 'redux-logger'
import reducer from './reducers'
import App from './components/app/app.jsx'
import registerServiceWorker from './registerServiceWorker'

const middleware = [thunk]
if (process.env.NODE_ENV !== 'production') {
  middleware.push(createLogger())
}

const store = createStore(reducer, applyMiddleware(...middleware))

ReactDOM.render(
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>,
  document.getElementById('root')
)
registerServiceWorker()

/* 
  Возможные замены:
  У 'redux-logger' есть замечательная альтернатива, как 'redux-devtools-extension', которая:
  1) Не требует установки в проект (устанавливается как расширение для хрома)
  2) Имеет возможность "Поставить на паузу store" - очень важный функционал, когда в вашем приложении много событий
  3) Можно выбрать необходимый объект в store и вывести его как json - очень удобно при создании mock для тестов
*/
