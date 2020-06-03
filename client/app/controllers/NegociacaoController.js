class NegociacaoController {

    constructor() {
        /* querySelector é a função que le um determinado componente da tela
        * esta sendo atribuido a variavel $ para reduzir a verbosidade para fazer
        * a leitura de todos os componentes mais abaixo
        * 
        * deve ser chamado o método bind e passar o document por paramatro, para definir 
        * qual objeto que irá chamar a função querySelector, visto que passar uma função
        * para uma variável, a função acaba sendo chamada fora do contexto e não pelo objeto 
        * que esta a sua esquerda.
        */
       const $ = document.querySelector.bind(document);

       // busca os elementos
       this._inputData = $('#data');
       this._inputQuantidade = $('#quantidade');
       this._inputValor = $('#valor');

       this._negociacoes = new Negociacoes((model) => {
           this._negociacoesView.update(model);
       });

       this._negociacoesView = new NegociacoesView('#negociacoes');
       this._negociacoesView.update(this._negociacoes);

       this._mensagem = new Mensagem();

       this._mensagemView = new MensagemView('#mensagemView');
       this._mensagemView.update(this._mensagem);
    }

    adiciona(event) {
        // cancelando a submissão do formulario
        event.preventDefault();
        this._negociacoes.adiciona( this._criaNegociacao() );
        this._mensagem.texto = 'Negociação adicionada com sucesso';
        this._mensagemView.update(this._mensagem);
        this._limpaFormulario();
    }

    _criaNegociacao() {
        return new Negociacao(
            DataConverter.paraData(this._inputData.value),
            parseInt(this._inputQuantidade.value),
            parseFloat(this._inputValor.value)
        );
    }

    _limpaFormulario() {
        this._inputData.value = '';
        this._inputQuantidade.value = '';
        this._inputValor.value = '';
        this._inputData.focus();
    }

    apaga() {
        this._negociacoes.esvazia();
        this._mensagem.texto = 'Nogociações apagadas com sucesso';
        this._mensagemView.update(this._mensagem);
    }
}