var látogató = false;
var admin = false;
var diák = false;

var adminNév = ["admin","admin2"];
var adminJelszó = ["admin","admin2"];
var diákNév = ["diák","diák2"];
var diákJelszó = ["diák","diák2"];



function bejelentkezés(){
    var felhasználóNév = document.getElementById("felhasználónév").value;
    var jelszó = document.getElementById("jelszó").value;

    if(!admin && !diák){
        for(let i = 0; i < adminNév.length; i++){
            if(felhasználóNév == adminNév[i] && jelszó == adminJelszó[i]){
                    alert("üdvözlek " + felhasználóNév);
                    admin = true;
                    open("timetable113c.html");
                    break;
            }
            
        }
    }            
        
    if(!admin && !diák){
            for(let i = 0; i < diákNév.length; i++){
                if(felhasználóNév == diákNév[i] && jelszó == diákJelszó[i]){
                    alert("üdvözlek " + felhasználóNév);
                    diák = true;
                    open("timetable113c.html");
                    break;
            }
            }
        }

    if(!admin && !diák){
        alert("A megadott felhasználó név vagy jelszó nem megfelelő! Kérlek próbáld újra");
    }    
}  
    