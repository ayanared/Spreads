
$(()=>{
    console.log("see meanings")
    const cards = createCards()
    cards.forEach(card => {
        const newElement = `
       
        <h3>${card.name}</h3>
        <div class="container_center">
        <img class="card_description_img" src="/${card.cardImage}" alt"${card.name}">
        
        <p class="card_description">${card.cardDescription}</p>
        <div>
        <hr>
        `
        $(`#tarot_list`).append(newElement) 
    });
})