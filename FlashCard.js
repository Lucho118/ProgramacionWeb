const Python=document.getElementById("PYTHON")
const Java=document.getElementById("JAVA")
const JavaScript=document.getElementById("JAVASCRIPT")
const c=document.getElementById("C")

Python.addEventListener("click",python)
Java.addEventListener("click",java)
JavaScript.addEventListener("click",javascript)
c.addEventListener("click",C)

function python(){
    Python.classList.toggle("active")
    if(Python.classList.contains("active")==true){
        Python.innerHTML=`
        <div class="tarjetas active" id="PYTHON">        
            <img src="./Imagenes/python.png" alt="python" class="Lenguaje">                
        </div>    
        `
    }else{
        Python.innerHTML=`
        <h2>PYTHON</h2>
        <div class="frontal active">
            <p>
            Python es un lenguaje de alto nivel de programación interpretado cuya filosofía hace hincapié en la legibilidad de su código, 
            se utiliza para desarrollar aplicaciones de todo tipo, ejemplos: Instagram, Netflix, Spotify, Panda3D, entre otros.
            </p>
        </div>`
    }
}

function java(){
    Java.classList.toggle("active")
    if(Java.classList.contains("active")==true){
        Java.innerHTML=`
        <div class="tarjetas active" id="JAVA">
            <img src="./Imagenes/Java.png" alt="java" class="Lenguaje">              
        </div>
        `
    }else{
        Java.innerHTML=`
        <h2>JAVA</h2>
        <div class="frontal active">
            <p>
            Java es un lenguaje de programación y una plataforma informática que fue comercializada por primera vez en 1995 por Sun Microsystems.​​
            Debido a que Java es un lenguaje versátil y de uso gratuito, crea software localizado y distribuido. Algunos usos comunes de Java incluyen:
            Desarrollo de videojuegos,Computación en la nube,Macrodatos,Inteligencia artificial,Internet de las cosas.
            </p>
        </div>`
    }
}

function javascript(){
    JavaScript.classList.toggle("active")
    if(JavaScript.classList.contains("active")==true){
        JavaScript.innerHTML=`
        <div class="tarjetas active" id="JAVASCRIPT" >
            <img src="./Imagenes/javascript.png" alt="javascript" class="Lenguaje">               
        </div>
        `
    }else{
        JavaScript.innerHTML=`
        <h2>Etiquetas HTML</h2>
        <div class="frontal">
            <p>
            JavaScript es un lenguaje de programación interpretado, dialecto del estándar ECMAScript. Se define como orientado a objetos, 
            basado en prototipos, imperativo, débilmente tipado y dinámico.
            </p>
        </div>`
    }
}

function C(){
    c.classList.toggle("active")
    if(c.classList.contains("active")==true){
        c.innerHTML=`
        <div class="tarjetas active" id="C">
            <img src="./Imagenes/C.png" alt="C" class="Lenguaje">               
        </div>
        `
    }else{
        c.innerHTML=`
        <h2>JavaScript</h2>
        <div class="frontal">
            <p>
            C es un lenguaje de programación de propósito general originalmente desarrollado por Dennis Ritchie entre 1969 y 1972 en los Laboratorios Bell,
            como evolución del anterior lenguaje B, a su vez basado en BCPL.
            Al igual que B, es un lenguaje orientado a la implementación de sistemas operativos, concretamente Unix.
            </p>
        </div>`
    }
}