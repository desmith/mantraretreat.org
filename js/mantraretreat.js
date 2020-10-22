
var donation_selected = false;
var donation_amount = 0;

var chkFrm = function(form, action) {

    var pp_link =  'https://paypal.me/ISKCONCommunications/';
    var radios = form['reg_amt'];
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            donation_selected = true;
            donation_amount = radios[i].value;
            if (donation_amount < 0) {
                $('#step2').show();
                $('#pp_button').hide();
            } else {
                pp_link += donation_amount;
                $('#pp_button').show();
                $('#step2').hide();
            }
        }
    }

    if (action == 'submit') {
        window.open(pp_link, '_blank');
        $('#step2').show();
        $('#pp_reg').show();
    }
    return false;
}

var stepTwo = function () {
    var reg_link = 'https://docs.google.com/forms/d/e/1FAIpQLScaucbXHE-YRdjKmbgaLpfpXpzLw45wzzNpeRwco-sMe_vr6A/viewform?usp=pp_url';
    if (!donation_selected) {
        alert("Please select a registration Package.");
    } else {

        var params = '&entry.371804978=$' + donation_amount + '+USD';
        reg_link += encodeURI(params);
        window.open(reg_link);

    }
    return false
}
