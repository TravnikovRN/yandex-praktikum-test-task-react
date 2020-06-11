import { checkCredentials } from '../helpers/session'

export const LOG_IN = 'LOG_IN';
export const LOG_OUT = 'LOG_OUT';
export const LOG_IN_FAILURE = 'LOG_IN_FAILURE';

export function logIn(params, next) {
  return dispatch => {
    if (checkCredentials(params)) {
        dispatch({
          type: LOG_IN,
          payload: {
            name: params.userName,
          },
        });
      next()
    } else {
      dispatch({
        type: LOG_IN_FAILURE,
        payload: {
          errorMessage: 'Имя пользователя или пароль некорректны',
        },
        error: true,
      })
    }
  }
}

/* 
  Нужно переделать:
  Исходя из основных принципов Redux (https://redux.js.org/introduction/three-principles)
  Action - должны быть чистыми функциями, а в данной реализации есть вызов сайд эффекта next().
  Такие события должны происходить в специально отведенных для этого участках кода - 
  middleware (https://redux.js.org/advanced/middleware).

  Можно лучше: 
  Исправить code style ошибки (отступы и лишние точки с запятой)
*/
