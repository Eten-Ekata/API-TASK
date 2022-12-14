// Get id from index file and assign to const rootDiv variable

const rootDiv = document.getElementById("root");



// Declaring a function to display none when document is in block style

function showDetails(id) {
  const infoDiv = document.getElementById(id);
  if (infoDiv.style.display == "block") {
    infoDiv.style.display = "none";
  } else {
    infoDiv.style.display = "block";
  }
}

//  Assigning images to const imageArr variable

const imageArr = [
  "luke-skywalker.jpeg",
  "C-3PO..jpeg",
  "R2D2.jpeg",
  "Darth-Vader.jpeg",
  "Leia.jpeg",
  "Owen-Lars.jpeg",
  "Beru_Lars_001.jpeg",
  "R5D4.jpeg",
  "BiggsRebel.jpeg",
  "obiwan.jpeg",
];

//Assigning output to an empty string
let output = "";

// fetch API using .then method

fetch("https://swapi.dev/api/people")

  .then((res) => res.json())
  .then((data) => {

// Loop through array

    for (let i = 0; i < data.results.length; i++) 

    // Inner html display
    {
      output += ` 
       <section class="character">
          <div class="img-box">
            <img src='images/${imageArr[i]}' class="char-img" alt="image of ${data.results[i].name}"/>
          </div>
          <div>
            <button type="button" onclick="showDetails('myDiv${i}')">
              <p>${data.results[i].name}</p>
            </button>
            <div style='display:none'  id='myDiv${i}' class ="info">
              <h4 style='text-align:center'>Gender: ${data.results[i].gender}</h4>
              <p  style='text-align:center'>Height: ${data.results[i].height}cm</p>
            </div>
       </section>                            
          `;
        }
       

    rootDiv.innerHTML = output;
  });

 

