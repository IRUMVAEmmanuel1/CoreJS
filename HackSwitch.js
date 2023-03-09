var day = `sunday`
switch(day){
    case 'sunday':
        console.log("Monday")
        break;
    case 'Tuesday':
        console.log("Tuesday")
        break;
    case 'Wednesday':
        console.log("Wednesday")
        break;
    case 'Thursday':
        if(day =="sunday"){
            console.log("Thursday")
        }
        
        break;
    case 'Friday':
        console.log("Friday")
        break;
    case 'Saturday':
        console.log("Saturday")
        break;
    case 'Sunday': 
        console.log("Sunday")
    default:
        console.log("try again later")
}