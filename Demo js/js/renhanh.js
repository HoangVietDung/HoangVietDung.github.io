		//ĐIỀU KIỆN, RẼ NHÁNH 1

//Bài tập 1:
function first (x,y){
	if (typeof x,y != 'number') {
		var maxnb = Math.max(x,y);
		document.write('x,y = number');
	}
	document.write('<p>số lớn nhất là: ' + maxnb + '</p>');
}
first(5,10);
console.log(first);

//Bài tập 2:
second = function(n){
	var count = 1;
	for(var i = 1; i <= n; i++){
		var ketqua = count*i;
		count = ketqua;
	}
	if (n > 0) {
		document.write('kết quả của 5! là: ' + count)
	}
}
second(5)
console.log(second)



		//ĐIỀU KIỆN, RẼ NHÁNH 2

//Bài tập 1:
var toDay = new Date();
document.write('<h1>' + toDay + '</h1>');
var month = toDay.getMonth() + 1;
    switch (month){
        case 2:
        case 3:
        case 4:
            document.write("<h2>Hiện tại đang là Mùa Xuân</h2>");
            break;
        case 5:
        case 6:
        case 7:
            document.write("<h2>Hiện tại đang là Mùa Hạ</h2>");
            break;
        case 8:
        case 9:
        case 10:
            document.write("<h2>Hiện tại đang là Mùa Thu</h2>");
            break;
        case 11:
        case 12:
        case 1:
            document.write("<h2>Hiện tại đang là Mùa Đông</h2>");
            break;
    }

//Bài tập 2:
function two (x){
	var type = x;
	if(typeof x == "number") {
		type = type.toString();
	}
	if ( type.length < 10){
		type = type;
	}
	else {
		type = type.slice(0,9) + '...';
	}
	document.write(type)
}

//Bài tập 3:

function three(x){
	if ( x < 4){
		return 'F';
	}
	else if(x > 3.9, x < 5.5){
		return "D";
	}
	else if(x > 5.4, x < 7){
		return 'C';
	}
	else if(x > 6.9, x < 8.5){
		return 'B';
	}
	else if(x >8.4, x <10.1){
		return 'A';
	}
}

//Bài tập 5:

var bl = [false, false, false, true, false, true, false, true]
var newbl = bl.indexOf(true);
document.write('true lần đầu xuất hiện trong mảng ở vị trí số: ' + newbl)

//Bài tập 6:
