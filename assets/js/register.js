
const sign_in_btn=document.querySelector("#sign-in-btn");
const sign_up_btn=document.querySelector("#sign-up-btn");
const container=document.querySelector(".container");

/* sign_up_btn.addEventListener('click', () =>{
    container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener('click', () =>{
    container.classList.remove("sign-up-mode");
});
 */
sign_up_btn.addEventListener('click',SignUpChange);
sign_in_btn.addEventListener('click',SignInChange)

function SignUpChange(){
    if(!container.classList.contains("sign-up-mode")){  
        container.classList.add("sign-up-mode");  
    }
}

function SignInChange(){
    if(container.classList.contains("sign-up-mode")){  
        container.classList.remove("sign-up-mode");
    }
}
