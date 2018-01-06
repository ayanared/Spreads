$(() => {
    console.log("get a reading!")
    const cards = createCards()
    for (let i = 0; i < 3; i++) {
        $(`#current_card${i}_img`).one("click", () => {
            const random_card_index = Math.floor(Math.random() * cards.length);
            const pulled_card = cards[random_card_index]
            //remove card from deck
            cards.splice(random_card_index, 1)
            //set value
            $(`#card_index_${i}`).val(pulled_card.number)
            //change picture
            $(`#current_card${i}_img`).attr('src', `/${pulled_card.cardImage}`)
            $(`#current_header_card${i}`).text(`Card ${i+1}`)
            $(`#current_description_card${i}`).text(`${pulled_card.cardDescription}`)
            console.log(`you clicked ${i}, the random number is: ${pulled_card.number} which is ${pulled_card.name}`)
        })
    }

})