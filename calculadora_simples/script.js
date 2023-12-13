
const num = [...document.querySelectorAll('.num')]
const sig = [...document.querySelectorAll('.sig')]

const display = document.querySelector('#display')
const clear = document.querySelector('#clear')
const clearall = document.querySelector('#clearall')
const res = document.querySelector('#res')

let signal = false
let comma = false

num.map((el)=>{
    el.addEventListener('click',(evt)=>{
        if (evt.target.innerHTML == ','){
            if (comma == true){
            display.innerHTML+=('.')
            comma = false
        }
        }
        else{
            display.innerHTML+=(evt.target.innerHTML)
            signal = true
            comma = true
        }
    })
})

sig.map((el)=>{
    el.addEventListener('click',(evt)=>{
        if (signal == true){
            if (evt.target.innerHTML == 'x'){
                display.innerHTML+=('*')
            }
            else{
                display.innerHTML+=(evt.target.innerHTML)
            }
            signal = false
            comma = false
        }
    })
})

res.addEventListener('click',()=>{
    const exp = (eval(display.innerHTML))
    display.innerHTML= (parseFloat(exp).toFixed(2))
})

clear.addEventListener('click',()=>{
    display.innerHTML = display.innerHTML.slice(0,-1)
    signal=true
})

clearall.addEventListener('click',()=>{
    display.innerHTML=''
})