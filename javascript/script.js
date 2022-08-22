$(function(){
  $("#header").load("header.html"); 
});
      //show dark image
      var text = " ";
      var c = document.getElementById("myCanvas");
      var ctx = c.getContext("2d");
      var img = new Image();
      img.src  = "image/darkA.jpg";
      img.onload = function(){
           ctx.drawImage(img, 10, 10);
      }
   

      function show(){
      //show lighted image;
       ctx.clearRect(0, 0, 300, 300);
       var can = document.getElementById("myCanvas");
       var tt = can.getContext("2d");
       /*//play sound when click button
       var audio = document.getElementById("aud"); 
       audio.play();
       setTimeout(() => { audio.pause(); audio.currentTime = 0; }, 1000);*/
      
       var name = document.getElementById("source_text").value;
       //if input nothing, show alert
       if (name == "") {
        alert("請輸入姓名");
        location.reload();
       }
       //show image with name
       else
            var im = new Image();
            im.src = "image/brightA.jpg";
            im.onload = function(){
            tt.drawImage(im,10,10);
            tt.font = "50px 標楷體";
            tt.fillStyle = "#ffd700";
            tt.textAlign = 'center';
            tt.fillText(name,175,355);
            }
            document.getElementById('download').addEventListener('click', function(e){
                let url = can.toDataURL();
                console.log(url);
                const cre = document.createElement('a');
                cre.href = url;
                cre.download = name + '光明燈';
                cre.click();
                cre.remove();
            })
      }

      function backtotop(){
    but = document.getElementById('but');
    document.documentElement.scrollTop = 0;
}