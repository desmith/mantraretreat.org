var hasPkg = function(step, link) {

    var reg_link = "";
    var registration_value = "";
    if (step == 'register') {
        reg_link = 'https://docs.google.com/forms/d/e/1FAIpQLSfslRbnvdF-RYDXy2xO7Cqy_GgY1OpIKWM-I9CzxfNzPtse7w/viewform?usp=pp_url';
    } else if (step == 'paypal') {
        reg_link = 'https://paypal.me/ISKCONCommunications';
    }

  console.log('hasPkg(' + step + ')');

    var radios = document.getElementsByName('reg_amt');
    for (var i = 0, length = radios.length; i < length; i++) {
        if (radios[i].checked) {

        registration_value = radios[i].value;
        str_value = registration_value.split(':')[1];
        document.forms['registration_pkg_paypal'].elements['os0'].selectedIndex = i+1;
        console.log('value: ' + registration_value );

        if (step == 'register') {
            str_RegPkg = '$' + registration_value
            uri = '&entry.371804978=' + str_RegPkg;
            reg_link += encodeURI(uri);
            window.open(reg_link);
        }

        if (step == "paypal") {
            reg_link += '/' + registration_value.split(':')[0];
        }

        console.log('reg_link: ' + reg_link);

        // only one radio can be logically checked, don't check the rest
        break;
       } //end if(radio[i].checked)

    } //end for loop

    if (registration_value == "") {
        alert("Please select a registration Package.");
        return false;
    }

    return true;
}
