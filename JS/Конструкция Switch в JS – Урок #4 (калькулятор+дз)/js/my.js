/*var x = '7';
switch(x){ // ===
	case '1': alert('Здесь 1');
		break;
	case '2': alert('Здесь 2');
		break;
	case '3': alert('Здесь 3');
		break;
	case '4': alert('Здесь 4');
		break;
	default: alert('Совпадений не было');
} */

var x = prompt("Введите первое число",100);  // введите первое число
var y = prompt("Введите второе число",100);  // введите второе
var z = prompt("Введите 1,чтобы сработал знак + 2,чтобы - 3,чтобы *, 4 чтобы /");

var x = parseInt(x);
var y = parseInt(y);


var result;

switch(z) {
	  case '1':result= x+y;
	break;
	  case '2':result= x-y;
	break;
	  case '3':result= x*y;
	break;
	  case '4':result= x/y;
	break;
	default: result= 'Вы ввели не существующую команду!';
};
alert(result);