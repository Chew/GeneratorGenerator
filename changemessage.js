function changeMessageTRBMB(){
    for(var i=0; i<4; i++){
            document.getElementById(i+"line").innerHTML=lines2[i][(Math.floor(Math.random()*lines2[i].length))];
    }
}

function changeMessageWOT(){
    for(var i=0; i<4; i++){
            document.getElementById(i+"line").innerHTML=lines4[i][(Math.floor(Math.random()*lines4[i].length))];
    }
}

function changeMessageRR(){
    for(var i=0; i<4; i++){
            document.getElementById(i+"line").innerHTML=lines3[i][(Math.floor(Math.random()*lines3[i].length))];
    }
}
