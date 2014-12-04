var consumerKey = "9010759f-252c-4eaa-a944-67d44f1c94a6",
consumerSecret = "fa186e47-3a77-40ac-842f-324b101eff96";

var subjectInfoIds = []

$(document).ready(function() {
  getCSSubjects();
  //readSurvey();
  //runTestApp();
  //scrollToElement('#themes');
});

function scrollToElement(selector, callback){
    var animation = {scrollTop: $(selector).offset().top};
    $('html,body').animate(animation, 'slow', 'swing', function() {
        if (typeof callback == 'function') {
            callback();
        }
        callback = null;
    });
}

function givePrerequisites(text) {
	var result = [];
	if(text == " Machine Learning") {
		result.push("Introduction to Data Mining");
		result.push("Text Information Systems");
	}
	else if(text= " System Programming") {
		result.push("Computer Architecture");
		result.push("Data Structures");
	}
	else if(text == " Social visualization") {
		result.push("User Interface Design");
		result.push("Text Information Systems");
	}
	return result;
}

function giveContinuationSubjects(text) {
	var result = [];
	if(text == " Machine Learning") {
		result.push("Machine Learning in NLP");
		result.push("Advanced Information Retrieval");
	}
	else if(text = " System Programming") {
		result.push("Communication Networks");
		result.push("Operating Systems Design");
	}
	else if(text == " Social visualization") {
		result.push("Human-Computer Interaction");
		result.push("Interactive Computer Graphics");
	}
	return result;
}

function giveRecommendedSubjects(text) {
	var result = [];
	if(text == " Machine Learning") {
		result.push("Introduction to Data Mining");
		result.push("Social Visualization");
	}
	else if(text = " System Programming") {
		result.push("Computer Architecture");
		result.push("Numerical Methods I");
	}
	else if(text == " Social visualization") {
		result.push("Introduction to Data Mining ");
		result.push("Distributed Systems");
	}
	return result;
}

function giveSubjectsCode(text) {
	var subjectCode = "";
	if(text == "Machine Learning") {
		subjectCode = 446;
	}	
	else if(text == "Social Visualization") {
		subjectCode = 467;
	}
	else if(text == "Introduction to Data Mining") {
		subjectCode = 412;	
	}
	else if(text = "System Programming") {
		subjectCode = 241;
	}
	return subjectCode;
}

function giveSubjectName(text) {
	var subjectName = "";
	//alert(text);
	if(text == 446) {
		subjectName = " Machine Learning";
	}	
	else if(text == 467) {
		subjectName = " Social Visualization";
	}
	else if(text == 412) {
		subjectName = " Introduction to Data Mining";	
	}
	else if(text = 241) {
		subjectName = " System Programming";
	}
	return subjectName;
}


function log(message) {
		$('#themes').append(message + "<br/>");
	}

function logTheme(id, theme, sentiment_score, text) {
	 	$('#themes').append("<span id ="+id+">"+ theme + "</span></br>");
	 	var negative = ["#FF0000","#666666","#003366"];
	 	var positive = ["#00FF00", 	"#FFCC00", "#FF9900"]
	 	var select = [];
	 	if(parseInt(sentiment_score) > 0) {
	 		select = positive;
	 	}
	 	else {
	 		select = negative;
	 	}
	 	var rand = select[Math.floor(Math.random() * select.length)];
  		$('#'+id).css('color',rand);
  		$('#'+id).hover(function() {
				//alert($(this).text());
		var hoverText = getInitialText(text);
		
		var  selectText = ""
		for(var i = 0; i < hoverText.length; i++) {
			//alert(String($(this).text()));
			if(String(hoverText[i]).indexOf($(this).text()) > 0) {
				selectText = hoverText[i];
				//alert(selectText);
				break;
			}
		}
		$('#'+id).attr('title', selectText);
		});
	}


function getCSSubjects() {
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
		     var button = $('<span><button id='+ids[i]+'>'+ids[i] + " : " +courses[i]+'</button></span>');
			$(button).bind( "click", function(e) {
				//alert( $( this ).text());
				scrollToElement('#themes');
				//startSemantria($(this).text());

				drawVenn($(this).text());
			});
				 
		     $('#coursesTable').append(button);
		     $("#"+ids[i]).width(300);
		     $("#"+ids[i]).height(70);
	  		}
	    }	
	});
}

function drawVennDiagram(subjectCode1, subjectCode2, id, subjectInfo) {
	//alert(giveSubjectName(subjectCode1));

	var sets = [{label: ""+subjectCode1, size: 10}, {label: ""+subjectCode2, size: 10}],
    overlaps = [{sets: [0,1], size: 2}];
	var colours = ['black', 'red', 'blue', 'green'];
	             
	// get positions for each set
	subjectInfoIds.push(subjectInfo);

	sets = venn.venn(sets, overlaps);
	diagram = venn.drawD3Diagram(d3.select("#"+id), sets, 300, 300);
          
              diagram.text.style("fill", function(d,i) { return colours[i]})
              .style("font-size", "24px")
              .style("font-weight", "100");
           
              diagram.nodes
              .on("mouseover", function(d, i) {
              var node = d3.select(this).transition();
              node.select("circle").style("fill-opacity", .1);
              node.select("text").style("font-weight", "100")
              .style("font-size", "36px");
              })
             
              .on("mouseout", function(d, i) {
              var node = d3.select(this).transition();
              node.select("circle").style("fill-opacity", 0.4);
              node.select("text").style("font-weight", "100")
              .style("font-size", "24px");
              })

              .on("click", function(d, i) {
              	//alert("On mmouse");
              	//alert(d + i);
              	//alert($(this).text());
              	//alert(JSON.stringify(d));
              	  launchAlert($(this).text());
              	//writeSubjectInfo($(this).text(), subjectInfoIds[i]);
              });

}

function drawVenn(text) {
	var sub = text.split(":");
	var recommendedSubjects = giveRecommendedSubjects(sub[1]);

	var subjectCodes = [];
	for(var i = 0; i < recommendedSubjects.length; i++) {
		//alert(recommendedSubjects[i] + giveSubjectsCode(recommendedSubjects[i]));
		subjectCodes[i] = giveSubjectsCode(recommendedSubjects[i]);
	}

	drawVennDiagram(sub[0], subjectCodes[0], "rings", "subjectInfo");
	drawVennDiagram(sub[0], subjectCodes[1], "rings1", "subjectInfo1");
	/*var sets = [{label: ""+sub[0], size: 15}, {label: ""+subjectCodes[0], size: 8}, {label: ""+subjectCodes[1], "size":7}],
	    overlaps = [{sets: [0,1], size: 5}, {sets: [1,2], size: 4}, {sets: [0,2], size: 5}];*/
	
}

function getInitialText(text) {
	var sub = text.split(":");
var result = [];
	if(sub[1] == " Machine Learning") {
		result.push("Great course. Theoretical and Abstract. Great concepts and ideas. Would be helpful to have a good foundation in Linear Algebra, Probability and some Linear Programming.");
		result.push("teachers are hard to understand. exams are tough.");
		result.push("Difficult course, hard assignments, helpful TAs");
		result.push("A lot of paper reading and critiquing although the set of papers were very interesting");
		result.push("horrible professor, easy exams, okay MPs");
	}
	else if(sub[1] = " System Programming") {
		result.push("so difficult, worth the effort, great professor");
		result.push("easy exam, interesting material and mp, great professor");
		result.push("Very hard to get help in the class unless you start really early for the MP because of the way Chara queue works");
		result.push("Don't get behind, he moves fast");
		result.push("difficult multiple choice, do the extra credit for mps");
		result.push("a fast paced course, do the extra credit on mps and study well for quizzes");
		result.push("Makes theory interesting, but little to none of it appears on the hw... which I am grateful of");
		result.push("moderately difficult exams, only 2 MPs, homework assignments are moderate");
		result.push("great TAs and instructor");
		result.push("professor difficult to understand");
	}
	else if(sub[1] == " Social visualization") {
		result.push("great professor..! But too much work. Too many designs and project implementations!");
		result.push("Project heavy course, interesting lectures, great professor");
		result.push("creativity, interesting, helpful professor, learning a lot");
	}
	else if(sub[1] == " User Interface Design") {
		result.push("great professor..! But too much work. Too many designs and project implementations!");
		result.push("Great lecturing professor, needs more application of learned material");
		result.push("Hard exams.  Easy projects.");
		result.push("pay attention in class. the lectures are actually very interesting and practical.");
	}
	else if(sub[1] == "Computer Architecture") {
		result.push("so difficult, worth the effort, great professor");
		result.push("professor explains well, lectures are engaging, very helpful TAs, interesting TAs.");
		result.push("middle difficulty exams, somehow boring instructor, helpful TAs.");
		result.push("great TAs and instructor");
	}
	else if(sub[1] == "Database Systems") {
		result.push("Needs better class structure, too theoretical, lacks application of knowledge");
		result.push("Professor came to class just to read off slides, didn't seem to ever prepare for each lecture");
		result.push("Interesting, good professor, moderately difficult exams");
		result.push("professor explains well");
		
	}
return result;
}

 $(function(){
         });

function launchAlert(subjectCode) {
	 $("#dialog-5").dialog({
        autoOpen: false
    });

	var prerequisites = givePrerequisites(giveSubjectName(subjectCode));
	var continuation = giveContinuationSubjects(giveSubjectName(subjectCode));

   ($("#dialog-5").dialog("isOpen") == false) ? $("#dialog-5").dialog("open") : $("#dialog-5").dialog("close") ;
     var prerequisites = "Prerequisites : " + prerequisites[0] + " , " + prerequisites[1];
     var continuation = "Continuation : " + continuation[0] + " , " + continuation[1];
	 $("#dialog-5").html('<p>' + prerequisites+ '</p> <p>' + continuation + '</p>' );
}

	function processResponse(items, text) {
		
		for(var i = 0; i < items.length; i ++ ) {
			var themes = items[i]['themes'];
			for(var j = 0; j < themes.length; j++) {
				//alert(items[i]['themes'][j]['title']);
				logTheme(j, themes[j]['title'], themes[j]['sentiment_score'], text);
				
			}
		}
	}

	function receiveResponse(entitiesCount, text) {
		
		var analyticData = [];
		log("Retrieving your processed results...");

		var items = SemantriaActiveSession.getProcessedCollections();
		processResponse(items, text);
	}


	function startSemantria(text) {
		var initialTexts = getInitialText(text);
		
		log("<h3>" + text +"</h3>");
		// session is a global object
		SemantriaActiveSession = new Semantria.Session(consumerKey, consumerSecret, "myApp");
		SemantriaActiveSession.override({
			onError: function() {
				console.warn("onError:");
				console.warn(arguments);
			},

			onRequest: function() {
				console.log("onRequest:");
				console.log(arguments);
			},

			onResponse: function() {
				console.log("onResponse:");
				console.log(arguments);
			},

			onAfterResponse: function() {
				console.log("onAfterResponse:");
				console.log(arguments);
			}
		});
		
			var id = Math.floor(Math.random() * 10000000);
			// Queues document for processing on Semantria service
			var status = SemantriaActiveSession.queueCollection({
				id: id,
				documents: initialTexts
			});
				
			// Check status from Semantria service
			if (status == 202) {
				log("Document# " + id + " queued successfully");
			}
		receiveResponse(status.length, text);
	}
