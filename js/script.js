/* json data*/
var summery = "I am a student in UCR and I am looking for an internship in summer 2017";

var contacts = {
	"cellphone": "111-111-1111",
	"email": "1234@gmail.com",
	"linkedin": ["linkedin", "link1"],
	"github": ["github", "link2"]
}
var experiences = [
    {
    	"title":"Front End Intern",
    	"contribute":"using javascript"
    },
    {
    	"title":"Full stack Intern",
    	"contribute":"using back end"
    }
];

var projects = [
	{
		"name": "search engine",
		"introduction": "amazon search engine"
	},
	{
		"name": "data mining",
		"introduction": "data mining project"
	}
];

var education = {
	"schools": [{
		"name": "University of California at Riverside",
		"year": "2016-2017",
		"major": "Computer Engineering"
	}, {
		"name": "Texas A&M University",
		"year": "2014-2016",
		"major": "Industrial Engineering"
	}, {
		"name": "Huazhong University of Science and Technology",
		"year": "2010-2014",
		"major": "Automation Engineering"
	}]
};


var skills = {
	"language":["java","javascript","python"],
	"web":["django","html&css","jquery"],
	"api":["hadoop","spart"],
	"IDE":["sublime","eclipse"]
};








$('#summery_content').append("<p>"+summery+"</p>");

$("#contact_content").append("<p>"+contacts["cellphone"]+"</p>");
$("#contact_content").append("<p>"+contacts["email"]+"</p>");
$("#contact_content").append("<p>"+contacts["linkedin"][0]);
$("#contact_content").append("<p>"+contacts["github"][0]+"</p>");

for(var i=0;i<experiences.length;i++){
	$("#experience_content").append("<p>"+experiences[i].title+"</p>");
	$("#experience_content").append("<p>"+experiences[i].contribute+"</p>");
}

for(var i=0;i<projects.length;i++){
    $('#project_content').append("<p>"+projects[i].name+"</p>");
    $('#project_content').append("<p>"+projects[i].introduction+"</p>");
}

for(var i=0;i<education['schools'].length;i++){
	$('#education_content').append("<p>"+education["schools"][i].name+"</p>");
	$('#education_content').append("<p>"+education["schools"][i].year+"</p>");
	$('#education_content').append("<p>"+education["schools"][i].major+"</p>");
}

for(var skill in skills){
    $('#skills_content').append(skill+": ");
    for(var i=0;i<skills[skill].length;i++){
        $('#skills_content').append("<a>"+skills[skill][i]+" "+"</a>");
    }
    $('#skills_content').append("<br>");
}