$(() => {
    console.log("get a reading!")
    const cards = createCards()
    for (let i = 0; i < 3; i++) {
        $(`#current_card${i}_img`).on("click", () => {
            const random_card = Math.floor(Math.random() * cards.length);

            console.log(`you clicked ${i}, the random number is: ${random_card}`)
        })
    }
})