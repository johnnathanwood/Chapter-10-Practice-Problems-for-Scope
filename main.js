


for (let i = 0; i <=10; i++){
    console.log(i)
   setTimeout(function() {
       console.log(' The number is ' + i);
   },1000);
}

let cookies = ["Oatmeal Raisin", "Chocolate Chip", "Sugar", "Peanut Butter", "Snickerdoodle", "Ginger"]
let y = 1

for (let x = 1; x < cookies.length; x++) {
    let currentCookie = cookies[x]
    console.log(`Mmmmmmm... that's a good ${currentCookie} cookie`)
}

const conjunction = function (firstWord, secondWord) {
        const conjoinedWord = `${firstWord} ${secondWord}`
        console.log(conjoinedWord)
    }
    
    conjunction("Master", "Card")   