$(()=>{
    console.log("here")
    //populating past cards pulled
    
    const val0 = $('#card0val').val()
    $('#card0img_past').attr('src', `/${cards[val0].cardImage}`)
    console.log(val0)
    const val1 = $('#card1val').val()
    $('#card1img_past').attr('src', `/${cards[val1].cardImage}`)
    console.log(val1)
    const val2 = $('#card2val').val()
    $('#card2img_past').attr('src', `/${cards[val2].cardImage}`)
    console.log(val2)
    
})