function criaCartao(tema,pergunta,resposta){
    const container = document.getElementById('container');
    let cartao = document.createElement('article');
    cartao.className =  'cartao';
    cartao.innerHTML =`
    <div class="cartao-conteudo">
    <h3>${tema}</h3>
    <div class="cartao-conteudo-pergunta">
        ${pergunta}
    </div>
    <div class="cartao-conteudo-resposta">
        ${resposta}
    </div>
    </div>
    `
    container.appendChild(cartao)
    }
    criaCartao('historia','em que ano iniciou-se a guerra do vietnã?','Em 1955')
    criaCartao('portugues','oque é paroxitona?','uma paroxitona é uma palavra cuja silaba tonica é penultima')