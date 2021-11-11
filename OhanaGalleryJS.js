$(document).ready(function(){
    var url = "https://api.flickr.com/services/feeds/photos_public.gne?" +
        "id=188087268@N06&format=json&jsoncallback=?"; //link to the flickr that I set up with all the photos
    $.getJSON(url, function(data){
        var html = ""; //clears the html.
        $.each(data.items, function(i, item){
            var x = item.media.m; //saves the photo
            //creates the html tags with the photos included with the lightbox plugin.
            html += "<a data-lightbox='example-set' href=" + x + "><img src=" + x + " width=200 height=200>";
        });

        $("#photos").html(html); //sends the images to the html
    });
});