const Data = [
    { id: 1, images: ["1-correct.png", "1-fake.png"] },
    { id: 2, images: ["2-correct.png", "2-fake.png"] },
    { id: 3, images: ["3-correct.png", "3-fake.png"] },
    { id: 4, images: ["4-correct.png", "4-fake.png"] },
    { id: 5, images: ["5-correct.png", "5-fake.png"] },
    { id: 6, images: ["6-correct.png", "6-fake.png"] },
    { id: 7, images: ["7-correct.png", "7-fake.png"] },
    { id: 8, images: ["8-correct.png", "8-fake.png"] },
    { id: 9, images: ["9-correct.png", "9-fake.png"] },
    { id: 10, images: ["10-correct.png", "10-fake.png"] }
]
export const quizData  = shuffle(Data)
console.log(quizData)

export function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex != 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }