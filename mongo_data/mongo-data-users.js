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

console.log(JSON.stringify(users))