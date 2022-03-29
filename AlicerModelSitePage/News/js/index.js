resultMor = []

async function get(limi){
    $.getJSON('http://back.alicer.org.br:50080/news?limit='+limi,(result) => {
        finalOne =""
        resultMor = result
        for(a = 0; result.length>a; a++){
            console.log(result[a].img)
            finalOne+=" <div onclick="+'window.location.href="new.html"'+";localStorage.setItem('id',"+result[a].id+");"+" class='new'><img class='Black' src='https://assetstools.cosentino.com/api/v1/bynder/color/SL6/tablahd/SL6-fullslab.jpg?w=1920&h=1080&fit=crop&auto=compress,format'/><img class='imgBk' src='"+result[a].img+"'/><div class='TextContent'><p class='NewData'>"+result[a].updatedAt+"</p><p class='Newtitle'>"+result[a].title+"</p><p class='NewSDescpt'>"+result[a].content+"</p></div></div>"
        
            //document.getElementsByClassName('news').innerHTML+=" <div onclick='alert("+result[a].id+")' class='new'><img class='imgBk' src="+result[a].img+"/><div class='TextContent'><p class='NewData'>"+result[a].date+"às"+result[a].hour+"</p><p class='Newtitle'>"+result[a].title+"</p><p class='NewSDescpt'>"+result[a].content+"</p></div></div>"
        }
        document.getElementsByClassName('news')[0].innerHTML=finalOne
    })


}

async function search(theBoy,c){
    console.log(theBoy.value)
    aa = 0;
    var searchResult = [];
    for(a=0;a<resultMor.length;a++){
    console.log(resultMor[a].title)
    if(resultMor[a].title.includes(theBoy.value) && theBoy.value != "" && theBoy.value != " "){
        searchResult[aa] = await resultMor[a]
        aa++
    }
    }
    console.log(aa)
    console.log(searchResult)
    var finalOne=""
    if(searchResult.length != 0){
        for(b = 0; searchResult.length>b; b++){
            console.log(searchResult[b].img)
            finalOne+=" <div onclick="+'window.location.href="new.html"'+";localStorage.setItem('id',"+searchResult[b].id+");"+" class='new'><img class='Black' src='https://assetstools.cosentino.com/api/v1/bynder/color/SL6/tablahd/SL6-fullslab.jpg?w=1920&h=1080&fit=crop&auto=compress,format'/><img class='imgBk' src='"+searchResult[b].img+"'/><div class='TextContent'><p class='NewData'>"+searchResult[b].updatedAt+"</p><p class='Newtitle'>"+searchResult[b].title+"</p><p class='NewSDescpt'>"+searchResult[b].content+"</p></div></div>"
        
            //document.getElementsByClassName('news').innerHTML+=" <div onclick='alert("+result[a].id+")' class='new'><img class='imgBk' src="+result[a].img+"/><div class='TextContent'><p class='NewData'>"+result[a].date+"às"+result[a].hour+"</p><p class='Newtitle'>"+result[a].title+"</p><p class='NewSDescpt'>"+result[a].content+"</p></div></div>"
        }
        document.getElementsByClassName('news')[0].innerHTML=finalOne
        document.getElementsByClassName('news')[0].style.display="grid"
    }else if(theBoy.value == "" || theBoy.value == " "){
        get(c)
        document.getElementsByClassName('news')[0].style.display="grid"

    }else if(searchResult.length == 0){
        document.getElementsByClassName('news')[0].innerHTML="<p class='notNews'>Não notícias atualmente!</p>"
        document.getElementsByClassName('news')[0].style.display="flex"
        
    }   
}