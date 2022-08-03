class Display {
        constructor(displayValorActual, displayValorAnterior) {
            this.displayValorActual = displayValorActual;
            this.displayValorAnterior = displayValorAnterior;
            this.calculadora = new Calculadora();
            this.valorActual = '';
            this.valorAnterior = '';
        }

        agregarNumero(numero) {
            this.valorActual = numero;
        }
}