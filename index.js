document.addEventListener("DOMContentloaded", (e) => {
  // invoking a function here will make sure it happens on page load
  // your code here

});

// Btn declaration
let titanicBtn = document.getElementById("Titanic")
let terminatorBtn = document.getElementById("Terminator 2")

// Btn event listener
titanicBtn.addEventListener("click", function() {
  loadContent("Titanic")
})

terminatorBtn.addEventListener("click", function() {
  loadContent("Terminator 2")
})

// Default load
window.onload = loadContent("Titanic")

// Load content
function loadContent(movieTitle) {
  let jsonFile = movies[movieTitle]
  document.getElementById("title").innerHTML = jsonFile.title
  document.getElementById("director").innerHTML = jsonFile.director
  document.getElementById("genre").innerHTML = jsonFile.genre
  document.getElementById("filmRating").innerHTML = jsonFile.filmRating
  document.getElementById("title").innerHTML = jsonFile.title
  document.getElementById("poster").src = jsonFile.poster
  document.getElementById("description").innerHTML = jsonFile.description
  document.getElementById("audienceScore").innerHTML = jsonFile.audienceScore

  function castMembers() {
    let castEl = jsonFile.cast
    document.getElementById("cast").innerHTML = ""
    for (i = 0; i < castEl.length; i++) {
      document.getElementById("cast").innerHTML += `
        <div>
          <div>${castEl[i]["role"]}</div>
          <div>${castEl[i]["actor"]}</div>
        </div>
      `
    }
  }
  castMembers()
  
  function reviews() {
    let reviewEl = jsonFile.reviews
    document.getElementById("reviews").innerHTML = ""
    for (i = 0; i < reviewEl.length; i++) {
      document.getElementById("reviews").innerHTML += `
        <div>
          <div>${reviewEl[i]["content"]}</div>
          <div><b>${reviewEl[i]["username"]}</b></div>
        </div>
      `
    }
  }
  reviews()

}



