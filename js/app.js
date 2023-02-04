document.addEventListener('DOMContentLoaded', () => {

    const email = {
        email: '',
        asunto: '',
        mensaje: '',
        cc: 'qwe',
    }


    // Seleccionar los elementos de la intefaz
    const inputEmail = document.querySelector('#email');
    const inputAsunto = document.querySelector('#asunto');
    const inputMensaje = document.querySelector('#mensaje');
    const formulario = document.querySelector('#formulario');
    const btnSubmit = document.querySelector('#formulario button[type="submit"]');
    const btnReset = document.querySelector('#formulario button[type="reset"]');
    const spinner = document.querySelector('#spinner');



    // Asignar eventos
    inputEmail.addEventListener('input', validar);
    inputAsunto.addEventListener('input', validar);
    inputMensaje.addEventListener('input', validar);
    formulario.addEventListener('submit', enviarEmail);
    
    


    //=====================RETO=====================
    
    // Creando el nuevo elemento
    const nuevoElemento = document.createElement('P'); // Label
    const nuevoInput = document.createElement('INPUT'); // Input
    const contenedorCC = document.createElement('DIV'); // Contenedor del label y el input

    // Agregando las clases
    nuevoElemento.classList.add('font-regular', 'font-medium'); // Label
    nuevoInput.classList.add('border', 'border-gray-300', 'px-3', 'py-2','rounded-lg'); // Input
    contenedorCC.classList.add('flex', 'flex-col', 'space-y-2'); // CotenedorCC
    
    nuevoInput.setAttribute('id', 'input-cc'); // Agregando el id a nuevoInput
    nuevoElemento.textContent = 'CC:'; // Texto para el label

    // Metiendo el label y el input dentro de su contenedorCC
    contenedorCC.appendChild(nuevoElemento);
    contenedorCC.appendChild(nuevoInput);

    // Mostrando el contenedorCC en el HTML
    inputEmail.parentElement.appendChild(contenedorCC);

    // Escuchando la entrada
    

















    // Boton de Reset
    btnReset.addEventListener('click', function(e){
        e.preventDefault();

        // Reiniciar el objeto
        resetFromulario();
    })

    function enviarEmail(e){
        e.preventDefault();

        spinner.classList.remove('hidden');
        spinner.classList.add('flex');

        setTimeout( () =>{
            spinner.classList.add('hidden');
            spinner.classList.remove('flex');

            // Reiniciar el objeto
            resetFromulario();

            // Crear Alerta
            const alertaExito = document.createElement('P');
            alertaExito.classList.add('bg-green-500', 'text-white', 'p-2', 'text-center', 'rounded-lg', 'mt-10', 'font-bold', 'text-sm',    'uppercase');
            alertaExito.textContent = 'Email Enviado con Exito';
            formulario.appendChild(alertaExito);
            
            setTimeout(() => {
                alertaExito.remove();
            },3000);
        
        },3000);
    }

    













    // Validacion de los datos
    function validar(e){
        if(e.target.value.trim() === ''){ // No puede haber campos vacios
            mostrarAlerta(`El Campo ${e.target.id} es obligatorio`, e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        }
        if(e.target.id === 'email' && !validarEmail(e.target.value)){ // Campo de email con estructura de email
            mostrarAlerta('El Email no es valido', e.target.parentElement);
            email[e.target.name] = '';
            comprobarEmail();
            return;
        };

        // Leyendo entrada del InputCC
        const inputCC = document.getElementById('input-cc');
        console.inputCC;





        limpiarAlerta(e.target.parentElement);







        // Asignar los valores
        email[e.target.name] = e.target.value.trim().toLowerCase();

        // Comprobar el objeto de email
        comprobarEmail();
    }

    function mostrarAlerta(mensaje, referencia){
        limpiarAlerta(referencia);
        
        // Se crea un elemento <p> para mostrar la alerta
        const error = document.createElement('P');
        error.textContent = mensaje;
        error.classList.add('bg-red-600', 'text-white', 'p-2', 'text-center');

        
    // Inyectar el error al formulario
    referencia.appendChild(error);
    }

    function limpiarAlerta(referencia){
        // Comprueba si ya existe una alerta
        const alerta = referencia.querySelector('.bg-red-600');
        if(alerta){
            alerta.remove();
        }
    }

    function validarEmail(email){
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/ ;

        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail(){
        if(Object.values(email).includes('')){
            btnSubmit.classList.add('opacity-50');
            btnSubmit.disabled = true;
        } else {
            btnSubmit.classList.remove('opacity-50');
            btnSubmit.disabled = false;
        }
    }

    function resetFromulario(){
        email.email = '';
        email.asunto = '';
        email.mensaje = '';
        formulario.reset();
        comprobarEmail(); 
    }


    
});