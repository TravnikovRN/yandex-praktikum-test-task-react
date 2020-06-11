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
  Нужно исправить:
  1) Задание поставлено с требованием "Если данные валидны: редирект на `/profile`"
  В данной реализации сделано перенаправление на предыдущую страницу - необходимо переделать под требования.
  2) Так как компонент перерисовывается при изменении props и state, то вызывать this.setState 
  как callback после изменения store - идеологически не верно так, как может привести к двум перерисовкам подряд.
  Чтобы этого избежать необходимо сделать все изменения за один раз в редьюсере. 
  Например при авторизации в мы будем менять флаг isAuth и он заменит собой redirectToPreviousRoute.

  Можно лучше: 
  Исправить code style ошибки (пробелы до и после параметров)
  ESlint может ругаться на объявление state через object class field и стоит сказать, что 
  в официальной документации React просят объявлять state в конструкторе, но ИМХО - это рабочий подход и 
  с ним код выглядит лаконичнее. А на состоянии 2020 года разницы в этих подходах - нет
*/
