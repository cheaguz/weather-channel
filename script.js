function llamarTiempo(){
    var inputIngresado = $("input").val();
    var tiempo = $.getJSON("https://api.openweathermap.org/data/2.5/weather?q="+inputIngresado+"&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es", function () {
        var lugar =$("#ciudad").text(tiempo.responseJSON.name);
        var temp = $("#temperatura").text(tiempo.responseJSON.main.temp);
        var icono = $("#wicon").attr("src","https://openweathermap.org/img/w/"+tiempo.responseJSON.weather[0].icon+".png");//nro icono
        var descripcion =$("#descripcion").text(tiempo.responseJSON.weather[0].description);

    })
}


$("button").click(function () {
    if ($("input").val()==""){
        alert("Ingresa una ciudad");
    }else{
        $(".container").css("visibility","visible")
            llamarTiempo()
            $("input").val("");
    }
            })
        
        

var tiempoD = $.getJSON("https://api.openweathermap.org/data/2.5/weather?q=Cordoba&appid=95176c8edea30e33338e0eaddd53a916&units=metric&lang=es")
