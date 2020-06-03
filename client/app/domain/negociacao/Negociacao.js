class Negociacao {

    constructor(_data, _quantidade, _valor) {

        Object.assign(this, {_quantidade, _valor});
        this._data = new Date(_data.getTime());
        Object.freeze(this); // congelar os valores informados para não serem mais alterados
    }

    get volume() {
        return this._quantidade * this._valor;
    }

    get data() {
        // retornando desta maneira, outra classe não vai conseguir alterar a data
        return new Date(this._data.getTime());
    }

    get quantidade() {
        return this._quantidade;
    }

    get valor() {
        return this._valor;
    }

}