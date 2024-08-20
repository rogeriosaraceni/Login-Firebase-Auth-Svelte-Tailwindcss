import { getAuth, signOut } from 'firebase/auth'

// Função para deslogar o usuário
export function userSignout() {
    const auth = getAuth() // Obtenha a instância de autenticação    

    signOut(auth)
        .then(() => {
        console.log('logout');
        window.location.href = '/login/'
    })
    .catch((error) => {
        alert(error.message)
        throw error
    });
}
