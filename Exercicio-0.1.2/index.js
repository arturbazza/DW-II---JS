function compra(valor, isConvenio, isCartao) {
  const descontoTotal = isConvenio && isCartao;
  if (descontoTotal) {
    return valor - valor * 0.15;
  }
  const descontoParcial = isConvenio || isCartao;
  if (descontoParcial) {
    return valor - valor * 0.1;
  }
  return valor;
}

console.log(compra(100, true, true));
console.log(compra(100, false, true));
console.log(compra(100, false, false));
