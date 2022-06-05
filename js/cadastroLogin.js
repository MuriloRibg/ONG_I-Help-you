import { loginsArrays } from "./login.js";
import { MendagemComponent } from "./mensagem.component.js";

export class CadastroLogin {
  constructor() {
    this.inputEmailCadastro = document.querySelector("#input-novo-email");
    this.inputSenhaCadastro = document.querySelector("#input-nova-senha");
  }

  static salvarCadastro() {
    document
      .querySelector(".modal-formulario")
      .addEventListener("submit", (e) => {
        e.preventDefault();
        const cadastro = new CadastroLogin();
        const resultado = loginsArrays.filter(
          (l) => l.email == cadastro.inputEmailCadastro.value
        );
        if (resultado.length) {
          MendagemComponent.erro("Email já cadastrado!");
          return cadastro.inputEmailCadastro.classList.add("is-invalid");
        }
        else{
          cadastro.inputEmailCadastro.classList.remove("is-invalid");
          cadastro.inputEmailCadastro.classList.add("is-valid");
        }
        if (cadastro.inputSenhaCadastro.value.length < 5) {
          MendagemComponent.erro(
            "Senha dever ter no mínimo 5 letras!"
          );
          return cadastro.inputSenhaCadastro.classList.add("is-invalid");
        }
        else{
          cadastro.inputSenhaCadastro.classList.add("is-invalid");
          cadastro.inputSenhaCadastro.classList.add("is-valid");
          MendagemComponent.sucesso("Cadastro realizado com sucesso!")
        }

        let novoCadastro = new Object({
          email: cadastro.inputEmailCadastro.value,
          senha: cadastro.inputSenhaCadastro.value,
        });
        
        loginsArrays.push(novoCadastro);
        cadastro.inputEmailCadastro.value = "",
        cadastro.inputSenhaCadastro.value = "",
        $("#modal-cadastro").modal('hide'); 
      });
  }
}
