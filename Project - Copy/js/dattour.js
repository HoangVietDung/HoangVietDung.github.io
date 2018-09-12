$('#form-register').on('submit', function () {
    var isValid = true;
    if ($('#name').val().trim() == '') {
        $('#name').next('.ho').text('Điền vào đây')
        isValid = false
    }
    else {
        $('#name').next('.ho').text('')
    }
    if ($('#email').val().match(/^([a-zA-Z0-9_\-\.]+)@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.)|(([a-zA-Z0-9\-]+\.)+))([a-zA-Z]{2,4}|[0-9]{1,3})(\]?)$/) == null) {
        $('#email').next('.mail').text('Cần điền đúng email')
        isValid = false;
    }
    else {
        $('#email').next('.mail').text('')
    }
    if ($('#dat').val().trim() == '') {
        $('#dat').next('.dat').text('Điền vào đây')
        isValid = false;
    }
    else {
        $('#dat').next('.dat').text('')
    }
    if ($('#nguoi').val().trim() == '') {
        $('#nguoi').next('.nguoi').text('Điền vào đây')
        isValid = false;
    }
    else {
        $('#nguoi').next('.nguoi').text('')
    }
    if ($('#hotel').val().trim() == '') {
        $('#hotel').next('.hotel').text('Điền vào đây')
        isValid = false;
    }
    else {
        $('#hotel').next('.hotel').text('')
    }
    if ($('#ngay').val().trim() == '') {
        $('#ngay').next('.ngay').text('Điền vào đây')
        isValid = false;
    }
    else {
        $('#ngay').next('.ngay').text('')
    }
    if ($('#phone').val().trim() == '') {
        $('#phone').next('.phone').text('Điền vào đây')
        isValid = false;
    }
    else {
        $('#phone').next('.phone').text('')
    }

    return isValid
})

