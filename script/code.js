var img
/*
document.getElementById('btnAgregar').addEventListener('click', ()=>{
    ObtenerDatos()
})


document.getElementById("fotoArchPro").onchange = function(e) {
    let reader = new FileReader();
  
    reader.readAsDataURL(e.target.files[0]);
  
    reader.onload = function(){
      let preview = document.getElementById('preview'),
              image = document.createElement('img');
              image.setAttribute("width", "200")
              image.setAttribute("height", "200")
  
      image.src = reader.result;
      img = reader.result;
      preview.innerHTML = '';
      preview.append(image);
    };
  }*/


  function Realizada(orden) {
    console.log(orden)
    let borrada = document.getElementById(orden)
    borrada.remove()
  }
  function ObtenerDatos(){
      let nombrePro = document.getElementById('NombreProd').value
      let precio = document.getElementById('precioProd').value
      AgregarDatos(nombrePro, precio, img)
  }

  function AgregarDatos(nombrePro, precio, img){
        let contendormain = document.getElementById('contenedordatos')
        let contendor = document.createElement('div')
        contendor.setAttribute("class", "row")

        let contenedorIzq = document.createElement('div')
        let image = document.createElement('img')
        image.setAttribute("src", img)
        image.setAttribute("width", "70px")
        image.setAttribute("height", "70px")
        contenedorIzq.appendChild(image)

        let contenedorDer = document.createElement('div')
        contenedorDer.setAttribute("class", "col")

        let nombre = document.createElement('div')
        let prec = document.createElement('div')
        //let tip = document.createElement('p')

        nombre.innerHTML = "Nombre: "+nombrePro
        prec.innerHTML= "Precio: "+precio
       // tip.innerHTML= tipo
       contenedorDer.appendChild(nombre)
       contenedorDer.appendChild(prec)

        //contendor.appendChild(tip)
        contendor.appendChild(contenedorIzq)
        contendor.appendChild(contenedorDer)
        contendormain.appendChild(document.createElement('hr'))
        contendormain.appendChild(document.createElement('br'))
        contendormain.appendChild(contendor)

        limpiarForm()

  }

  function limpiarForm(){
    document.getElementById('NombreProd').value = null
    document.getElementById('precioProd').value = null
    image.setAttribute("src", null)
  }

