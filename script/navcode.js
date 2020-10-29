function Cargar(pagina){
    $(function(){
        var esperar = 1000;
        $.ajax({
            //url: "/pantallasAdmin/pantallaSeleccionarLocal.html",
            url: pagina ,
            beforeSend: function(){
                $('#contenido').text('Cargando...');
            },
            success: function(data){
                setTimeout(function(){
                    $('#contenido').html(data)
                }, esperar
                );
            }
        });
    });
    
}


//Esto luego lo cambio que esta todo feo namas es para dar el gatazo xd
/*document.getElementById('home').addEventListener('click', ()=>{
    let icon = document.getElementById('home')
    icon.setAttribute("class", "nav__link nav__link--active")
    
    let otro1 = document.getElementById('person')
    let otro2 = document.getElementById('menu')
    let otro3 = document.getElementById('local')

    otro1.setAttribute("class", "nav__link")
    otro2.setAttribute("class", "nav__link")
    otro3.setAttribute("class", "nav__link")



    abrirUrl("/index.html", "probanding")

})

document.getElementById('person').addEventListener('click', ()=>{
    let icon = document.getElementById('person')
    icon.setAttribute("class", "nav__link nav__link--active")
    
    let otro1 = document.getElementById('home')
    let otro2 = document.getElementById('menu')
    let otro3 = document.getElementById('local')

    otro1.setAttribute("class", "nav__link")
    otro2.setAttribute("class", "nav__link")
    otro3.setAttribute("class", "nav__link")
})

document.getElementById('menu').addEventListener('click', ()=>{
    let icon = document.getElementById('menu')
    icon.setAttribute("class", "nav__link nav__link--active")
    
    let otro1 = document.getElementById('home')
    let otro2 = document.getElementById('person')
    let otro3 = document.getElementById('local')

    otro1.setAttribute("class", "nav__link")
    otro2.setAttribute("class", "nav__link")
    otro3.setAttribute("class", "nav__link")
})

document.getElementById('local').addEventListener('click', ()=>{
    let icon = document.getElementById('local')
    icon.setAttribute("class", "nav__link nav__link--active")
    
    let otro1 = document.getElementById('person')
    let otro2 = document.getElementById('menu')
    let otro3 = document.getElementById('home')

    otro1.setAttribute("class", "nav__link")
    otro2.setAttribute("class", "nav__link")
    otro3.setAttribute("class", "nav__link") 
})
*/

