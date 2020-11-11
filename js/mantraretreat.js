

var stepTwo = function () {

    var options = document.getElementById("item-options");
    var donation_amount = options.value;

    var reg_link = 'https://docs.google.com/forms/d/e/1FAIpQLScaucbXHE-YRdjKmbgaLpfpXpzLw45wzzNpeRwco-sMe_vr6A/viewform?usp=pp_url';

    if (donation_amount == "0") {
        alert("Please complete your donation prior to registering.");
    } else {
        window.open(reg_link);
    }
    return false

}
