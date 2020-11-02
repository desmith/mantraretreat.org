
var donation_selected = false;
var donation_amount = 0;

var go2Stripe = function (response) {
    // test
    //var stripe = Stripe('pk_test_');
    // live
    var stripe = Stripe('pk_live_');
    return stripe.redirectToCheckout({ sessionId: response.id });
};

var chkFrm = function (form) {

    //var pp_link =  'https://paypal.me/ISKCONCommunications/';
    var radios = form['reg_amt'];
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            donation_selected = true;
            donation_amount = radios[i].value;
            //pp_link += donation_amount;
        }
    }
    if (!donation_selected) {
        alert('Please select a donation amount.');
        return false;
    }

    var data = { "amount": donation_amount };
    $.ajax({
        type: "POST",
        url: './create-session.php',
        data: data,
        success: go2Stripe,
        dataType: 'json'
    });

    return false;
};
