// viết hàm hiện ngày tháng năm hiện tại


function getDate(day) {
	switch(day){
		case 0:
		return 'Sunday';
		break;

		case 1:
		return 'Monday';
		break;

		case 2:
		return 'Tueday';
		break;

		case 3:
		return 'Wednesday';
		break;

		case 4:
		return 'Thursday';
		break;

		case 5:
		return 'Friday';
		break;

		case 6:
		return 'Saturday';
		break;
	}
}

function getHour(gio){
	if (gio < 12){
		return `${gio}AM`;
	}

	else if(gio == 12){
		return`${gio}PM`;
	}

	else {
		return`${gio - 12}PM`;
	}
}

function getCurrentTime() {
            const ngayHienTai = new Date();
            const thu = ngayHienTai.getDay();
            let hours = ngayHienTai.getHours();
            const minutes = ngayHienTai.getMinutes();
            const seconds = ngayHienTai.getSeconds();
            console.log('hours :', hours);
            document.body.innerHTML = '';
            document.write(` Today is: ${getDate(thu)} | current time is ${getHour(hours)} : ${minutes} : ${seconds}`)
            return ` Today is: ${getDate(thu)} | current time is ${getHour(hours)} : ${minutes} : ${seconds}`
        }

//Tính số ngày còn lại để đến 2/9/2018

function remain (day, month) {
	const ngayHienTai = new Date();
	let ngayHT = ngayHienTai.getDate();
	let thangHT = ngayHienTai.getMonth() + 1;

	let namHT = ngayHienTai.getFullYear();
	if (thangHT >= month , ngayHT > day) {
		namHT += 1;
		console.log('namHT', namHT);
	}
	const ngayTiepTheo = new Date ( namHT, month - 1, day);
	console.log('ngayTiepTheo', ngayTiepTheo);
	const soMiliGiayTrongNgay = 24*60*60*1000;
	const tongThoiGianHT = ngayHienTai.getTime();
	const tongThoiGianNgayTiepTheo = ngayTiepTheo.getTime();
	const res = Math.ceil(tongThoiGianNgayTiepTheo - tongThoiGianHT) / soMiliGiayTrongNgay;
	document.write(`Ngày ${day} tháng ${month} tiếp theo ngày ${res} ngày!`);
	return res;
}


// Viết function khi truyền vào 2 số ra được kết quả nhân và chia 2 số đó


function bai3(x,y){
	document.write('<p>' + 'Tích là: ' + x*y + '</p>');
	document.write('<p>' + 'Thương là: ' + x/y + '</p>');
}

//Viết function chuyển đổi nhiệt độ từ độC sang nhiệt độ Celsius, độ F


function bai4 (a){
	return `Do F là ${(a*1,8) + 32}`
}

//Viết một function truyền vào 2 số trả về tổng 2 số đó, nếu 2 số bằng nhau thì trả về 3 lần tổng 2 số đó. ví dụ (2,2) kết quả 12


function bai5(x,y){
	if(x == y){
		var same = (x+y)*3;
		document.write('<p>Vì x = y nên tổng là :' + same + '</p>')
	}
	else {
		var kq = x + y
		document.write('<p>Tổng của x và y là: '+ kq + '</p>')
	}
}

// Viết một function đảo ngược số. Đầu vào đầu ra phải là số


