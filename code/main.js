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
    
//    var marginY = 0;
//    var speed = 3;
//    var scroller = null;
//    var pos = 0;
//    
        
//        var initScroll = function(){
//            var work = document.getElementsByClassName('case-study')[1];
//            pos = work.offsetTop - 150;
//            
//            scroller = setTimeout(function(){
//                    initScroll();
//                }, 1);
//            
//            if(window.scrollY < pos){
//                
//                marginY += speed;
//
//                if(marginY >= pos){
//                    clearTimeout(scroller);
//                }
//                window.scrollTo(0, marginY);
//            } else {
//                
//                marginY = marginY - speed;
//                
//                if(marginY <= pos){
//                    clearTimeout(scroller);
//                }
//                window.scrollTo(0, marginY);
//            }
//        };
//    
    
   // Li1.addEventListener('click',initScroll,false);
    
    var marginY = 0;
    var speed = 3;
    var scroller = null;
    var pos = 0;
    
    var work = document.getElementsByClassName('case-study')[1];    
    
    var initScroll = function(element){
            
        pos = element.offsetTop - 150;
            
        scroller = setTimeout(function(){
                initScroll();
        }, 1);
            
        if(window.scrollY < pos){
                
            marginY += speed;

            if(marginY >= pos){
                clearTimeout(scroller);
            }
            window.scrollTo(0, marginY);
        } else {
            marginY = marginY - speed;
            if(marginY <= pos){
                clearTimeout(scroller);
            }
            window.scrollTo(0, marginY);
            }
        };
    
    
    Li1.addEventListener('click',initScroll,false);
    
    var aboutMeLink = function(){
        var aboutMe = document.getElementById('about-me-id');
        var pos = 0;
        pos += aboutMe.offsetTop - aboutMe.scrollTop + aboutMe.clientTop;
        
        window.scrollTo(0, pos);
    };
    
    Li2.addEventListener('click',aboutMeLink,false);
            
};



document.addEventListener('DOMContentLoaded',ready,false);

