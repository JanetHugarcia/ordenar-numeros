//Declarando variable
	var width;
	var mywidth;
	var list =[];
	var newList =[];
	var myVar;
//una vez recargada la página
$(document).ready(function(){
	var n = prompt("¿Cuántos número va a ingresar?");
	var i=0;
//introduciendo numeross
	for(i;i<n;i++){
		var obj = parseInt(prompt("Ingrese numero("+i+")"));
	  $('#numeral').append("<div class='object' data-position='"+
	  											i+"' id='"+obj+"' >"+obj+
	  											"</div>");
	  list.push(obj);
	}
	newList = list.unique();
//---------
//Parpadeo en cada object en cuanto a su numero de data-position
	$('.object:first-child').addClass("border-red");//se le agrega propiedades al primer hijo de object
	var c=1;
	setInterval(function(){
		$('.object:nth-child('+c+')').removeClass("border-red");
		c=c+1;
		$('.object:nth-child('+c+')').addClass("border-red");


	},4000);
//--------------
//-------------
//Cada 4 segundo se va a recorrer la lista y se va mostrando el menor
// y después se va eliminando

	myVar=setInterval(function(){
		var menor = newList[0];

		if(newList.length>1){
			for (e in newList) {
				if(newList[e]<menor){
					menor=newList[e];
				}
			}
		}else{
			myStopFunction();
		}
		$('#'+menor).addClass('bck-yellow');
		$('#'+menor).animate({left: '-=500'}, 1000);
		$('#'+menor).animate({left: '-=500',top: '-=500'}, 1000);
		// $('#'+menor).animate({top: '-=1000'}, 1000);

		console.log(menor);
		$('#orden').append('<div class="object border-black">'+menor+'</div>');//mostrando menor
		newList.splice( $.inArray(menor,newList) ,1 );//eliminando
 		},4000);


});

function myStopFunction() {
    clearInterval(myVar);
}
Array.prototype.unique=function(a){
  return function(){return this.filter(a)}}(function(a,b,c){return c.indexOf(a,b+1)<0
});