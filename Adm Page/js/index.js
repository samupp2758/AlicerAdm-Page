async function get(limi){
    $.getJSON('http://back.alicer.com.br:50080/news?limit='+limi,(result) => {
        finalOne =""
        for(a = 0; result.length>a; a++){
            console.log(result[a].img)
            finalOne+="<div onclick="+'window.location.href="new.html"'+";localStorage.setItem('id',"+result[a].id+");"+"  class='New'><img class='NewimgBk' src='"+result[a].img+"'/><div class='NewContent'><p class='NewTitle'>"+result[a].title+"</p><p class='NewHour'>"+result[a].updatedAt+"</p><p class='NewDesc'>"+result[a].content+"</p></div></div>"
            //document.getElementsByClassName('news').innerHTML+=" <div onclick='alert("+result[a].id+")' class='new'><img class='imgBk' src="+result[a].img+"/><div class='TextContent'><p class='NewData'>"+result[a].date+"às"+result[a].hour+"</p><p class='Newtitle'>"+result[a].title+"</p><p class='NewSDescpt'>"+result[a].content+"</p></div></div>"
        }
        document.getElementsByClassName('News')[0].innerHTML=finalOne
    })


}