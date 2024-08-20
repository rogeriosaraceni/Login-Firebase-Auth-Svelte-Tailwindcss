import { auth } from '$firebase/initializeFirebase.js'
import { createUserWithEmailAndPassword } from 'firebase/auth'
import { showLoad, hideLoad } from "$functions/loadShowHide.js"

// Função para autenticar o usuário
export function userCreate(event) {
    event.preventDefault()
    showLoad()

    // Obtém o formulário e os inputs
    const form = event.target
    const email = form.email.value
    const password = form.password.value

    createUserWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
            alert('successfully registered!')
            window.location.href = '/login'
        }
    })
    .catch((error) => {
        hideLoad()
        alert(error.message)
        throw error
    });
}