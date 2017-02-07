/* json data*/
var summery = " I am a master student in UC Riverside, I received my BS degree"
      +"in one of top engineering universities in China."
      +"With the great passion and solid foundation of programming, "
      +"after I achieve my 1st Master's degree, I start my 2nd "
      +"Master's degree in Computer Engineering. I am a quick learner and a team "
      +"worker with strong communication and "
      +"programming skills, currently I am seeking for a Software "
      +"Development Engineer internship in summer 2017.";

var contacts = {
	"cellphone": "979-676-7182",
	"email": "hliu033@ucr.edu",
	"linkedin": ["linkedin", "linkedin.com/profile/view?id=AAIAABds9pYBomu4yWh-NNveoMLnWrkObF5t7uo&trk=nav_responsive_tab_profile_pic"],
	"github": ["github", "https://github.com/liuhpleon"]
}
var experiences = [
    {
    	"title":"Front End Intern",
    	"contribute":"1"
    }
];

var projects = [
	{
		"name": "p1",
		"introduction": ""
	},
	{
		"name": "p2",
		"introduction": ""
	},
	{
		"name": "p3",
		"introduction": ""
	}
	,
	{
		"name": "p4",
		"introduction": ""
	}
	,
	{
		"name": "p5",
		"introduction": ""
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

$("#contact_content").append("<div class='all_content ac_4'>Cellphone: "+contacts["cellphone"]+"</div>");
$("#contact_content").append("<div class='all_content ac_4'>Email: "+contacts["email"]+"</span>"+"</div>");
$("#contact_content").append("<div class='all_content ac_4'>"+"<a href="+contacts["linkedin"][1]+">Linkedin</a>"+"</div>");
$("#contact_content").append("<div class='all_content ac_4'>"+"<a href="+contacts["github"][1]+">Github</a>"+"</div>");

for(var i=0;i<experiences.length;i++){
	$("#experience_content").append("<div class='all_content'>"+"</div>");
}

for(var i=0;i<projects.length;i++){
    $('#project_content').append("<div class='all_content ac_1'>"+projects[i].name+"</div>");
    $('#project_content').append(projects[i].introduction+"</div>");
}

for(var i=0;i<education['schools'].length;i++){
	$('#education_content').append("<div class='all_content ac_2'><p>"+education["schools"][i].name+"</p>"
	+"<p>"+education["schools"][i].year+"</p>"
	+"<p>"+education["schools"][i].major+"</p></div>");
}

for(var skill in skills){
    $('#skills_content').append("<div id="+skill+" class='all_content ac_3'>"+skill+":");
    for(var i=0;i<skills[skill].length;i++){
        $("#"+skill).append("<div class='h5'>"+skills[skill][i]+"</div>");
    }
    $('#skills_content').append("</div>");
}


$('.container-fluid').hover(function() {
	/* Stuff to do when the mouse enters the element */
	$('.h4 display').css({
		"background":"red",
	});
}, function() {
	/* Stuff to do when the mouse leaves the element */
	$('.h4 display').css({
		"background":"blue",
	});
});
