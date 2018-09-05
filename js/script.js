window.onload = function(){
    console.log("Loaded");
    const email = "vikkiokamura@gmail.com"
    document.getElementById("emailaddress").href = "mailto:" + email;
    document.getElementById("emailaddress").textContent= email;
}

function menuButton(){
    if (!document.getElementById("navigation").classList.contains("in")){
        document.getElementsByTagName("body")[0].setAttribute("data-toggle", "collapse");
        document.getElementsByTagName("body")[0].setAttribute("data-target", ".navbar-collapse");
        document.getElementsByTagName("body")[0].classList.add("navbar-toggle");
        document.getElementsByTagName("body")[0].classList.add("navBarOpen");
    } else if (document.getElementById("navigation").classList.contains("in") || document.getElementsByTagName("body")[0].hasAttribute("data-toggle")){
        document.getElementsByTagName("body")[0].removeAttribute("data-toggle", "collapse");
        document.getElementsByTagName("body")[0].removeAttribute("data-target", ".navbar-collapse");
        document.getElementsByTagName("body")[0].classList.remove("navbar-toggle");
        document.getElementsByTagName("body")[0].classList.remove("navBarOpen");
    }
}

function removeMenu(){
    if(document.getElementsByTagName("body")[0].hasAttribute("data-toggle") && document.getElementById("navigation").classList.contains("in")){
        document.getElementsByClassName("navbar-collapse")[0].classList.remove("in");
        document.getElementsByTagName("body")[0].removeAttribute("data-toggle", "collapse");
        document.getElementsByTagName("body")[0].removeAttribute("data-target", ".navbar-collapse");
        document.getElementsByTagName("body")[0].classList.remove("navbar-toggle");
        document.getElementsByTagName("body")[0].classList.remove("navBarOpen");
    }
}

window.onload = function (){ 
    if ("ontouchstart" in document.documentElement)
    {
        for (var i=0; i < document.getElementsByClassName("buttons").length; i++){
            document.getElementsByClassName("buttons")[i].classList.add("mobileBtns");
            document.getElementsByClassName("overlay")[i].classList.add("mobileBtns");
        }
        for (var i=0; i< document.getElementsByClassName("fancybox").length; i++){
            document.getElementsByClassName("fancybox")[i].classList.add("mobileLinks");
        }
    }
    else
    {
        console.log("device isn't touch");
    }
}
