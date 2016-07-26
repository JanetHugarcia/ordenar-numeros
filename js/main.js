//**************************Declarando variables****************************
var msg = "ingrese cantidad de números";
var state,state2 = true;
var c = 0;
var list =[];
var numerito;//el numero a comparar
var size = 0;//id del div
//*********************
$(document).ready(function(){
	//**************************validando numeros y diferentes****************************
	do{
		var n = parseInt(prompt(msg));
		for(c;c<n;c++){
			var obj = parseInt(prompt("ingrese numero"));
			var nRepeat=list.indexOf(obj);
			if( nRepeat < 0) list.push(obj) 
			else {
				alert("No repita numero");
				break ; 
			}
			if(isNaN(obj)) break;
		}
		if(!isNaN(n) ) state = false;
	}while(state);
	//**************************imprimiendo numeros****************************
	for(e in list){
		if(!isNaN(list[e])){
			$('#numeral').append('<div class="object" id="'+ e +'">'+ list[e]+'</div>')
		}else{
			alert("JAJAJA a mi ud no me engaña\nIndicaciones:"+
				"\n1. Use sólo números"+
				"\n2.Primero cumpla la (1)");
			$('#numeral').text("");
		}
	}
	//*****************************************recorrido de numeros*******************************
	$('#'+size).addClass("border-red");
	hacerRecorrido();
});

//**************************trabajando con valores int****************************
function numberDiv(number){
	var valueDiv = parseInt($('#'+number).text());
	return valueDiv; 
}
function myStopFunction(myVar) {
    clearInterval(myVar);
}
//**************************evaluando****************************
//******************************************

function hacerRecorrido(numerito){
	var interval = setInterval(function(){
		$('#'+size).removeClass("border-red");
		$('#'+size).addClass("border-black");
		if(isNaN(numerito)){
			var num0=parseInt($('.border-black:first-child').text());
		}else{
			var num0=numerito;
		}

		size++;
		$('#'+size).addClass("border-red");
		var num1 = numberDiv(size);
		if(num0>num1){
			var sizeOn = size;
			// var sizeInt = size-1;
			// console.log(num0 + " " +num1+" size: "+size + " ");
			$('#'+sizeOn).animate({top: '-=70'}, 1000);
			// $('#'+sizeInt).animate({left: '+=30'}, 2000);
			myStopFunction(interval);
			//******************moviendo divs anterioress************************
			var runTotal=0;
			var sizeDivMove;
			var widthRed;
			var numeroDivMove = 0;
			var interval2 = setInterval(function(){
				sizeOn--;
				num=numberDiv(sizeOn);//var
				if(num > num1){
					widthRed = $('.border-red').outerWidth();
					$('#'+sizeOn).animate({left: '+='+widthRed}, 1000);
					sizeDivMove = $('#'+sizeOn).outerWidth();
					runTotal+=sizeDivMove;
					// console.log(runTotal);
					numeroDivMove++;
				}                                        
				if(sizeOn <0){
					// var runTotal = widthRed*numeroDivMove;
					// console.log(runTotal);
					myStopFunction(interval2);
					$('#'+size).animate({left: '-='+runTotal,top:'+=70'}, 1000);

					hacerRecorrido(numerito);

				}
			},1000);

		}
		if(size==list.length) myStopFunction(interval); 
	},2000);
}

