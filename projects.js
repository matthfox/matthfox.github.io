const projects = [
	{title: "Project 1", description: "Create a web page based on this <a href='https://uanews.arizona.edu/story/5-things-to-know-about-rattlesnakes-and-their-babies'>news article</a>."},
	{title: "Project 2", description: "Create a web page about my hometown."},
	{title: "Project 3", description: "Create a table that displays a photo gallery."},
	{title: "Project 4", description: "Create a web page that displays a poem."},
	{title: "Project 5", description: "Create a web page about one of my favorite musicians."},
	{title: "Project 6", description: "Create a web form that allows the user to enter personal information for joining a social network."},
	{title: "Project 7", description: "Edit the given web form that allows the user to enter a birthday message and select various message options."},
	{title: "Project 8", description: "Create a web form as shown below that allows the user to select a team's starting lineup for a game."},
	{title: "Project 9", description: "Create an external stylesheet for a news article."},
	{title: "Project 10", description: "Create an external stylesheet for an auto loan."},
	{title: "Project 11", description: "Modify the given HTML for sleep recommendation table."},
	{title: "Project 12", description: "Modify the given HTML for Best-selling video games table."},
	{title: "Project 13", description: "Create a Fahrenheit to Celsius temperature converter."},
	{title: "Project 14", description: "Generate a receipt for Widgets R Us."},
	{title: "Project 15", description: "Develop an app to calculate shipping charges."},
	{title: "Project 16", description: "Develop a BMI calculator."},
	{title: "Project 17", description: "Create an online store."},
	{title: "Project 18", description: "Use a web API to fetch and display quotes."},
];

function createProjectHTML(title, description, link) {
	return "<div class='project'>"+
	"<p class='projectTitle'><a href='"+ link + "'>" + title + "</a></p>"+
	"<p class='projectDescription'>" + description + "</p>"+
	"</div>";
}

for (let i=0; i < projects.length; i++){
	const link = "projects/project_" + (i+1) + "/index.html";
	document.getElementById("projects").innerHTML += createProjectHTML(projects[i].title, projects[i].description, link);
}


