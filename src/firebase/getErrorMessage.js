// Função para obter uma mensagem de erro
export function getErrorMessage(error) {
    // Adapte esta função para retornar mensagens de erro apropriadas
    switch (error.code) {
        case 'auth/invalid-credential':
            return 'User not found!'
        default:
            return 'Erro desconhecido!'
    }
}