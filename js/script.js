window.onload = function(){
    console.log("Loaded");
    const email = "vikkiokamura@gmail.com"
    document.getElementById("emailaddress").href = "mailto:" + email;
    document.getElementById("emailaddress").textContent= email;
}

function menuButton(){
    // debugger;
    if (!document.getElementById("navigation").classList.contains("in")){
        document.getElementsByTagName("body")[0].setAttribute("data-toggle", "collapse");
        document.getElementsByTagName("body")[0].setAttribute("data-target", ".navbar-collapse");
        document.getElementsByTagName("body")[0].classList.add("navbar-toggle");
    } else if (document.getElementById("navigation").classList.contains("in") || document.getElementsByTagName("body")[0].hasAttribute("data-toggle")){
        document.getElementsByTagName("body")[0].removeAttribute("data-toggle", "collapse");
        document.getElementsByTagName("body")[0].removeAttribute("data-target", ".navbar-collapse");
        document.getElementsByTagName("body")[0].classList.remove("navbar-toggle");
    }
}

function removeMenu(){
    console.log("remove");
    // debugger;
    if(document.getElementsByTagName("body")[0].hasAttribute("data-toggle") && document.getElementById("navigation").classList.contains("in")){
        document.getElementsByClassName("navbar-collapse")[0].classList.remove("in");
        document.getElementsByTagName("body")[0].removeAttribute("data-toggle", "collapse");
        document.getElementsByTagName("body")[0].removeAttribute("data-target", ".navbar-collapse");
        document.getElementsByTagName("body")[0].classList.remove("navbar-toggle");
    }
}

// document.querySelectorAll("body > div:not(.first)")