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
    } else if (document.getElementById("navigation").classList.contains("in") || document.getElementsByTagName("body")[0].hasAttribute("data-toggle")){
        document.getElementsByTagName("body")[0].removeAttribute("data-toggle", "collapse");
        document.getElementsByTagName("body")[0].removeAttribute("data-target", ".navbar-collapse");
        document.getElementsByTagName("body")[0].classList.remove("navbar-toggle");
    }
}

//when navbar is open, add this to body
// margin: 0;
// padding: 0 !important;

function removeMenu(){
    if(document.getElementsByTagName("body")[0].hasAttribute("data-toggle") && document.getElementById("navigation").classList.contains("in")){
        document.getElementsByClassName("navbar-collapse")[0].classList.remove("in");
        document.getElementsByTagName("body")[0].removeAttribute("data-toggle", "collapse");
        document.getElementsByTagName("body")[0].removeAttribute("data-target", ".navbar-collapse");
        document.getElementsByTagName("body")[0].classList.remove("navbar-toggle");
    }
}

window.onload = function (){ 
    if ("ontouchstart" in document.documentElement)
    {
        console.log("device is touch");
        console.log(document.getElementsByClassName("buttons"));
        debugger;
        for (var i=0; i < document.getElementsByClassName("buttons").length; i++){
            document.getElementsByClassName("buttons")[i].classList.add("mobileBtns");
            document.getElementsByClassName("overlay")[i].classList.add("mobileBtns");
        }
    }
    else
    {
        console.log("device isn't touch");
    }
}

// figure:hover .overlay {
//     opacity: 1;
// }