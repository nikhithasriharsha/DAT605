$(function() {
    loadparks();
    $("#btn_refresh").on('click', refreshList);

    //////////////////////////////////

    function loadparks(){
        $.ajax({
            dataType:"json",
            url:"api.php",
            success:render_parks
        })
    }

    function refreshList() {
        var parks_list = $('#parks_list');
        parks_list.html("Loading...");

        loadparks();
    }

    function render_parks(data){
        var parks = [];
        for(i=0;i<data.length;i++){
            parks.push(create_parkinfo(data[i]));
        }

        var parks_list = $('#parks_list');
        parks_list.html(parks.join(" "))
    }

    function create_parkinfo(park) {
        return "<div class=\"media\">"+
            "<div class=\"media-left\">"+
                "<a href=\"#\">"+
                "<img class=\"media-object\" src=\""+park.thumbnail+"\" >"+
                "</a>"+
            "</div>"+
            "<div class=\"media-body\">"+
                "<h4 class=\"media-heading\">"+
                    "<a href=\""+park.url+"\">"+park.name+"</a>"+
                "</h4>"+
                park.description+
            "</div>"+
        "</div>";
    }
})
