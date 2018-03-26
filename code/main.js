var ready = function() {
    var heroHeight = document.getElementsByClassName('background-head')[0].offsetHeight;
    
    var styleChange = function() {
        
        for(var i = 0; i < 3; i++){
            var element = document.getElementsByClassName('left-list')[i];
            
            element.style.width = '10px'
            
            element.innerHTML = "";
        }
        
        
    }
    
    var styleHover = function() {
        var Li1 = document.getElementsByClassName('left-list')[0];
        var Li2 = document.getElementsByClassName('left-list')[1];
        var Li3 = document.getElementsByClassName('left-list')[2];
        
        var hover1 = function(event) {
            Li1.style.width = '150px';
            Li1.innerHTML = "Work";
        }
        Li1.addEventListener('mouseover',hover1,false);
        
        var hover2 = function(event) {
            Li2.style.width = '150px';
            Li2.innerHTML = "About me";
        }
        Li2.addEventListener('mouseover',hover2,false);
        
        var hover3 = function(event) {
            Li3.style.width = '150px';
            Li3.innerHTML = "Contact";
        }
        Li3.addEventListener('mouseover',hover3,false);
        
        var hoverOff = function(event) {
            this.style.width = '10px';
            this.innerHTML = "";
        }
        
        Li1.addEventListener('mouseout',hoverOff,false);
        Li2.addEventListener('mouseout',hoverOff,false);
        Li3.addEventListener('mouseout',hoverOff,false);
    }
    
    var styleReverse = function() {
        for(var i = 0; i < 3; i++){
            var element = document.getElementsByClassName('left-list')[i];
            element.style.width = '150px';
        }
        
        document.getElementsByClassName('left-list')[0].innerHTML = "Work";
        document.getElementsByClassName('left-list')[1].innerHTML = "About Me";
        document.getElementsByClassName('left-list')[2].innerHTML = "Contact";
    }
    
    var test = function(event){
        if(window.scrollY > heroHeight - 415) {
            styleChange();  
            styleHover();
        }
        else {
            styleReverse();
        }
        var height = window.scrollY > heroHeight - 415;
        
    }
    
    window.addEventListener('scroll',test,false);
            
};



document.addEventListener('DOMContentLoaded',ready,false);

