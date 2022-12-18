function findMovies(favoriteGenre) {
    const movies = [
        {
            id: 1,
            name: 'Avengers end game',
            genre: 'Action',
            soldTicket: 149,
            capacity: 150
        },
        {
            id: 2,
            name: 'La la Land',
            genre: 'Romance',
            soldTicket: 20,
            capacity: 75
        },
        {
            id: 3,
            name: 'Beauty and the Beast',
            genre: 'Romance',
            soldTicket: 50,
            capacity: 50
        },
        {
            id: 4,
            name: 'Superman vs Batman',
            genre: 'Action',
            soldTicket: 150,
            capacity: 250
        },
        {
            id: 5,
            name: 'Transformer',
            genre: 'Action',
            soldTicket: 90,
            capacity: 90
        },
        {
            id: 6,
            name: '5 feet apart',
            genre: 'Romance',
            soldTicket: 25,
            capacity: 45
        },
        {
            id: 7,
            name: 'Hamilton',
            genre: 'Musical',
            soldTicket: 295,
            capacity: 300
        },
        {
            id: 8,
            name: 'Dear Evan Hansen',
            genre: 'Musical',
            soldTicket: 150,
            capacity: 200
        },
        {
            id: 9,
            name: 'Conjuring',
            genre: 'Horror',
            soldTicket: 30,
            capacity: 100
        },
        {
            id: 10,
            name: 'Annabelle',
            genre: 'Horror',
            soldTicket: 10,
            capacity: 30
        },
        {
            id: 11,
            name: 'Fast and Furios',
            genre: 'Action',
            soldTicket: 25,
            capacity: 40
        },
        {
            id: 12,
            name: 'Romeo and Julet',
            genre: 'Romance',
            soldTicket: 15,
            capacity: 15
        },
        {
            id: 13,
            name: 'Wicked',
            genre: 'Musical',
            soldTicket: 75,
            capacity: 75
        }
    ]
    //menentukan object berdasarkan genre yg di inginkan
    let result = movies.filter((item) => favoriteGenre.includes(item.genre));
    return result
}

function findTicketAvailability(movie, user) {
    //menentukan true or false dari pernyataan ketersediaan tiket
    let result = user.ticket <= movie.capacity - movie.soldTicket;
    return result
}

function findRecommendation(user) {
    //menentukan rekomen film yg ditentukan berdasarkan param
    let favGenre = findMovies(user.favoriteGenre);
    let result = favGenre.filter((item) => findTicketAvailability(item,user));
    return result
}

function generateRecommendation(user) {
    //menetukan tiket available berdasarkan genre dan ketersediaan tiket
    let sortirMovies = findRecommendation(user);
    let harga = {action: 100000, horror: 75000, musical: 80000, romance: 40000};
    let result = 
            sortirMovies.length > 0 ?
                sortirMovies.map((item) => {
                    delete item.capacity;
                    delete item.soldTicket; 
                    item["totalPrice"] = user.ticket * harga[item.genre.toLocaleLowerCase()] ;
                    return item;
                }) : "Tidak ada film yang sesuai kriteria";
    // if (sortirMovies.length > 0){
    //     sortirMovies.forEach((value) => {
    //         delete value.capacity;
    //         delete value.soldTicket; 
    //         value["totalPrice"] = harga[value.genre.toLocaleLowerCase()] * user.ticket;
    //         return value;
    //     }) : "Tidak ada film yang sesuai kriteria";
    // }
   return result
}

let user1 = {
    name: 'Aditira',
    ticket: 1,
    favoriteGenre: ['Action', 'Musical', 'Romance', 'Horror']
}

let user2 = {
    name: 'Eddy',
    ticket: 20,
    favoriteGenre: ['Musical', 'Romance']
}

let user3 = {
    name: 'Afis',
    ticket: 1,
    favoriteGenre: ['Sci Fi', 'Documentary', 'Thriller']
}

console.log(generateRecommendation(user1))
console.log(generateRecommendation(user2))
console.log(generateRecommendation(user3))


module.exports = {
    findMovies,
    findTicketAvailability,
    findRecommendation,
    generateRecommendation
}
