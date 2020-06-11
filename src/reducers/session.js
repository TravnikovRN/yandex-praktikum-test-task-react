import { LOG_IN, LOG_OUT, LOG_IN_FAILURE } from '../actions/SessionActions'

/* 
   Желательно исправить:
   Если user - это объект с полями, то не стоит использовать его как флаг авторизации так, как 
   вызывая его поля без авторизации - произойдет ошибка (null не имеет поле name).
   Лучше заведите дополнительный флаг isAuth, а у user опишите все свойства по умолчанию,
   например user: { name: '' }
   Можно не описывать полную структуру в initialState, а прописать у всех компонентов
   defaultProps (https://reactjs.org/docs/react-component.html#defaultprops), но это более трудозатратный путь 
*/
const initialState = {
  user: null,
  errorMessage: '',
}

/*   
  Пишем как Pro:
  Spread оператора (деструктуризация) - рабочая лошадка, но в более сложных проектах его не используют так, как
  если у объекта есть свойства 2ого и более уровня вложенности, то на каждом уровне также придется использовать  
  spread оператор. Код выглядит громоздким и есть возможность ошибиться.
  Для решения подобных проблем написаны такие библиотеки как "immer" или "Immutable.js"
*/
export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN:
      return {
        ...state,
        /* 
          Код может быть лучше при помощи "деструктуризации js":
          Можно заранее объявить константу 
          const { name } = action.payload 
          и использовать ее по назначению
          user: {
            name
          },
        */
        user: {
          name: action.payload.name,
        },
        errorMessage: '',
      }
    case LOG_OUT:
      return {
        ...state,
        user: null,
        errorMessage: '',
      }
    case LOG_IN_FAILURE:
      return {
        ...state,
        errorMessage: action.payload.errorMessage,
      }
    default:
      return state
  }
}
