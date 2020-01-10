window.onload = function() {
   
    var sreWork = document.getElementById("sre-modal");

    var sreBtn = document.getElementById("sre-btn");
    
    var close = document.getElementsByClassName("close")[0];

    sreBtn.onclick = function() {
        sreWork.style.display = "block";
    }
    
    close.onclick = function() {
        sreWork.style.display = "none";
    }
    
    window.onclick = function(event) {
        if(event.target == sreWork) {
            sreWork.style.display = "none";
        }
        
    }
}
