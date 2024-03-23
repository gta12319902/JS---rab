/*
function chechStudent(name, age){
	if (age > 17) {
		console.log(name + " уже окончил школу");
	} else {
		console.log(name + " еще учится в школе");
	}
}

chechStudent('Nick', 23);
chechStudent('Make', 13);
chechStudent('Kate', 53);
chechStudent('Pit', 17);
*/
// function youDo(age){
// 	var message;

// 	if(age < 10){
// 		message = 'Ты ребенок';
// 	} else if(age < 20 && age > 10){
// 		message = 'Ты подросток';
// 	} else {
// 		message = 'Ты взрослый человек и должен знать JavaScript';
// 	}
// 	return message;
// }

// var status = youDo(31);
// console.log(status);



//  function personInfo(name, numberClass){

//      if(numberClass > 0 && numberClass <= 11){
//        numberClass = 11 - numberClass;
//        message = name + " еще учиться " + numberClass + " лет";
//      }else if(numberClass > 11){
//        alert("уже закончил учиться");
//      }
//    return message;
//  }
//    var status = personInfo("Петя", 6);
//    alert(status);



 function personData(name, numberClass){
 	
	if(numberClass > 0 && numberClass <= 15){
 		numberClass = 15 - numberClass;
 		message = name + "ещё учиться " + numberClass + " лет";
 	} else if (numberClass > 15){
 		alert ("уже закончил учиться");
 	}
 	return message;
 } 
  var status = personData("Гриша ", 6);
  alert(status);