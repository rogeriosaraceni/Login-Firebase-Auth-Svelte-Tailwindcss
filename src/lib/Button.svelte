<script lang="ts">
    export let type: "button" | "submit" | "reset" = "button";
    export let id: string = '';
    export let onclick: (event: MouseEvent) => void = () => {};
    export let disabled: boolean = false;
    export let label: string = '';
</script>

<button
    type={type}
    id={id}
    class="btn bg-orange-400 hover:bg-orange-500 w-full rounded-lg text-zinc-50 text-center py-2 transition-all"
    disabled={disabled}
    on:click={onclick}
>
    {label}
</button>
