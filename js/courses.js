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
		result.push(" Introduction to Data Mining");
		result.push(" Numerical Analysis.");
	}
	else if(text == " System Programming") {
		result.push(" Data Structures");
		result.push(" Computer Architecture");
	}
	else if(text == " Social Visualization") {
		result.push(" Database Systems");
		result.push(" User Interface Design");
	}
	else if(text == " User Interface Design") {
		result.push(" Data Structures");
		result.push(" Social Visualization");
	}
	else if(text == " Computer Architecture") {
		result.push(" Data Structures");
	}
	else if(text == " Database Systems") {
		result.push(" Data Structures");
		result.push(" Programming Studio");
	}
	else if(text == " Introduction to Data Mining") {
		result.push(" Database Systems");
		result.push(" Intro to Combinatorics");
	}
	else if(text == " Real-Time Systems")
	{
		result.push(" System Programming");
		result.push(" Embedded Systems");
	}
	else if(text == " Distributed Systems")
	{
		result.push(" Operating Systems Design");
		result.push(" System Programming");
	}
	else if(text == " Advanced Data Management")
	{
		result.push(" Database Systems");
	}
	else if(text == " Data Mining Principles")
	{
		result.push(" Introduction to Data Mining");
	}
	else if(text == " Topics in Software Engineering")
	{
		result.push(" Software Engineering I");
	}
	else if(text == " Social and Economic Networks")
	{
		result.push(" Numerical Analysis");
		result.push(" Communication Networks");
	}
	else if(text == " Data-Driven Design")
	{
		result.push(" Machine Learning");
	}
	else if(text == " Intro to Computer Science")
	{
		result.push(" Introduction to Programming");
	}
	else if(text == " Discrete Structures")
	{
		result.push(" Intro to Computer Science");
	}
	else if(text == " Data Structures")
	{
		result.push(" Intro to Computer Science");
		result.push(" Discrete Structures");
	}
	else if(text == " Programming Studio")
	{
		result.push(" Data Structures");
		result.push(" System Programming");
	}
	else if(text == " Artificial Intelligence")
	{
		result.push(" Data Structures");
		result.push(" System Programming");
	}
	else if(text == " Security Laboratory")
	{
		result.push(" Computer Security I");
	}
	else if(text == " Computer Security I")
	{
		result.push(" Data Structures");
		result.push(" System Programming");
	}
	else if(text == " Introduction to Bioinformatics")
	{
		result.push(" Data Structures");
	}
	else if(text == " Fundamental Algorithms")
	{
		result.push(" Data Structures");
	}
	else if(text == " Algorithms and Models of Computation")
	{
		result.push(" Data Structures");
	}
	else if(text == " Probability in Computer Science")
	{
		result.push(" Introduction to Programming");
		result.push(" Numerical Methods I");
	}
	return result;
}

function giveContinuationSubjects(text) {
	var result = [];
	if(text == " Machine Learning") {
		result.push(" Artificial Intelligence");
		result.push(" Machine Learning in NLP.");
	}
	else if(text == " System Programming") {
		result.push(" Communication Networks");
		result.push(" Distributed Systems");
	}
	else if(text == " Social Visualization") {
		result.push(" Interactive Computer Graphics");
		result.push(" Socio-Computer Interaction");
	}
	else if(text == " User Interface Design") {
		result.push(" Social Visualization");
		result.push(" Human-Computer Interaction");
	}
	else if(text == " Computer Architecture") {
		result.push(" System Programming");
	}
	else if(text == " Database Systems") {
		result.push(" Introduction to Data Mining");
		result.push(" Advanced Data Management");
	}
	else if(text == " Introduction to Data Mining") {
		result.push(" Data Mining Principles");
	}
	else if(text == " Real-Time Systems")
	{
		result.push(" Distributed Systems");
	}
	else if(text == " Distributed Systems")
	{
		result.push(" Advanced Distributed Systems");
	}
	else if(text == " Advanced Data Management")
	{
		result.push(" Algorithms for Big Data");
	}
	else if(text == " Data Mining Principles")
	{
		result.push(" Advanced Information Retrieval");
		result.push(" Data-Driven Design");
	}
	else if(text == " Social and Economic Networks")
	{
		result.push(" Extremal Graph Theory");
	}
	else if(text == " Data-Driven Design")
	{
		result.push(" Machine Learning");
	}
	else if(text == " Intro to Computer Science")
	{
		result.push(" Data Structures");
		result.push(" Discrete Structures");		
	}
	else if(text == " Discrete Structures")
	{
		result.push(" Data Structures");
		result.push(" Theory of Computation");
	}
	else if(text == " Data Structures")
	{
		result.push(" System Programming");
		result.push(" Fundamental Algorithms");
	}
	else if(text == " Programming Studio")
	{
		result.push(" Software Engineering I");
		result.push(" Open Source Project");
	}
	else if(text == " Artificial Intelligence")
	{
		result.push(" Machine Learning");
	}
	else if(text == " Computer Security I")
	{
		result.push(" Security Laboratory");
		result.push(" Communication Networks");
	}
	else if(text == " Introduction to Bioinformatics")
	{
		result.push(" Fundamental Algorithms");
	}
	else if(text == " Fundamental Algorithms")
	{
		result.push(" Data Structures");
	}
	else if(text == " Algorithms and Models of Computation")
	{
		result.push(" Algorithms and Models of Computation");
	}
	else if(text == " Probability in Computer Science")
	{
		result.push(" Numerical Analysis");
	}
	return result;
}

function giveRecommendedSubjects(text) {
	var result = [];
	if(text == " Machine Learning") {
		result.push(" Introduction to Data Mining");
		result.push(" Social Visualization");
	}
	else if(text == " System Programming") {
		result.push(" Computer Architecture");
		result.push(" Numerical Methods I");
	}
	else if(text == " Social visualization") {
		result.push(" Introduction to Data Mining ");
		result.push(" Distributed Systems");
	}
	else if(text== " User Interface Design") {
		result.push(" Database Systems");
		result.push(" Distributed Systems");
	}
	else if(text == " Computer Architecture") {
		result.push(" Data Structures");
		result.push(" System Programming");
	}
	else if(text == " Database Systems") {
		result.push(" User Interface Design");
		result.push(" Probability in Computer Science");
	}
	else if(text == " Introduction to Data Mining") {
		result.push(" Distributed Systems");
		result.push(" Social Visualization");
	}
	else if(text == " Real-Time Systems")
	{
		result.push(" Distributed Systems");
		result.push(" Database Systems");
	}
	else if(text == " Distributed Systems")
	{
		result.push(" Social Visualization");
		result.push(" Introduction to Data Mining");
	}
	else if(text == " Advanced Data Management")
	{
		result.push(" Topics in Software Engineering");
		result.push(" Advanced Distributed Systems");
	}
	else if(text == " Data Mining Principles")
	{
		result.push(" Social Visualization");
		result.push(" Advanced Information Retrieval");
	}
	else if(text == " Topics in Software Engineering")
	{
		result.push(" Introduction to Data Mining");
		result.push(" Distributed Systems");
	}
	else if(text == " Social and Economic Networks")
	{
		result.push(" Machine Learning");
		result.push(" Data-Driven Design");
	}
	else if(text == " Data-Driven Design")
	{
		result.push(" Introduction to Data Mining");
		result.push(" Social and Economic Networks");
	}
	else if(text == " Intro to Computer Science")
	{
		result.push(" Freshman Orientation");
		result.push(" Discrete Structures");
	}
	else if(text == " Discrete Structures")
	{
		result.push(" Intro to Computer Science");
		result.push(" Data Structures");
	}
	else if(text == " Data Structures")
	{
		result.push(" Discrete Structures");
		result.push(" Computer Architecture");
	}
	else if(text == " Programming Studio")
	{
		result.push(" Database Systems");
		result.push(" Distributed Systems");
	}
	else if(text == " Artificial Intelligence")
	{
		result.push(" Interactive Computer Graphics");
		result.push(" User Interface Design");
	}
	else if(text == " Security Laboratory")
	{
		result.push(" Computer Security I");
		result.push(" Fundamental Algorithms");
	}
	else if(text == " Computer Security I")
	{Fundamental
		result.push(" Security Laboratory");
		result.push(" System Programming");
	}
	else if(text == " Introduction to Bioinformatics")
	{
		result.push(" Fundamental Algorithms");
		result.push(" Database Systems");
	}
	else if(text == " Fundamental Algorithms")
	{
		result.push(" Data Structures");
		result.push(" Discrete Structures");
	}
	else if(text == " Algorithms and Models of Computation")
	{
		result.push(" Introduction to Bioinformatics");
		result.push(" Fundamental Algorithms");
	}
	else if(text == " Probability in Computer Science")
	{
		result.push(" Fundamental Algorithms");
		result.push(" Numerical Methods I");
	}
	return result;
}

function giveSubjectsCode(text) {
	var subjectCode = "";
	console.log("getting subject for " + text); 
	if(text == "Machine Learning") {
		subjectCode = 446;
	}
	else if(text == " System Programming") {
		subjectCode = 241;
	}
	else if(text == " Social Visualization") {
		subjectCode = 467;
	}
	else if(text == " User Interface Design") {
		subjectCode = 465;
	}
	else if(text == " Computer Architecture") {
		subjectCode = 233;
	}
	else if(text == " Database Systems") {
		subjectCode = 411;
	}
	else if(text == " Introduction to Data Mining") {
		subjectCode = 412;
	}
	else if(text == " Real-Time Systems")
	{
		subjectCode = 424;
	}
	else if(text == " Distributed Systems")
	{
		subjectCode = 425;
	}
	else if(text == " Advanced Data Management")
	{
		subjectCode = 511;
	}
	else if(text == " Data Mining Principles")
	{
		subjectCode = 512;
	}
	else if(text == " Social and Economic Networks")
	{
		subjectCode = 598;
	}
	else if(text == " Data-Driven Design")
	{
		subjectCode = 598;
	}
	else if(text == " Intro to Computer Science")
	{
		subjectCode = 125;
	}
	else if(text == " Discrete Structures")
	{
		subjectCode = 173;
	}
	else if(text == " Data Structures")
	{
		subjectCode = 225;
	}
	else if(text == " Programming Studio")
	{
		subjectCode = 242;
	}
	else if(text == " Artificial Intelligence")
	{
		subjectCode = 440;
	}
	else if(text == " Computer Security I")
	{
		subjectCode = 461;
	}
	else if(text == " Introduction to Bioinformatics")
	{
		subjectCode = 466;
	}
	else if(text == " Fundamental Algorithms")
	{
		subjectCode = 473;
	}
	else if(text == " Algorithms and Models of Computation")
	{
		subjectCode = 498;
	}
	else if(text == " Probability in Computer Science")
	{
		subjectCode = 498;
	}
	return subjectCode;
}

function giveSubjectName(text) {
	var subjectName = "";
	if(text == 446) {
		subjectName = " Machine Learning";
	}
	else if(text == 241) {
		subjectName = " System Programming";
	}
	else if(text == 467) {
		subjectName = " Social Visualization";
	}
	else if(text == 465) {
		subjectName = " User Interface Design";
	}
	else if(text == 233) {
		subjectName = " Computer Architecture";
	}
	else if(text == 411) {
		subjectName = " Database Systems";
	}
	else if(text == 412) {
		subjectName = " Introduction to Data Mining";
	}
	else if(text == 424)
	{
		subjectName = " Real-Time Systems";
	}
	else if(text == 425)
	{
		subjectName = " Distributed Systems";
	}
	else if(text == 511)
	{
		subjectName = " Advanced Data Management";
	}
	else if(text == 512)
	{
		subjectName = " Data Mining Principles";
	}
	else if(text == 598)
	{
		subjectCode = " Social and Economic Networks";
	}
	else if(text == 598)
	{
		subjectName = " Data-Driven Design";
	}
	else if(text == 125)
	{
		subjectName = " Intro to Computer Science";
	}
	else if(text == 173)
	{
		subjectName = " Discrete Structures";
	}
	else if(text == 225)
	{
		subjectName = " Data Structures";
	}
	else if(text == 242)
	{
		subjectName = " Programming Studio";
	}
	else if(text == 440)
	{
		subjectName = " Artificial Intelligence";
	}
	else if(text == 461)
	{
		subjectName = " Computer Security I";
	}
	else if(text == 466)
	{
		subjectName = " Introduction to Bioinformatics";
	}
	else if(text == 473)
	{
		subjectName = " Fundamental Algorithms";
	}
	else if(text == 498)
	{
		subjectName = " Algorithms and Models of Computation";
	}
	else if(text == 498)
	{
		subjectName = " Probability in Computer Science";
	}
	return subjectName;
}


function log(message) {
		$('#themes').append(message + "<br/>");
	}

function logTheme(id, theme, sentiment_score, text) {
	 	$('#themes').append("<span id ="+id+">"+ theme + "</span></br>");
	 	var negative = ["#FF0000"];
	 	var  positive = ["#00FF00"]
	 	var select = [];
	 	//alert(sentiment_score);
	 	if(sentiment_score > 0.2) {
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
				////alert(selectText);
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

		 var listOption = [];
		for (var i = 0; i < courses.length; i++) {
			listOption.push($('<option id='+ids[i]+'> '+ids[i] + " : " +courses[i]+'</option>'));	 
		}

	 	$('#coursesDropdown').find("#courseList").append(listOption);	  	 
		$('#446').prop('selected', true);

  		$("#courseList").change( function(e) {
			//console.log("change happened");
			$('#themes').empty();
			$('#rings').empty();
			var subjectCode = $("#courseList option:selected").val().split(":");
			//alert(subjectCode[0]);
			startSemantria(subjectCode[0]);
			drawVenn($("#courseList option:selected").val());		
		});

  		startSemantria("446");
		drawVenn($("#courseList option:selected").val());
	   }	
	});
}

function drawVennDiagram(subjectCode1, subjectCode2, subjectCode3, id, subjectInfo) {
	//alert(giveSubjectName(subjectCode1));

	var sets = [{label: ""+subjectCode2, size: 13}, {label: ""+subjectCode1, size: 18}, {label: ""+subjectCode3, size: 13}],
    overlaps = [{sets: [0,1], size: 2},{sets: [1,2], size: 2},{sets: [0,2], size: 0}];
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
              	  launchAlert($(this).text());
              });
}

function drawVenn(text) {
	var sub = text.split(":");
	var recommendedSubjects = giveRecommendedSubjects(sub[1]);
	//console.log("recommendedSubjects  " + recommendedSubjects)
	
	$('#subjects').text("Subjects Taken Along with this : " + sub[1]);

	var subjectCodes = [];
	for(var i = 0; i < recommendedSubjects.length; i++) {
		subjectCodes[i] = giveSubjectsCode(recommendedSubjects[i]);
		$('#subject'+i).text(recommendedSubjects[i]);
		//console.log("sub code for " + recommendedSubjects[i] + " : " + subjectCodes[i])
	}

	drawVennDiagram(sub[0], subjectCodes[0], subjectCodes[1], "rings", "subjectInfo");	
}

function getInitialText(text) {
var result = [];
	if(text == " Machine Learning") {
		result.push("Great course. Theoretical and Abstract. Great concepts and ideas. Would be helpful to have a good foundation in Linear Algebra, Probability and some Linear Programming.");
		result.push("teachers are hard to understand. exams are tough.");
		result.push("Difficult course, hard assignments, helpful TAs.");
		result.push("A lot of paper reading and critiquing although the set of papers were very interesting.");
		result.push("horrible professor, easy exams, okay MPs.");
		result.push("Awesomeness personified!!");
	}
	else if(text == " System Programming") {
		result.push("so difficult, worth the effort, great professor");
		result.push("easy exam, interesting material and mp, great professor");
		result.push("Very hard to get help in the class unless you start really early for the MP because of the way Chara queue works");
		result.push("Don't get behind, he moves fast");
		result.push("difficult multiple choice, do the extra credit for mps");
		result.push("a fast paced course, do the extra credit on mps and study well for quizzes");
		result.push("Makes theory interesting, but little to none of it appears on the hw... which I am grateful of");
		result.push("moderately difficult exams, only 2 MPs, homework assignments are moderate");
		result.push("great TAs and instructor");
		result.push("professor difficult to understand");getInitialText
	}
	else if(text == " Social visualization") {
		result.push("great professor..! But too much work. Too many designs and project implementations!");
		result.push("Project heavy course, interesting lectures, great professor");
		result.push("creativity, interesting, helpful professor, learning a lot");
	}
	else if(text == " User Interface Design") {
		result.push("great professor..! But too much work. Too many designs and project implementations!");
		result.push("Great lecturing professor, needs more application of learned material");
		result.push("Hard exams.  Easy projects.");
		result.push("pay attention in class. the lectures are actually very interesting and practical.");
	}
	else if(text == " Computer Architecture") {
		result.push("so difficult, worth the effort, great professor");
		result.push("professor explains well, lectures are engaging, very helpful TAs, interesting TAs.");
		result.push("middle difficulty exams, somehow boring instructor, helpful TAs.");
		result.push("great TAs and instructor");
		result.push("Don't get behind, he moves fast");
	}
	else if(text == " Database Systems") {
		result.push("Needs better class structure, too theoretical, lacks application of knowledge");
		result.push("Professor came to class just to read off slides, didn't seem to ever prepare for each lecture");
		result.push("Interesting, good professor, moderately difficult exams");
		result.push("professor explains well");		
	}
	else if(text == " Introduction to Data Mining") {
		result.push("Difficult exam, Professor is ok, TAs are arrogant");
		result.push("difficult project, decent professor, lot of hard work");
		result.push("diffidult exams, prfessor is not that great..and difficult to discern his accent.");
		result.push("Professor not good");
		result.push("The TA's could have been more responsive on Piazza, Some assignments were lame");
		result.push("tough exams, professor doesn't cover material, useless quizzes");
	}
	else if(text == " Real-Time Systems")
	{
		result.push("easy exams, interesting lab");
	}
	else if(text == " Distributed Systems")
	{
		result.push("awesome professor, really interesting, useful");
		result.push("Good professor, very helpful TAs, excellent coverage of topics in the field");
		result.push("Great instuctor and grat subject. But difficult MPS!!");
		result.push("Lengthy exams, professor explains well, helpful TAs");
		result.push("moderately difficult exams, only 2 MPs, homework assignments are moderate");
	}
	else if(text == " Applied Parallel Programming")
	{
		result.push("Better TA participation expected on Piazza. There should be atleast one MP for hands on experience in MPI.");
	}
	else if(text == " Advanced Data Management")
	{
		result.push("all the good things");
	}
	else if(text == " Data Mining Principles")
	{
		result.push("great instructor, lots of reading");
	}
	else if(text == " Topics in Software Engineering")
	{
		result.push("nearly no content, completely unrelated to the course description, just focused on TA's projects");
		result.push("professor explains well, helpful TAs");
	}
	else if(text == " Social and Economic Networks")
	{
		result.push("A little heavy on Math, well structured course, a few trivial assignments");
		result.push("easy assignments, no exams, nice professor");
	}
	else if(text == " Data-Driven Design")
	{
		result.push("A lot of paper reading and critiquing although the set of papers were very interesting");
	}
	else if(text == " Freshman Orientation")
	{
		result.push("Boring lectures mostly, easy A.");
		result.push("Easiest A");
		result.push("interesting speakers");
		result.push("It would have been great if our TA had actually given us advice and checked our homework. However, she did not do anything and didn't even look at our final projects. Other than that, it was a pretty easy class!");
		result.push("weekly quiz on guest speakers");
	}
	else if(text == " Intro to Computer Science")
	{
		result.push("much harder than it sounds");
		result.push("MP's were difficult, but manageable given enough time.");
		result.push("professor very interesting, engaging lectures, easy mps.");
		result.push("The professor is okay. I wish Angrave taught the class though. However, TA's and CA's were really helpful. Only one of the midterms was legitimately hard. The professor and TA made sure to offer extra credit and help boost our grades. Fairly easy and manageable class!");
	}
	else if(text == " Discrete Structures")
	{
		result.push("Basic, important knowledge")
		result.push("hard content")
		result.push("Very helpful TAs")
	}
	else if(text == " Data Structures")
	{
		result.push("difficult multiple choice, do the extra credit for mps");
		result.push("Helpful TA's");
		result.push("middle difficulty exams, somehow boring instructor, helpful TAs.");
		result.push("Solid class");
		result.push("Very hard to get help in the class unless you start really early for the MP because of the way Chara queue works");
	}
	else if(text == " Programming Studio")
	{
		result.push("Lots of programming. No exams.");
		result.push("Needs to be more organized");
		result.push("No exams, don't need to go to lecture");
	}
	else if(text == " Artificial Intelligence")
	{
		result.push("horrible professor, easy exams, okay MPs");
		result.push("teachers are hard to understand. exams are tough.");
	}
	else if(text == " Security Laboratory")
	{
		result.push("Good, light work load course");
	}
	else if(text == " 461 Computer Security I")
	{
		result.push("easy exam, interesting material and mp, great professor");
	}
	else if(text == " Introduction to Bioinformatics")
	{
		result.push("easy class, small class, slow lectures, dynamic programming, easy exams");
	}
	else if(text == " Fundamental Algorithms")
	{
		result.push("hard class, confusing homeworks and exams, helpful TAs, stressful, find a group early");
	}
	else if(text == " Algorithms and Models of Computation")
	{
		result.push("difficult exams, professor explains well");
	}
	else if(text == " Probability in Computer Science")
	{
		result.push("Makes theory interesting, but little to none of it appears on the hw... which I am grateful of");
		result.push("not very interesting, disorganized, but the professor tries his best to help students actually understand the materials");
	}

return result;
}

function opendialog() {
  var $dialog = $('#somediv')
  .html('<iframe style="border: 0px; " src="chart.html" width="100%" height="100%"></iframe>')
  .dialog({
    title: "Check recommended subjects",
    autoOpen: false,
    dialogClass: 'dialog_fixed,ui-widget-header',
    modal: true,
    show: 'fade',
    hide: 'fade',
    height: 800,
    minWidth: 1000,
    minHeight: 400,
    draggable:true,
    /*close: function () { $(this).remove(); },*/
    buttons: { "Ok": function () {         $(this).dialog("close"); } }
  });
  $dialog.dialog('open');
} 

function getInterestingRatings(text) {
	var rating = "";
	//alert(text);
	if(text == 446) {
		rating = 0.4;
	}
	else if(text = 241) {
		rating = 0.7;//3.5
	}
	else if(text == 467) {
		rating = 0.7;//3.5
	}
	else if(text == 465) {
		rating = 0.8;//4
	}
	else if(text == 233) {
		rating = 0.8;//4
	}
	else if(text == 411) {
		rating = 0.4;//2
	}
	else if(text == 412) {
		rating = 0.5;//2.5
	}
	else if(text == 424)
	{
		rating = 0.4;//2
	}
	else if(text == 425)
	{
		rating = 0.8;//4
	}
	else if(text == 511)
	{
		rating = 0.4;//2
	}
	else if(text == 512)
	{
		rating = 0.6;//3
	}
	else if(text == 598)
	{
		rating = 0.8;//4
	}
	else if(text == 598)
	{
		rating = 0.8;//4
	}
	else if(text == 125)
	{
		rating = 0.8;//4
	}
	else if(text == 173)
	{
		rating = 0.6;//3
	}
	else if(text == 225)
	{
		rating = 0.9;//4.5
	}
	else if(text == 242)
	{
		rating = 0.7;//3.5
	}
	else if(text == 440)
	{
		rating = 0.6;//3
	}
	else if(text == 461)
	{
		rating = 1.0;//5
	}
	else if(text == 466)
	{
		rating = 0.8;//4
	}
	else if(text == 473)
	{
		rating = 0.8;//4
	}
	else if(text == 498)
	{
		rating = 0.8;//4
	}
	else if(text == 498)
	{
		rating = 0.8;//4
	}
	return rating;
}

function getDifficlutyRatings(text) {
	var rating = "";
	//alert(text);
	if(text == 446) {
		rating = 0.9;
	}
	else if(text = 241) {
		rating = 0.6;
	}
	else if(text == 467) {
		rating = 0.4;
	}
	else if(text == 465) {
		rating = 0.4;
	}
	else if(text == 233) {
		rating = 0.4;
	}
	else if(text == 411) {
		rating = 0.4;
	}
	else if(text == 412) {
		rating = 0.4;
	}
	else if(text == 424)
	{
		rating = 0.4;
	}
	else if(text == 425)
	{
		rating = 0.4;
	}
	else if(text == 511)
	{
		rating = 0.4;
	}
	else if(text == 512)
	{
		rating = 0.4;
	}
	else if(text == 598)
	{
		rating = 0.4;
	}
	else if(text == 598)
	{
		rating = 0.4;
	}
	else if(text == 125)
	{
		rating = 0.4;
	}
	else if(text == 173)
	{
		rating = 0.4;
	}
	else if(text == 225)
	{
		rating = 0.4;
	}
	else if(text == 242)
	{
		rating = 0.4;
	}
	else if(text == 440)
	{
		rating = 0.4;
	}
	else if(text == 461)
	{
		rating = 0.4;
	}
	else if(text == 466)
	{
		rating = 0.4;
	}
	else if(text == 473)
	{
		rating = 0.4;
	}
	else if(text == 498)
	{
		rating = 0.4;
	}
	else if(text == 498)
	{
		rating = 0.4;
	}
	return rating;
}


function launchAlert(subjectCode) {
	console.log("Launching alert for " + subjectCode);
	 $("#dialog-5").dialog({
        title: giveSubjectName(subjectCode),
        autoOpen: false,
        show: 'highlight',
        hide: 'scale',
    });

	var prerequisites = givePrerequisites(giveSubjectName(subjectCode));
	console.log("prerequisites for " + subjectCode + " : " + prerequisites);
	var continuation = giveContinuationSubjects(giveSubjectName(subjectCode));

   ($("#dialog-5").dialog("isOpen") == false) ? $("#dialog-5").dialog("open") : $("#dialog-5").dialog("close") ;
     var prerequisites = "Prerequisites : " + prerequisites[0] + " , " + prerequisites[1];
     var continuation = "Continuation : " + continuation[0] + " , " + continuation[1];
	 $("#dialog-5").html('<p>' + prerequisites+ '</p> <p>' + continuation + '</p> <div id="rating"></div> <br></br> <div id="rating1"></div>'  );

	 	$('#rating').starbox({
    	average: getInterestingRatings(subjectCode),
    	changeable: 'once',
    	autoUpdateAverage: true,
    	ghosting: true
	});
	 	$('#rating').append("  Interesting!");

	 	$('#rating1').starbox({
    	average: getDifficlutyRatings(subjectCode),
    	changeable: 'once',
    	autoUpdateAverage: true,
    	ghosting: true
	});

	 	$('#rating1').append("  Difficult!");
	 	$('#rating1').css("text-align", "top");

}

	function processResponse(items, subjectCode) {
		var subName = giveSubjectName(subjectCode);
		for(var i = 0; i < items.length; i ++ ) {
			var themes = items[i]['themes'];
			for(var j = 0; j < themes.length; j++) {
				//alert(items[i]['themes'][j]['title']);
				//alert(subName + "\n" + j + "\n" + themes[j]['title'] + "\n" + themes[j]['sentiment_score']);
				logTheme(j, themes[j]['title'], themes[j]['sentiment_score'], subName);
				
			}
		}
	}

	function receiveResponse(entitiesCount, text) {
		
		var analyticData = [];
		//log("Retrieving your processed results...");

		var items = SemantriaActiveSession.getProcessedCollections();
		//alert(JSON.stringify(items));
		processResponse(items, text);
	}


	function startSemantria(subjectCode) {
		var initialTexts = getInitialText(giveSubjectName(subjectCode));
		
		//log("<h3>" + text +"</h3>");
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
				//log("Document# " + id + " queued successfully");
			}
			//alert(subjectCode+ initialTexts);
		    receiveResponse(status.length, subjectCode);
	}
