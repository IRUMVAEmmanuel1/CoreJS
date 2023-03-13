function Register(name){
    for(var i = 0; i<name.length; i++){
        if(name[i] == "i" || name[i]=="I"){
            console.log("Found Match",name[i])
        }
        else if(name[i] != "o" || name[i]!="O"){
            console.log("Found Match",name[i])
        }
        else if(name[i] == "a" || name[i]=="A"){
            console.log("Found Match",name[i])
        }
        else if(name[i] == "u" || name[i]=="U"){
            console.log("Found Match",name[i])
        }
        else if(name[i] == "e" || name[i]=="E"){
            console.log("Found Match",name[i])
        }
        
        else{
            console.log("No Vowels found!")
        }
    }
}

Register("emmanuel");

