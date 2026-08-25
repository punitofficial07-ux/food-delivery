let menu = document.getElementById("click-menu");
let nav2=document.getElementsByClassName("nav-2");
const add_cart = document.getElementById("add_cart");
const message = document.getElementById("message");
document.addEventListener("DOMContentLoaded", () => {
    const loginbtn = document.getElementById("loginbtn");

    if (loginbtn) {
        loginbtn.addEventListener("click", () => {
            window.location.href = "Food_Loginpage.html";
        });
    }
});

function order(e) {
    e.innerHTML = "✓ Added";
    e.style.backgroundColor = "green";
    e.disabled = true;

    setTimeout(() => {
        e.innerHTML = "Order Now";
        e.style.backgroundColor = "";
        e.disabled = false;
    }, 2000);
}
function press(){
    let secondNav = document.getElementById("second-nav");
    if(secondNav.style.display==="none"){
    secondNav.style.display="block";
    secondNav.style.display="flex";
    secondNav.style.flexDirection="column";
    secondNav.style.justifyContent="flex-start";
    secondNav.style.paddingTop="58px";
    secondNav.style.backgroundColor="black";
    secondNav.style.color = "white"
    nav2.style.display="flex";
    nav2.style.flexDirection="column";
    }else{
        secondNav.style.display="none";
    }
}

