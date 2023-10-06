var hr=0;
var min=0;
var sec=0;
var ctr=0;
var sts=0;

let laparr=[];
let starts=document.getElementById("start");
let laps=document.getElementById("lap");
let hour=document.getElementById("hr");
let minute=document.getElementById("min");
let second=document.getElementById("sec");
let msecond=document.getElementById("ms");
let lapctr=document.getElementById("lp");
starts.addEventListener("click", strt);
laps.addEventListener("click",lp);
function strt(){
    starts.innerHTML="Stop";
    sts=1;
    timer();
    starts.addEventListener("click",stop)
    laps.addEventListener("click",lp);
    starts.removeEventListener("click",strt)
}

function stop(){
    starts.innerHTML="Resume";
    laps.innerHTML="Reset";
    sts=0;
    timer();
    starts.addEventListener("click",resume);
    laps.addEventListener("click",reset);
    starts.removeEventListener("click",stop);
}

function resume(){
    laps.innerHTML="Lap";
    starts.innerHTML="Stop";
    sts=1;
    starts.addEventListener("click",stop)
    laps.addEventListener("click",lp);
    laps.removeEventListener("click",reset);
    starts.removeEventListener("click",resume);
    timer();
}

function reset(){
    laps.innerHTML="Lap";
    starts.innerHTML="Start";
    sts=0;
    hr=0;
    min=0;
    sec=0;
    ctr=0;
    hour.innerHTML="00";
    minute.innerHTML="00";
    second.innerHTML="00";
    msecond.innerHTML="00";
    lapctr.innerHTML="";
    localStorage.clear();
    while(laparr.length>0)
    {
        laparr.pop();
    }
    laps.addEventListener("click",lp);
    laps.removeEventListener("click",reset);
}
function lp(){
    let str=hr+':'+min+':'+sec+':'+ctr;
    laparr.push(str);
    localStorage.setItem("lap",laparr);
    lapctr.innerHTML+=str;
    lapctr.innerHTML+="<br>";
}



function timer(){
    if(sts==1)
    {
        ctr=ctr+1;
        if(ctr==100)
        {
            sec=sec+1;
            ctr=0;
        }
        if(sec==60)
        {
            min=min+1;
            sec=0;
        }
        if(min==60)
        {
            hr=hr+1;
            min=0;
            sec=0;
        }
        hour.innerHTML=hr;
        minute.innerHTML=min;
        second.innerHTML=sec;
        msecond.innerHTML=ctr;
        setTimeout("timer()", 10);
    }
}
