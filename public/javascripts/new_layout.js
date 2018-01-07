$(()=>{
    console.log('add your layout!')
    $('#layout_pic_link').focusout(()=>{
        console.log("focused out")
        $('#layout_pic').removeClass("hidden")
        $('#layout_pic').attr('src',$('#layout_pic_link').val() )
    })
})