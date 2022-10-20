const gv = {
  styles: [],
  grids: []
}
function setsize(){
  var size = document.getElementById("size").value;
  console.log(size);

   
}
  
      const gc = {
        wn: size,
        hn: size,
        pn: 1,
        nn () {
          return this.wn * this.hn
        },
        img () {
          return `img_p/pintu1.png`
      
    }

      

}

const mounted = function () {
  initGrids()
  shuffleGrids()
  gridClick()
}
mounted()



function gridStyle (n, wn, hn) {
  if(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)){

    let gm = parseFloat($('.main').css('padding')) / 2
    let ww = parseFloat($('.wrap').css('width')) 
    let wh = parseFloat($('.wrap').css('height')) 
    let gw = (ww - gm * (wn - 1)) / wn /1.1
    let gh = (wh - gm * (hn - 1)) / hn / 15
    let gl = (gw + gm) * (n % wn)
    let gt = (gh + gm) * Math.floor(n / wn)
    let style = {
    width: gw + 'px',
    height: gh + 'px',
    left: gl + 'px',
    top: gt + 'px',
    background: `url(${gc.img()})`,
    backgroundSize: `${gw * wn}px ${gh * hn}px`
  }
    return { style, n, pos: `-${gw * (n % wn)}px -${gh * Math.floor(n / wn)}px` }

}else{

  let gm = parseFloat($('.main').css('padding')) / 2
  let ww = parseFloat($('.wrap').css('width')) 
  let wh = parseFloat($('.wrap').css('height')) 
  let gw = (ww - gm * (wn - 1)) / wn / 1.1
  let gh = (wh - gm * (hn - 1)) / hn * 0.33
  let gl = (gw + gm) * (n % wn)
  let gt = (gh + gm) * Math.floor(n / wn)
  let style = {
    width: gw + 'px',
    height: gh + 'px',
    left: gl + 'px',
    top: gt + 'px',
    background: `url(${gc.img()})`,
    backgroundSize: `${gw * wn}px ${gh * hn}px`
  }
  
    return { style, n, pos: `-${gw * (n % wn)}px -${gh * Math.floor(n / wn)}px` }
}


}

function initGrids () {
  gv.grids = []
  gv.styles = []
  for (let i = 0; i < gc.nn(); i++) {
    let { style, n, pos } = gridStyle(i, gc.wn, gc.hn)
    let el = document.createElement('div')
    $(el).addClass('grid').data('n', n).data('pos', pos).appendTo('.wrap')
    gv.grids.push(el)
    gv.styles.push({ style, n })
  }
}

function initGridsStyles () {
  gv.grids.map((el, i) => {
    let { n, style } = gv.styles[i]
    $(el).data('n', n).css(style).css({ backgroundPosition: $(el).data('pos') })
  })
}

function shuffleGrids () {
  gv.styles = gv.styles.sort(() => Math.random() > 0.5 ? 1 : -1)
  initGridsStyles()
  if (success()) shuffleGrids()
}

function success () {
  let flag = true
  $('.grid').each((i, el) => {
    if ($(el).data('n') !== i) {
      flag = false
    }
  })
  return flag
}

function gridClick () {
  let a1 = null
  let a2 = null
  $('.grid').click(function () {
    a1 ? a2 = this : a1 = this
    $(this).addClass('grid-active')
    if (a1 && a2) {
      let $a1 = $(a1)
      let $a2 = $(a2)
      let n1 = $a1.data('n')
      let n2 = $a2.data('n')
      let s1 = $a1.attr('style')
      let s2 = $a2.attr('style')
      $a1.data('n', n2).attr('style', s2).css({ backgroundPosition: $a1.data('pos') })
      $a2.data('n', n1).attr('style', s1).css({ backgroundPosition: $a2.data('pos') })
      setTimeout(() => {
        $a1.removeClass('grid-active')
        $a2.removeClass('grid-active')
        a1 = null
        a2 = null
        if (success()) {
          alert('success')
        }
      }, 200)
    }
  })
}
