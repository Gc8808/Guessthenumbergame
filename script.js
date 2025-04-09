const numbers = Array.from({ length: 50 }, (_, i) => i + 1);
let selectedNumber = '';

document.getElementById('starterBtn').addEventListener('click', () => {
    document.getElementById('starterBtn').classList.add('d-none');
    
    document.getElementById('easyBtn').classList.remove('d-none');
    document.getElementById('mediumBtn').classList.remove('d-none');
    document.getElementById('hardBtn').classList.remove('d-none');
    document.getElementById('impossibleBtn').classList.remove('d-none');
});

function selectedEasy() {
    let easyNumbers = numbers.filter(number => number <= 10);
    selectedNumber = Math.floor(Math.random() * easyNumbers.length);
    console.log(`Selected Easy Number: ${selectedNumber}`);
    document.getElementById('easyBtn').classList.add('d-none');
    document.getElementById('mediumBtn').classList.add('d-none');
    document.getElementById('hardBtn').classList.add('d-none');
    document.getElementById('impossibleBtn').classList.add('d-none');
    document.getElementById('inputZone').classList.remove('d-none');
    document.getElementById('submitGuessBtn').classList.remove('d-none');
  document.getElementById('difficultySelection').classList.remove('d-none')
  document.getElementById('difficultySelection').classList.add('easy')
  document.getElementById('textBox').innerHTML('Easy mode...')
  startGameMode()
return;

}