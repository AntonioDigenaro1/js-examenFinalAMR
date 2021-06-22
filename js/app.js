var calculadora ={
  //propiedades de inicio
  display: document.getElementById('display'),
  cero: document.getElementById('0'),
  uno: document.getElementById('1'),
  dos: document.getElementById('2'),
  tres: document.getElementById('3'),
  cuatro: document.getElementById('4'),
  cinco: document.getElementById('5'),
  seis: document.getElementById('6'),
  siete: document.getElementById('7'),
  ocho: document.getElementById('8'),
  nueve: document.getElementById('9'),
  on: document.getElementById("on"),
  sign: document.getElementById("sign"),
  menos:document.getElementById('menos'),
  div:document.getElementById("dividido"),
  punto: document.getElementById("punto"),
  mas:document.getElementById('mas'),
  igual:document.getElementById('igual'),
  por:document.getElementById('por'),
  aux: 0,
  operacion:"",
  tecla: document.querySelectorAll(".tecla"),
  //función de inicialización
  init: function (){
    this.eventos()
  },
  eventos: function(){
    //agregar numeros
    this.cero.addEventListener("click",function(){
      calculadora.mostrar("0")})
    this.uno.addEventListener("click",function(){
      calculadora.mostrar("1")})
    this.dos.addEventListener("click",function(){
      calculadora.mostrar("2")})
    this.tres.addEventListener("click",function(){
      calculadora.mostrar("3")})
    this.cuatro.addEventListener("click",function(){
      calculadora.mostrar("4") })
    this.cinco.addEventListener("click",function(){
      calculadora.mostrar("5") })
    this.seis.addEventListener("click",function(){
      calculadora.mostrar("6") })
    this.siete.addEventListener("click",function(){
      calculadora.mostrar("7") })
    this.ocho.addEventListener("click",function(){
      calculadora.mostrar("8") })
    this.nueve.addEventListener("click",function(){
      calculadora.mostrar("9")})

    //reiniciar display
    this.on.addEventListener("click",function(){
      display.innerHTML=0
      aux=0 })
    //cambiar de signo
    this.sign.addEventListener("click",function(){
      display.innerHTML *=-1 })
    //operaciones
    this.mas.addEventListener("click",function(){
      calculadora.sumar() })
    this.menos.addEventListener("click",function(){
      calculadora.restar() })
    this.por.addEventListener("click",function(){
      calculadora.multiplicar() })
    this.div.addEventListener("click",function(){
      calculadora.dividir() })
    // igual
    this.igual.addEventListener("click",function(){
      calculadora.resultadoOperacion() })

    //validar punto
    this.punto.addEventListener("click",function(){
      calculadora.validarPunto() })

    //efectos teclas y activar
    for (var i = 0; i < this.tecla.length; i++) {
      this.tecla[i].addEventListener('mousedown',function() {
        this.style.transform="scale(0.8)"
      })
    }
    for (var i = 0; i < this.tecla.length; i++) {
      this.tecla[i].addEventListener('mouseup',function() {
        this.style.transform="scale(1)"
      })
    }

    },

    validarPunto: function(){
      if (display.innerHTML.indexOf(".")==-1){
        display.innerHTML+="."
      }
    },
    mostrar: function(num){
      if (display.innerHTML.length<8) {
        if (display.innerHTML=="0") {
          display.innerHTML = num
        } else {
          display.innerHTML += num
        }
      }
    },
    //operaciones
      sumar: function(){
      aux = display.innerHTML
      display.innerHTML=""
      operacion="+"
    },
      restar: function(){
        aux = display.innerHTML
        display.innerHTML=""
        operacion="-"
      },
      multiplicar: function(){
        aux = display.innerHTML
        display.innerHTML=""
        operacion="*"
      },
      dividir: function(){
        aux= display.innerHTML
        display.innerHTML=""
        operacion="/"
      },

    resultadoOperacion: function(){
        if (operacion =="+") {
          display.innerHTML=parseFloat(aux) + parseFloat(display.innerHTML);
          aux = display.innerHTML
          }
        else if (operacion =="-") {
          display.innerHTML=parseFloat(aux) - parseFloat(display.innerHTML);
          aux = display.innerHTML
          }

        else if (operacion =="*") {
          display.innerHTML=parseFloat(aux) * parseFloat(display.innerHTML);
          aux = display.innerHTML
          }
        else if (operacion =="/") {
          display.innerHTML=parseFloat(aux) / parseFloat(display.innerHTML);
          aux = display.innerHTML
          }
        }

  }



calculadora.init()
