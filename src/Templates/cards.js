import getData from "@utils/getData";

const cards = async () => {
    const LEN = 20;
    const data = await getData();
    const view = await createCards(data, LEN);
    return view;
}

function createCards(data, len) {
    let cardsString = "";
    for (let index = 0; index < len; index++) {
        let card = `<div class="card">
            <img src="${data[index].images[0]}" alt="${data[index].title}">
            <div class="card-content">
                <h3>${data[index].title}</h3>
                <p>${data[index].description}</p>
            </div>
        </div>`;
        cardsString += card;
    }

    return cardsString;
}

export default cards;