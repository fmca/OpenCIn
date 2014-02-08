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
        mostrarProfessor(getParam("nome"));
        grafico();

    });

    $("#menu").panel("open");


});

function getParam(name) {
    var url = window.location.href;
    name = name.replace(/[\[]/, "\\\[").replace(/[\]]/, "\\\]");
    var regexS = "[\\?&]" + name + "=([^&#]*)";
    var regex = new RegExp(regexS);
    var results = regex.exec(url);
    if (results == null)
        return "";
    else
        return decodeURIComponent(results[1].replace(/\+/g, " "));

}

function mostrarProfessor(nome) {

    for (var i = 0; i < professores.length; i++) {
        var professor = professores[i];
        if (professor.nome == nome) {
            $("#nome").val(professor.nome);
            $("#email").val(professor.email);
            $("#lattes").val(professor.lattes);
            $("#telefone").val(professor.fone);
            $("#sala").val(professor.sala);
        }
    }
}

function grafico() {


    var data = {
        labels: ["2008", "2009", "2010", "2011", "2012", "2013", "2014"],
        datasets: [

            {
                fillColor: "rgba(201, 197, 197, 0.73)",
                strokeColor: "#8a2626",
                pointColor: "#8a2626",
                pointStrokeColor: "#fff",
                data: [5, 3, 2, 4, 1, 0, 3]
            }
        ]

    };
    var canvas = document.getElementById("publicacoes");
    var ctx = canvas.getContext("2d");
    new Chart(ctx).Line(data);

    data = [
        {
            label: "Banco de Dados",
            value: 30,
            color: "#F38630"
 },
        {
            label: "Teoria da Computação",
            value: 50,
            color: "#E0E4CC"
 },
        {
            label: "Intelgência Artificial",
            value: 100,
            color: "#69D2E7"
 }
]


    canvas = document.getElementById("hours2");
    ctx = canvas.getContext("2d");
    new Chart(ctx).Pie(data);

    /*canvas = document.getElementById("hours3");
    ctx = canvas.getContext("2d");
    new Chart(ctx).Doughnut(data);*/
}