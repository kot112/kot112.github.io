var rnd=0;
var izbira='nic';
var id_izb=0;
var nme = document.getElementById("nm");

var mme = document.getElementById("mm");
var st = document.getElementById("start");
var nhp=5;
var mhp=5;
var win= 0;
var stg1=0;
var stg2=0;
var stg3=0;
var stg4=0;
var stg5=0;
var s1= document.getElementById("sg1");
var s2= document.getElementById("sg2");
var s3= document.getElementById("sg3");
var s4= document.getElementById("sg4");
var s5= document.getElementById("sg5");
var intre= setInterval(storage2, 10000)


nme.setAttribute("value", nhp);
 mme.setAttribute("value", mhp);
function izpis(){

    
    if(rnd==1){
        document.getElementById("nasp").innerHTML = 'Kamen';
    }
    else if(rnd==2){
        document.getElementById("nasp").innerHTML = 'Škarje';
    }
    else if(rnd==3){
        document.getElementById("nasp").innerHTML = 'Papir';
    }
    
    document.getElementById("player").innerHTML = izbira;
      
    if(id_izb==1){
        if(rnd==1){
        document.getElementById("rez").innerHTML = 'DRAW';
            izpis2()
          
        }
        else if(rnd==2){
        document.getElementById("rez").innerHTML = 'WIN';
            nhp=nhp-1;
            izpis2()
        }
        else if(rnd==3){
        document.getElementById("rez").innerHTML = 'DEFEAT';
            mhp=mhp-1;
            izpis2()
        }
    }
    else if(id_izb==2){
        if(rnd==1){
        document.getElementById("rez").innerHTML = 'DEFEAT';
            mhp=mhp-1;
            izpis2()
        }
        else if(rnd==2){
        document.getElementById("rez").innerHTML = 'DRAW';
            nme.setAttribute("value", nhp);
    mme.setAttribute("value", mhp);
        }
        else if(rnd==3){
        document.getElementById("rez").innerHTML = 'WIN'; 
        nhp=nhp-1;   
            izpis2()
        }
    }
    if(id_izb==3){
        if(rnd==1){
        document.getElementById("rez").innerHTML = 'WIN';
        nhp=nhp-1; 
            izpis2()
        }
        else if(rnd==2){
        document.getElementById("rez").innerHTML = 'DEFEAT';
            mhp=mhp-1;
            izpis2()
        }
        else if(rnd==3){
        document.getElementById("rez").innerHTML = 'DRAW'; 
            izpis2()
        }

       
    }
    
setTimeout(check,100);     
}
function izpis2(){
            nme.setAttribute("value", nhp);
            mme.setAttribute("value", mhp);
            
            document.getElementById("nnm").innerHTML = nhp;
            document.getElementById("mmm").innerHTML = mhp;
    document.getElementById("win").innerHTML = win;

    document.getElementById("stage").innerHTML = win;
  
}
    
function random(){
    rnd = Math.floor((Math.random() * 3) + 1);

}


function mec(){
    izbira='Kamen';
    id_izb=1;
    random();
    izpis(); 
}

function lok(){
    izbira='Škarje';
    id_izb=2;
    random();
    izpis();    
}

function palica(){
    izbira='Papir';
    id_izb=3;
    random();
    izpis();
}


function check(){
              if(nhp==0){
      win=win+1;
      alert('You won');      
      nhp=5*win;
      mhp=5;
                  nme.setAttribute("value", nhp);
            mme.setAttribute("value", mhp);
                  nme.setAttribute("max", nhp);
      izpis();
  } 
  else if(mhp==0){
     nhp=5;
      mhp=5;
      if(win=1){
          stg1=stg1+1;
      }
       else if(win=1){
          stg1=stg1+1;
      }
       else if(win=2){
          stg2=stg2+1;
      }
       else if(win=3){
          stg3=stg3+1;
      }
        else if(win=4){
          stg4=stg4+1;
      }
        else if(win=5){
          stg5=stg5+1;
      }
      alert('You lost');
      location.reload();
      
  }
}

function storage2(){
              localStorage.setItem('stg1', stg1);
            localStorage.setItem('stg2', stg2);
            localStorage.setItem('stg3', stg3);
            localStorage.setItem('stg4', stg4);
            localStorage.setItem('stg5', stg5);
    load2();
}
function load2(){
              localStorage.setItem('stg1', stg1);
            localStorage.setItem('stg2', stg2);
            localStorage.setItem('stg3', stg3);
            localStorage.setItem('stg4', stg4);
            localStorage.setItem('stg5', stg5);
}
function stage(){
    document.getElementById("stg1").innerHTML = stg1;
    document.getElementById("stg2").innerHTML = stg2;
    document.getElementById("stg3").innerHTML = stg3;
    document.getElementById("stg4").innerHTML = stg4;
    document.getElementById("stg5").innerHTML = srg5;
    s1.setAttribute("value", stg1);
    s2.setAttribute("value", stg2);
    s3.setAttribute("value", stg3);
    s4.setAttribute("value", stg4);
    s5.setAttribute("value", stg5); 
}

