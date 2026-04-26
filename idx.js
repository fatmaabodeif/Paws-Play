document.querySelector(".outline").onclick = function() {
    document.getElementById("options").scrollIntoView({behavior: "smooth"});
    document.getElementById("service-options").style.display = "flex";
};
document.getElementById("adopt-btn").onclick = function() {
    document.getElementById("adopt-section").scrollIntoView({behavior: "smooth"});
};
document.getElementById("show-btn").onclick = function() {
    document.getElementById("services").scrollIntoView({behavior: "smooth"});
};
document.getElementById("donate-btn").onclick = function (){
    document.getElementById("donate-section").scrollIntoView({behavior : "smooth"});
}
document.getElementById("donate").onclick = function(){
    let amountInput = document.getElementById("input");
    amountInput.value = "";
    alert("Thank you for your kindness❤️")
}
document.getElementById("About").onclick = function(){
    document.getElementById("about").scrollIntoView({behavior : "smooth"})
}
document.getElementById("Contact").onclick = function(){
    document.getElementById("contact-header").scrollIntoView({behavior : "smooth"})
}
document.getElementById("adopt-btn").onclick = function(){
    document.getElementById("contact-header").scrollIntoView({behavior : "smooth"})
}


