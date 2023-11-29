const movies_info = [
  {
    Name: "The Imitation Game",
    Director: "Morten Tyldum",
    Year: 2014,
    Stars: ["Benedict Cumberbatch", "Keira Knightley", "Matthew Goode"],
    Info: "During World War II, the English mathematical genius Alan Turing tries to crack the German Enigma code with help from fellow mathematicians while attempting to come to terms with his troubled private life.",
    Poster: "./img/imitationGame.webp",
  },
  {
    Name: "Sorce Code",
    Director: "Duncan Jones",
    Year: 2011,
    Stars: ["Jake Gyllenhaal", "Michelle Monaghan", "Vera Farmiga"],
    Info: "A soldier wakes up in someone else's body and discovers he's part of an experimental government program to find the bomber of a commuter train within 8 minutes.",
    Poster: "./img/Source_Code_Poster.jpg",
  },
  {
    Name: "Inception",
    Director: "Christopher Nolan",
    Year: 2010,
    Stars: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Elliot Page"],
    Info: "A thief who steals corporate secrets through the use of dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O., but his tragic past may doom the project and his team to disaster.",
    Poster: "./img/Inception_poster.jpg",
  },
  {
    Name: "Bird Box",
    Director: "Susanne Bier",
    Year: 2018,
    Stars: ["Sandra Bullock", "Trevante Rhodes", "John Malkovich"],
    Info: "Five years after an ominous unseen presence drives most of society to suicide, a mother and her two children make a desperate bid to reach safety.",
    Poster: "./img/birdbox.jpeg",
  },
  {
    Name: "Interstellar",
    Director: "Christopher Nolan",
    Year: 2014,
    Stars: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"],
    Info: "When Earth becomes uninhabitable in the future, a farmer and ex-NASA pilot, Joseph Cooper, is tasked to pilot a spacecraft, along with a team of researchers, to find a new planet for humans.",
    Poster: "./img/interstaller.jpeg",
  },
  {
    Name: "Gifted Hands",
    Director: "Thomas Carter",
    Year: 2009,
    Stars: ["Cuba Gooding Jr.", "Kimberly EliseAunjanue ", "Ellis-Taylor"],
    Info: "Biography of Ben Carson who grew up to be Dr. Ben Carson, a world famous neurosurgeon at Johns Hopkins.",
    Poster: "./img/Gifted-hands-movie.jpg",
  },
  {
    Name: "Ayla",
    Director: "Can Ulkay",
    Year: 2017,
    Stars: ["Çetin Tekindor", "Ismail Hacioglu", "Kyung-jin Lee"],
    Info: "Sergeant Süleyman finds a little girl on a battlefield during the Korean War. He takes her and names her Ayla. Fifteen months later, Süleyman's brigade is told they will be returning to Turkey, and he is reluctant to leave her behind.",
    Poster: "./img/Ayla.jpg",
  },
  {
    Name: "Mulan",
    Director: "Niki Caro",
    Year: 2020,
    Stars: ["Liu Yifei", "Donnie Yen", "Gong Li"],
    Info: "To keep her ailing father from serving in the Imperial Army, a fearless young woman disguises herself as a man and battles northern invaders in China.",
    Poster: "./img/mulan.jpg",
  },
  {
    Name: "Puss in Boots",
    Director: "Chris Miller",
    Year: 2011,
    Stars: ["Antonio Banderas", "Salma Hayek", "Zach Galifianakis"],
    Info: "An outlaw cat, his childhood egg-friend, and a seductive thief kitty set out in search for the eggs of the fabled Golden Goose to clear his name, restore his lost honor, and regain the trust of his mother and town.",
    Poster: "./img/il_fullxfull.4471211286_30b6.webp",
  },
];

const movieContainer = document.querySelector("#movieContainer");
movies_info.forEach((movie) => {
  //  div element for the movie card
  const movieCard = document.createElement("div");
  movieCard.classList.add("movie-card");

  // adding movie information
  movieCard.innerHTML = `
      <img class="shadow p-3 mb-5 bg-white rounded" src="${
        movie.Poster
      }" alt="Poster">
      <h2>${movie.Name} (${movie.Year})</h2>
      <p><strong>Director:</strong> ${movie.Director}</p>
      <p><strong>Stars:</strong> ${movie.Stars.join(", ")}</p>
      <strong><p>${movie.Info}</p></strong>
    `;
  movieContainer.appendChild(movieCard);
});
