var campos = [
    document.querySelector('#data'),
    document.querySelector('#valor'),
    document.querySelector('#quantidade')
];

var tbody = document.querySelector('table tbody');

document.querySelector('.form').addEventListener('submit', function(event) {

    //cancelando a submissão do formulário, para não recarregar a página
    event.preventDefault();
    
    var tr = document.createElement('tr');

    campos.forEach(function(campo) {

        //cria uma td sem informações
        var td = document.createElement('td');

        //atribui o valor do campo à td
        td.textContent = campo.value;

        //adiciona a td na tr
        tr.appendChild(td);

    });

    //nova td que amazanará o volume da negociação
    var tdVolume = document.createElement('td');

    tdVolume.textContent = campos[1].value * campos[2].value;

    tr.appendChild(tdVolume);

    //adicionando a tr
    tbody.appendChild(tr);

    campos[0].value = '';
    campos[1].value = '';
    campos[2].value = '';

    campos[0].focus();
});