var professores;

$( window ).resize(function() {
  if( $( window ).width() <550 ){
      $("#menu").panel("close");
  }else{
      $("#menu").panel("open");
  }
});

$(document).ready(function () {
    $.ajaxSetup({
        scriptCharset: "utf-8",
        contentType: "application/json; charset=utf-8"
    });

    $.getJSON("../js/professores.json", function (data) {
        console.log(data);
        professores = data;
        mostrarProfessores();
        grafico();

    });

    $("#menu").panel("open");


});

function mostrarProfessores() {

    for (var i = 0; i < professores.length; i++) {
        $('#professores_info_listview').append($('<li/>', {}).append($('<a/>', {
            'data-icon': 'star',
            'href': '#',
            'rel': 'external',
            'text': professores[i].nome
        })));

    }


    $('#professores_info_listview').listview().listview('refresh');
}

function grafico() {
    var data = [
        {
            value: 20,
            color: "#637b85"
    },
        {
            value: 30,
            color: "#2c9c69"
    },
        {
            value: 40,
            color: "#dbba34"
    },
        {
            value: 10,
            color: "#c62f29"
    }

];
    var canvas = document.getElementById("hours");
    var ctx = canvas.getContext("2d");
    new Chart(ctx).Doughnut(data);
    
    canvas = document.getElementById("hours2");
    ctx = canvas.getContext("2d");
    new Chart(ctx).Doughnut(data);
    
    canvas = document.getElementById("hours3");
    ctx = canvas.getContext("2d");
    new Chart(ctx).Doughnut(data);
}