let users = [
  {
    Username: 'john_doe',
    Password: 'john_doe',
    Email: 'john_doe@mail.com',
    BirthDate: new Date('10/10/1980'),
    FavMovies: [{"$oid":"6281084122226625152651d3"},{"$oid":"6281084122226625152651d4"}]
  },
  {
    Username: 'jane_doe',
    Password: 'jane_doe',
    Email: 'jane_doe@mail.com',
    BirthDate: new Date('10/10/1990'),
    FavMovies: [{"$oid":"6281084122226625152651d5"},{"$oid":"6281084122226625152651d6"}]
  },
  {
    Username: 'iron_man',
    Password: 'iron_man',
    Email: 'iron_man@mail.com',
    BirthDate: new Date('10/10/1990'),
    FavMovies: [{"$oid":"6281084122226625152651d7"},{"$oid":"6281084122226625152651d8"}]
  },
  {
    Username: 'bat_man',
    Password: 'bat_man',
    Email: 'bat_man@mail.com',
    BirthDate: new Date('10/10/1989'),
    FavMovies: [{"$oid":"6281084122226625152651d9"},{"$oid":"6281084122226625152651da"}]
  },
  {
    Username: 'cat_woman',
    Password: 'cat_woman',
    Email: 'cat_woman@mail.com',
    BirthDate: new Date('10/10/1990'),
    FavMovies: [{"$oid":"6281084122226625152651db"},{"$oid":"6281084122226625152651dc"}]
}
]

let genres = [
  {
    Name: 'Action',
    Description: 'Associated with particular types of spectacle (e.g., explosions, chases, combat).'
  },
  {
    Name: 'Adventure',
    Description: 'Implies a narrative that is defined by a journey (often including some form of pursuit) and is usually located within a fantasy or exoticized setting. Typically, though not always, such stories include the quest narrative. The predominant emphasis on violence and fighting in action films is the typical difference between the two genres.'
  },
  {
    Name: 'Animated',
    Description: 'A film medium in which the film\'s images are primarily created by computer or hand and the characters are voiced by actors. Animation can otherwise incorporate any genre and subgenre and is often confused as a genre itself.'
  },
  {
    Name: 'Comedy',
    Description: 'Defined by events that are primarily intended to make the audience laugh.'
  },
  {
    Name: 'Drama',
    Description: 'Focused on emotions and defined by conflict, often looking to reality rather than sensationalism.'
  },
  {
    Name: 'Fantasy',
    Description: 'Films defined by situations that transcend natural laws and/or by settings inside a fictional universe, with narratives that are often inspired by or involve human myths. The genre typically incorporates non-scientific concepts such as magic, mythical creatures, and supernatural elements.'
  },
  {
    Name: 'Historical',
    Description: 'Films that either provide more-or-less accurate representations of historical accounts or depict fictional narratives placed inside an accurate depiction of a historical setting.'
  },
    {
      Name: 'Horror',
      Description: 'Films that seek to elicit fear or disgust in the audience for entertainment purposes.'
    },
    {
      Name: 'Noir',
      Description: 'A genre of stylish crime dramas particularly popular during the 1940s and \'50s. They were often reflective of the American society and culture at the time.'
    },
  {
    Name: 'Science fiction',
    Description: 'Films are defined by a combination of imaginative speculation and a scientific or technological premise, making use of the changes and trajectory of technology and science. This genre often incorporates space, biology, energy, time, and any other observable science.'
  },
  {
    Name: 'Thriller',
    Description: 'Films that evoke excitement and suspense in the audience. The suspense element found in most films\' plots is particularly exploited by the filmmaker in this genre. Tension is created by delaying what the audience sees as inevitable, and is built through situations that are menacing or where escape seems impossible.'
  },
  {
    Name: 'Western',
    Description: 'A genre in which films are set in the American West during the 19th century and embodies the \'spirit, the struggle and the demise of the new frontier.\' These films will often feature horse riding, violent and non-violent interaction with Native-American tribes, gunfights, and technology created during the industrial revolution.'
  }
]

let directors = [
  {
    Name: 'Frank Darabont',
    Bio: 'Frank Darabont (born January 28, 1959) is a Hungarian-American film director, screenwriter and producer who has been nominated for three Academy Awards and a Golden Globe. He was born in France by Hungarian parents who fled Budapest during the 1956 uprising, but the family moved to Los Angeles while he was still an infant.',
    BirthYear: '1959'
  },
  {
    Name: 'Francis Ford Coppola',
    Bio: 'Francis Ford Coppola  (born April 7, 1939) is an American film director, producer and screenwriter. He is widely acclaimed as one of Hollywood\'s most celebrated and influential film directors. He epitomized the group of filmmakers known as the New Hollywood, which included George Lucas, Martin Scorsese, Robert Altman, Woody Allen and William Friedkin, who emerged in the early 1970s with unconventional ideas that challenged contemporary filmmaking.',
    BirthYear: '1939'
  },
  {
    Name: 'Christopher Nolan',
    Bio: 'FChristopher Edward Nolan, CBE (born 30 July 1970) is a British-American film director, screenwriter, and producer. He was born in Westminster, London, England and holds both British and American citizenship due to his American mother. He is known for writing and directing critically acclaimed films such as Memento (2000), The Prestige (2006), The Dark Knight Trilogy (2005-12), Inception (2010), Interstellar (2014) and Dunkirk (2017). Nolan is the founder of the production company Syncopy Films. He often collaborates with his wife, producer Emma Thomas, and his brother, screenwriter Jonathan Nolan.',
    BirthYear: '1970'
  },
  {
    Name: 'Peter Jackson',
    Bio: 'Sir Peter Robert Jackson, (born 31 October 1961) is a New Zealand film director, producer, actor, and screenwriter, known for his Lord of the Rings film trilogy, adapted from the novel by J. R. R. Tolkien. He is also known for his 2005 remake of King Kong and as the producer of District 9. He won international attention early in his career with his \'splatstick\' horror comedies, before coming to mainstream prominence with Heavenly Creatures, for which he shared an Academy Award Best Screenplay nomination with his wife, Fran Walsh. Jackson has been awarded three Academy Awards in his career, including the award for Best Director in 2003.',
    BirthYear: '1961'
  },
  {
    Name: 'Steven Spielberg',
    Bio: 'Steven Allan Spielberg (born December 18, 1946) is an American film director, producer, and screenwriter. He began his career in the New Hollywood era and is currently the most commercially successful director. Spielberg is the recipient of various accolades, including three Academy Awards (with two for Best Director), a Kennedy Center honor, a Cecil B. DeMille Award, and an AFI Life Achievement Award.',
    BirthYear: '1946'
  },
  {
    Name: 'Sidney Lumet',
    Bio: 'Sidney Lumet (June 25, 1924 – April 9, 2011) was an American director, producer and screenwriter with over 50 films to his name. He was nominated for the Academy Award as Best Director for 12 Angry Men (1957), Dog Day Afternoon (1975), Network (1976) and The Verdict (1982). He did not win an individual Academy Award, although he did receive an Academy Honorary Award and 14 of his films were nominated for various Oscars, such as Network, which was nominated for 10, winning 4.',
    BirthYear: '1924',
    DeathYear: '2011'
  },
  {
    Name: 'Quentin Tarantino',
    Bio: 'Quentin Jerome Tarantino (born March 27, 1963) is an American film director, screenwriter, producer, cinematographer and actor. In the early 1990s he was an independent filmmaker whose films used nonlinear storylines and aestheticization of violence. His films have earned him a variety of Academy Award, Golden Globe, BAFTA and Palme d\'Or Awards and he has been nominated for Emmy and Grammy Awards. In 2007, Total Film named him the 12th-greatest director of all time.',
    BirthYear: '1963'
  }
]

let movies1 = [
  {
    Title: 'The Shawshank Redemption',
    Description: 'Framed in the 1940s for the double murder of his wife and her lover, upstanding banker Andy Dufresne begins a new life at the Shawshank prison, where he puts his accounting skills to work for an amoral warden. During his long stretch in prison, Dufresne comes to be admired by the other inmates -- including an older prisoner named Red -- for his integrity and unquenchable sense of hope.',
    Genre: {
        Name: 'Drama',
        Description: 'Focused on emotions and defined by conflict, often looking to reality rather than sensationalism.'
      },
    Director: {
      Name: 'Frank Darabont',
      Bio: 'Frank Darabont (born January 28, 1959) is a Hungarian-American film director, screenwriter and producer who has been nominated for three Academy Awards and a Golden Globe. He was born in France by Hungarian parents who fled Budapest during the 1956 uprising, but the family moved to Los Angeles while he was still an infant.',
      BirthYear: '1959'
    },
    Actors: ['Tim Robbins', 'Morgan Freeman', 'Bob Gunton'],
    ReleaseYear: '1994',
    Rating: 'R',
    ImagePath: 'https://www.themoviedb.org/t/p/w1280/q6y0Go1tsGEsmtFryDOJo3dEmqu.jpg',
    Featured: true
  },
  {
    Title: 'The Godfather',
    Description: 'Spanning the years 1945 to 1955, a chronicle of the fictional Italian-American Corleone crime family. When organized crime family patriarch, Vito Corleone barely survives an attempt on his life, his youngest son, Michael steps in to take care of the would-be killers, launching a campaign of bloody revenge.',
    Genre: {
      Name: 'Drama',
      Description: 'Focused on emotions and defined by conflict, often looking to reality rather than sensationalism.'
    },
    Director: {
      Name: 'Francis Ford Coppola',
      Bio: 'Francis Ford Coppola  (born April 7, 1939) is an American film director, producer and screenwriter. He is widely acclaimed as one of Hollywood\'s most celebrated and influential film directors. He epitomized the group of filmmakers known as the New Hollywood, which included George Lucas, Martin Scorsese, Robert Altman, Woody Allen and William Friedkin, who emerged in the early 1970s with unconventional ideas that challenged contemporary filmmaking.',
      BirthYear: '1939'
    },
    Actors: ['Marlon Brando', 'Al Pacino'],
    ReleaseYear: '1972',
    Rating: 'R',
    ImagePath: 'https://www.themoviedb.org/t/p/w1280/n6PvMAKL66gavIFxOyRB6czAeQO.jpg',
    Featured: true
  },
  {
    Title: 'The Dark Knight',
    Description: 'Batman raises the stakes in his war on crime. With the help of Lt. Jim Gordon and District Attorney Harvey Dent, Batman sets out to dismantle the remaining criminal organizations that plague the streets. The partnership proves to be effective, but they soon find themselves prey to a reign of chaos unleashed by a rising criminal mastermind known to the terrified citizens of Gotham as the Joker.',
    Genre: {
      Name: 'Action',
      Description: 'Associated with particular types of spectacle (e.g., explosions, chases, combat).'
  },
    Director: {
      Name: 'Christopher Nolan',
      Bio: 'Christopher Edward Nolan, CBE (born 30 July 1970) is a British-American film director, screenwriter, and producer. He was born in Westminster, London, England and holds both British and American citizenship due to his American mother. He is known for writing and directing critically acclaimed films such as Memento (2000), The Prestige (2006), The Dark Knight Trilogy (2005-12), Inception (2010), Interstellar (2014) and Dunkirk (2017). Nolan is the founder of the production company Syncopy Films. He often collaborates with his wife, producer Emma Thomas, and his brother, screenwriter Jonathan Nolan.',
      BirthYear: '1970'
    },
    Actors: ['Christian Bale', 'Heath Ledger'],
    ReleaseYear: '2008',
    Rating: 'R-13',
    ImagePath: 'https://www.themoviedb.org/t/p/w1280/qJ2tW6WMUDux911r6m7haRef0WH.jpg',
    Featured: true
    },
    {
      Title: 'The Lord of the Rings: The Return of the King',
      Description: 'Aragorn is revealed as the heir to the ancient kings as he, Gandalf and the other members of the broken fellowship struggle to save Gondor from Sauron's forces. Meanwhile, Frodo and Sam take the ring closer to the heart of Mordor, the dark lord's realm.',
      Genre: {
        Name: 'Fantasy',
        Description: 'Films defined by situations that transcend natural laws and/or by settings inside a fictional universe, with narratives that are often inspired by or involve human myths. The genre typically incorporates non-scientific concepts such as magic, mythical creatures, and supernatural elements.'
      },
      Director: {
        Name: 'Peter Jackson',
        Bio: 'Sir Peter Robert Jackson, (born 31 October 1961) is a New Zealand film director, producer, actor, and screenwriter, known for his Lord of the Rings film trilogy, adapted from the novel by J. R. R. Tolkien. He is also known for his 2005 remake of King Kong and as the producer of District 9. He won international attention early in his career with his 'splatstick' horror comedies, before coming to mainstream prominence with Heavenly Creatures, for which he shared an Academy Award Best Screenplay nomination with his wife, Fran Walsh. Jackson has been awarded three Academy Awards in his career, including the award for Best Director in 2003.',
        BirthYear: '1961'
      },
      Actors: ['Elijah Wood', 'Ian McKellen', 'Liv Tyler'],
      ReleaseYear: '2003',
      Rating: 'PG-13',
      ImagePath: 'https://www.themoviedb.org/t/p/w1280/rCzpDGLbOoPwLjy3OAm5NUPOTrC.jpg',
      Featured: true
    },
    {
      Title: 'Schindler\'s List',
      Description: 'The true story of how businessman Oskar Schindler saved over a thousand Jewish lives from the Nazis while they worked as slaves in his factory during World War II.',
      Genre: {
        Name: 'Historical',
        Description: 'Films that either provide more-or-less accurate representations of historical accounts or depict fictional narratives placed inside an accurate depiction of a historical setting.'
      },
      Director: {
        Name: 'Steven Spielberg',
        Bio: 'Steven Allan Spielberg (born December 18, 1946) is an American film director, producer, and screenwriter. He began his career in the New Hollywood era and is currently the most commercially successful director. Spielberg is the recipient of various accolades, including three Academy Awards (with two for Best Director), a Kennedy Center honor, a Cecil B. DeMille Award, and an AFI Life Achievement Award.',
        BirthYear: '1946'
      },
      Actors: ['Liam Neeson', 'Ben Kingsley'],
      ReleaseYear: '1993',
      Rating: 'R',
      ImagePath: 'https://www.themoviedb.org/t/p/w1280/doGEE2DgjET0XK0k9BozsMBES5H.jpg',
      Featured: true
    },
    {
      Title: 'The Godfather: Part II',
      Description: 'In the continuing saga of the Corleone crime family, a young Vito Corleone grows up in Sicily and in 1910s New York. In the 1950s, Michael Corleone attempts to expand the family business into Las Vegas, Hollywood and Cuba.',
      Genre: {
        Name: 'Drama',
        Description: 'Focused on emotions and defined by conflict, often looking to reality rather than sensationalism.'
      },
      Director: {
        Name: 'Francis Ford Coppola',
        Bio: 'Francis Ford Coppola  (born April 7, 1939) is an American film director, producer and screenwriter. He is widely acclaimed as one of Hollywood\'s most celebrated and influential film directors. He epitomized the group of filmmakers known as the New Hollywood, which included George Lucas, Martin Scorsese, Robert Altman, Woody Allen and William Friedkin, who emerged in the early 1970s with unconventional ideas that challenged contemporary filmmaking.',
        BirthYear: '1939'
      },
      Actors: ['Al Pacino', 'Robert De Niro'],
      ReleaseYear: '1974',
      Rating: 'R',
      ImagePath: 'https://www.themoviedb.org/t/p/w1280/bMadFzhjy9T7R8J48QGq1ngWNAK.jpg',
      Featured: false
    },
    {
      Title: '12 Angry Men',
      Description: 'The defense and the prosecution have rested and the jury is filing into the jury room to decide if a young Spanish-American is guilty or innocent of murdering his father. What begins as an open and shut case soon becomes a mini-drama of each of the jurors\' prejudices and preconceptions about the trial, the accused, and each other.',
      Genre: {
        Name: 'Drama',
        Description: 'Focused on emotions and defined by conflict, often looking to reality rather than sensationalism.'
      },
      Director: {
        Name: 'Sidney Lumet',
        Bio: 'Sidney Lumet (June 25, 1924 – April 9, 2011) was an American director, producer and screenwriter with over 50 films to his name. He was nominated for the Academy Award as Best Director for 12 Angry Men (1957), Dog Day Afternoon (1975), Network (1976) and The Verdict (1982). He did not win an individual Academy Award, although he did receive an Academy Honorary Award and 14 of his films were nominated for various Oscars, such as Network, which was nominated for 10, winning 4.',
        BirthYear: '1924',
        DeathYear: '2011'
      },
      Actors: ['Martin Balsam'],
      ReleaseYear: '1957',
      Rating: 'NR',
      ImagePath: 'https://www.themoviedb.org/t/p/w1280/6PlhouMCYktJmdFwS9XtqRZaTqc.jpg',
      Featured: false
    },
    {
      Title: 'The Lord of the Rings: The Fellowship of the Ring',
      Description: 'Young hobbit Frodo Baggins, after inheriting a mysterious ring from his uncle Bilbo, must leave his home in order to keep it from falling into the hands of its evil creator. Along the way, a fellowship is formed to protect the ringbearer and make sure that the ring arrives at its final destination: Mt. Doom, the only place where it can be destroyed.',
      Genre: {
        Name: 'Adventure',
        Description: 'Implies a narrative that is defined by a journey (often including some form of pursuit) and is usually located within a fantasy or exoticized setting. Typically, though not always, such stories include the quest narrative. The predominant emphasis on violence and fighting in action films is the typical difference between the two genres.'
      },
      Director:  {
        Name: 'Peter Jackson',
        Bio: 'Sir Peter Robert Jackson, (born 31 October 1961) is a New Zealand film director, producer, actor, and screenwriter, known for his Lord of the Rings film trilogy, adapted from the novel by J. R. R. Tolkien. He is also known for his 2005 remake of King Kong and as the producer of District 9. He won international attention early in his career with his \'splatstick\' horror comedies, before coming to mainstream prominence with Heavenly Creatures, for which he shared an Academy Award Best Screenplay nomination with his wife, Fran Walsh. Jackson has been awarded three Academy Awards in his career, including the award for Best Director in 2003.',
        BirthYear: '1961'
      },
      Actors: ['Elijah Wood', 'Ian McKellen', 'Liv Tyler'],
      ReleaseYear: '2001',
      Rating: 'PG-13',
      ImagePath: 'https://www.themoviedb.org/t/p/w1280/b4XZizlvqQkZno8cT3VPBYTGudB.jpg',
      Featured: false
    },
    {
      Title: 'Pulp Fiction',
      Description: 'A burger-loving hit man, his philosophical partner, a drug-addled gangster\'s moll and a washed-up boxer converge in this sprawling, comedic crime caper. Their adventures unfurl in three stories that ingeniously trip back and forth in time.',
      Genre: {
        Name: 'Thriller',
        Description: 'Films that evoke excitement and suspense in the audience. The suspense element found in most films\' plots is particularly exploited by the filmmaker in this genre. Tension is created by delaying what the audience sees as inevitable, and is built through situations that are menacing or where escape seems impossible.'
      },
      Director: {
        Name: 'Quentin Tarantino',
        Bio: 'Quentin Jerome Tarantino (born March 27, 1963) is an American film director, screenwriter, producer, cinematographer and actor. In the early 1990s he was an independent filmmaker whose films used nonlinear storylines and aestheticization of violence. His films have earned him a variety of Academy Award, Golden Globe, BAFTA and Palme d\'Or Awards and he has been nominated for Emmy and Grammy Awards. In 2007, Total Film named him the 12th-greatest director of all time.',
        BirthYear: '1963'
      },
      Actors: ['John Travolta', 'Samuel L. Jackson', 'Uma Thurman', ''],
      ReleaseYear: '1994',
      Rating: 'R-18',
      ImagePath: 'https://www.themoviedb.org/t/p/w1280/fIE3lAGcZDV1G6XM5KmuWnNsPp1.jpg',
      Featured: false
    },
  {
    Title: 'Inception',
    Description: 'Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: \'inception\', the implantation of another person\'s idea into a target\'s subconscious.',
    Genre: {
      Name: 'Science fiction',
      Description: 'Films are defined by a combination of imaginative speculation and a scientific or technological premise, making use of the changes and trajectory of technology and science. This genre often incorporates space, biology, energy, time, and any other observable science.'
    },
    Director: {
      Name: 'Christopher Nolan',
      Bio: 'Christopher Edward Nolan, CBE (born 30 July 1970) is a British-American film director, screenwriter, and producer. He was born in Westminster, London, England and holds both British and American citizenship due to his American mother. He is known for writing and directing critically acclaimed films such as Memento (2000), The Prestige (2006), The Dark Knight Trilogy (2005-12), Inception (2010), Interstellar (2014) and Dunkirk (2017). Nolan is the founder of the production company Syncopy Films. He often collaborates with his wife, producer Emma Thomas, and his brother, screenwriter Jonathan Nolan.',
      BirthYear: '1970'
    },
    Actors: ['Leonardo DiCaprio', 'Joseph Gordon-Levitt', 'Ken Watanabe'],
    ReleaseYear: '2010',
    Rating: 'PG-13',
    ImagePath: 'https://www.themoviedb.org/t/p/w1280/edv5CZvWj09upOsy2Y6IwDhK8bt.jpg',
    Featured: false
  }
];


