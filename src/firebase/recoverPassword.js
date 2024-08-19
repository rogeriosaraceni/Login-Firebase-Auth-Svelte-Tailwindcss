import { auth } from '$firebase/firebaseConfig.js'
import { showLoad, hideLoad } from "$functions/loadShowHide.js"
import { getErrorMessage } from '$firebase/getErrorMessage.js'
import { sendPasswordResetEmail } from 'firebase/auth';

export async function recoverPassword(event) {
    event.preventDefault()
    showLoad();

    const form = event.target.closest('form');
    const email = form.email?.value

    if (!email) {
        hideLoad();
        alert("Por favor, preencha o campo de e-mail.");
        return;
    }
    
    try {
        await sendPasswordResetEmail(auth, email)
        hideLoad();
        alert("Email enviado com aucesso!");

    } catch (error) {
        hideLoad();
        alert(getErrorMessage(error));
        console.log(error.code);
        console.log(error.message);
    }
}
