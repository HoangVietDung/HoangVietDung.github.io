function binhphuong(x) {
	return(x*x);
}
	console.log(binhphuong);

function bai_2 (a,b,c){
	var z = 3*a+2*b-c;
	return z*z;
}
console.log(bai_2);

var bai_3 = "Tôi sẽ trở thành vua hải tặc";
console.log(bai_3);
document.write(bai_3.slice(0,10)+"...");

var bai_4 = [35,984,65,3,79];
var ketqua_4 = Math.min(35,984,65,3,79);
console.log(bai_4);
console.log(ketqua_4);

var bai_5 = ["Nhi","Thủy",'Dũng',"Thảo"];
console.log(bai_5);
var ketqua_5 = bai_5.sort();
console.log(ketqua_5);

var bai_6 = 'chúng ta hãy sống cuộc đời không hối tiếc.'
console.log(bai_6)
var ketqua_6 = bai_6.charAt(0).toUpperCase() + bai_6.slice(1)
document.write("<p>" + ketqua_6 + "</p>")

var teacher = {
	fn: "Hoàng",
	ln: "Dũng",
	age: 25,
	say: function(){
	}
};

console.log(teacher)
var aboutMe = function(){
	document.write('<p>'+'Xin chào, tôi là'+' '+ this.fn + ' '+ this.ln +'</p>')
}
teacher.say = aboutMe;
teacher.say(aboutMe);