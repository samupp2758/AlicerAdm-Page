async function get(id){
    $.getJSON('http://back.alicer.com.br:50080/events?id='+id,(result) => {
        finalOne =""
            console.log(result)
            finalOne = "<p class='Date'>"+result.date+"</p><p class='Title'>"+result.title+"</p><p class='Hour'>Hora:"+result.hour+"</p><p class='Local'>Local:"+result.local+"</p><p class='Content'>"+result.content+"</p>  <img src='"+result.img+"' class='imgMain'/>"
          
            document.getElementsByClassName('eventsContainer')[0].innerHTML=finalOne
        //document.getElementsByClassName('newsContainer')[0].innerHTML=finalOne
    })


}