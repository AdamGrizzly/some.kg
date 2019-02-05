// fetch("https://cors-anywhere.herokuapp.com/https://api.some.kg/polls/public_short_questions/")
// 	.then(data => data.json()).then(data => data)
// 	.then(function(data){
// 		var images = document.getElementsByClassName("imgs");
// 		var opros = document.getElementsByClassName("opros");
// 		var negative_answer = document.getElementsByClassName("negative");
// 		var positive_answer = document.getElementsByClassName("positive");
// 		for(var i=0; i<=2; i++){
		  	
// 					images[i].setAttribute("style", "background: url("+data[i].image+") no-repeat; height: 250px; width:100%; border-radius: 20px;");
// 					opros[i].innerHTML=data[i].title;
// 	 				var neg = data[i].negative_answers; 
// 			  		var pos = data[i].positive_answers;
// 			  		let	 sum= neg + pos;
// 			  		let del= 100/sum;
// 			  		let otv_neg=del*neg;
// 			  		let otv_pos=100-otv_neg;
// 			  		positive_answer[i].innerHTML=otv_pos.toPrecision(3)+'% - ДА';
// 			  		negative_answer[i].innerHTML=otv_neg.toPrecision(3)+'% - НЕТ'; 	
// 			  	}

// });	