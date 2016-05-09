$(document).ready(function(){ 
  $('#submit').click(function(e){
    $('form').validate({
        rules: {
            nombre: {
                required: true
            },
            telefono: {
                required: true,
                number: true,
                minlength: 9
            },
            email: {
                required: true,
                email: true
            }
        },
        messages: {
            nombre: "Es necesario que indique su nombre.", 
            telefono: {
              required: "Es necesario que indique su teléfono.",
              number: "Sólo dígitos, por favor.",
              minlength: "Por favor, introduzca un teléfono correcto."
            },
            email: {
              required: "Es necesario que indique su email.",
              email: "Por favor, introduzca un email correcto."
            }
        },
        highlight: function(element) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function(element) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        errorElement: 'span',
        errorClass: 'help-block',
        errorPlacement: function(error, element) {
            if(element.parent('.input-group').length) {
                error.insertAfter(element.parent());
            } else {
                error.insertAfter(element);
            }
        },
        submitHandler: function(form) {         
          $('#contactar').addClass('hidden');
          $('#contactado').removeClass('hidden');
          window.scrollTo(0,0);
        }
    });
  });
}); 