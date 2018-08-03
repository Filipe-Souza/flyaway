document.getElementById("plane-container").addEventListener("click", function(ev){
    ev.target.classList.toggle("clicked");
    setTimeout(function() { ev.target.classList.toggle("clicked"); }, 2000);
});