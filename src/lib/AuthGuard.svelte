<script lang="ts">
    import { onMount } from "svelte";
    import { authGuard } from "$firebase/authGuard.js"
  
    let isLoading = true
  
    onMount(async () => {
        try {
            await authGuard() // Espera a Promise ser resolvida
            isLoading = false // Atualiza o estado quando a autenticação estiver verificada
        } catch (error) {
            console.error('Authentication error!', error)
        }
    });
</script>
  
{#if isLoading}
    <p>Loading...</p>
{:else}
    <slot></slot>
{/if}
