const container = document.querySelector('.container')

function addRectangle() {
  let height = 1000
  let width = 618
  container.innerHTML = ''
  console.time('Time To Generate')
  for (let i = 0; i < 15; i++) {
    height *= 0.618
    width *= 0.618
    height = Math.round(height)
    width = Math.round(width)
    let create = document.createElement('rect')

    // Comment out to remove color
    makeColor(create)

    create.style.width = `${width}px`
    create.style.height = `${height}px`
    // create.innerText = `${height}px High, ${width}px Wide`
    create.classList = "golden"
    container.appendChild(create)
  }
  console.timeEnd('Time To Generate')
}

function makeColor(create) {
  let R = Math.floor(Math.random() * 256 + 1)
  let G = Math.floor(Math.random() * 256 + 1)
  let B = Math.floor(Math.random() * 256 + 1)
  create.style.backgroundColor = `rgb(${R}, ${G}, ${B})`
}

let repeat = setInterval(addRectangle, 1000)


