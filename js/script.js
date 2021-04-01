$(document).ready(function(){

    $('#btnSend').click(function(){
        
        var errores = '';

         // Validado Nombre ==============================
         if( $('#names').val() == '' ){
             errores += '<p>Escriba un nombre</p>';
            $('#names').css("border-bottom-color", "#F14B4B")
         } else{
            $('#names').css("border-bottom-color", "#20b1eb")
         }

         // Validado Direccion ==============================
         if( $('#address').val() == '' ){
            errores += '<p>Proporcione una dirección</p>';
            $('#address').css("border-bottom-color", "#F14B4B")
        } else{
            $('#address').css("border-bottom-color", "#20b1eb")
         }

        // Validando Numero telefonico  ==============================
        if( $('#phone').val() == '' ){
            errores += '<p>Ingrese un número telefónico</p>';
            $('#phone').css("border-bottom-color", "#F14B4B")
        } else{
            $('#phone').css("border-bottom-color", "#20b1eb")
         }

        // Validado Mensaje ==============================
        if( $('#mensaje').val() == '' ){
            errores += '<p>Redacte un mensaje</p>';
            $('#mensaje').css("border-bottom-color", "#F14B4B")
        } else{
            $('#mensaje').css("border-bottom-color", "#20b1eb")
         }

        // ENVIANDO MENSAJE ==============================
        if(errores == '' == false){
            var mensajeModal = '<div class="modal_wrap">'+
                                    '<div class="mensaje_modal">'+
                                        '<h3>Errores encontrados</h3>'+
                                        errores+   
                                        '<span id="btnClose">Cerrar</span>'+      
                                    '</div>'+
                                '</div>'


            $('body').append(mensajeModal);
        }

        // CERRANDO MODAL ==============================
        $('#btnClose').click(function(){
            $('.modal_wrap').remove();   
          
        });
    });

});