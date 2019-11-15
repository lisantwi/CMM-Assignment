document.addEventListener('DOMContentLoaded', function(){
    console.log('test')
    repeatText()
})

function repeatText(){
    const divText = document.querySelector('.div-text')
    const mainDiv = document.querySelector('.hello')
    for (let i=0; i< 300; i++){
        if (i % 5 === 3  ){
            let newDiv = mainDiv.appendChild(divText.cloneNode())
            newDiv.textContent = 'Hello, CoverMyMeds'
        } else{
            mainDiv.appendChild(divText.cloneNode(true))
        }
    
        
    }

}