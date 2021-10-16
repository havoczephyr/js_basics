/*
    For this section of the assessment you will be putting together a cheat sheet for common git commands.  
    You'll provide the command as well as what it does. 
*/

//////////////////PROBLEM 1////////////////////
/*
    Create a variable called 'gitDefinition'.
    It should be a string containing your best definition of what Git is.
*/

//CODE HERE
console.log ("---Problem 1---")
var gitDefinition = ("Git is a version control protocol that allows you to easily maintain and organize your data.")
console.log (gitDefinition)

//////////////////PROBLEM 2////////////////////
/*
    Create a variable called 'gitHubDefinition'.  
    It should be a string containing your best definition of what GitHub is.
*/

//CODE HERE
console.log ("---Problem 2---")
var gitHubDefinition = ("GitHub is a cloud service that uses git to download/upload your data remotely and allows you the ability to share that data to others.")
console.log (gitHubDefinition)

//////////////////PROBLEMS 3 - 8////////////////////
/*
    For the next several problems you will be creating objects containing information about different git 
    commands.  Each object should contain 'description' and 'code' properties.  The 'description' property 
    will be a string with a description of what that git command does.  The 'code' property should be a 
    string of the actual command (what you type into your terminal).
*/

//////////////////PROBLEM 3////////////////////
/*
    Create an object called 'init' with 'description' and 'code' properties 
    following the guidelines above to describe the init command.
*/

//CODE HERE
console.log ("---Problem 3---")
var init = {};
init.description = "The way you initialize a git repository inside of a project"
init.code = "git init"
console.log (`${init.description} and how you perform the command is: ${init.code}`)
//////////////////PROBLEM 4////////////////////
/*
    Create an object called 'clone' with 'description' and 'code' properties 
    following the guidelines above to describe the clone command.
*/

//CODE HERE
console.log("---Problem 4---")
var clone = {};
clone.description = "Cloning is the action of taking an existing repo and creating a copy within the given directory"
clone.code = "git clone <URL HERE>"
console.log (`${clone.description} and how you perform the command is: ${clone.code}`)

//////////////////PROBLEM 5////////////////////
/*
    Create an object called 'status' with 'description' and 'code' properties 
    following the guidelines above to describe the status command.
*/

//CODE HERE
console.log ("---Problem 5---")
var gitStatus = {};
gitStatus.description = "Status is how you check to see what within your repository is ready to be commited"
gitStatus.code = "git status"
console.log (`${gitStatus.description} and how you perform the command is: ${gitStatus.code}`)


//////////////////PROBLEM 6////////////////////
/*
    Create an object called 'add' with 'description' and 'code' properties 
    following the guidelines above to describe the add command.
*/

//CODE HERE
console.log("---Problem 6---")
var add = {};
add.description = "add is how you insert a file into the respository. additionally, you can add all files within the directory by using a period as the modifer"
add.code = "git add <file or .>"
console.log (`${add.description} and how you perform the command is: ${add.code}`)


//////////////////PROBLEM 7////////////////////
/*
    Create an object called 'commit' with 'description' and 'code' properties
    following the guidelines above to describe the commit command.
*/

//CODE HERE
console.log("---Problem 7---")
var commit = {};
commit.description = "allows you to commit those changes into the documents history"
commit.code = "git commit -m (commit description here)"


//////////////////PROBLEM 8////////////////////
/*
    Create an object called 'push' with 'description' and 'code' properties 
    following the guidelines above to describe the push command.
*/

//CODE HERE
console.log("---Problem 8---")
var push = {};
push.description = "final step in getting your commit up to the remote server."
push.code = "git push -u origin main"
