import { auth } from '$firebase/firebaseConfig'
import { onAuthStateChanged } from 'firebase/auth'

export function authGuard() {
    return new Promise((resolve, reject) => {
        const unsubscribe = onAuthStateChanged(auth, (user) => {
            if (user) {
                resolve() // Usuário autenticado, resolver a Promise
            } else {
                window.location.href = '/login' // Redirecionar se não autenticado
                reject() // Rejeitar a Promise, já que o usuário não está autenticado
            }
        });

        // Opcional: limpar o listener quando o componente for desmontado
        return () => unsubscribe()
    })
}