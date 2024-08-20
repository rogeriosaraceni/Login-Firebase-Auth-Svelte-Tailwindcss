import { auth } from '$firebase/initializeFirebase.js'
import { showLoad, hideLoad } from "$functions/loadShowHide.js"
import { sendPasswordResetEmail } from 'firebase/auth';

export function userRecoverPassword(event) {
    event.preventDefault()
    showLoad();

    const email = document.querySelector('#email').value

    if (!email) {
        hideLoad();
        alert("Please fill in the email field.");
        return;
    }
    
    try {
        sendPasswordResetEmail(auth, email)
        hideLoad();
        alert("Your password reset sent successfully!");

    } catch (error) {
        hideLoad();
        alert(error.message)
        throw error
    }
}
