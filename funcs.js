function changeStage() {
  $('.first-page').animate({opacity: 0}, 1000, ()=>{
    $('.first-page').css('display','none')
    $('.second-page').css('display','block')
    $('.second-page').animate({opacity: 1}, 1000)
  })
}

function changePos(v, flag) {
  if (v > parseInt(document.querySelector("html").style.fontSize)*8) v = parseInt(document.querySelector("html").style.fontSize)*8 
  if (v < 0) v = 0
  $(".person").css('transform',`translateX(-${v}px)`)
  if (flag) pos = v
}

function dragMove() {
  var ini_pos = 0, now_pos = 0
  let now_obj = $(".persons-bar")
  now_obj.on('touchstart',(e)=>{
    var e = e || window.event
    ini_pos = e.touches[0].clientX
    now_pos = ini_pos;
  })
  now_obj.on('touchmove',(e)=>{
    var e = e || window.event
    now_pos = e.touches[0].clientX
    let delta = ini_pos - now_pos
    changePos(pos+delta, 0)
  })
  now_obj.on("touchend",(e)=>{
    var e = e || window.event
    changePos(pos + ini_pos - now_pos, 1)
  })
}

function rotateMusic() {
  document.getElementById('music').play();
  x = setInterval(()=>{
    rot = (rot + 1) % 360
    $('#music-icon').css({'transform': `rotateZ(${rot}deg)`, 'box-shadow': `0 0 ${rot%180/15}px ${rot%180/15}px rgba(200,200,200,${(180-rot%180)/180})`}) 
    }, 30)
  state = 1
}

function stopRotate() {
  document.getElementById('music').pause();
  clearInterval(x)
  state = 0
}

function changeState() {
  if (state) stopRotate()
    else rotateMusic()
}

function getPicture() {
  for (let i = 1; i <= 15; i++) {
    let now_obj = $(".person"+i)
    now_obj.css('background-image',`url(./figure/${i}.jpg)`)
    now_obj.click(function (){
      now_obj.siblings(".person").removeClass("active")
      now_obj.addClass("active")
      $('.selec').animate({opacity: 0}, 300, ()=>{
      $('.selec').css('display','none')
      $('.content'+i).css('display','block')
      $('.content'+i).animate({opacity: 1}, 300, ()=>{
      $(".content").removeClass("selec")
      $(".content"+i).addClass("selec")})
      $(".feeling-content").prop('scrollTop','0')
      })
    });
  }
}