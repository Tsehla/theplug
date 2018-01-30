//JavaScript umuzi
//dom's 

//dom hide or show

function hide(x){

return window.document.getElementById(x).style.display = "none"; 
}
    
function show(x){

return window.document.getElementById(x).style.display = "block";
 }
    

//login sucess
function login_sucess(){
window.document.getElementById("onboarding_login").style.display = "none"; 
window.document.getElementById("onboarding_pop").style.display = "none"; 
}		

//register
function register(){
window.document.getElementById("onboarding_login").style.display = "none"; 
window.document.getElementById("onboarding_register_login").style.display = "block"; 
}

//register sucess
function register_sucess(){
window.document.getElementById("onboarding_register_login").style.display = "none"; 
window.document.getElementById("onboarding_pop").style.display = "none"; 
}

function category(){
    window.open("page2/page2.html");
    
}
