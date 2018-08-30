window.onload = function(){
    console.log("Loaded");
    const email = "vikkiokamura@gmail.com"
    document.getElementById("emailaddress").href = "mailto:" + email;
    document.getElementById("emailaddress").textContent= email;
}