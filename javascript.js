const canvas=document.querySelector(".canvas")
const button=document.querySelector(".newCanvas")
const clear=document.querySelector(".clear")

//Functions
const creategrid=(()=>{
    let input= prompt("Enter number of grids, max 100 min 1")
    if(input>100)input=100
    if(input<1)input=1
    let canvasSize=input*input
    let divSize=Math.sqrt((250000/canvasSize))
    for (let i=0; i<canvasSize; i++){
        const etchDiv=document.createElement("div")
        etchDiv.style.height=`${divSize}px`
        etchDiv.style.width=`${divSize}px`
        etchDiv.style.flexShrink="0"
        etchDiv.addEventListener("mouseenter",changeColor)
        canvas.append(etchDiv)
        
    }
    
})
const clearCanvas=(()=>{
    while(canvas.firstChild){canvas.removeChild(canvas.firstChild)}
})

const changeColor=((e)=>{e.target.style.backgroundColor="black"})

//Event listeners
clear.addEventListener("click", clearCanvas)
button.addEventListener("click", creategrid)




