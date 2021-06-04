let input = document.querySelector('.input')
let power = null
// TO ADD NUMBER
function insert (num) {
    if(input.textContent == 0){
        input.textContent = ""
        input.textContent += num
    } else{
        input.textContent += num
    }  
}
// TO DELETE ALL NUMBERS
function clean () {
    input.textContent = "0"
    power = ""
}
// TO DELETE ONE NUMBER
function back () {
    let exp = input.textContent
    input.textContent = exp.substring(0, exp.length-1)
    if(input.textContent == 0){
        input.textContent = "0"
    }
}
// TO OBTAIN THE RESULT
function equal () {
    let exp = input.textContent
    if(input.textContent.includes('^')){
        let tmp = input.textContent.split('^')
        let num = eval(power)
        let pow = +tmp[1]
        input.textContent =Math.pow(num, pow)
        power = ""
        return
    }
    if(exp){
        input.textContent = eval(exp)
    }
}
// TO GET A PERCENTAGE
function percent(){
    input.textContent = eval(input.textContent)/100
}
// TO ADD CONSTANTS
function constant(name){
    if(input.textContent == 0){
        input.textContent = ""
    }
    if (name === 'pi'){
        input.textContent += Math.PI.toFixed(8)
    }
    if (name === 'e'){
        input.textContent += Math.E.toFixed(8)
    }
}
// EXPONENTIATION
function operation(name){
    if(name == 'sqrt'){
        input.textContent = Math.sqrt(eval(input.textContent)).toFixed(8)
    }
    if(name == 'sqr'){
        input.textContent = Math.pow(eval(input.textContent), 2)
    }
    if(name == '^-1'){
        input.textContent = Math.pow(eval(input.textContent), -1).toFixed(8)
    }
    if(name == '^'){
        power = input.textContent
        input.textContent += "^"
    }
}
// FACTORIAL
function factorial(n) {
    return (n != 1) ? n * factorial(n-1) : 1
}
function fact(){
    input.textContent = factorial(+eval(input.textContent))
}
// LOGARITHMS
function log(name){
    if(name == 'lg'){
        input.textContent = Math.log10(eval(input.textContent))
    }
    if(name == 'ln'){
        input.textContent = Math.log(eval(input.textContent)).toFixed(8)
    }
}
// TRIGONOMETRY
document.querySelector('.type').addEventListener('click', function(){
    if (document.querySelector('.type').textContent == "deg"){
        this.textContent = "rad"
        console.log('degrees')
    } else if (document.querySelector('.type').textContent == "rad"){
        this.textContent = "deg"
        console.log('radians')
    }
})

function f(name){
    if(name == 'sin'){
        if (document.querySelector('.type').textContent == "deg"){
            // degries
            input.textContent = parseFloat(Math.sin(eval(input.textContent)/180*Math.PI).toFixed(8).toString()) 
        } else if (document.querySelector('.type').textContent == "rad"){
            // radians
            input.textContent = parseFloat(Math.sin(eval(input.textContent)).toFixed(8).toString())
        }   
    }
    if(name == 'cos'){
        if (document.querySelector('.type').textContent == "deg"){
            // degries
            input.textContent = parseFloat(Math.cos(eval(input.textContent)/180*Math.PI).toFixed(8).toString()) 
        } else if (document.querySelector('.type').textContent == "rad"){
            // radians
            input.textContent = parseFloat(Math.cos(eval(input.textContent)).toFixed(8).toString())
        }  
    }
    if(name == 'tan'){
        if (document.querySelector('.type').textContent == "deg"){
            // degries
            input.textContent = parseFloat(Math.tan(eval(input.textContent)/180*Math.PI).toFixed(8).toString())  
        } else if (document.querySelector('.type').textContent == "rad"){
            // radians
            input.textContent = parseFloat(Math.tan(eval(input.textContent)).toFixed(8).toString())
        }
        
    }
    if(name == 'ctg'){
        if (document.querySelector('.type').textContent == "deg"){
            // degries
            input.textContent = parseFloat(1/Math.tan(eval(input.textContent)/180*Math.PI).toFixed(4).toString()) 
        } else if (document.querySelector('.type').textContent == "rad"){
            // radians
            input.textContent = parseFloat(1/Math.tan(eval(input.textContent)).toFixed(4).toString())
        }   
    }      
}