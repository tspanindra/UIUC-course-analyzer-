$(document).ready(function() {
  getInfo();

});

var coursesMap = new Object(); // or var coursesMap = {};
coursesMap[101] = "Intro Computing: Engrg & Sci";
coursesMap[105] = "Intro Computing: Non-Tech";
coursesMap[125] = "Intro to Computer Science";
coursesMap[173] = "Discrete Structures";
coursesMap[196] = "Freshman Honors";
coursesMap[199] = "Undergraduate Open Seminar";
coursesMap[210] = "Ethical & Professional Issues";
coursesMap[225] = "Data Structures";
coursesMap[233] = "Computer Architecture";
coursesMap[241] = "System Programming";
coursesMap[242] = "Programming Studio";
coursesMap[296] = "Honors Course";
coursesMap[357] = "Numerical Methods I";
coursesMap[397] = "Individual Study";
coursesMap[410] = "Text Information Systems";
coursesMap[411] = "Database Systems";
coursesMap[413] = "Intro to Combinatorics";
coursesMap[418] = "Interactive Computer Graphics";
coursesMap[421] = "Progrmg Languages & Compilers"
coursesMap[422] = "Programming Language Design";
coursesMap[423] = "Operating Systems Design";
coursesMap[425] = "Distributed Systems";
coursesMap[428] = "Software Engineering II";
coursesMap[429] = "Software Engineering II, ACP";
coursesMap[431] = "Embedded Systems";
coursesMap[433] = "Computer System Organization";
coursesMap[438] = "Communication Networks";
coursesMap[440] = "Artificial Intelligence";
coursesMap[446] = "Machine Learning";
coursesMap[450] = "Numerical Analysis";
coursesMap[460] = "Security Laboratory";
coursesMap[461] = "Computer Security I";
coursesMap[463] = "Computer Security II";
coursesMap[465] = "User Interface Design";
coursesMap[466] = "Introduction to Bioinformatics";
coursesMap[473] = "Fundamental Algorithms";
coursesMap[477] = "Formal Software Devel Methods";
coursesMap[482] = "Simulation";
coursesMap[484] = "Parallel Programming";
coursesMap[491] = "Seminar";
coursesMap[493] = "Senior Project II, ACP";
coursesMap[494] = "Senior Project II";
coursesMap[498] = "Special Topics";
coursesMap[499] = "Senior Thesis";
coursesMap[511] = "Advanced Data Management";
coursesMap[512] = "Data Mining Principles";
coursesMap[519] = "Scientific Visualization";
coursesMap[525] = "Advanced Distributed Systems";
coursesMap[526] = "Advanced Compiler Construction";
coursesMap[533] = "Parallel Computer Architecture";
coursesMap[536] = "Fault-Tolerant Dig Syst Design";
coursesMap[543] = "Computer Vision";
coursesMap[548] = "Models of Cognitive Processes";
coursesMap[555] = "Numerical Methods for PDEs";
coursesMap[576] = "Topics in Automated Deduction";
coursesMap[579] = "Computational Complexity";
coursesMap[591] = "Advanced Seminar";
coursesMap[597] = "Individual Study";
coursesMap[598] = "Special Topics";
coursesMap[599] = "Thesis Research";


function getInfo() {
  for (key in coursesMap) {
     var button = $('<p><button width=300px>'+key + " " +coursesMap[key]+'</button></p>');
     $('#coursesTable').append(button);
  }
}
