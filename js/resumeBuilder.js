var bio = 
{
	"name" : "Dustin Lafley",
	"role" : "Web Developer",
	"contacts" : 
	{
		"mobile" : "650-555-5623",
		"email" : "dustin.lafley@gmail.com",
		"github" : "chasersx.github.io",
		"twitter" : "twitter.com/ChasersX",
		"location" : "Jersey Village"
	},
	"welcomeMessage" : "Hello",
	"bioPic" : "images/pic.jpg",
	"skills" : skills = ["C#", "VB.net", "SQL Server", "HTML"]
}

var formattedName = HTMLheaderName.replace("%data%", bio.name);
var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
var formattedPic = HTMLbioPic.replace("%data%", bio.bioPic);
$("#header").prepend(formattedRole);
$("#header").prepend(formattedName);
$("#header").append(formattedPic);

for (var contact in bio.contacts) 
{
	//replace placeholder text with contact label and value
	var formattedContact = HTMLcontactGeneric.replace("%contact%", contact).replace("%data%", bio.contacts[contact]);
	//insert contact info at the topContacts and footerContacts divs
    $("#topContacts").append(formattedContact);
    $("#footerContacts").append(formattedContact);
};

var work = 
{
	"jobs" :
	[
		{
			"jobPosition" : "Applications Developer : JMP - Distribution Services",
			"employer" : "Schlumberger",
			"yearsWorked" : 10,
			"location" : "Sugar Land, TX",
			"dates" : "2015-Present",
			"description" : "Working onsite at Schlumberger Oil Services as a contractor responsible for developing and debugging an application that helps keep track of materials on the well site. The application is written in VB.net and uses SQL Server as the database."
		},
		{
			"jobPosition" : "Applications Developer : FTL - Billing Application",
			"employer" : "Schlumberger",
			"yearsWorked" : 10,
			"location" : "Galleria, TX",
			"dates" : "2005-2014",
			"description" : "Working onsite at Schlumberger Oil Services as a contractor responsible for developing and debugging an application that creates field tickets for oil field workers. The application is written in C# and uses MS Access as the database."
		}
	],
	"display" : function()
	{
		for(job in work.jobs)
		{
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].jobPosition);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			var formattedLocation = HTMLworkLocation.replace("%data%", work.jobs[job].location);
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedLocation);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		}
	}
}

var education = 
{
	"schools" : 
	[
		{
			"name" : "University of Houston",
			"location" : "Houston, TX",
			"degree" : "BS",
			"major" : "Computer Science",
			"minor" : "Math",
			"years" : "2001-2005"
		},
		{
			"name" : "Lone Star College",
			"location" : "Houston, TX",
			"years" : "1999-2001"
		}
	],
	"display" : function()
	{
		for(school in education.schools)
		{
			$("#education").append(HTMLschoolStart);
			var formattedName = HTMLschoolName.replace("%data%", education.schools[school].name);
			var formattedDegree = HTMLschoolDegree.replace("%data%", education.schools[school].degree);
			var formattedDates = HTMLschoolDates.replace("%data%", education.schools[school].years);
			var formattedLocation = HTMLschoolLocation.replace("%data%", education.schools[school].location);
			var formattedMajor = HTMLschoolMajor.replace("%data%", education.schools[school].major);
			var formattedMinor = HTMLschoolMinor.replace("%data%", education.schools[school].minor);
			$(".education-entry:last").append(formattedName);
			$(".education-entry:last").append(formattedDegree);
			$(".education-entry:last").append(formattedDates);
			$(".education-entry:last").append(formattedLocation);
			$(".education-entry:last").append(formattedMajor);
			$(".education-entry:last").append(formattedMinor);
		}
	}
}

var projects = 
{
	"project" : 
	[
		{
			"title" : "Portfolio",
			"dates" : "2015",
			"description" : ""
		},
		{
			"title" : "Resume",
			"dates" : "2015",
			"description" : ""
		}
	],
	"display" : function()
	{
		for(proj in projects.project)
		{
			$("#projects").append(HTMLprojectStart);
			var formattedTitle = HTMLprojectTitle.replace("%data%", projects.project[proj].title);
			var formattedDates = HTMLprojectDates.replace("%data%", projects.project[proj].dates);
			var formattedDescription = HTMLprojectDescription.replace("%data%", projects.project[proj].description);
			$(".project-entry:last").append(formattedTitle);
			$(".project-entry:last").append(formattedDates);
			$(".project-entry:last").append(formattedDescription);
		}
	}
}

$("#mapDiv").append(googleMap);