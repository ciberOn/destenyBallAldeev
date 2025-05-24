const arrVariants = [
    "Yes",
    "No",
    "MayBe",
    "Give me 5 kb",
    "Gm chocolate",
    "If you try hard",
    "I can not say directly",
    "Ask another one",
    "I am not ready",
    "I think another time",
    "It's will be easy",
    "I can not say now",
]

const btn = document.getElementById("btn")

btn.addEventListener("click",()=>{
    const randInt = Math.floor(Math.random()*arrVariants.length)
    alert(arrVariants[randInt])
})