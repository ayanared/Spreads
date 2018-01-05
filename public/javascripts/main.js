$(()=>{
    console.log("here")
    //populating past cards pulled
    
    const val0 = $('#past_val_card0').val()
    $('#card0img_past').attr('src', `/${cards[val0].cardImage}`)
    console.log(val0)
    const val1 = $('#past_val_card1').val()
    $('#card1img_past').attr('src', `/${cards[val1].cardImage}`)
    console.log(val1)
    const val2 = $('#past_val_card2').val()
    $('#card2img_past').attr('src', `/${cards[val2].cardImage}`)
    console.log(val2)

    //populating descriptions for each card
    $('#past_description_card0').text(cards[val0].cardDescription)
    $('#past_header_card0').text('Card 1')
    $('#past_description_card1').text(cards[val1].cardDescription)
    $('#past_header_card1').text('Card 2')
    $('#past_description_card2').text(cards[val2].cardDescription)
    $('#past_header_card2').text('Card 3')
    
})