// in the name of Allah, the Gracious, the Merciful
// this is a javascript comment
/*
    this is a multi-line comment
 */
function changeParagraph(){
    document.getElementById("paragraph1").innerHTML = "Another paragraph changed";
}
function outputAlert(message){
    window.alert(message);
}

function outputWrite(message){
    document.write(message);
}
function outputConsole(message){
    console.log(message);
}
function changeHeader(){    
    document.getElementById("header1").innerHTML = "HeaderChanged";
}
var student = 
{
    firstName : "Ibrahim",
    lastName : "Elsayed",
    age : 21,
    fullName: function(){
        return this.firstName + " " + this.lastName;
    }
    
};
function mouseover(){
    document.getElementById("paragraph1").innerHTML = 'hello, how are you?';
}
function mouseout(){
    document.getElementById("paragraph1").innerHTML = '<br/>';
}