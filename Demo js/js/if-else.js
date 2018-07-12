var kq;
function test (x) {
	if (typeof x == 'string'){
		kq = 'chuỗi';
	}
	else if(x % 2 ==0){
		kq =  'số chẵn';
	}
	else {
		kq =  'số lẻ';
	}
	return 'là ' + kq;
}


var x = 'B';
switch (x){
	case 'A':
	document.write('Dũng Hoàng');
	break;

	case 'B':
	document.write('Nhi Hà');
	break;

	case 'C':
	document.write('Hạnh Lê');
	break;

	case 'D':
	document.write('Min');
	break;

	default:
	document.write('Nghỉ');
	break;
}


var arr = [1,4,2,5,6,2,7,9,8]
for(var i = 0; i < arr.length; i++){
		if(arr[i] == 2){
		continue;
	}

	document.write('<h3>' + arr[i] + '</h3>');
}



var now = new Date();
var date = now.getDate();
var month = now.getMonth() + 1;
var year = now.getFullYear(); 

document.write(year)











