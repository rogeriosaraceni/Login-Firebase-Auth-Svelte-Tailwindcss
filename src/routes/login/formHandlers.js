import { showLoad } from "$functions/loadShowHide.js"
import { authenticate } from "$firebase/authenticate"

// Função para lidar com o envio do formulário
export async function handleSubmit(event) {
    event.preventDefault()
    showLoad()

    // Obtém o formulário e os inputs
    const form = event.target
    const email = form.email.value
    const password = form.password.value

    try {
        await authenticate(email, password)
        form.submit()
        window.location.href = '/home'

    } catch (error) {
        console.log("Erro de Auth", error.message)
    }
}
