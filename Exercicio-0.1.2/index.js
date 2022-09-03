function comprasMercado(valor, cartaoLoja, totalCartaoConvenio) {
  if (cartaoLoja && totalCartaoConvenio) {
    return valor - valor * 0.15;
  }
  elseif(totalCartaoConvenio != cartaoLoja);
  {
    return valor - valor * 0.1;
  }
}

const resultado = comprasMercado(100, true, true);

console.log(resultado);
