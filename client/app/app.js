// criou a instancia do controller
const controller = new NegociacaoController();

// associa o evento de submissao do formulario a chamado do método adiciona
// chamar o bind para definir a instancia do this
document.querySelector('.form').addEventListener( 'submit', controller.adiciona.bind(controller) );

document.querySelector('#botao-apaga').addEventListener('click', controller.apaga.bind(controller));