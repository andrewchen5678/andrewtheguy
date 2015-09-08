//$(function(){
    if(isAbout()){
	var isTouch = $("html").hasClass("touch");
            var croc = Snap.select("#crocodile"),
                head = croc.select("#upper-head"),
                jaw = croc.select("#upper-jaw"),
                symbol = croc.select("#symbol"),
                timer;
                
            var pivots = [
                [44, 147],
                [92, 126]
            ];

            function close() {
                //alert('close');
                clearTimeout(timer);

                head.animate({ 
                    transform: "r" + [8, pivots[0]]
                }, 500, mina.backin);
                
                jaw.animate({
                    transform: "r" + [37, pivots[1]]
                }, 500, mina.backin);

                timer = setTimeout(function () {
                    symbol.animate({
                        transform: "t-70,40r40"
                    }, 100);
                }, 400);
            }

            function open() {
                clearTimeout(timer);

                head.animate({ 
                    transform: "r" + [0, pivots[0]]
                }, 700, mina.elastic);
                
                jaw.animate({
                    transform: "r" + [0, pivots[1]]
                }, 700, mina.elastic);

                symbol.animate({
                    transform: "t0,0r0"
                }, 500, mina.elastic);
            }

            timer = setTimeout(close, 50);
/*

    */
   if(isTouch){
       
            croc.touchend(function(e){
                //alert('touch');
                    open();
                    //alert('touchEnd');
                    timer = setTimeout(close, 700);
                });
            }else{
                croc.hover(open, 
                    function () {
                        timer = setTimeout(close, 200);
                    }
                );
            }
                
    }
//});