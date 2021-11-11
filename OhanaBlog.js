$(document).ready(function() {
    $.ajax({
        type: "get",
        url: "blog.json",
        beforeSend: function() {
            $("#post_location").html("Loading...");
        },
        timeout: 10000,
        error: function(xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function(data) {
            $("#post_location").html("");
            $.getJSON("blog.json", function(data){
                $.each(data, function() {
                    $.each(this, function(key, value){
                        $("#post_location").append( //creates the card for each blog post
                            "<div class='card'><h2>" + value.title + "</h2>" +
                            "<h3>" + value.date + "</h3>" +
                            "<p>" + value.post + "</p></div>"
                        );
                    });
                });
            });
        }
    });
});