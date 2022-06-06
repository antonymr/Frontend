window.addEventListener("DOMContentLoaded", function (event){
    let form = document.getElementById("form_register")
    form.addEventListener("submit", function(event){
        //event.preventDefault();
        let cant_submit = true;
        var input_name = document.querySelector("#input_name");
        if (empty_validate(input_name, "#name_container", "EL nombre")){
            if (input_name.value.length < 3){
                document.querySelector("#name_container .input_error").innerHTML = 'El nombre debe tener minimo 3 caracteres'
                cant_submit = false
            }
        }else{
            cant_submit = false
        }

        var input_last_name = document.querySelector("#input_last_name");
        if (empty_validate(input_last_name, "#last_name_container", "El apellido")){
            if (input_last_name.value.length < 3){
                document.querySelector("#last_name_container .input_error").innerHTML = 'El apellido debe tener minimo 3 caracteres'
                cant_submit = false
            }
        }else{
            cant_submit = false
        }

        var input_ci = document.querySelector("#input_ci");
        if (empty_validate(input_ci, "#ci_container", "La cedula")){
            if (input_ci.value.length != 10 || isNaN(input_ci.value)){
                document.querySelector("#ci_container .input_error").innerHTML = 'La cedula debe tener 10 caracteres numericos'
                cant_submit = false
            }
        }else{
            cant_submit = false
        }

        var input_email = document.querySelector("#input_email");
        if (empty_validate(input_email, "#email_container", "El correo")){
            var index_one = input_email.value.indexOf('@');
            var index_two = input_email.value.indexOf('.');
            if ((index_one < 0 || index_two < 0) || index_one > index_two ){
                document.querySelector("#email_container .input_error").innerHTML = 'Correo no tiene un formato valido'
                cant_submit = false
            }
        }else{
            cant_submit = false
        }

        /*var input_date = document.querySelector("#input_start_date");
        if (input_date.value == ""){
            cant_submit = false
            document.querySelector("#start_date_container .input_error").innerHTML = 'El nombre debe ser obligatorio';
        }else{
            var current_date = new Date();
            current_date.setTime(input_date.value);
            if (new Date().getTime < current_date.getTime){
                document.querySelector("#start_date_container .input_error").innerHTML = 'La fecha debe ser a futuro'
            }
            document.querySelector("#start_date_container .input_error").innerHTML = ''
        }*/


        if (!cant_submit){
            event.preventDefault()
        }
    })
})

function empty_validate(input, container, input_name){
    if (input.value == ""){
        document.querySelector(container + " .input_error").innerHTML = input_name+ ' debe ser obligatorio';
        return false
    }else{
        document.querySelector(container + " .input_error").innerHTML = '';
        return true
    }
}