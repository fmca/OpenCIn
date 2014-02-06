var professores;

$(document).ready(function () {
    $.ajaxSetup({ scriptCharset: "utf-8" , contentType: "application/json; charset=utf-8"});
    
    $.getJSON("../js/professores.json", function (data) {
        console.log(data);
        professores = data;
        mostrarProfessores();

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