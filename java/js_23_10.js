//let btn_tab=document.querySelector('#btn_tabuada')
//btn_tab.addEventListener

document.querySelector('.btn_tabuada').addEventListener('click',()=>{
    let numero=Number(document.querySelector('#numero').value);
    for(let i=1;i<=10;i++){
        let res=numero*i;
        let p=document.createElement('p');
        p.textContent=numero+"x"+i+"="+res;
        document.querySelector('#resultado').append(p);
    }
});