<script lang="ts">
    export let type: "button" | "submit" | "reset" = "button";
    export let id: string = '';
    export let onClick: (event: MouseEvent) => void = () => {};
    export let label: string = '';
</script>

<button
    type={type}
    id={id}
    class="btn bg-transparent border border-zinc-200 hover:bg-zinc-50 w-full rounded-lg text-zinc-800 text-center py-2 transition-all"
    on:click={onClick}
>
    {label}
</button>
