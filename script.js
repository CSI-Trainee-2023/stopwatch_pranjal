var hr=0;
var min=0;
var sec=0;
var ct=0;
var st=0;

let x=document.getElementById("start");
let y=document.getElementById("lap");
let b=document.getElementById("hr");
let c=document.getElementById("min");
let d=document.getElementById("sec");
let e=document.getElementById("ms");
x.addEventListener("click", strt);
y.addEventListener("click", lp);
function strt(){
    x.innerHTML="Stop";
    st=1;
    tr();
}

function resume(){
    y.innerHTML="Lap";
    x.innerHTML="Stop";
    st=1;
    tr();
}

function reset(){
    y.innerHTML="Lap";
    x.innerHTML="Start";
    st=0;
    hr=0;
    min=0;
    sec=0;
    ct=0;
    b.innerHTML="00";
    c.innerHTML="00";
    d.innerHTML="00";
    e.innerHTML="00";
}
function lp(){
    let str=hr+':'+min+':'+sec+':'+ct;
    localStorage.setItem("lap",str);
}



function tr(){
    if(st==1)
    {
        ct=ct+1;
        if(ct==100)
        {
            sec=sec+1;
            ct=0;
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
        b.innerHTML=hr;
        c.innerHTML=min;
        d.innerHTML=sec;
        e.innerHTML=ct;
        setTimeout("tr()", 10);
        x.addEventListener("click", function (){
            y.innerHTML="Reset";
            x.innerHTML="Resume";
            st=0;
            tr();
        });
        y.addEventListener("click", lp)
    }
    else{
        x.addEventListener("click", resume);
        y.addEventListener("click", reset);
    }
}
