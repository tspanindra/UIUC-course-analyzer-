$(document.ready(function() {
  getInfo();

});

getInfo() {
  $.ajax({
    url:"http://courses.illinois.edu/cisapp/explorer/schedule/2015/spring/CS.xml",
    dataType: "xml",
    success: function(response) {
      alert(response);  
    }
  });
}