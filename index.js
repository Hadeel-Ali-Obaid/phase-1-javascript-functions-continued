// code your solution here
function saturdayFun(activity = "roller-skate") {
    return `This Saturday, I want to ${activity}!`;
}


function mondayWork(onlineOrNot = "go to the office") {
return `This Monday, I will ${onlineOrNot}.`;
}

function wrapAdjective(me="*") {
    return function(youAre = "special") {
        return `You are ${me}${youAre}${me}!`
    }
}
