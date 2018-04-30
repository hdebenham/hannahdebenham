var ready = function() {
    var heroHeight = document.getElementsByClassName('background-head')[0].offsetHeight;
    
    var styleChange = function() {
        
        for(var i = 0; i < 3; i++){
            var element = document.getElementsByClassName('left-list')[i];
            
            element.style.width = '10px'
            
            element.innerHTML = "";
            element.style.transition = 'width 1s';
        }
        
        
    }
    
    var Li1 = document.getElementsByClassName('left-list')[0];
    var Li2 = document.getElementsByClassName('left-list')[1];
    var Li3 = document.getElementsByClassName('left-list')[2];
    
    var hover1 = function(event) {
            Li1.style.width = '150px';
            Li1.style.cursor = 'pointer';
            Li1.style.transition = 'width 0s';
            Li1.innerHTML = "Work";
        }
    
    var hover2 = function(event) {
            Li2.style.width = '150px';
            Li2.style.cursor = 'pointer';
            Li2.style.transition = 'width 0s';
            Li2.innerHTML = "About me";
        }
    
    var hover3 = function(event) {
            Li3.style.width = '150px';
            Li3.style.cursor = 'pointer';
            Li3.style.transition = 'width 0s';
            Li3.innerHTML = "Contact";
        }
    
    var hoverOff = function(event) {
            this.style.width = '10px';
            this.innerHTML = "";
        }

    var styleHover = function() {
        
        Li1.addEventListener('mouseover',hover1,false);
        
        Li2.addEventListener('mouseover',hover2,false);
        
        Li3.addEventListener('mouseover',hover3,false);
        
        Li1.addEventListener('mouseout',hoverOff,false);
        Li2.addEventListener('mouseout',hoverOff,false);
        Li3.addEventListener('mouseout',hoverOff,false);
    }
    
    var styleRemoveHover = function () {
        Li1.removeEventListener('mouseover',hover1,false);
        Li2.removeEventListener('mouseover',hover2,false);
        
        Li3.removeEventListener('mouseover',hover3,false);
        
        Li1.removeEventListener('mouseout',hoverOff,false);
        Li2.removeEventListener('mouseout',hoverOff,false);
        Li3.removeEventListener('mouseout',hoverOff,false);
    }
    
    var styleReverse = function() {
        for(var i = 0; i < 3; i++){
            var element = document.getElementsByClassName('left-list')[i];
            element.style.width = '150px';
            
            element.style.transition = 'width 0s';
        }
        
        document.getElementsByClassName('left-list')[0].innerHTML = "Work";
        document.getElementsByClassName('left-list')[1].innerHTML = "About Me";
        document.getElementsByClassName('left-list')[2].innerHTML = "Contact";
    }
    
    var stickyNav = function(event){
        if(window.scrollY > heroHeight - 415) {
            styleChange();  
            styleHover();
        }
        else {
            styleReverse();
            styleRemoveHover();
        }        
    };
    
    window.addEventListener('scroll',stickyNav,false);
    
    var tiqueLink = document.getElementById('click-tique');
    var tique = document.getElementsByClassName('tique')[0];
    var tiqueRelated = document.getElementById('to-tique');
    
    var notedLink = document.getElementById('click-noted');
    var noted = document.getElementsByClassName('noted')[0];
    var notedRelated = document.getElementById('to-noted');
    
    var displayTique = function(event) {
        noted.style.display = 'none';
        tique.style.display = 'block';
    }
    
    var displayNoted = function(event) {
        tique.style.display = 'none';
        noted.style.display = 'block';
    }
    
    tiqueLink.addEventListener('click',displayTique,false);
    tiqueRelated.addEventListener('click',displayTique,false);
    notedLink.addEventListener('click',displayNoted,false);
    notedRelated.addEventListener('click',displayNoted,false);
};



document.addEventListener('DOMContentLoaded',ready,false);

