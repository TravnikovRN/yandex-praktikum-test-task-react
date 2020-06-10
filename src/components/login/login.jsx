import React, {PureComponent} from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'

class Login extends PureComponent {
  state = {
    redirectToPreviousRoute: false,
    userName: '',
    password: '',
  }

  handleSubmit = e => {
    e.preventDefault()
    const { userName, password } = this.state

    this.props.logIn(
      {
        userName,
        password,
      },
      () => {
        this.setState({ redirectToPreviousRoute: true })
      }
    )
  }

  handleChange = e => {
    const value = e.currentTarget.value
    const fieldName = e.currentTarget.dataset.fieldName

    this.setState(prev => ({
      ...prev,
      [fieldName]: value,
    }))
  }

  render() {
    const { location, errorMessage } = this.props
    const { from } = location.state || { from: { pathname: '/' } }
    const { userName, password, redirectToPreviousRoute } = this.state

    if (redirectToPreviousRoute) {
      return <Redirect to={from} />
    }

    return (
      <div>
        {errorMessage && <p>{errorMessage}</p>}
        <form onSubmit={this.handleSubmit}>
          <input
            data-field-name={'userName'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Имя'}
            value={userName}
          />
          <input
            data-field-name={'password'}
            type={'text'}
            onChange={this.handleChange}
            placeholder={'Пароль'}
            value={password}
          />
          <button type="submit">Log in</button>
        </form>
      </div>
    )
  }
}

Login.propTypes = {
  logIn: PropTypes.func.isRequired,
  errorMessage: PropTypes.string,
}

export default Login

/* 
  Можно лучше: 
  Исправить code style ошибки (пробелы до и после параметров)
  ESlint может ругаться на объявление state через object class field и стоит сказать, что 
  в официальной документации React просят объявлять state в конструкторе, но ИМХО - это рабочий подход и 
  с ним код выглядит лаконичнее. А на состоянии 2020 года разницы в этих подходах - нет
*/
