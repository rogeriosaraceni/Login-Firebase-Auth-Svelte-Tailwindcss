<script>
    //com SSR
    //https://kit.svelte.dev/docs/modules#sveltejs-kit-redirect
    import { browser } from '$app/environment';


    if (browser) { // to prevent error window is not defined, because it's SSR
        window.location.href = '/home';
    }
</script>