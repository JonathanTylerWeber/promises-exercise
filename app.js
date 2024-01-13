// number facts
// 1*************
// axios.get('http://numbersapi.com/42', {
//     headers: {
//         'Content-Type': 'application/json',
//     },
// })
//     .then(res => {
//         console.log("FIRST PROMISE RESOLVED!")
//         console.log(res)
//     })
//     .catch(err => console.log("REJECTED!!", err))

// 2*************
// ul = document.querySelector('ul')
// let fourPromises = [];

// for (let i = 1; i < 5; i++) {
//     fourPromises.push(
//         axios.get(`http://numbersapi.com/${i}`, {
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//         })
//     )
// };

// Promise.all(fourPromises)
//     .then(arr => {
//         for (res of arr) {
//             let listItem = document.createElement('li');
//             listItem.textContent = res.data;
//             ul.append(listItem);
//         }
//     })
//     .catch(err => console.log(err));


// 3*************
// let ul = document.querySelector('ul');
// let fourPromises = [];

// function getFact() {
//     return axios.get(`http://numbersapi.com/1`, {
//         headers: {
//             'Content-Type': 'application/json',
//         },
//     });
// }

// for (let i = 0; i < 4; i++) {
//     fourPromises.push(getFact());
// }

// Promise.all(fourPromises)
//     .then((responses) => {
//         responses.forEach((res) => {
//             let listItem = document.createElement('li');
//             listItem.textContent = res.data;
//             ul.append(listItem);
//         });
//     })
//     .catch((err) => console.log(err));





// deck of cards
// 1*************
// axios.get('https://deckofcardsapi.com/api/deck/new/draw/?count=1')
//     .then(res => {
//         const cardData = res.data.cards[0];
//         console.log(`${cardData.value} of ${cardData.suit}`)
//     })
//     .catch(err => console.log("REJECTED!!", err))


// 2*************
// let cardArray = []
// let url = 'https://deckofcardsapi.com/api/deck/new/draw/?count=1';
// axios.get(url)
//     .then(res => {
//         const cardData = res.data.cards[0];
//         cardArray.push(`${cardData.value} of ${cardData.suit}`)
//         return axios.get(url)
//     })
//     .then(res => {
//         const cardData = res.data.cards[0];
//         cardArray.push(`${cardData.value} of ${cardData.suit}`)
//         for (card of cardArray) {
//             console.log(card)
//         }
//     })
//     .catch(err => console.log("REJECTED!!", err))


// 3*************
const btn = document.querySelector('button');
const ul = document.querySelector('ul');

btn.addEventListener('click', () => {
    drawCard()
        .then(card => {
            let listItem = document.createElement('li');
            listItem.textContent = card;
            ul.append(listItem);
        })
        .catch(err => {
            console.log("Error:", err);
        });
});

function drawCard() {
    return new Promise((resolve, reject) => {
        axios.get('https://deckofcardsapi.com/api/deck/y56h6bjr59z3/draw/?count=1')
            .then(res => {
                const cardData = res.data.cards[0];
                const card = `${cardData.value} of ${cardData.suit}`;
                resolve(card);
            })
            .catch(err => {
                reject(err); // Reject the error to be caught by the caller
            });
    });
}
