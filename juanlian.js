 function reBox(Fid,defaultHeight,speed){
      var bheight=defaultHeight;
      var doScroll;
      var a=0,b=0;
      var $=function(id){
        return document.getElementById(id);
      }
      var createBox="<div id='"+Fid+"cbox'>"+$(Fid).innerHTML+"</div>";
      $(Fid).innerHTML=createBox;
      $(Fid).onclick=function(){
        if(a==0&&b==0){
          b=1;
          doScroll=setInterval(function(){
            if(bheight<$(""+Fid+"cbox").offsetHeight){
              var dist=Math.ceil(($(""+Fid+"cbox").offsetHeight-bheight)/10);
              bheight=bheight+dist;
              $(Fid).style.height=bheight+"px";
            }else{
              clearInterval(doScroll);
              a=1;
              b=0;
            }
          },speed);
        }
        if(a==1 && b==0){
          b=1;
          doScroll=setInterval(function(){
            if(bheight>defaultHeight){
              var dist=Math.ceil((bheight-defaultHeight)/10);
              bheight=bheight-dist;
              $(Fid).style.height=bheight+"px";
            }else{
              clearInterval(doScroll);
              a=0;
              b=0;
            }
          },speed);
        }
      }
    }
    window.onload=function(){
      reBox("demo2",30,10);
    }
