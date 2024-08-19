import { getAuth, signOut } from 'firebase/auth'

// Função para deslogar o usuário
export function logout() {
    const auth = getAuth() // Obtenha a instância de autenticação    

    signOut(auth)
        .then(() => {
        console.log('logout');
        window.location.href = '/login/'
    })
    .catch((error) => {
        alert(`Erro ao deslogar: ${error.message}`)
    });
}
