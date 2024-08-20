<script>
    import AuthGuard from "$lib/AuthGuard.svelte";

    import { userSignout } from '$firebase/userSignout.js'
    import ButtonSolid from "$lib/ButtonSolid.svelte"
</script>

<AuthGuard>
    <section class="container mx-auto">
        <h1>Home</h1>

        <button
            type='button'
            class="
            btn 
            bg-red-600
            border border-zinc-200 
            hover:bg-red-700 
            w-auto 
            rounded-lg 
            text-zinc-50 
            text-center 
            p-2 
            transition-all"
            on:click={userSignout}
        >
            Logout
        </button>
    </section>
</AuthGuard>

