/* 
 * Fallback to png on browsers that don't support svg
 * just disable for now because I don't really care about ie8
 * support anymore at this point.
 */
/*
if (!Modernizr.svg) {
    var imgs = document.getElementsByTagName('img');
    var svgExtension = /.*\.svg$/
    var l = imgs.length;
    for(var i = 0; i < l; i++) {
        if(imgs[i].src.match(svgExtension)) {
            imgs[i].src = imgs[i].src.slice(0, -3) + 'png';
            //console.log(imgs[i].src);
        }
    }
}
*/
