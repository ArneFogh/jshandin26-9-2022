//Handin

// Opg 1

function whatToWear(temp) {
    const temperature = temp
    if (temperature > 18)
        return "Wear t-shirt"
    else if (temperature > 14)
        return "Wear a jacket"
    else
        return "Wear a ton of clothes"
}

console.log(whatToWear(20))

//Opg 2 part 1 & 2
function rollTheDice(numOfRolls) {
    let amountOfSixes =0
    for (let i = 0; i < numOfRolls; i++) {
        let randomNumber1 = Math.floor((Math.random() * 6) + 1);

        if (randomNumber1 === 6)
            console.log("You hit "+randomNumber1+", wooo hooo")
        else
            console.log("You hit "+randomNumber1+" try again");

        if(randomNumber1 === 6){
            amountOfSixes++
            if(amountOfSixes === numOfRolls){
                console.log("You hit a jackpot")
            }
        }
    }
}

rollTheDice(2)

//Opg 2 part 2
function rollTheDice2(numOfRolls2) {
    let amountOfSixes = 0
    for (let i = 0; i < numOfRolls2; i++) {
        let randomNumber1 = Math.floor((Math.random() * 6) + 1);

        if(randomNumber1 === 6){
            amountOfSixes++
            if(amountOfSixes === numOfRolls2){
                console.log("You hit a jackpot");
            }
        }
    }
}

rollTheDice2(0)

//Opg 3 Kunne ikke få det til at virke
/*function sentimentAnalyzer2 (string){
    string.split
    let text = "Hej med dig"
    let result = text.includes("med")

} */


function sentimentAnalyzer (sting) {
    const positive = ["Happy" +1,"Awesome" +1,"Good" +1,"Brilliant" +1]
    const negative = ["Sad" -1,"Annoyed" -1,"Sick" -1,"Die" -1, "Freddy" -100]
    function get getSentimentScore {
        let positiveScore = 0
        string.split(" ")
        for (let i = 0; 1 <; i++) {
            splitted.text.length
            if positive includes === true++
            1
        }
        if negative includes === true
        i++
    }
}

console.log(sentimentAnalyzer("I Am Happy"))