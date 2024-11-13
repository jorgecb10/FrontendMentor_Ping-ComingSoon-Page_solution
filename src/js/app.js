document.addEventListener('DOMContentLoaded', () => {
    console.log('documento listo');

    const emailInput = document.querySelector('#email')
    const btnSubmit = document.querySelector('#submit')
    const emailDiv = document.querySelector('#emailDiv')
    const formulario = document.querySelector('#formulario')

    comprobarEmail()
    emailInput.addEventListener('input', validar)
    emailInput.addEventListener('blur', validarCorreo)
    emailInput.addEventListener('focus', () => {
        if(emailInput.value !== '' && !validarEmail(emailInput.value)) {
            emailInput.value = ''
            limpiarAlerta(emailDiv)
        }
    })
    formulario.addEventListener('submit', enviarEmail)

    function enviarEmail(e) {
        e.preventDefault()
        
        btnSubmit.disabled = true
        btnSubmit.classList.add('opacity-50')
        btnSubmit.classList.remove('hover:brightness-125')
        
        formulario.reset()
        limpiarAlerta(emailDiv)

        comprobarEmail()

        const alertaExito = document.createElement('P');
        alertaExito.classList.add('exito');
        alertaExito.textContent = 'email successfully registered';
        emailInput.insertAdjacentElement('afterend', alertaExito);

        setTimeout(() => {
            alertaExito.remove();
        }, 3000);
    }

    function validar(e) {
        const email = e.target.value

        if(email === '') {
            comprobarEmail()
            mostrarAlerta('Enter your email address', emailDiv)
            return
        }

        if(!validarEmail(email)) {
            comprobarEmail()
            mostrarAlerta('Please provide a valid email', emailDiv)
            return
        }

        comprobarEmail()
        limpiarAlerta(e.target.parentElement)
    }

    function validarCorreo(e) {
        const email = e.target.value

        if(!validarEmail(email) && email !== '') {
            comprobarEmail()
            emailInput.value = 'example@email/com'
            mostrarAlerta('Please provide a valid email', emailDiv)
            return
        }

        comprobarEmail()
        limpiarAlerta(e.target.parentElement)
    }

    function mostrarAlerta(texto, referencia) {
        limpiarAlerta(referencia)

        const alerta = document.createElement('p')
        alerta.classList.add('error', 'mensaje')
        alerta.textContent = texto
        referencia.appendChild(alerta)

        emailInput.classList.remove('border-pale-blue')
        emailInput.classList.add('border-light-red')
    }

    function limpiarAlerta(referencia) {
        const alerta = referencia.querySelector('.error')

        if(alerta) {
            alerta.remove()
            emailInput.classList.add('border-pale-blue')
            emailInput.classList.remove('border-light-red')
        }
    }

    function validarEmail(email) {
        const regex =  /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
        const resultado = regex.test(email);
        return resultado;
    }

    function comprobarEmail() {
        if(emailInput.value === '') {
            btnSubmit.disabled = true
            btnSubmit.classList.add('opacity-50')
            btnSubmit.classList.remove('hover:brightness-125')
            return
        }

        if(!validarEmail(emailInput.value)) {
            btnSubmit.disabled = true
            btnSubmit.classList.add('opacity-50')
            btnSubmit.classList.remove('hover:brightness-125')
            return
        }

        btnSubmit.disabled = false
        btnSubmit.classList.remove('opacity-50')
        btnSubmit.classList.add('hover:brightness-125')
    }
}) 