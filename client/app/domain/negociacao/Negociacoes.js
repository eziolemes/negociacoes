class Negociacoes {
    
    constructor(armadilha) {
        this._negociacoes = [];
        this._armadilha = armadilha;
        Object.freeze(this);
    }

    adiciona(negociacao) {
        this._negociacoes.push(negociacao);
        this._armadilha(this);
    }

    paraArray() {
        // retorna uma nova referência criada com os itens de this._negociações
        // para proteger a referencia original contra acessos indevidos
        return [].concat(this._negociacoes);
    }

    get volumeTotal() {

        /* maneira convencional
        let total = 0;
        for(let i=0; i<this._negociacoes.length; i++) {
            total += this._negociacoes[i].volume;
        }
        return total;
        */

        //utilizando reduce
        return this._negociacoes.reduce((total, negociacao) =>  total + negociacao.volume, 0);
    }

    esvazia() {
        //desta maneira não é possível, pois o objeto foi congelado no construtor
        //this._negociacoes = [];

        this._negociacoes.length = 0;
        this._armadilha(this);
    }

}