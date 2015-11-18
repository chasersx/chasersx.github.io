//var name = "Dustin Lafley";
//var role = "Web Developer";
//var formattedName = HTMLheaderName.replace("%data%", name);
//var formattedRole = HTMLheaderRole.replace("%data%", role);

var skills = ["C#", "SQL Server", "HTML"]

var bio = {
	"name" : "Dustin",
	"role" : "Front-end Ninja",
	"contactInfo" : "dustin.lafley@gmail.com",
	"pictureURL" : "images/fry.jpg",
	"welcomeMessage" : "Hello",
	"age" : 35,
	"skills" : skills
}

var work = 
{
	"jobs" :
	[
		{
			"jobPosition" : "Applications Developer",
			"employer" : "Schlumberger",
			"yearsWorked" : 10,
			"location" : "Houston",
			"dates" : "2005-Present",
			"description" : "Working onsite at Schlumberger Oil Services as a contractor responsible for developing and debugging an application that creates field tickets for oil field workers. The application is written in C# and uses MS Access as the database."
		}
	]
}

work.display = function()
	{
		for(job in work.jobs)
		{
			$("#workExperience").append(HTMLworkStart);
			var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
			var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].jobPosition);
			var formattedEmployerTitle = formattedEmployer + formattedTitle;
			var formattedDates = HTMLworkDates.replace("%data%", work.jobs[job].dates);
			var formattedDescription = HTMLworkDescription.replace("%data%", work.jobs[job].description);
			$(".work-entry:last").append(formattedEmployerTitle);
			$(".work-entry:last").append(formattedDates);
			$(".work-entry:last").append(formattedDescription);
		}
	}


var education = 
{
	"schools" : 
	[
		{
			"name" : "University of Houston",
			"city" : "Houston",
			"degree" : "BS",
			"major" : "Computer Science",
			"minor" : "Math",
			"years" : "2001-2005"
		},
		{
			"name" : "Lone Star College",
			"city" : "Houston",
			"years" : "1999-2001"
		}
	]
}

var projects = 
{
	"project" : 
	[
		{
			"title" : "JMP - Distribution Services",
			"dates" : "June 2015 - Present",
			"description" : ""
		},
		{
			"title" : "FTL - Billing Application",
			"dates" : "Oct 2005 - June 2015",
			"description" : ""
		}
	]
}

projects.display = function()
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

$("#mapDiv").append(googleMap);