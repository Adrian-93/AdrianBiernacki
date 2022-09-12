const text1 = "HTML";
const text2 = "CSS";
const text3 = "JavaScript";
const text4 = "Adrian Biernacki /n Junior /n Web Developer"
const handler = document.getElementById("type");
let typeItteration = 1;


function typeMain(startType, startRemoveText, typeItteration){
	if(startType == true && startRemoveText == false){
		switch (typeItteration){
			case 1 : setTimeout(function(){type(text1, handler, true, 'html')}, 1000);break;
			case 2 : setTimeout(function(){type(text2, handler, true, 'css')}, 1000);break;
			case 3 : setTimeout(function(){type(text3, handler, true, 'js')}, 1000);break;
			case 4 : setTimeout(function(){type(text4, handler, false)}, 1000);break;
			default: removeBlink() ;break;
		}
	}else if(startType == false && startRemoveText == true){
			setTimeout(function(){ removeText(handler, true); },1000);	
	}
}


function type(typeText, htmlHandlerElement, removeText = false, slideHandler = ''){
	let arrayType = typeText.split("");
	let lengthType = arrayType.length;
	let i = 0;
	
	(function startType(){
		setTimeout(function(){
			if (slideHandler != '') slideIn(slideHandler);

			if(arrayType[i] == "/"){
				htmlHandlerElement.innerHTML += "<br>";
				i +=3;
				}
				
				htmlHandlerElement.innerHTML += arrayType[i] ;
				i++;

				if (i < lengthType) {
					startType() 
					}else {

					if(!removeText) removeBlink() ;
					typeItteration++;
					typeMain(false, removeText, typeItteration);
				};
			}, 100); 
	})();
};

function removeText(htmlHandlerElement, typeText = false){
	let text = htmlHandlerElement.innerHTML;
	let arrayRemoveText = Array.from(text);
	
	(function remove(){
		setTimeout(function(){
		let lengthRemoveText = arrayRemoveText.length;

		if(arrayRemoveText[lengthRemoveText -1] == ">"){
			for(let i = 4; i>0; i--){
				arrayRemoveText.pop();
			}
		}
		
		arrayRemoveText.pop();
		htmlHandlerElement.innerHTML = arrayRemoveText.join('');	
		if(arrayRemoveText.length > 0) {
			remove();
		}else{
			typeMain(typeText, false, typeItteration);
		}
		},100);
	})();
}



function slideIn(id){
	let handler = document.getElementById(id);
	handler.style.animationName = "slideIn"; 
}


function removeBlink(){
	 setTimeout(function(){ let head = document.head.appendChild(document.createElement("style"));
			head.innerHTML = '#type::after { animation-iteration-count: 1; opacity: 0}'; },1200)
		;
}

document.onload = typeMain(true, false, typeItteration);

