
const screen1 =  document.querySelector(".screen1")
const screen2 =  document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnRest = document.querySelector("#btnRest")



function handleTryClick(event){
    event.preventDefault()
    let randomNumber = Math.round(Math.random() * 4)
    const arrayLuck = [
        '"Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."',
        '"Nossos fracassos, às vezes, são mais frutíferos do que os êxitos"',
        '"Tente de novo. Fracasse de novo. Mas fracasse melhor"',
        '"É costume de um tolo, quando erra, queixar-se dos outros. É costume de um sábio queixar-se de si mesmo"',
        '"Mesmo que já tenhas feito uma longa caminhada, há sempre um novo caminho a fazer"'
    ]

    
    toggleScreen()
    document.querySelector(".screen2 .card-luck").innerText =  arrayLuck[randomNumber]
    console.log(randomNumber)
}

function handleResetClick(){
    toggleScreen()
}

function toggleScreen(){
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}

btnTry.addEventListener('click', handleTryClick)
btnRest.addEventListener('click', handleResetClick)
document.addEventListener("keydown", function(e){
    if(e.key == 'Enter' && screen1.classList.contains("hide")){
        handleResetClick()
    }
})