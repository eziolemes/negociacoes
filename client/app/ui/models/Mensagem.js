class Mensagem {
    
    // parametro com valor padrão para não seja passado nenhum valor
    constructor(texto = '') {

        this._texto = texto;
    }

    get texto() {
        return this._texto;
    }

    set texto(texto) {
        this._texto = texto;
    }
}