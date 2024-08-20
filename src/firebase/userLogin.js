import { auth } from '$firebase/initializeFirebase.js'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { showLoad, hideLoad } from "$functions/loadShowHide.js"

// Função para autenticar o usuário
export function userLogin(event) {
    event.preventDefault()
    showLoad()

    // Obtém o formulário e os inputs
    const form = event.target
    const email = form.email.value
    const password = form.password.value

    signInWithEmailAndPassword(auth, email, password)

    .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
            window.location.href = '/home'
        }
    })
    .catch((error) => {
        hideLoad()
        alert(error.message)
        throw error
    });
}
