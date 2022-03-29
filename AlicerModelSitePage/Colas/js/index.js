resultMor = []

async function get(limi){
    $.getJSON('http://back.alicer.org.br:50080/contributors?limit='+limi,(result) => {
        finalOne =""
        resultMor = result
        for(a = 0; result.length>a; a++){
            console.log(result[a].img)
            finalOne+="<div  class='cola'><img id='colaBk' class='colaBk' src=\'"+result[a].img+"\'/><img id='colaBkO' class='colaBkO'/><div class='colaContent'><p class='colaTitle' id='colaTitle'>"+result[a].name+" "+result[a].lastName+"</p></div></div>"
    //onclick="+'window.location.href="cola.html"'+";localStorage.setItem('id',"+result[a].id+");"+"
            //document.getElementsByClassName('news').innerHTML+=" <div onclick='alert("+result[a].id+")' class='new'><img class='imgBk' src="+result[a].img+"/><div class='TextContent'><p class='NewData'>"+result[a].date+"às"+result[a].hour+"</p><p class='Newtitle'>"+result[a].title+"</p><p class='NewSDescpt'>"+result[a].content+"</p></div></div>"
        }
      document.getElementsByClassName('colas')[0].innerHTML=finalOne
    })


}

async function search(theBoy,c){
    console.log(theBoy.value)
    aa = 0;
    var searchResult = [];
    for(a=0;a<resultMor.length;a++){
    console.log(resultMor[a].title)
    if(resultMor[a].name.includes(theBoy.value) && theBoy.value != "" && theBoy.value != " "){
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
            finalOne+="<div onclick="+'window.location.href="cola.html"'+";localStorage.setItem('id',"+searchResult[a].id+");"+" class='cola'><img id='colaBk' class='colaBk' src=\'"+searchResult[a].img+"\'/><img id='colaBkO' class='colaBkO'/><div class='colaContent'><p class='colaTitle' id='colaTitle'>"+searchResult[a].name+" "+searchResult[a].lastName+"</p></div></div>"
        
            //document.getElementsByClassName('news').innerHTML+=" <div onclick='alert("+result[a].id+")' class='new'><img class='imgBk' src="+result[a].img+"/><div class='TextContent'><p class='NewData'>"+result[a].date+"às"+result[a].hour+"</p><p class='Newtitle'>"+result[a].title+"</p><p class='NewSDescpt'>"+result[a].content+"</p></div></div>"
        }
        document.getElementsByClassName('colas')[0].innerHTML=finalOne
        document.getElementsByClassName('colas')[0].style.display="grid"
    }else if(theBoy.value == "" || theBoy.value == " "){
        get(c)
        document.getElementsByClassName('colas')[0].style.display="grid"

    }else if(searchResult.length == 0){
        document.getElementsByClassName('colas')[0].innerHTML="<p class='notNews'>Não há colaboradores atualmente!</p>"
        document.getElementsByClassName('colas')[0].style.display="flex"
        
    }   
}