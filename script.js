// var a,date,time;
// const options = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
// setInterval(() => {
//     clock = new Date();
//     date = clock.toLocaleDateString(undefined,options);
//     time = clock.getHours()+":"+clock.getMinutes()+":"+clock.getSeconds();
//     document.getElementById('time').innerHTML=time + "<br>"+ date; 
// }, 1000);

// create a event 

var timezone1 = setInterval(newdelhi,1000);
    
function newdelhi()
{
    clearInterval(timezone1);
    timezone1 = setInterval(newdelhi,1000);
    var a,date,time,clk;
    const options = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
    clock = new Date();
    date = clock.toLocaleDateString(undefined,options);
    h=clock.getHours();
    m=clock.getMinutes();
    s=clock.getSeconds();

    if(h<=12)
        clk="AM";
    else
    {
        h=h-12;
        clk="PM";
    }
        
    time = h+":"+m+":"+s;
    document.getElementById('time').innerHTML=time+ " "+ clk + "<br>"+ date; 
    document.getElementById('country').innerHTML="New Delhi"; 
    document.getElementById('time').style.color="rgb(62, 86, 196)"; 
    document.getElementById('country').style.color="rgb(62, 86, 196)"; 
}
function newyork()
{
    clearInterval(timezone1);
    timezone1 = setInterval(newyork,1000);
    var a,date,time,clk;
    const options = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
    clock = new Date();
    date = clock.toLocaleDateString(undefined,options);
    h=clock.getHours()+14;
    m=clock.getMinutes()+30;
    s=clock.getSeconds();
    if(m>=0 && m<=60)
        m=m;
    else
    {
        h=Math.floor(m/60)+h;
        m=m-Math.floor(m/60)*60;
    }
    if(s>=0 && s<=60)
        s=s;
    else
    {
        m=Math.floor(s/60)+m;
        s=s-Math.floor(s/60)*60;
    }
    if(h>=0 && h<24)
        h=h;
    else
    {
        h=h-24;
    }

    if(h<=12)
        clk="AM";
    else
    {
        h=h-12;
        clk="PM";
    }

    time =h+":"+m+":"+s;
    document.getElementById('time').innerHTML=time+ " "+ clk + "<br>"+ date;
    document.getElementById('country').innerHTML="New York";
    document.getElementById('time').style.color="rgb(0, 196, 167)"; 
    document.getElementById('country').style.color="rgb(0, 196, 167)"; 
}
function london()
{
    clearInterval(timezone1);
    timezone1 = setInterval(london,1000);
    var a,date,time,clk;
    const options = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
    clock = new Date();
    date = clock.toLocaleDateString(undefined,options);
    h=clock.getHours()-4;
    m=clock.getMinutes()-30;
    s=clock.getSeconds();
    if(m>=0 && m<=60)
        m=m;
    else
    {
        h=Math.floor(m/60)+h;
        m=m-Math.floor(m/60)*60;
    }
    if(s>=0 && s<=60)
        s=s;
    else
    {
        m=Math.floor(s/60)+m;
        s=s-Math.floor(s/60)*60;
    }
    if(h>=0 && h<24)
        h=h;
    else
    {
        h=h-24;
    }

    if(h<=12)
        clk="AM";
    else
    {
        h=h-12;
        clk="PM";
    }

    time =h+":"+m+":"+s;
    document.getElementById('time').innerHTML=time+ " "+ clk + "<br>"+ date;
    document.getElementById('country').innerHTML="London";
    document.getElementById('time').style.color="rgb(52, 136, 206)"; 
    document.getElementById('country').style.color="rgb(52, 136, 206)"; 
}
function tokyo()
{
    clearInterval(timezone1);
    timezone1 = setInterval(tokyo,1000);
    var a,date,time,clk;
    const options = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
    clock = new Date();
    date = clock.toLocaleDateString(undefined,options);
    h=clock.getHours()+3;
    m=clock.getMinutes()+30;
    s=clock.getSeconds();
    if(m>=0 && m<=60)
        m=m;
    else
    {
        h=Math.floor(m/60)+h;
        m=m-Math.floor(m/60)*60;
    }
    if(s>=0 && s<=60)
        s=s;
    else
    {
        m=Math.floor(s/60)+m;
        s=s-Math.floor(s/60)*60;
    }
    if(h>=0 && h<24)
        h=h;
    else
    {
        h=h-24;
    }

    if(h<=12)
        clk="AM";
    else
    {
        h=h-12;
        clk="PM";
    }

    time =h+":"+m+":"+s;
    document.getElementById('time').innerHTML=time+ " "+ clk + "<br>"+ date;
    document.getElementById('country').innerHTML="Tokyo";
    document.getElementById('time').style.color="rgb(62, 196, 135)"; 
    document.getElementById('country').style.color="rgb(62, 196, 135)"; 
}
function dubai()
{
    clearInterval(timezone1);
    timezone1 = setInterval(dubai,1000);
    var a,date,time,clk;
    const options = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
    clock = new Date();
    date = clock.toLocaleDateString(undefined,options);
    h=clock.getHours()-1;
    m=clock.getMinutes()-30;
    s=clock.getSeconds();
    if(m>=0 && m<=60)
        m=m;
    else
    {
        h=Math.floor(m/60)+h;
        m=m-Math.floor(m/60)*60;
    }
    if(s>=0 && s<=60)
        s=s;
    else
    {
        m=Math.floor(s/60)+m;
        s=s-Math.floor(s/60)*60;
    }
    if(h>=0 && h<24)
        h=h;
    else
    {
        h=h-24;
    }

    if(h<=12)
        clk="AM";
    else
    {
        h=h-12;
        clk="PM";
    }

    time =h+":"+m+":"+s;
    document.getElementById('time').innerHTML=time+ " "+ clk + "<br>"+ date;
    document.getElementById('country').innerHTML="Dubai";
    document.getElementById('time').style.color="rgb(232, 188, 78)"; 
    document.getElementById('country').style.color="rgb(232, 188, 78)"; 
}
function sydney()
{
    clearInterval(timezone1);
    timezone1 = setInterval(sydney,1000);
    var a,date,time,clk;
    const options = {weekday:'long',year:'numeric',month:'long',day:'numeric'};
    clock = new Date();
    date = clock.toLocaleDateString(undefined,options);
    h=clock.getHours()+4;
    m=clock.getMinutes()+30;
    s=clock.getSeconds();
    if(m>=0 && m<=60)
        m=m;
    else
    {
        h=Math.floor(m/60)+h;
        m=m-Math.floor(m/60)*60;
    }
    if(s>=0 && s<=60)
        s=s;
    else
    {
        m=Math.floor(s/60)+m;
        s=s-Math.floor(s/60)*60;
    }
    if(h>=0 && h<24)
        h=h;
    else
    {
        h=h-24;
    }

    if(h<=12)
        clk="AM";
    else
    {
        h=h-12;
        clk="PM";
    }

    time =h+":"+m+":"+s;
    document.getElementById('time').innerHTML=time+ " "+ clk + "<br>"+ date;
    document.getElementById('country').innerHTML="Sydney";
    document.getElementById('time').style.color="rgb(240, 58, 95)"; 
    document.getElementById('country').style.color="rgb(240, 58, 95)"; 
}