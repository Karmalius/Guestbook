$(document).ready(function () {

    $.getJSON("data.json", function (data) {


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

        $("#place").html(table);
    });
});