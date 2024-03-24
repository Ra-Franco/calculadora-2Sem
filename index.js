const { createApp } = Vue;

createApp({
    data() {
        return {
            display: "0",
            numeroAnterior: null,
            numeroAtual: null,
            operador: null,
            decimal: false
        }
    },
    methods: {
        lidarBotao(valor) {
            switch (valor) {
                case '*':
                case '/':
                case '-':
                case '+':
                    this.lidarOperador(valor);
                    break;

                case '.':
                    this.lidarDecimal();
                    break;

                case 'C':
                    this.lidarLimpar();
                    break;

                case '=':
                    this.lidarIgual();
                    break;

                default:
                    this.lidarNumero(valor);
            }
        },
        lidarOperador(valor) {
            if (valor == '+') {
                this.operador = '+'
                this.numeroAnterior = this.numeroToString(this.numeroAtual)
                this.numeroAtual = null
            } else if (valor == '-') {
                this.operador = '-'
                this.numeroAnterior = this.numeroToString(this.numeroAtual)
                this.numeroAtual = null
            } else if (valor == '*') {
                this.operador = '*'
                this.numeroAnterior = this.numeroToString(this.numeroAtual)
                this.numeroAtual = null
            } else if (valor == '/') {
                this.operador = '/'
                this.numeroAnterior = this.numeroToString(this.numeroAtual)
                this.numeroAtual = null
            }
        },
        lidarDecimal() {
            if (this.decimal == false) {
                this.numeroAtual += "."
                this.decimal = true;
                return this.display = this.numeroToString(this.numeroAtual);
            } else {
                return this.numeroAtual
            }
        },
        lidarLimpar() {
            this.display = '0';
            this.numeroAtual = null;
            this.numeroAnterior = null;
            this.operador = null;
        },
        lidarIgual() {
            if (this.operador == '+') {
                this.display = parseFloat(this.numeroAnterior) + parseFloat(this.numeroToString(this.numeroAtual));
            } else if (this.operador == '-') {
                this.display = parseFloat(this.numeroAnterior) - parseFloat(this.numeroToString(this.numeroAtual));
            } else if (this.operador == '*') {
                this.display = parseFloat(this.numeroAnterior) * parseFloat(this.numeroToString(this.numeroAtual));
            } else if (this.operador == '/') {
                this.display = parseFloat(this.numeroAnterior) / parseFloat(this.numeroToString(this.numeroAtual));
            }
        },
        lidarNumero(valor) {
            this.numeroAtual += valor;
            this.displayCompleto();
        },
        numeroToString(numero) {
            return String(numero).substring(4)
        },
        displayCompleto() {
            if (this.numeroAnterior === null) {
                this.display = this.numeroToString(this.numeroAtual);
            } else {
                this.display = `${this.numeroAnterior} ${this.operador} ${this.numeroToString(this.numeroAtual)}`
            }
        }
    }
}).mount("#app");