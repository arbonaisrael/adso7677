var ControlUsers                 = false;
var ControlBarrios               = false;
var ControlCiudades              = false;
var ControlMedicamentos          = false;
var ControlPacientes             = false;
var ControlCum_Programas         = false;
var ControlHipertension_Arterial = false;
var ControlHipercolesterolemia   = false;
var ControlDeabetes              = false;
var UsuarioActual                = jQuery.parseJSON(sessionStorage.getItem('user'));

$('#CerrarSesion').click(function(event) {
    sessionStorage.removeItem('user');
    Recargar("../../FrontEnd/PanelControl/");
});


$('#ControlPanelUser').click(function(event) {
	if(!ControlUsers){
		$('#n_img').addClass('hidden');
		listarUsers();
		ControlUsers = true;
	}else{
		ControlUsers = false;
    	$('#n_img').removeClass('hidden');
	}
});

$('#ControlPanelBarrio').click(function(event) {
	if(!ControlBarrios){
		$('#n_img').addClass('hidden');
		listarBarrios();
		ControlBarrios = true;
	}else{
		ControlBarrios = false;
    $('#n_img').removeClass('hidden');
	}
});


$('#ControlPanelCiudad').click(function(event) {
	if(!ControlCiudades){
		$('#n_img').addClass('hidden');
		listarCiudad();
		ControlCiudades = true;
	}else{
		ControlCiudades = false;
   		$('#n_img').removeClass('hidden');
	}
});

$('#ControlPanelMedicamento').click(function(event) {
	if(!ControlMedicamentos){
		$('#n_img').addClass('hidden');
		listarMedicamento();
		ControlMedicamentos = true;
	}else{
		ControlMedicamentos = false;
    	$('#n_img').removeClass('hidden');
	}
});

$('#ControlPanelPaciente').click(function(event) {
	if(!ControlPacientes){
    $('#n_img').addClass('hidden');
		listarPaciente();
		ControlPacientes = true;
	}else{
		ControlPacientes = false;
    	$('#n_img').removeClass('hidden');
	}
});

$('#ControlPanelCum_Programa').click(function(event) {
	if(!ControlCum_Programas){
		$('#n_img').addClass('hidden');
		listarCum_Programa();
		ControlCum_Programas = true;
	}else{
		ControlCum_Programas = false;
		$('#n_img').removeClass('hidden');
	}
});

$('#ControlPanelHipertension_Arterial').click(function(event) {
	if(!ControlHipertension_Arterial){
		$('#n_img').addClass('hidden');
		listarHipertension_Arterial();
		ControlHipertension_Arterial = true;
	}else{
		ControlHipertension_Arterial = false;
		$('#n_img').removeClass('hidden');
	}
});

$('#ControlPanelHipercolesterolemia').click(function(event) {
	if(!ControlHipercolesterolemia){
		$('#n_img').addClass('hidden');
		listarHipercolesterolemia();
		ControlHipercolesterolemia = true;
	}else{
		ControlHipercolesterolemia = false;
		$('#n_img').removeClass('hidden');
	}
});

$('#ControlPanelDeabetes').click(function(event) {
	if(!ControlDeabetes){
		$('#n_img').addClass('hidden');
		listarDeabetes();
		ControlDeabetes = true;
	}else{
		ControlDeabetes = false;
		$('#n_img').removeClass('hidden');
	}
});

jQuery(document).ready(function(){
    $(".oculto").hide();              
      $(".inf").click(function(){
            var nodo = $(this).attr("href");  
   
            if ($(nodo).is(":visible")){
                 $(nodo).hide();
                 return false;
            }else{
          		$(".oculto").hide("slow");                             
          		$(nodo).fadeToggle("fast");
          		return false;
            }
      });
  });

  jQuery(document).ready(function(){
    $('.date').datetimepicker({
        format: 'YYYY-MM-DD'
    });
});