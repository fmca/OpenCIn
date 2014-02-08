var professores;

$(window).resize(function () {
    if ($(window).width() < 550) {
        $("#menu").panel("close");
    } else {
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
            'href': "javascript:mostrarProfessor('" + professores[i].nome + "')",
            'rel': 'external',
            'text': professores[i].nome
        })));

    }


    $('#professores_info_listview').listview().listview('refresh');
}

function mostrarProfessor(nome) {

    var params = {
        "nome": nome
    };
    var str = $.param(params);
    window.location.href = "docente.html?" + str;

    
}

function grafico() {

    var qtdAreas = {
        "Uma": 0,
        "Duas": 0,
        "Tres": 0,
        "Quatro": 0,
        "Cinco": 0
    }

    for (var i = 0; i < professores.length; i++) {
        var qtd = professores[i].areas.length;
        switch (qtd) {
        case 1:
            qtdAreas.Uma = qtdAreas.Uma + 1;
            break;
        case 2:
            qtdAreas.Duas = qtdAreas.Duas + 1;
            break;
        case 3:
            qtdAreas.Tres = qtdAreas.Tres + 1;
            break;
        case 4:
            qtdAreas.Quatro = qtdAreas.Quatro + 1;
            break;
        case 5:
            qtdAreas.Cinco = qtdAreas.Cinco + 1;
            break;
        default:
        case 1:
            qtdAreas.Uma = qtdAreas.Uma + 1;
            break;
        }


    }
    var data = [
        {
            label: "1",
            value: qtdAreas.Uma,
            color: "#F38630",
            labelColor: 'white',
            labelFontSize: '16'
    },
        {
            label: "2",
            value: qtdAreas.Duas,
            color: "#E0E4CC",
            labelColor: 'black',
            labelFontSize: '16'
    },
        {
            label: "3",
            value: qtdAreas.Tres,
            color: "#69D2E7",
            labelColor: 'white',
            labelFontSize: '16'
    },
        {
            label: "4+",
            value: qtdAreas.Quatro + qtdAreas.Cinco,
            color: "#aa5fb4",
            labelColor: 'white',
            labelFontSize: '16'
    }

];
    var canvas = document.getElementById("hours");
    var ctx = canvas.getContext("2d");
    new Chart(ctx).Pie(data);

    canvas = document.getElementById("hours2");
    ctx = canvas.getContext("2d");
    new Chart(ctx).Doughnut(data);

    canvas = document.getElementById("hours3");
    ctx = canvas.getContext("2d");
    new Chart(ctx).Doughnut(data);
}