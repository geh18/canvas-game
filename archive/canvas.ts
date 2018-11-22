const canvas: HTMLCanvasElement = document.querySelector('canvas')
const c: CanvasRenderingContext2D = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

let drawSquare = function() {
  c.beginPath()
  c.rect(100, 100, 200, 200)
  c.stroke()
}

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
    drawMouse()
    drawSquare()
})

addEventListener('resize', () => {
    canvas.width = innerWidth
    canvas.height = innerHeight

    init()
})

// Animation Loop
function drawMouse() {
    c.clearRect(0, 0, canvas.width, canvas.height)
    c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
}
