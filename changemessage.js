let trbmb;

fetch('https://trbmb.chew.pw/assets/json/words.json').then(r => r.json()).then(data => trbmb = data);

function changeMessageTRBMB() {
    let lines2 = [
        ["That really"],
        trbmb["word1"], ["my"],
        trbmb["word2"],
    ];
    for (let i = 0; i < 4; i++) {
        document.getElementById(i + "line").innerHTML = lines2[i][(Math.floor(Math.random() * lines2[i].length))];
    }
}

function changeMessageWOT() {
    for (let i = 0; i < 4; i++) {
        document.getElementById(i + "line").innerHTML = lines4[i][(Math.floor(Math.random() * lines4[i].length))];
    }
}

function changeMessageRR() {
    for (let i = 0; i < 4; i++) {
        document.getElementById(i + "line").innerHTML = lines3[i][(Math.floor(Math.random() * lines3[i].length))];
    }
}
