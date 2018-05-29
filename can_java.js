///general declarations and initialisation 

var canvas=document.getElementById("first_canv");
var ctx=canvas.getContext('2d');
canvas.height=550;
canvas.width=window.innerWidth-20;
var player=1;
var left_1=5;
var left_2=5;

var power=10;
var ddy=0.5
var ddx=-1;
var degree=60;
var radian=(degree*Math.PI)/180;
var len=100;
//player-1 and 2
var x=150+(len*Math.cos(radian));
var y=500-(len*Math.sin(radian));
var dx=power*Math.cos(radian);
var dy=-power*Math.sin(radian);
var score1=0;
var score2=0;
var arr=new Array();

//mountain-init

 // parameters - change to your liking
 var STEP_MAX = 2.0;
 var STEP_CHANGE = 1.0;
 var HEIGHT_MAX = 500;

 // starting conditions
 var height =500;
 var slope = (Math.random() * STEP_MAX);

 // creating the landscape
 for (var xi =300; xi < 900; xi++) {
      // change height and slope
      height += slope;
      slope += (Math.random() * STEP_CHANGE) * 2 - STEP_CHANGE;

      // clip height and slope to maximum
      if (slope > STEP_MAX) { slope = STEP_MAX };
      if (slope < -STEP_MAX) { slope = -STEP_MAX };
 
      if (height > HEIGHT_MAX) { 
          height = HEIGHT_MAX;
          slope *= -1;
      }
      if (height < 200) { 
          height = 200;
          slope *= -1;
          
      }
     arr[xi]=height;
 }


function draw()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    var an=document.getElementById("angle");
    an.textContent=""+degree;
    var sc1=document.getElementById("score_1");
    sc1.textContent="Score: "+score1;
    var sc2=document.getElementById("score_2");
    sc2.textContent="Score: "+score2;
    ctx.fillStyle="white";
    ctx.font = "30px Arial";
    ctx.fillText(left_1,300,150);
     ctx.fillText(left_2,1000,150);
    if(player%2!=0)
    ctx.fillText("Player-1's Turn",550,100);
    else
     ctx.fillText("Player-2's Turn",550,100);
    drawLine();
    //mount();
    if(flag==1)
    drawBall();
    
}


function drawLine()
{
    ctx.beginPath();
    ctx.moveTo(0,500);
    ctx.lineTo(canvas.width,500);
    ctx.lineWidth=20;
    ctx.strokeStyle="greenyellow";
    ctx.stroke();
    
    if(player%2!=0)
        {
           ctx.beginPath();
            ctx.moveTo(150,500);
            ctx.lineTo(150+(len*Math.cos(radian)),500-(len*Math.sin(radian)));
            ctx.strokeStyle="white";
            ctx.lineWidth=5;
            ctx.stroke(); 
        }
    else
        {
            ctx.beginPath();
            ctx.moveTo(1100,500);
            ctx.lineTo(1100-(len*Math.cos(radian)),500-(len*Math.sin(radian)));
            ctx.strokeStyle="white";
            ctx.lineWidth=5;
            ctx.stroke(); 
        }
    
    
    //player-1 tank
    
    
    ctx.rect(145,450,50,50);
    ctx.fillStyle="white";
    ctx.fill();
    
    ctx.rect(130,470,80,20);
    ctx.fillStyle="white";
    ctx.fill();
    
    ctx.rect(120,490,100,20);
    ctx.fillStyle="white";
    ctx.fill();
    
   
    
    //player 2 tank
    ctx.rect(1045,450,50,50);
    ctx.fillStyle="white";
    ctx.fill();
    
    ctx.rect(1030,470,80,20);
    ctx.fillStyle="white";
    ctx.fill();
    
    ctx.rect(1020,490,100,20);
    ctx.fillStyle="white";
    ctx.fill();
    
   //mountains
    for(var xi=300;xi<900;xi++)
        {
            ctx.beginPath();
            ctx.moveTo(xi, 500);
            ctx.lineTo(xi, arr[xi]);
            ctx.strokeStyle="green";
            ctx.stroke();
        }
    
   // ctx.clearRect(1050,480,10,10);
     //ctx.clearRect(150,480,10,10);
    
    
    
   
    
}

function incr_angle()
{
    degree++;
    radian=(degree*Math.PI)/180;
    if(player%2!=0)
        {
         x=150+(len*Math.cos(radian));
         y=500-(len*Math.sin(radian)); 
         dx=power*Math.cos(radian);
        dy=-power*Math.sin(radian);
        }
    else
        {
            x=1100-(len*Math.cos(radian));
            y=500-(len*Math.sin(radian));
            dx=-power*Math.cos(radian);
            dy=-power*Math.sin(radian);
        }
}
function decr_angle()
{
    degree--;
    radian=(degree*Math.PI)/180;
    if(player%2!=0)
        {
         x=150+(len*Math.cos(radian));
         y=500-(len*Math.sin(radian)); 
         dx=power*Math.cos(radian);
        dy=-power*Math.sin(radian);
        }
    else
        {
            x=1100-(len*Math.cos(radian));
            y=500-(len*Math.sin(radian));
            dx=-power*Math.cos(radian);
            dy=-power*Math.sin(radian);
        }
}
function drawBall()
{
    
     var w = document.getElementsByName('weap');
                    var w_value;
                    var i;
                    for( i = 0; i < w.length; i++)
                    {
                        if(w[i].checked)
                        {
                        w_value = w[i].value;
                            break;
                        }
                    }
    if(w_value=="Bomb") 
        {
            var img=new Image(10,10);
            img.src="bomb_pic.png";
            ctx.drawImage(img,x,y,40,40); 
        }
    if(w_value=="Bullet")
        {
            var img=new Image(10,10);
            img.src="bullet_pic.png";
            ctx.drawImage(img,x,y,40,40);   
        }
     if(w_value=="Sword")
        {
            var img=new Image(10,10);
            img.src="sword_pic.png";
            ctx.drawImage(img,x,y,40,40);   
        }
    if(w_value=="Arrow") 
        {
         var img=new Image(10,10);
        img.src="brown_arrow.png";
        ctx.drawImage(img,x,y,40,40);
        }
   
  
  for( var x_m=320; x_m<920; x_m++) 
      {
          
          if(Math.floor(x)==x_m && (y+35)>=arr[x_m])
              {
                  console.log(y+" "+arr[x_m]);
                  wait(1000);
                  reset();
                  break;
              }
      }
   if(x_m==920)
    {
    if(y >480 )
        {   
            if(player%2!=0)
            {
            console.log(x);
            if(x>=1030 && x<= 1130)
            score1+=20;
            else if(x>=920 && x<= 1220)
            score1+=10;
            }
            else
            {
                console.log(x);
             if(x >=130 && x <= 230)
            score2+=20;
            else if(x >=20 && x<= 320)
            score2+=10;   
            }
            wait(1000);
             reset();
        }
    }
       

    dy+=ddy;
    x+=dx;
    y+=dy;
    
    
}
setInterval(draw,20);
var flag=0;
var fire=document.getElementById("fire");
fire.addEventListener("click",function(){
    flag=1;
    var plus=document.getElementById("plus");
    var minus=document.getElementById("minus");
    plus.setAttribute("disabled",true);
    minus.setAttribute("disabled",true);
    var rates = document.getElementsByName('speed');
                    var rate_value;
                    var i;
                    for( i = 0; i < rates.length; i++)
                    {
                        if(rates[i].checked)
                        {
                        rate_value = rates[i].value;
                            break;
                        }
                    }
    if(rate_value=="Low") power=10;
    if(rate_value=="Medium") power=20;
    if(rate_value=="High") power=25;
    
     if(player%2!=0)
        {
         dx=power*Math.cos(radian);
         dy=-power*Math.sin(radian);
        }
    else
        {
    
            dx=-power*Math.cos(radian);
            dy=-power*Math.sin(radian);
        }
    this.disabled=true;
});

function reset()
{
    flag=0;
    player++;
    
    var plus=document.getElementById("plus");
    var minus=document.getElementById("minus");
    var fi=document.getElementById("fire");
    var mm=document.getElementById("meed");
    var bb=document.getElementById("bom");
    plus.disabled=false;
    minus.disabled=false;
    fi.disabled=false;
    mm.checked=true;
    bb.checked=true;
    degree=60;
    radian=(degree*Math.PI)/180;
    if(player%2!=0)
        {
         x=150+(len*Math.cos(radian));
         y=500-(len*Math.sin(radian)); 
         dx=power*Math.cos(radian);
        dy=-power*Math.sin(radian);
            left_2--;
        }
    else
        {
            x=1100-(len*Math.cos(radian));
            y=500-(len*Math.sin(radian));
            dx=-power*Math.cos(radian);
            dy=-power*Math.sin(radian);
            left_1--;
        }
        
   
    
    if(left_1==0 && left_2==0)
        {
          var ret;
            if(score1==score2)
              ret= confirm("Match Drawn !\n Wanna play again?");
            else if(score1>score2)
               ret= confirm("Player 1 Wins ! Wanna play again?");
            else
               ret= confirm("Player 2 Wins ! Wanna play again?");
            
            if(ret==true)
                window.location.reload();
        }
}

function mount()
{
    ctx.clearRect(0,0,canvas.width,canvas.height);
    var max_h=100;
    for(var bre=320;bre<=620;bre++)
        {
           ctx.moveTo(bre,500);
            ctx.lineTo(bre,Math.random()*max_h);
            ctx.lineWidth=2;
            ctx.fillStyle="white";
            ctx.fill();
        }
}


//wait
function wait(ms){
   var start = new Date().getTime();
   var end = start;
   while(end < start + ms) {
     end = new Date().getTime();
  }
}