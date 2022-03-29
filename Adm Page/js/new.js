async function get(id){
    $.getJSON('http://back.alicer.com.br:50080/news?id='+id,(result) => {
        finalOne =""
            console.log(result)
            finalOne = " <p class='Title'>"+result.title+"</p><p class='Hour'>"+result.updatedAt+"</P></div><img src='"+result.img+"' class='imgMain'/><p class='Content'>"+result.content+"</p>"
          
        document.getElementsByClassName('newsContainer')[0].innerHTML=finalOne
    })


}