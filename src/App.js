import { login } from './utils';
import './index.css';
import { useState } from 'react';
// Instruções:
// * Você tem um formulário de login INCOMPLETO
// * Não é permitido adicionar novos elementos HTML
// * Não é permitido usar refs
//
// Tarefas:
// todo - Desabilite o botão de Login caso o e-mail esteja em branco OU a senha for menor que 6 dígitos.
// todo - O botao de login deve disparar a função login(), importada no topo deste arqvuio, e passar os dados necessários
// todo - Desabilite o botão de Login enquanto você está executando o login.
// todo - Mostre uma mensagem de erro do login() caso o Login falhe. A mensagem deve ser limpa a cada nova tentativa
// todo - Mostre um alerta caso o login seja efetuado com sucesso (javascript alert). Investigue a função login()

function App() {

  return (
    <div className="container">
        <div className="brand-title">LOGIN FORM</div>
        <div className="brand-logo"></div>
          <div className="inputs">
            <label htmlFor={'email'}>EMAIL</label>
              <input 
              id='email' 
              type="email"
              placeholder="E-mail" 
              />
            <label htmlFor={'password'}>PASSWORD</label>
              <input
                id='password'
                type="password"
                placeholder="Min 6 caracteres"
                />
              <button>
              LOGIN
              </button>
          </div>
      <a target="blank" href="https://www.linkedin.com/in/messias-junior-29889a245/">MessiJr</a>
  </div>
  );
}

export default App;
