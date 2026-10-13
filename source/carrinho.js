let carrinho = [
  {
    produto: "Arroz",
    preco: 22.00,
  },
  {
    produto: "Feijão",
    preco: 3.50,
  },
  {
    produto: "Macarrão",
    preco: 5.00,
  }
]

function produtosNoCarrinho() {
  let total = 0;
for (let produto of carrinho) {
  total += produto.preco;
}

  let desconto = 0.10; // 10% de desconto
let totalComDesconto = total - (total * desconto);
return { total, totalComDesconto  };
}

/*console.log(`O total do carrinho sem desconto é: R$ ${total.toFixed(2)}`);

console.log(`O total do carrinho com desconto de 10% é: R$ ${totalComDesconto.toFixed(2)}`);*/

module.exports = { produtosNoCarrinho };