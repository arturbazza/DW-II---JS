//Faça uma função que irá receber três parâmetros. O primeiro será um numero que representa o valor de uma compra que está sendo feita no mercado / farmácia. O segundo parâmetro é um boolean que representa se a compra possui ou não convênio com o estabelecimento e o último parâmetro representa se a compra está sendo feita ou não com o cartão da loja. Se a pessoa que estiver fazendo a compra possuir o cartão da loja e possui convênio então o desconto será de 15%. Se o usuário possuir convenio ou estiver fazendo a compra pelo cartão da loja o desconto é de 10%. Caso o usuário não tenha nenhum desses benefícios não existe desconto para a compra.
//
function comprasMercado(valor, cartaoLoja, totalCartaoConvenio) {
  if (cartaoLoja === true) {
    totalCartaoLoja = valor - (valor * 0.15);
  elseif (totalCartaoConvenio === true) {
    totalCartaoConvenio = (valor * 0.10);

    return 'Valor total da compra' + multaDias;
    
  }
}

console.log.exibirBoleto();
