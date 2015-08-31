/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

var alertFallback = true;
if (typeof console === "undefined" || typeof console.log === "undefined") {
  console = {};
	if (alertFallback) {
		console.log = function(msg) {
			alert(msg);
		};
	} 
	else {
		console.log = function() {};
	}
}

function isHome(){
    return $('body#page-home').length!==0;
}

$(function(){
    
});

$(document).foundation();