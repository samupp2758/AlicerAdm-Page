async function get(limi){
    $.getJSON('http://back.alicer.com.br:50080/events?limit='+limi,(result) => {
        finalOne =""
        for(a = 0; result.length>a; a++){
            console.log(result[a].img)
            finalOne+="<div onclick="+'window.location.href="event.html"'+";localStorage.setItem('id',"+result[a].id+");"+" class='event'><img class='imgBk' src='"+result[a].img+"'/><div class='TextContent'><p class='EventData'>"+result[a].date+"</p><p class='Eventitle'>"+result[a].title+"</p><p class='EventSDescpt'>Local: "+result[a].local+"</p><p class='EventSDescpt'>Horário: "+result[a].hour+"</p></div></div>"
            //document.getElementsByClassName('news').innerHTML+=" <div onclick='alert("+result[a].id+")' class='new'><img class='imgBk' src="+result[a].img+"/><div class='TextContent'><p class='NewData'>"+result[a].date+"às"+result[a].hour+"</p><p class='Newtitle'>"+result[a].title+"</p><p class='NewSDescpt'>"+result[a].content+"</p></div></div>"
        }
        document.getElementsByClassName('events')[0].innerHTML=finalOne
        finalOne = ""
    })


}