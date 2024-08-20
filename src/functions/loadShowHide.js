export function showLoad() {
    document.querySelector('[data-content="processing"]').style.display = "block"
}

export function hideLoad() {
    document.querySelector('[data-content="processing"]').style.display = "none"
}
