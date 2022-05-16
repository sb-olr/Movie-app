//mongo-queries.js
let db
// read-movies-title-query
db.movies.find({ Title: 'Inception' }).pretty()

// read-movies-genre-query
db.movies.find({ 'Genre.Name': 'Science fiction' }).pretty()

// read-movie-genre-director-query
db.movies.find({ 'Genre.Name': 'Drama', 'Director': 'Sidney Lumet' }).pretty()

// update-movie-description-query
db.movies.update({ _id: ObjectId("6281bc3222226625152651fe") }, { $set: { Description: "UPDATED: Cobb, a skilled thief who commits corporate espionage by infiltrating the subconscious of his targets is offered a chance to regain his old life as payment for a task considered to be impossible: 'inception', the implantation of another person's idea into a target's subconscious." } })

// update-movies-director-bio-query
db.movies.update({ _id: ObjectId("6281bc3222226625152651fe") }, { $set: { "Director.Bio": "UPDATED: Christopher Edward Nolan, CBE (born 30 July 1970) is a British-American film director, screenwriter, and producer. He was born in Westminster, London, England and holds both British and American citizenship due to his American mother. He is known for writing and directing critically acclaimed films such as Memento (2000), The Prestige (2006), The Dark Knight Trilogy (2005-12), Inception (2010), Interstellar (2014) and Dunkirk (2017). Nolan is the founder of the production company Syncopy Films. He often collaborates with his wife, producer Emma Thomas, and his brother, screenwriter Jonathan Nolan." } })

// update-users-fav-movie-query
db.users.update(
    {Username: 'cat_woman'},
    { $push: { FavMovies: ObjectId("6281bc3222226625152651fe") } }
)

//delete-users-query
db.users.deleteOne({ Username: 'bat_man' })

// read-users-query
db.users.find().pretty()
