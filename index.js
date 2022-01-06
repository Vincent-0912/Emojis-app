let myEmojis = []
const randomEmojis = ["😀","😃","😄","😁", "😆","😅","😂","🤣","😊", "😍","😛","😎","💩","👨‍💻",   "👨‍🍳","👨‍🔬 ","👩‍🎨","🏄🏻‍♀️","🚵🏻","🤸🏻‍♀️","🤾🏻","🧘🏻","🏊🏻‍♂️","🧗🏻‍♂️","🏂🏻","🏇🏻","👨🏻‍🏫","👨🏻‍🎓","👩🏻‍🚀"]
const addBtn = document.getElementById("add-btn");
const emojiEl = document.getElementById("emoji-el")
const randomBtn = document.getElementById("random-btn")
const addRigthBtn = document.getElementById("add-right")
const addLeftBtn = document.getElementById("add-left")
const inputEl = document.getElementById("input-el")
const minusRightBtn = document.getElementById("minusRight")
const minusLeftBtn = document.getElementById("minusLeft")

random(myEmojis)
 
function render(myArr){
    emojiEl.innerHTML="";

    for (let i=0; i<myArr.length ; i++){
        emojiEl.innerHTML += `<span class="emoji-item">${myArr[i]}</span>`
    }
}

function random(myArr){
    n = 5
    myEmojis = []
    
    for (let i =0 ; i<5 ; i++){ 
        let randomNb = Math.floor(Math.random() * randomEmojis.length)
        myEmojis.push(randomEmojis[randomNb]);
        render(myEmojis);
    }
}


addLeftBtn.addEventListener("click",function(){
    
    if (inputEl.value){
        myEmojis.unshift(inputEl.value)
        render(myEmojis)
        
        inputEl.value = ""
    }
  
})


addRigthBtn.addEventListener("click",function(){
    
    if (inputEl.value){
        myEmojis.push(inputEl.value)
        render(myEmojis)
        
        inputEl.value = ""
    }
})


randomBtn.addEventListener("click",function(){
    random(myEmojis)
})

minusLeftBtn.addEventListener("click",function(){
    myEmojis.shift()
    render(myEmojis)
})

minusRightBtn.addEventListener("click",function(){
    myEmojis.pop()
    render(myEmojis)
})
