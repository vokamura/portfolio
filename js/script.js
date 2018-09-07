//Add email address dynamically
window.onload = function(){
    console.log("Loaded");
    const email = "vikkiokamura@gmail.com"
    document.getElementById("emailaddress").href = "mailto:" + email;
    document.getElementById("emailaddress").textContent= email;
}

function menuButton(){
    //If nav bar is open, then allow body to be clicked to close
    if (!document.getElementById("navigation").classList.contains("in")){
        document.getElementsByTagName("body")[0].setAttribute("data-toggle", "collapse");
        document.getElementsByTagName("body")[0].setAttribute("data-target", ".navbar-collapse");
        document.getElementsByTagName("body")[0].classList.add("navbar-toggle");
        document.getElementsByTagName("body")[0].classList.add("navBarOpen");
    //If nav bar is closed, remove from body ability to open navbar without clicking menu button
    } else if (document.getElementById("navigation").classList.contains("in") || document.getElementsByTagName("body")[0].hasAttribute("data-toggle")){
        document.getElementsByTagName("body")[0].removeAttribute("data-toggle", "collapse");
        document.getElementsByTagName("body")[0].removeAttribute("data-target", ".navbar-collapse");
        document.getElementsByTagName("body")[0].classList.remove("navbar-toggle");
        document.getElementsByTagName("body")[0].classList.remove("navBarOpen");
    }
}

function removeMenu(){
    //If nav bar is open, and body is clicked, remove all elements so body can't be clicked to open nav
    if(document.getElementsByTagName("body")[0].hasAttribute("data-toggle") && document.getElementById("navigation").classList.contains("in")){
        document.getElementsByClassName("navbar-collapse")[0].classList.remove("in");
        document.getElementsByTagName("body")[0].removeAttribute("data-toggle", "collapse");
        document.getElementsByTagName("body")[0].removeAttribute("data-target", ".navbar-collapse");
        document.getElementsByTagName("body")[0].classList.remove("navbar-toggle");
        document.getElementsByTagName("body")[0].classList.remove("navBarOpen");
    }
}

//See if screen has touch capability and if not, then have button links for apps show up automatically and not on hover
window.onload = function (){ 
    if ("ontouchstart" in document.documentElement)
    {
        for (var i=0; i < document.getElementsByClassName("buttons").length; i++){
            document.getElementsByClassName("buttons")[i].classList.add("mobileBtns");
            document.getElementsByClassName("overlay")[i].classList.add("mobileBtns");
            document.getElementsByTagName("figure")[i].classList.add("mobileApps");
        }
        for (var i=0; i< document.getElementsByClassName("fancybox").length; i++){
            document.getElementsByClassName("fancybox")[i].classList.add("mobileLinks");
        }
    }
    else
    {
        // console.log("device isn't touch");
    }
}

