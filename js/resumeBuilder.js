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
			"description" : "Job Description"
		}
	]
}

var education = {
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
			"years" : "1999-2001",
			"major" : "n/a",
			"minor" : "n/a",
			"degree" : "n/a"
		}
	]
}


//$("#header").prepend(formattedRole);
//$("#header").prepend(formattedName);
//$("#main").append(work.jobPosition);
//$("#main").append(edu["name"]);
