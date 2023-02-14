// TODO: write your code here

// Generate the line of the wagon
const player1Line = document.getElementById("player1-race");
const player2Line = document.getElementById("player2-race");
const trees1 = document.getElementById("trees_1");
const trees2 = document.getElementById("trees_2");
const inputGenerator = document.getElementById("numberLine");
const startButton = document.getElementById("start-button");
let lanchRace = false;
let player1Wins = 0;
let player2Wins = 0;

// Generate the line of the wagon
function generateLine(length) {
  let line = "";
  for (let i = 0; i < length; i++) {
    line += "<td></td>";
  }
  console.log(line);
  // insert the line into the DOM for player 1 and player 2
  player1Line.insertAdjacentHTML("beforeend", line);
  player2Line.insertAdjacentHTML("beforeend", line);
  trees1.insertAdjacentHTML("beforeend", line);
  trees2.insertAdjacentHTML("beforeend", line);
}

// When we click on #start-button we want to generate lines and desible input and button
startButton.addEventListener("click", (event) => {
  generateLine(inputGenerator.value);
  inputGenerator.disabled = true;
  startButton.disabled = true;
  lanchGame();
});

function restart() {
  // update the score
  document.getElementById("scoreP1").innerHTML = player1Wins;
  document.getElementById("scoreP2").innerHTML = player2Wins;
  // remove all the <td> of each line
  player1Line.innerHTML = "<td></td>";
  player2Line.innerHTML = "<td></td>";
  trees1.innerHTML = "<td></td>";
  trees2.innerHTML = "<td></td>";
  // re-enable the input and the button
  inputGenerator.disabled = false;
  startButton.disabled = false;
  // reset the lanchRace variable
  lanchRace = false;
  // remove class="green" from all the <div> of full children of the #feu-tricolor
  const feuTricolor = document.getElementById("feu-tricolor");
  for (let i = 0; i < feuTricolor.children.length; i++) {
    feuTricolor.children[i].classList.remove("green");
  }
}

lanchGame = () => {
  // add class="active" to the first <td> of each line
  player1Line.querySelector("td").classList.add("active");
  player2Line.querySelector("td").classList.add("active");
  setTimeout(() => {
    console.log("red");
    const fireOne = document.getElementById("feu-tricolor").children[0];
    fireOne.classList.add("red");
    setTimeout(() => {
      console.log("red");
      let fireTwo = document.getElementById("feu-tricolor").children[1];
      fireTwo.classList.add("red");
      setTimeout(() => {
        console.log("red");
        let fireThree = document.getElementById("feu-tricolor").children[2];
        fireThree.classList.add("red");
        setTimeout(() => {
          console.log("red");
          let fireFour = document.getElementById("feu-tricolor").children[3];
          fireFour.classList.add("red");
          setTimeout(() => {
            console.log("green");
            let fireFive = document.getElementById("feu-tricolor").children[4];
            fireOne.classList.add("green");
            fireOne.classList.remove("red");
            fireTwo.classList.add("green");
            fireTwo.classList.remove("red");
            fireThree.classList.add("green");
            fireThree.classList.remove("red");
            fireFour.classList.add("green");
            fireFour.classList.remove("red");
            fireFive.classList.add("green");
            lanchRace = true;
          }, "1000");
        }, "1000");
      }, "1000");
    }, "1000");
  }, "1000");
};

window.addEventListener("keydown", (event) => {
  // console.log(event.code);
  console.log(event.code);
  if (lanchRace === true) {
    if (event.defaultPrevented) {
      return; // Do nothing if event already handled
    }

    switch (event.code) {
      case "Tab":
        // in case of "tab" key
        break;
      case "KeyD":
        // in case of "q" key
        // move class="active" to the next <td>
        // alert("q")
        player1Line
          .querySelector(".active")
          .nextElementSibling.classList.add("active");
        player1Line.querySelector(".active").classList.remove("active");
        break;
      case "KeyJ":
        // in case of "p" key
        // move class="active" to the next <td>
        // alert("p")
        player2Line
          .querySelector(".active")
          .nextElementSibling.classList.add("active");
        player2Line.querySelector(".active").classList.remove("active");
        break;
      default:
    }

    if (player1Line.querySelector(".active").nextElementSibling === null) {
      alert("Player 1 wins!");
      player1Wins += 1;
      restart();
    } else if (
      player2Line.querySelector(".active").nextElementSibling === null
    ) {
      alert("Player 2 wins!");
      player2Wins += 1;
      restart();
    }
  }
});
