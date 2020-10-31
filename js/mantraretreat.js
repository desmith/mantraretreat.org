
var donation_selected = false;
var donation_amount = 0;

var chkFrm = function(form, action) {

    var pp_link =  'https://paypal.me/ISKCONCommunications/';
    var radios = form['reg_amt'];
    for (i = 0; i < radios.length; i++) {
        if (radios[i].checked) {
            donation_selected = true;
            donation_amount = radios[i].value;
            pp_link += donation_amount;
        }
    }

    if (action == 'submit') {
        //window.open(pp_link, '_blank');
        var stripe = Stripe('pk_test_51Hi2SOKIPeeja8WuNPPtMa8YjaahUEyrGNhO9CjYOS1gwIqZd1s1m98LUADOxGwaNVJV9j8TkHrwd9bGDSPuBpE600AH97lBDh');
        var data = { amount: donation_amount };

        checkoutButton.addEventListener('click', function() {
            // Create a new Checkout Session using the server-side endpoint you
            // created in step 3.
            fetch('/create-session.php', {
              method: 'POST',
              body: JSON.stringify(data),
            })
            .then(function(response) {
              return response.json();
            })
            .then(function(session) {
              return stripe.redirectToCheckout({ sessionId: session.id });
            })
            .then(function(result) {
              // If `redirectToCheckout` fails due to a browser or network
              // error, you should display the localized error message to your
              // customer using `error.message`.
              if (result.error) {
                alert(result.error.message);
              }
            })
            .catch(function(error) {
              console.error('Error:', error);
            });
          });
    }
    return false;
}

var stepTwo = function () {
    var reg_link = 'https://docs.google.com/forms/d/e/1FAIpQLScaucbXHE-YRdjKmbgaLpfpXpzLw45wzzNpeRwco-sMe_vr6A/viewform?usp=pp_url';
    if (!donation_selected) {
        alert("Please select a donation amount.");
    } else {
        //var params = '&entry.371804978=$' + donation_amount + '+USD';
        //reg_link += encodeURI(params);
        window.open(reg_link);
    }
    return false
}
