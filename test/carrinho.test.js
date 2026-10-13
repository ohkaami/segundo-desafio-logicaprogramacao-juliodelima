const assert = require('assert');
const { produtosNoCarrinho } = require('../source/carrinho');

describe('Carrinho de Compras', function() {
  it('Caso de teste 01 - Deve calcular o total do carrinho sem desconto', function() {
    const { total } = produtosNoCarrinho();
    assert.strictEqual(total, 30.5);
  });
  it('Caso de teste 02 - Deve calcular o total do carrinho com desconto de 10%', function() {
    const { totalComDesconto } = produtosNoCarrinho();
    assert.strictEqual(totalComDesconto, 27.45);
  });
  it('Caso de teste 03 - Deve retornar um objeto com as propriedades total e totalComDesconto', function() {
    const resultado = produtosNoCarrinho();
    assert.strictEqual(typeof resultado, 'object');
    assert.ok(resultado.hasOwnProperty('total'));
    assert.ok(resultado.hasOwnProperty('totalComDesconto'));
  });
});