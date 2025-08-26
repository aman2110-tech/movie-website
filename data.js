// Movie dataset
const moviesData = [
  {
    title: "Wednesday",
    image: "wednesdayLogo.webp",
    year: 2022,
    genre: "Mystery, Fantasy, Comedy",
    description: "Wednesday Addams joins Nevermore Academy and uncovers dark secrets about her family and the school."
  },
  {
    title: "The Kapil Sharma Show",
    image: "kapil.jpg",
    year: 2016,
    genre: "Comedy, Talk Show",
    description: "Kapil Sharma hosts India’s most loved comedy talk show with celebrity guests and laughter skits."
  },
  {
    title: "Raid",
    image: "raid.jpeg",
    year: 2018,
    genre: "Crime, Drama",
    description: "An honest income-tax officer carries out a high-profile raid at a politician’s house."
  },
  {
    title: "Squid Game",
    image: "squid-game.jpeg",
    year: 2021,
    genre: "Thriller, Drama",
    description: "Hundreds compete in deadly survival games for a massive cash prize."
  },
  {
    title: "Saare Jahan Se Acha",
    image: "saare-jahan.jpeg",
    year: 2025,
    genre: "Drama, Biography",
    description: "A patriotic drama inspired by true Indian stories of bravery."
  },
  {
    title: "Mandala Murders",
    image: "mandala-murders.jpeg",
    year: 2024,
    genre: "Thriller, Crime",
    description: "A chilling murder mystery filled with suspense and mind games."
  },
  {
    title: "Maaresan",
    image: "maaresan.jpeg",
    year: 2023,
    genre: "Action, Drama",
    description: "A rural action drama highlighting courage and loyalty."
  },
  {
    title: "Jaat",
    image: "jaat.jpeg",
    year: 2024,
    genre: "Drama",
    description: "A cultural drama set in northern India focusing on identity and pride."
  },
  {
    title: "Aap Jaisa Koi",
    image: "aap-jaisa-koi.jpeg",
    year: 2025,
    genre: "Romance, Drama",
    description: "A heartfelt romantic journey exploring love and relationships."
  },
  {
    title: "The Shawshank Redemption",
    image: "shawshank.jpeg",
    year: 1994,
    genre: "Drama",
    description: "Two imprisoned men bond over years and find solace and eventual redemption through acts of common decency."
  },
  {
    title: "The Dark Knight",
    image: "dark-knight.webp",
    year: 2008,
    genre: "Action, Crime",
    description: "Batman faces his toughest foe, the Joker, who wants to push Gotham into chaos."
  },
  {
    title: "Inception",
    image: "Inception.webp",
    year: 2010,
    genre: "Sci-Fi, Action",
    description: "A skilled thief steals corporate secrets by infiltrating dreams."
  },
  {
    title: "Interstellar",
    image: "intersteller.webp",
    year: 2014,
    genre: "Sci-Fi, Drama",
    description: "Astronauts travel through a wormhole in search of a new habitable planet."
  },
  {
    title: "Fight Club",
    image: "fight.webp",
    year: 1999,
    genre: "Drama, Thriller",
    description: "An underground fight club evolves into something far more sinister."
  },
  {
    title: "Parasite",
    image: "parasite.webp",
    year: 2019,
    genre: "Drama, Thriller",
    description: "A poor family infiltrates a wealthy household with unforeseen consequences."
  },
  {
    title: "Forrest Gump",
    image: "forest.webp",
    year: 1994,
    genre: "Drama, Romance",
    description: "The life journey of Forrest Gump, a man with a kind heart and simple mind."
  },
  {
    title: "John Wick",
    image: "john.webp",
    year: 2014,
    genre: "Action, Thriller",
    description: "A retired hitman seeks vengeance against those who wronged him."
  },
  {
    title: "Extraction",
    image: "extraction.webp",
    year: 2020,
    genre: "Action, Thriller",
    description: "A mercenary is tasked with rescuing a kidnapped child in Dhaka."
  },
  {
    title: "Mad Max: Fury Road",
    image: "mad-mask.webp",
    year: 2015,
    genre: "Action, Adventure",
    description: "A post-apocalyptic desert wasteland chase with survival at stake."
  },
  {
    title: "Avengers: Endgame",
    image: "avengers.webp",
    year: 2019,
    genre: "Action, Sci-Fi",
    description: "The Avengers unite to undo Thanos’ devastating snap."
  },
  {
    title: "The Batman",
    image: "batman.webp",
    year: 2022,
    genre: "Action, Crime",
    description: "Batman uncovers corruption in Gotham and hunts down the Riddler."
  },
  {
    title: "Mission Impossible",
    image: "mission.webp",
    year: 1996,
    genre: "Action, Thriller",
    description: "Ethan Hunt goes on impossible spy missions against global threats."
  },
  {
    title: "Gladiator",
    image: "gladiater.webp",
    year: 2000,
    genre: "Action, Drama",
    description: "A betrayed Roman general seeks revenge as a gladiator."
  },
  {
    title: "The Hangover",
    image: "hangover.webp",
    year: 2009,
    genre: "Comedy",
    description: "Three friends wake up from a wild night in Vegas with no memory of what happened."
  },
  {
    title: "Jumanji",
    image: "jumanji.webp",
    year: 2017,
    genre: "Comedy, Adventure",
    description: "Teens are sucked into a magical video game and must play to survive."
  },
  {
    title: "Deadpool",
    image: "deadpool.webp",
    year: 2016,
    genre: "Comedy, Action",
    description: "A wisecracking mercenary gains healing powers and seeks revenge."
  },
  {
    title: "Central Intelligence",
    image: "central.webp",
    year: 2016,
    genre: "Comedy, Action",
    description: "A mild-mannered accountant gets caught up in international espionage."
  },
  {
    title: "The Mask",
    image: "mask.webp",
    year: 1994,
    genre: "Comedy, Fantasy",
    description: "A man discovers a magical mask that transforms him into a zany trickster."
  },
  {
    title: "Home Alone",
    image: "home.webp",
    year: 1990,
    genre: "Comedy, Family",
    description: "An 8-year-old must defend his house from burglars during Christmas."
  },
  {
    title: "21 Jump Street",
    image: "jump.webp",
    year: 2012,
    genre: "Comedy, Action",
    description: "Two cops go undercover as high school students to bust a drug ring."
  },
  {
    title: "The Notebook",
    image: "notebook.webp",
    year: 2004,
    genre: "Romance, Drama",
    description: "A young couple falls deeply in love but face obstacles over the years."
  },
  {
    title: "Titanic",
    image: "titanic.jpg",
    year: 1997,
    genre: "Romance, Drama",
    description: "A love story unfolds aboard the ill-fated RMS Titanic."
  },
  {
    title: "To All the Boys I’ve Loved Before",
    image: "all boys.webp",
    year: 2018,
    genre: "Romance, Comedy",
    description: "A teenage girl’s secret love letters are exposed, turning her life upside down."
  },
  {
    title: "La La Land",
    image: "lala.webp",
    year: 2016,
    genre: "Romance, Musical",
    description: "An aspiring actress and a jazz musician pursue their dreams and love in Los Angeles."
  },
  {
    title: "A Walk to Remember",
    image: "walk.webp",
    year: 2002,
    genre: "Romance, Drama",
    description: "A rebellious teen falls in love with a quiet girl with a life-changing secret."
  },
  {
    title: "Me Before You",
    image: "me.webp",
    year: 2016,
    genre: "Romance, Drama",
    description: "A small-town girl forms an unlikely bond with a paralyzed man."
  },
  {
    title: "Crazy Rich Asians",
    image: "crazy.webp",
    year: 2018,
    genre: "Romance, Comedy",
    description: "A woman discovers her boyfriend is from one of Asia’s richest families."
  }
];

