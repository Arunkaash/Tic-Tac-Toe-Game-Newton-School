var count = 1;

function fill(control) {
    // input working
    if (count < 9) {
        if (count % 2 != 0) {
            document.getElementById(control.id).innerHTML = "X";
            document.getElementById('result').innerHTML = "O's turn";
            document.getElementById("clickSound").play();

        } else {
            document.getElementById(control.id).innerHTML = "O";
            document.getElementById('result').innerHTML = "X's turn";
            document.getElementById("clickSound").play();

        }
        count++;
        // winner print
        if (winner()) {
            document.getElementById('result').innerHTML = "Winner!!! &#128512";
            document.getElementById('button').style.display = "block";
            document.getElementById("winnerSound").play();;
        }
        // draw print
    } else {
        document.getElementById('result').innerHTML = "Draw &#128528";
        document.getElementById('button').style.display = "block";
        document.getElementById("drawSound").play();


    }




}
// reset game button
document.getElementById("button").onclick = function() {
    reset();
    document.getElementById("resetSound").play();
    if (document.getElementById("button").style.display === 'none') {
        document.getElementById("button").style.display = 'block';
    } else {
        document.getElementById("button").style.display = 'none';

    }
    // window.location.reload();
};



//reseting game
function reset() {
    for (var i = 1; i <= 9; i++) {
        document.getElementById('div' + i).innerHTML = "";
        document.getElementById('result').innerHTML = "";
    }
    count = 1;

}
// conditions
function winner() {
    if (checkCondition('div1', 'div2', 'div3') || checkCondition('div4', 'div5', 'div6') || checkCondition('div7', 'div8', 'div9') || checkCondition('div1', 'div5', 'div9') || checkCondition('div3', 'div5', 'div7') || checkCondition('div1', 'div4', 'div7') || checkCondition('div3', 'div6', 'div9') || checkCondition('div2', 'div5', 'div8')) {
        return true;
    }
}

function checkCondition(div1, div2, div3) {
    if (getData(div1) != "" && getData(div2) != "" &&
        getData(div3) != "" && getData(div1) == getData(div2) && getData(div2) == getData(div3)) {
        return true;
    }
}

function getData(div) {
    return document.getElementById(div).innerHTML;
}
