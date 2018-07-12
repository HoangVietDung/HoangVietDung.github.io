function giaithua(n){
	var count = 1;
	var text = '';
	for (var i = 1; i <= n; i++) {
		text =  text+i+'*'
		var ketqua = count*i;
		count=ketqua;
		console.log(ketqua);
	}
	console.log(count);
	var newtext = text.slice(0,-1);
	console.log(newtext);
	document.write(n+'! ='+ newtext + '=' + count);
}
giaithua (8)

var arr = ["h","e","l","l","o"]
console.log(arr);
var m = arr.reverse();
console.log(m);
document.write('<p>' + m + '</p>');


for (var i = 1; i <= 10; i++) {
	document.write('-' + 123)
}