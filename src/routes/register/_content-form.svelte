<script lang="ts">
    import Load from "$lib/Load.svelte";
	import Button from "$lib/Button.svelte";
	import ButtonSolid from "$lib/ButtonSolid.svelte";

	import { userCreate } from "$firebase/userCreate";
    import { loginRedirect } from "$functions/loginRedirect.js";
</script>

<Load />

<form id="formSubmit" on:submit={userCreate}>
    <h1 class="text-lg mb-3">Register</h1>

    <div class="mb-3">
        <label>
            <input
                type="email"
                name="email"
                autocomplete="username"
                id="email"
                placeholder="name@example.com"
                required
                class="form-input w-full border-zinc-200 rounded-lg py-1 mb-2 transition-all outline-slate-300"
            />
        </label>

        <label>
            <input
                type="password"
                name="password"
                autocomplete="current-password"
                id="password"
                placeholder="Password"
                required
                class="form-input w-full border-zinc-200 rounded-lg py-1 mb-2 transition-all outline-slate-300"
            />
        </label>
    </div>

    <div class="w-full flex flex-col gap-2 mb-3">
        <Button type="submit" id="btnSubmit" label="Register" />
        <ButtonSolid type="button" label="Login" onClick={loginRedirect} />
    </div>
</form>
