// Varmistetaan, että sivu on ladattu kokonaan, ennenkuin tehdään mitään.
$(document).ready(function () {
    // Haetaan dataa JSON tiedostosta
    $.getJSON("data.json", function (data) {
        // Luodaan taulukko ja lisätään siihen JSON tiedostosta halutut tiedot.
        var table = "<table><tr><th>Name</th><th>Country</th><th>Message</th><th>Date</th></tr>";
        for (var i = 0; i < data.length; i++) {
            table +=
                "<tr>" +
                "<td>" + data[i].Name + "</td>" +
                "<td>" + data[i].Country + "</td>" +
                "<td>" + data[i].Message + "</td>" +
                "<td>" + data[i].Date + "</td>" +
                "</tr>";
        }
        // Asetetaan luotu taulukko place -elementtiin.
        $("#place").html(table);
    });
});