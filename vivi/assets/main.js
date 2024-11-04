function criaCartao(tema,pergunta,resposta){
    const container = document.getElementById('container');
    let cartao = document.createElement ('article');
    cartao.className = 'cartao'
    cartao.innerHTML = `
             <div class="cartao-conteudo">
             <h3>${tema}</h3>
             <div class="cartao-conteudo-pergunta">
             ${pergunta}
              </div>
             < class="cartao-conteudo-resposta">
             ${resposta}
             </div>
             </div>
    
    `
    container.appendChild(cartao)
}
criaCartao('Historia','Em que ano iniciou-se a guerra do Vietna?','Em 1955')

criaCartao('Portugues','O que e uma paroxitona?','Uma paroxitona e uma palavra cuja silaba tonica e penultima')