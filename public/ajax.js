// Varmistetaan, että sivu on ladattu kokonaan, ennenkuin tehdään mitään.
$(document).ready(function () {

    // Etsitään haluttu nappi ja lisätään kuuntelija.
    $("#ajaxbutton").click(function () {
        // Tallennetaan lomakkeen kentät data-muuttujaan.
        var data = {
            name: $("#name2").val(),
            country: $("#country2").val(),
            message: $("#message2").val()
        };
        // Jos kentät ovat tyhjät, annetaan errorviesti.
        if ($("#name2").val() == "") {
            alert("One or more fields are empty! Check that you have written something on every field.");
        } else if ($("#country2").val() == "") {
            alert("One or more fields are empty! Check that you have written something on every field.");
        } else if ($("#message2").val() == "") {
            alert("One or more fields are empty! Check that you have written something on every field.");
        } else {
            // Lähetetään AJAX olio joka palauttaa vastauksensa status -kenttään.   
            $.post("/ajaxmessage", data, function (response, status) {
                $("#status").html(response);
            });
        }
    });

});