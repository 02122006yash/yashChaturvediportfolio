// var hit = 0;

// function makeBubble() {
//     var clutter = "";
//     for (var i = 1; i <= 96; i++) {
//         var rn = Math.floor(Math.random() * 10);
//         clutter += `<div class="bubble">${rn}</div>`;
//     }
//     document.querySelector("#pbtm").innerHTML = clutter;

    
//       var score = 0;
//     function increaseScore() {
//         score += 10;
//         document.querySelector("#inScore").textContent = score;
//     }


//     function hittimer() {
//          hit = Math.floor(Math.random() * 10);
//         document.querySelector("#hitno").textContent = hit;
//     }
//     hittimer();

//     var timer = 60;
//     function runTimer() {
//         var timerint = setInterval(function () {
//             if (timer > 0) {
//                 timer--;
//                 document.querySelector("#timer").textContent = timer;
//             } else {
//                 clearInterval(timerint);
//             }
//         }, 1000);
//     }
//     runTimer();
// }

// var score = 0; 
// makeBubble();


// document.querySelector("#pbtm").addEventListener("click",function(bubble){
//     var clickednum=(Number(bubble.target.textContent));
//     if(clickednum===hit){
//          increaseScore();
//          makeBubble();
//          hittimer();
//     }
// });

var score = 0;
var hit = 0;

function makeBubble() {
    var clutter = "";
    for (var i = 1; i <= 96; i++) {
        var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector("#pbtm").innerHTML = clutter;

    hittimer();
    attachBubbleClickEvents();
}

function increaseScore() {
    score += 10;
    document.querySelector("#inScore").textContent = score;
}

function hittimer() {
    hit = Math.floor(Math.random() * 10);
    document.querySelector("#hitno").textContent = hit;
}

function runTimer() {
    var timer = 20;
    var timerint = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#timer").textContent = timer;
        } else {
            clearInterval(timerint);
            document.querySelector("#pbtm").innerHTML=` <h1 style="color:red;">GAME OVER</h1></br style="color:black"><h1 style="color:red;">FINAL SCORE:<span style="font-size:30px;font-weight:900;">${score}</span></h1>`
                
        }
    }, 1000);
}

function attachBubbleClickEvents() {
    document.querySelectorAll(".bubble").forEach(bubble => {
        bubble.addEventListener("click", function () {
            var clickednum = Number(this.textContent);
            if (clickednum === hit) {
                increaseScore();
                makeBubble();
            }
        });
    });
}

// Initialize game
makeBubble();
runTimer();
