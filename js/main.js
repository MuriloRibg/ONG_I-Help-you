import { MendagemComponent } from "./mensagem.component.js";
import { loginsArrays } from "./login.js";
import { CadastroLogin } from "./cadastroLogin.js";

window.onload = () => {
  Formulario.validarFormulario();
  CadastroLogin.salvarCadastro();
};

class Formulario {
  constructor() {
    this.emailMensagemErro = document.querySelector(".email-validacao-erro");
    this.senhaMensagemErro = document.querySelector(".senha-validacao-erro");
    this.inputEmailLogin = document.querySelector("#input-email");
    this.inputSenhaLogin = document.querySelector("#input-senha");
  }

  static validarFormulario() {
    document
      .querySelector(".body-login__formulario__form")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        const formulario = new Formulario();

        const validaEmail = formulario.validarCompoEmail(loginsArrays);
        const validaSenha = formulario.validarCompoSenha(loginsArrays);

        if (validaEmail && validaSenha) {
          formulario.inputSenhaLogin.classList.remove("is-invalid");
          formulario.inputSenhaLogin.classList.add("is-valid");
          formulario.inputEmailLogin.classList.remove("is-invalid");
          formulario.inputEmailLogin.classList.add("is-valid");
          MendagemComponent.sucesso("Bem vindo!");
        }
      });
  }

  validarCompoEmail(loginsArrays) {
    let resultado = loginsArrays.filter(
      (l) => l.email == this.inputEmailLogin.value
    );
    if (!resultado.length) {
      MendagemComponent.erro("Email inválido!");
      this.inputEmailLogin.classList.add("is-invalid");
      return false;
    }
    return true;
  }

  validarCompoSenha(loginsArrays) {
    let resultado = loginsArrays.filter(
      (l) => l.senha == this.inputSenhaLogin.value
    );
    if (!resultado.length) {
      MendagemComponent.erro("Senha inválida!");
      this.inputSenhaLogin.classList.add("is-invalid");
      return false;
    }
    return true;
  }
}
