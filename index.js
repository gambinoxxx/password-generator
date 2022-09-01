const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];
let passwordEd2 = document.getElementById("password-el")
let passwordEd = document.getElementById("password")
let buttonGenerator = document.getElementById("generatePass")
//let buttonGenerator= document.getElementById("demo").innerHTML("generatePass")

buttonGenerator.addEventListener("click", function() {
        
        let passwordLenght = 12
        function getrandomCharater (){
    let randomCharater = Math.floor( Math.random() * characters.length)
       return characters[randomCharater]
        }
        function getrandomCharater2 (){
    let randomCharater2 = Math.floor( Math.random() * characters.length)
    return characters[randomCharater2]
    }
    function getRandompass2 (){
        let randompass1 =""
        for (let i =0 ; i < passwordLenght; i++){
            randompass1 += getrandomCharater2()
        
        }
        return randompass1
    }
   function getRandompass (){
       let randompass =""
   for (let i= 0; i < passwordLenght; i++){
        randompass += getrandomCharater()
   }
   return randompass
   }
   const passRom = getRandompass()
passwordEd.textContent = passRom
const passRom1 = getRandompass2()
        passwordEd2.textContent = passRom1
})




