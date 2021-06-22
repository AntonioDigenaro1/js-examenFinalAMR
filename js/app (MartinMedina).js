//Sugerencia Martín Medina

var Calculadora = {
  display: document.getElementById('display'),
  uno: document.getElementById('1'),

  aux: 0,
  operacion: "",

  init: function() {
    this.eventos()
  },
  eventos: function() {
    //agregar numeros
    this.uno.addEventListener('click', function() {
      Calculadora.mostrar("1")
    })


    //reiniciar display
    this.on.addEventListener('click', function() {
      display.innerHTML = 0
      aux = 0
    })
    //cambiar de signo
    this.sign.addEventListener('click', function() {
      display.innerHTML *= -1
    })
    //operaciones
    this.mas.addEventListener('click', function() {
      Calculadora.sumar()
    })

    //validar punto, igual
    this.punto.addEventListener('click', function() {
      Calculadora.validarPunto() })

    //efectos teclas
    for (var i = 0; i < this.tecla.length; i++) {
      this.tecla[i].addEventListener('mousedown', function() {
        this.style.transform="scale(0.9)"
      })
    }
    for (var i = 0; i < this.tecla.length; i++) {
      this.tecla[i].addEventListener('mouseup', function() {
        this.style.transform="scale(1)"
      })
    }
  },
  validarPunto:function(){
    if(display.innerHTML.indexOf(".")==-1){
      display.innerHTML += "."
    }
  },
  mostrar: function(num) {
    if (display.innerHTML.length < 8 ) {
      if (display.innerHTML == "0") {
        display.innerHTML = num
      }else{
        display.innerHTML += num
      }
    }

  },
  sumar: function() {
    aux = display.innerHTML
    display.innerHTML = ""
    operacion = "+"
  },

  resultadoOperacion: function() {
    if (operacion=="+") {
      display.innerHTML=parseFloat(aux) + parseFloat(display.innerHTML);
      aux=display.innerHTML
    }else if (operacion=="-") {
      display.innerHTML=parseFloat(aux) - parseFloat(display.innerHTML);
      aux=display.innerHTML
    }else if (operacion=="*") {
      display.innerHTML=parseFloat(aux) * parseFloat(display.innerHTML);
      aux=display.innerHTML
    }else if (operacion=="/") {
      display.innerHTML=parseFloat(aux) / parseFloat(display.innerHTML);
      aux=display.innerHTML
    }
  }
}
Calculadora.init()
