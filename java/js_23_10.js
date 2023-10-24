//let btn_tab=document.querySelector('#btn_tabuada')
//btn_tab.addEventListener
let paragrafo=false;
document.querySelector('.btn_tabuada').addEventListener('click',()=>{
    let numero=Number(document.querySelector('#numero').value);
    if(paragrafo==true){
        document.querySelector('p').remove(); //Para substituir a coluna
    }else{
        paragrafo=true //Para substituir a coluna
    }
    let p=document.createElement('p');
    for(let i=1;i<=10;i++){
        let res=numero*i;
        p.innerHTML+=numero+"x"+i+"="+res+"<br>";
        
    }
    document.querySelector('#resultado').append(p);
});
document.querySelector('.btn').addEventListener('click',()=>{
    let div=document.querySelector('#div2');
    div.classList.toggle('classe2'); //altenar classe adicionando ou removendo
    div.classList.toggle('bloco2');
})
let img=document.querySelector('.btn').addEventListener('click',()=>{
document.querySelector('#img').setAttribute('src','https://fotos.jornaldocarro.estadao.com.br/wp/jornal-do-carro/files/2012/02/LANDAU-1.jpg'); //para inserir imagem com o botão de troca de classe
})