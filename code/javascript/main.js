window.onload = function () {
    
    // BUTTON VARIABLES
    var sreBtn = document.getElementById("sre-btn");
    var amsBtn = document.getElementById("ams-btn");
    var anfBtn = document.getElementById("anf-btn");
    var hstrBtn = document.getElementById("hstr-btn");
    var maBtn = document.getElementById("ma-btn");
    var ccdpBtn = document.getElementById("ccdp-btn");
    
    var BTNS = [sreBtn, amsBtn, anfBtn, hstrBtn, maBtn, ccdpBtn];
    
    var btnsLength = BTNS.length;
    
    // WORK MODAL VARIABLES
    var sreWork = document.getElementById("sre-modal");
    var amsWork = document.getElementById("ams-modal");
    var anfWork = document.getElementById("anf-modal");
    var hstrWork = document.getElementById("hstr-modal");
    var maWork = document.getElementById("ma-modal");
    var ccdpWork = document.getElementById("ccdp-modal");
    
    var WORKS = [sreWork, amsWork, anfWork, hstrWork, maWork, ccdpWork];
    
    
    
    
    for (var i = 0; i < btnsLength; i++) {
            var btn = BTNS[i];
            var close = document.getElementsByClassName("close")[i];
        
            (function(index) {
                btn.onclick = function() {
                    WORKS[index].style.display = "block";
                    console.log(index);
                    
                }
                
                close.onclick = function() {
                    WORKS[index].style.display = "none";
                }
                
                WORKS[index].onclick = function() {
                    WORKS[index].style.display = "none";
                }
                
            })(i);
    
        
    }
    
    
}


