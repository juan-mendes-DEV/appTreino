function mother(){
        var btn1 = document.querySelector(".btn1");
        var btn2 = document.querySelector(".btn2");
        var btn = document.querySelector(".btn");
        var rm1 = document.querySelector(".rm1");
        var rm2 = document.querySelector(".rm2");
        var rm3 = document.querySelector(".rm3");

function inicia(){
    adiciona()
    remove()
}inicia()


function adiciona(){

    btn1.addEventListener("click", function(){
        var resu1 = document.querySelector(".resu1");
        var n1 = document.querySelector(".n1").value;
        resu1.innerHTML+=`<p class="lista">${n1}</p>`;
        
    })
    btn2.addEventListener("click", function(){
        var resu2 = document.querySelector(".resu2");
        var n2 = document.querySelector(".n2").value;
        resu2.innerHTML+=`<p class="lista1">${n2}</p>`;
    })
    btn.addEventListener("click", function(){
        var resu = document.querySelector(".resu");
        var n = document.querySelector(".n").value;
        resu.innerHTML+=`<p class="lista2">${n}</p>`;
    })
    
}

function remove(){
    
    rm1.addEventListener("click", function(){
        var lista = document.getElementsByClassName("lista");
        for(var i = 0; i< lista.length; i++){
            lista[i].parentNode.removeChild(lista[i])
        }
        
    })
    rm2.addEventListener("click", function(){
        var lista1 = document.getElementsByClassName("lista1");
        for(var i = 0; i< lista1.length; i++){
            lista1[i].parentNode.removeChild(lista1[i])
        }
        
    })
    rm3.addEventListener("click", function(){
        var lista2 = document.getElementsByClassName("lista2");
        for(var i = 0; i< lista2.length; i++){
            lista2[i].parentNode.removeChild(lista2[i])
        }
        
    })

}
}mother();