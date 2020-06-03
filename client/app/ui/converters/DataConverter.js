class DataConverter {

    constructor() {
        throw new Error('Esta classe não pode ser instanciada');
    }
    
    static paraTexto(data) {

        //retornando com interpolação de template literal ao invés de contatenar os métodos e strings
        return `${data.getDate()}/${data.getMonth()+1}/${data.getFullYear()}`;
    }

    static paraData(texto) {
        /* usando spread operator (...) para retornar cada elemento do array separadamente
        * ele vai retornar o mês somente com uma casa quando for de 1 a 9
        *  ex: 12/5/2020
        */
        //return new Date(...texto.split('-').map((item, indice) => item - indice % 2));

        /*
        if(!/^\d{4}-\d{2}-\d{2}.test(texto))
            throw new Error('Deve estar no formato aaaa-mm-dd');
        */
        return new Date(texto.split('-'));
    }
}