//$(Selector).accion()
/*
$(document).ready(()=>{

})*/

$(()=>{
    //Selectores:
    //id="el-1"=>"#el-1"
    //class="el-1"=>".el-1"
    //$("#el-1").hide()
    $(".hide-btn").click(()=>{
        //$("h1").hide()
        $("h1").fadeOut()

    })
    $(".show-btn").click(()=>{
        //$("h1").show()
        $("h1").fadeIn()
        $("h1").css({color:"black"})

    })
    $("li").dblclick(()=>{
        $("h1").css({color:"blue"})
    })
})