$(document).ready(function(){
    $("#searchterm").keyup(function(e){
        var q = $("#searchterm").val();
        $.getJSON("https://en.wikipedia.org/w/api.php?callback=?",
        {
          srsearch: q,
          action: "query",
          list: "search",
          format: "json"
        },
        function(data) {
            console.log(data);
          $("#results").empty();
          $("#results").append("<p>Results for <b>" + q + " :</b></p><hr>");
          $.each(data.query.search, function(i,item){
            $("#results").append("<div class='result'><a href='http://en.wikipedia.org/wiki/" + encodeURIComponent(item.title) + "'target='_blank'><b>" + item.title + "</b></a><br> - " + item.snippet + "...<hr></div>");
          });
        });
      });
});