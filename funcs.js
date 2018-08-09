function changePos(v) {
  if (v > parseInt($(".persons").css('width'))) v = parseInt($(".persons").css('width')) 
  if (v < 0) v = 0
  $(".person").css('transform',`translateX(-${v}px)`)
}

function dragMove() {
  var ini_pos = 0, now_pos = 0
  let now_obj = $(".persons-bar")
  now_obj.on('touchstart',(e)=>{
    var e = e || window.event
    ini_pos = e.touches[0].clientX
  })
  now_obj.on('touchmove',(e)=>{
    var e = e || window.event
    now_pos = e.touches[0].clientX
    let delta = ini_pos - now_pos
    changePos(pos+delta)
  })
  now_obj.on("touchend",(e)=>{
    var e = e || window.event
    pos = pos + ini_pos - now_pos
  })
}

function getPicture() {
  for (let i = 1; i <= 15; i++) {
    let now_obj = $(".person"+i)
    now_obj.css('background-image',`url(./figure/${i}.jpg)`)
    now_obj.click(function (){
      now_obj.siblings(".person").removeClass("active")
      now_obj.addClass("active")
    });
  }
}