//$(function(){
//    $("#dialogModal").dialog({
//        autoOpen:false
//        modal:true;
//    });
//    
//});
$(document).ready(function(){
    
    
});

function catUsuarios(){
    $.ajax({
        data:  '',
        url:   'catalogos/usuarios/usuarios.html',
        type:  'post',
        success:  function (response) {
            $("#workArea").html(response);
        }
    });
}

function loadAgregarUsuario(){
    $.ajax({
        data:  '',
        url:   'catalogos/usuarios/modalAltaUsuario.html',
        type:  'post',
        success:  function (response) {
            $("#dialogModal").html(response);
            $("#dialogModal").dialog({
                autoOpen:false,
                modal:true,
                hide:'drop',
                show:'fold',
                width: "70%",
                height: 'auto',
                position: [50,50],
                draggable: true,
                title:'Agregar Usuario',
                resizable: false
            });
            $('#dialogModal').dialog('open');
        }
    });
}

function SelectElement(element,valueToSelect)
{    
    var element = document.getElementById(element);
    element.value = valueToSelect;
}

function openDetalle(id){
    var usuario=$("#lblUsuario"+id).html();
    var nombre=$("#lblNombre"+id).html();
    var perfil=$("#lblPerfil"+id).html();
    $.ajax({
        data:  '',
        url:   'catalogos/usuarios/modalUpdUsuario.html',
        type:  'post',
        success:  function (response) {
            $("#dialogModal").html(response);
            $("#txtModUsuario").val(usuario);
            SelectElement("sltModNombre",id);
            SelectElement("sltModPerfil",id);
            
            $("#dialogModal").dialog({
                autoOpen:false,
                modal:true,
                hide:'drop',
                show:'fold',
                width: "70%",
                height: 'auto',
                position: [50,50],
                draggable: true,
                title:'Agregar Usuario',
                resizable: false
            });
            $('#dialogModal').dialog('open');
        }
    });
}


function catEmpleados(){
    //TODO
}

function catProductos(){
    //TODO
}

function catClientes(){
    //TODO
}