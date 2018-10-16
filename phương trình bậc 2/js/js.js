function giai(form) {
    var x1, x2;
    var a, b, c, delta;
    a = parseInt(form.a.value);
    b = parseInt(form.b.value);
    c = parseInt(form.c.value);
    delta = (b * b - 4 * a * c)
    if (delta == 0) {
        x1 = -b / (2 * a);
        x2 = -b / (2 * a);
        form.a.value = eval(x1);
        form.b.value = eval(x2);
    }
    else if (delta < 0) {
        alert("phuong trinh vo nghiem");
    }
    else {
        x1 = (-b - Math.sqrt(delta)) / (2 * a);
        x2 = (-b + Math.sqrt(delta)) / (2 * a);
        form.x.value = eval(x1);
        form.y.value = eval(x2);
    }
}