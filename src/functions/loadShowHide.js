// Função para mostrar o indicador de carregamento
export function showLoad() {
    document.querySelector('[data-content="processing"]').style.display = "block"
}

// Função para ocultar o indicador de carregamento
export function hideLoad() {
    document.querySelector('[data-content="processing"]').style.display = "none"
}