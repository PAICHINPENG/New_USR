    var tal = 0;
    var intervalsd;
    var isover = "y";

    var talB = 0;
    var intervalsdB;
    var isoverB = "y";

    var finalsd = 0;

    var goodsd = 0;

    var deg = 0;
//click box
function startgo() {
    
    if (isover == "y") {
         tal = 0;
         intervalsd = setInterval(function () { runno() }, 30);
         divineindex.style.display = "block";
         ImgA.style.display = "none";
         ImgB.style.display = "none";
         txtresult.style.display = "none";

     }
}
//shake action
function startgoB(){
    if (isoverB =="y") {
      talB = 0;
      intervalsdB = setInterval(function(){runnoB() },30);
      ImgA.style.display= 'block';
      ImgB.style.display= 'block';
    }
    audio = document.getElementById('')
}
//shake animation
function runno(){

var err = 0;
var max = 60;
var min = 1;
var draw = [44,47,58,54,111,101,108];

var rand = Math.floor(Math.random()*draw.length);
var rValue = draw[rand];



isover = "n";
var n1 = Math.floor(Math.random() * (max - min + 1)) + min;
divineindex.innerHTML = "求得"+ rValue +" 號籤";
   if (deg == 3) {
            deg = 4;
            document.getElementById("divinetool").style.transform = "rotate(15deg)";
        }
        if (deg == 2) {
            deg = 3;
            document.getElementById("divinetool").style.transform = "rotate(-15deg)";
        }
        if (deg == 1) {
            deg = 2;
            document.getElementById("divinetool").style.transform = "rotate(-15deg)";
        }
        if (deg == 0) {
            deg = 1;
            document.getElementById("divinetool").style.transform = "rotate(15deg)";
        }
        if (deg >= 4) { deg = 0; }
        tal = tal + 1;
        if (tal >= 150 && err == 0) {
            clearInterval(intervalsd);
            finalsd = rValue;
            //isover = "y";
            btn.style.display = "block";
            //divinetool.style.display = "none";
            document.getElementById("divinetool").style.transform = "rotate(0deg)";

        }


}
//cup result
function runnoB() {
        var err = 0;
        var maxNum = 2;
        var minNum = 1;
        isoverB = "n"
        var n1 = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        var n2 = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;
        
        //divno = leftPad(n1, 2);
        if (n1 == 1) { ImgA.src = "image/cup1.png"; }
        if (n1 == 2) { ImgA.src = "image/cup2.png"; }

        if (n2 == 1) { ImgB.src = "image/cup3.png"; }
        if (n2 == 2) { ImgB.src = "image/cup4.png"; }

        talB = talB + 1;
        if (talB >= 50 && err == 0) {
            clearInterval(intervalsdB);
            isoverB = "y";
            txtresult.style.display = "block";

            if (n1 == 1 && n2 == 2) {
                goodsd = goodsd + 1;
                txtresult.innerHTML = "第" + finalsd + "號籤<BR>" + goodsd + "個允杯<br>請繼續筊杯";
            }
            if (n1 == 1 && n2 == 1) {
                txtresult.innerHTML = "笑杯<br>請按籤筒重新求籤";
                isover = "y";
                divinetool.style.display = "block";
                btn.style.display = "none";
                divineindex.innerHTML = "請點籤筒";

                goodsd = 0;

            }
            if (n1 == 2 && n2 == 1) {
                goodsd = goodsd + 1;
                txtresult.innerHTML = "第" + finalsd + "號籤<BR>" + goodsd + "個允杯<br>請繼續筊杯";
            }
            if (n1 == 2 && n2 == 2) {
                txtresult.innerHTML = "蓋杯<br>請按籤筒重新求籤";
                isover = "y";
                divinetool.style.display = "block";
                btn.style.display = "none";
                divineindex.innerHTML = "請點籤筒";

                goodsd = 0;
            }
            
            if (goodsd >= 1) {
                btn.style.display = "none";
                txtresult.innerHTML = goodsd + "個允杯<br>請觀看以下籤詩";
                divineroom.style.display = "block";
                divpic.src = "stick/" + finalsd + ".png";
                if (finalsd >=50) {
                  console.log("上上");
                }
                else if (finalsd<50) {
                  console.log("下下");
                }
                //gotourl.href = "divine" + finalsd + ".asp";
            }



        }
}

 
$(function(){
  $("#header").load("header.html"); 
});
function backtotop(){
    but = document.getElementById('but');
    document.documentElement.scrollTop = 0;
}