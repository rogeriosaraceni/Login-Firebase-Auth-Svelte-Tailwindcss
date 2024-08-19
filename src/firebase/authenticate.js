import { auth } from '$firebase/firebaseConfig.js'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { hideLoad } from "$functions/loadShowHide.js"
import { getErrorMessage } from '$firebase/getErrorMessage.js'

// Função para autenticar o usuário
export async function authenticate(email, password) {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password)
        hideLoad()
        console.log("success", response)
        return response
    }
    catch (error) {
        hideLoad()
        console.log("Erro de Auth", error.message)
        alert(getErrorMessage(error))
        throw error
    }
}
