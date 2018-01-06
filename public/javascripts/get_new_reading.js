const date = new Date();
const month_number = date.getMonth();
const day_of_month = date.getDate();
const year = date.getFullYear();

const month = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ];

$(() => {
    const full_date = month[month_number] +`, ${day_of_month}, ${year}`
    $('#date').val(full_date)
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
            $(`#current_header_card${i}`).text(`Card ${i + 1}`)
            $(`#current_description_card${i}`).text(`${pulled_card.cardDescription}`)
            console.log(`you clicked ${i}, the random number is: ${pulled_card.number} which is ${pulled_card.name}`)
        })
    }

})