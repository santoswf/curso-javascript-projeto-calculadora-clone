class CalcController {
  constructor() {
    this._displayCalc = "0";
    this.currentDate;
    this.initialize();
  }

  initialize() {
    let displayCalcEl = document.querySelector("#display");
    let dateEl = document.querySelector("#data");
    let timeEL = document.querySelector("#hora")

    displayCalcEl.innerHTML = "4567"
    dateEl.innerHTML = "01/01/2024"
    timeEl.innerHTML = "00:00"
  }

  get displayCalc() {
    return this._displayCalc;
  }

  set displayCalc(valor) {
    this._displayCalc = valor;
  }

  get dataAtual() {
    return this._datAtual;
  }

  set dataAtual(valor) {
    this.currentDate = valor;
  }
}
