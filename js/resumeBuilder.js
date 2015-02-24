var bio = {
    "name": "Rob Dutka",
    "role": "Ambassador of Awesome",
    "welcomeMessage": "Let's make something awesome!",
    "contacts": {
        "mobile": "+91 011 88263 21188",
        "email": "rodutty@gmail.com",
        "github": "rodutty",
        "location": "New Delhi"
    },

    "skills": [
        "Communication",
        "Learning",
        "Problem Solving",
        "Creativity"
    ],

    "biopic": "images/mountain.jpg"
};

var work = {
    "jobs": [
        {
            "employer": "Department of Foreign Affairs, Trade and Development Canada (DFATD)",
            "title": "Second Secretary (Public Affairs), High Commission of Canada to India",
            "location": "New Delhi, India",
            "dates": "July 2014 - Present",
            "description": "Responsible for public affairs for Canada's High Commission to India, managed the Canada Fund for Local Initiatives (over $400,000), oversaw social media content, press releases etc."
        },
        {
            "employer": "Department of Foreign Affairs, Trade and Development Canada (DFATD)",
            "title": "Program Analyst, Stabilization and Reconstruction Task Force",
            "location": "Ottawa, Canada",
            "dates": "September 2010  - June 2014",
            "description": "Managed the Police Reform and Justice envelopes ($7-12.5 million of funding annually) of the Global Peace and Security Fund's Asia Team"
        },
        {
            "employer": "Department of Foreign Affairs, Trade and Development Canada (DFATD)",
            "title": "Field Operations Officer, Afghanistan Task Force",
            "location": "Ottawa, Canada",
            "dates": "April 2009 - September 2010",
            "description": "Provide human resources support for government personnel deploying to Afghanistan. It's both more complicated and boring than it sounds."
        }
    ]
};

var projects = {
    "projects": [
        {
            "title": "Connect Online",
            "dates": "Fall 2014",
            "description": "When I arrived at the High Commission of Canada in India, one of our public affairs products was a monthly newsletter 'Connect' which featured highlights from the previous month on key aspects of Canada and India's relationship). I realized that the conversation with our audience was one-way and that we couldn't get great metrics from the email newsletter.",
            "images": [
                "images/connect.jpg"
            ]
        },
        {
            "title": "Reimagining CLFI Management",
            "dates": "Spring 2015",
            "description": "Our application process was screwy, and needed to be fixed! We had a huge pot of money to spend, and were waiting for endless approvals before even beginning to plan how to spend it. The revised process envisioned an ongoing application process that would feed a hopper of projects. These projects would be validated by our selection committee well in advance of us receiving funds from HQ. In this manner, we would be in a position to respond quickly once we receive funds.",
            "images": [
                "images/cfli.jpg"
            ]
        }]

};


var education = {
    "schools": [
        {
            "name": "Royal Military College",
            "location": "Kingston, ON, Canada",
            "degree": "",
            "major": [
                "Engineering"
            ],
            "dates": "September 2000 - February 2001",
            "url": "http://www.rmc.ca/"
        },
        {
            "name": "University of Windsor",
            "location": "Windsor, ON, Canada",
            "degree": "",
            "major": [
                "Human Kinetics"
            ],
            "dates": "September 2001 - April 2002",
            "url": "http://www.uwindsor.ca/"
        },
        {
            "name": "University of Waterloo",
            "location": "Waterloo, ON, Canada",
            "degree": "",
            "major": [
                "Mathematics"
            ],
            "dates": "September 2002 - April 2003",
            "url": "https://uwaterloo.ca/"
        },
        {
            "name": "McMaster University",
            "location": "Hamilton, ON, Canada",
            "degree": "Bachelor of Arts",
            "major": [
                "Political Science"
            ],
            "dates": "September 2003 - April 2006",
            "url": "http://www.mcmaster.ca/"
        },
        {
            "name": "Royal Roads University",
            "location": "Victoria, BC, Canada",
            "degree": "Graduate Certificate in Project Management",
            "major": [
                "Project Management"
            ],
            "dates": "January 2010 - June 2010",
            "url": "http://www.royalroads.ca/"
        }
    ],
    "onlineCourses": [
        {
            "title": "Intro to Computer Science",
            "school": "Udacity",
            "dates": "December 2014 - February 2015",
            "url": "https://www.udacity.com/course/cs101"
        },
        {
            "title": "Front-End Web Developer Nano-Degree",
            "school": "Udacity",
            "dates": "January 2015 - ???",
            "url": "https://www.udacity.com/course/nd001"
        }
    ]
};

var formattedName = HTMLheaderName.replace('%data%', bio.name);
var formattedRole = HTMLheaderRole.replace('%data%', bio.role);
var formattedBioPic = HTMLbioPic.replace('%data%', bio.biopic);
var formattedWelcomeMsg = HTMLWelcomeMsg.replace('%data%', bio.welcomeMessage);
$('#header').append(formattedBioPic);
$('#header').append(formattedWelcomeMsg);
$('#header').prepend(formattedRole);
$('#header').prepend(formattedName);


if (bio.skills) {
    $('#header').append(HTMLskillsStart)
    var formattedSkills = HTMLskills.replace('%data%', bio.skills[0])
    $('#skills').append(formattedSkills)
    formattedSkills = HTMLskills.replace('%data%', bio.skills[1])
    $('#skills').append(formattedSkills)
    formattedSkills = HTMLskills.replace('%data%', bio.skills[2])
    $('#skills').append(formattedSkills)
    formattedSkills = HTMLskills.replace('%data%', bio.skills[3])
    $('#skills').append(formattedSkills)
}

function displayWork() {
    for (var job in work.jobs) {
        var formattedEmployer = HTMLworkEmployer.replace('%data%',work.jobs[job].employer);
        var formattedTitle = HTMLworkTitle.replace('%data%',work.jobs[job].title);
        var formattedWorkLocation = HTMLworkLocation.replace('%data%', work.jobs[job].location);
        var formattedWorkDates = HTMLworkDates.replace('%data%', work.jobs[job].dates);
        var formattedDescription = HTMLworkDescription.replace('%data%', work.jobs[job].description);
        $('#workExperience').append(HTMLworkStart);
        $('.work-entry:last').append(formattedEmployer + formattedTitle);
        $('.work-entry:last').append(formattedWorkDates);
        $('.work-entry:last').append(formattedWorkLocation);
        $('.work-entry:last').append(formattedDescription);
        }
    }

function displayProjects() {
    for (var project in projects.projects) {
        var formattedProjectTitle = HTMLprojectTitle.replace('%data%', projects.projects[project].title);
        var formattedProjectDates = HTMLprojectDates.replace('%data%', projects.projects[project].dates);
        var formattedProjectDescription = HTMLprojectDescription.replace('%data%', projects.projects[project].description);
        var projectImages= projects.projects[project].images;
        $('#projects').append(HTMLprojectStart);
        $('.project-entry:last').append(formattedProjectTitle);
        $('.project-entry:last').append(formattedProjectDates);
        $('.project-entry:last').append(formattedProjectDescription);
        for(var image in projectImages) {
            var formattedProjectImage = HTMLprojectImage.replace('%data%', projectImages[image]);
            $('.project-entry:last').append(formattedProjectImage);
            }
    }
}
	
function displayEducation() {
    for (var school in education.schools) {
        $('#education').append(HTMLschoolStart);
        var formattedSchoolName = HTMLschoolName.replace('%data%', education.schools[school].name);
        formattedSchoolName = formattedSchoolName.replace('#', education.schools[school].url);
        var formattedSchoolDegree = HTMLschoolDegree.replace('%data%', education.schools[school].degree);
        var formattedSchoolDates = HTMLschoolDates.replace('%data%', education.schools[school].dates);
        var formattedSchoolLocation = HTMLschoolLocation.replace('%data%', education.schools[school].location);
        var formattedSchoolMajor = HTMLschoolMajor.replace('%data%', education.schools[school].major);
        $('.education-entry:last').append(formattedSchoolName);
        $('.education-entry:last').append(formattedSchoolDegree);
        $('.education-entry:last').append(formattedSchoolDates);
        $('.education-entry:last').append(formattedSchoolLocation);
        $('.education-entry:last').append(formattedSchoolMajor);        
    }

    $('#education').append(HTMLonlineClasses);

    for (var course in education.onlineCourses) {
        $('#education').append(HTMLschoolStart);
        var formattedOnlineTitle =  HTMLonlineTitle.replace('%data%', education.onlineCourses[course].title);
        formattedOnlineTitle = formattedOnlineTitle.replace('#', education.onlineCourses[course].url);
        var formattedOnlineSchool = HTMLonlineSchool.replace('%data%', education.onlineCourses[course].school);
        var formattedOnlineDates = HTMLonlineDates.replace('%data%', education.onlineCourses[course].dates);
        var formattedOnlineURL = HTMLonlineURL.replace('%data%', education.onlineCourses[course].url);
        formattedOnlineURL = formattedOnlineURL.replace('#', education.onlineCourses[course].url);
        $('.education-entry:last').append(formattedOnlineTitle);
        $('.education-entry:last').append(formattedOnlineSchool);
        $('.education-entry:last').append(formattedOnlineDates);
        $('.education-entry:last').append(formattedOnlineURL);
    }
}

displayWork();
displayEducation();
displayProjects();
$('#mapDiv').append(googleMap);
