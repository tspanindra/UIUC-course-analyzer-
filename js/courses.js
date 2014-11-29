$(document).ready(function() {
  getInfo();

});

function getInfo() {
	$.ajax({
   	  type: "GET",
	  url: "CS_spring.xml",
	  dataType: "xml",
	  success: function(xml) {
		xmlDoc = xml.documentElement;
		var courses = $(xml).find("course").map(function() {
		    return $(this).text();
		}).get();
		
		y = xmlDoc.childNodes.item(12).childNodes;
		var ids = [];
		for (i=0;i<y.length;i++) {
			ids[i] = y[i]['id'];
		}

		for (var i = 0; i < courses.length; i++) {
		     var button = $('<p><button id='+ids[i]+'>'+ids[i] + " :  " +courses[i]+'</button></p>');   
		     $('#coursesTable').append(button);
		     $("#"+ids[i]).width(300);
		     $("#"+ids[i]).height(50);
	  	}
	    }	
	});
}
