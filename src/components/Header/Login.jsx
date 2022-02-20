import React from 'react'
import { useRef } from 'react'
import { useState } from 'react'
import '../../styles/Login.scss'

const Login = ({ loginView, loginDiseble }) => { 
  const [input, setInput] = useState('+79')
  const inputEl = useRef()
  const valid = useRef()
  const loginIn = (e) => { 
    e.preventDefault()
    if (input.length === 12 && input.toLowerCase() === input.toUpperCase()) { 
      inputEl.current.classList.remove('error')
      valid.current.classList.remove('error')
      loginDiseble()
    } else {
      inputEl.current.classList.add('error')
      valid.current.classList.add('error')
    }
  }
  return (
    (loginView) ? 
      <div className="login" onClick={loginDiseble}>
        <div className="login__block" onClick={e => e.stopPropagation()}>
          <div className="login__del" onClick={loginDiseble}>
            <img src="/img/del.svg" alt="del" />
          </div>
          <h3 className="login__title">Войдите в аккаунт</h3>
          <form >
            <span className="login__info">Телефон</span>
            <input
              type="tel"
              className="login__phone"
              required
              ref={inputEl}
              value={input}
              onChange={e => setInput(e.target.value)}
            />
            <span className='login__valid' ref={valid}>введите номер в формате +79111111111</span>
            <p className="login__info-text">
              Указывая номер телефона, вы принимаете условия <br />
              <span>пользовательского соглашения</span>
            </p>
            <div className="login__button-inner">
              <button className="login__submit" type='submit' onClick={e => loginIn(e)}>Войти</button>
            </div>
          </form>
        </div>
      </div>
      : false
  )
}

export default Login