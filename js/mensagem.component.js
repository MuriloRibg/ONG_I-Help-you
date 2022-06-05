export class MendagemComponent {
  static sucesso(frase) {
    Toastify({
      text: frase,
      duration: 5000,
      newWindow: false,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#83BD75",
      },
    }).showToast();
  }

  static erro(frase) {
    Toastify({
      text: frase,
      duration: 5000,
      newWindow: false,
      close: true,
      gravity: "top",
      position: "right",
      stopOnFocus: true,
      style: {
        background: "#ED4949",
        color: "white",
      },
    }).showToast();
  }
}
