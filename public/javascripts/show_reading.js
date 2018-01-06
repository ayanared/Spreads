$(()=>{
    const cards = createCards()
    console.log("here")
    //populating past cards pulled
    
    for(let i=0; i<3; i++){
    const index_of_chosen_card = $(`#past_val_card${i}`).val()
    console.log(index_of_chosen_card)
    $(`#card${i}img_past`).attr(`src`, `/${cards[index_of_chosen_card].cardImage}`)
    $(`#card${i}img_past`).attr(`alt`, `/${cards[index_of_chosen_card].name}`)
    //populating descriptions for each card
    $(`#past_description_card${i}`).text(cards[index_of_chosen_card].cardDescription)
    $(`#past_header_card${i}`).text(`Card ${i+1}`)
    }
})