import utils from './utils'

const canvas = document.querySelector('canvas')
const c = canvas.getContext('2d')

canvas.width = innerWidth
canvas.height = innerHeight

const mouse = {
    x: innerWidth / 2,
    y: innerHeight / 2
}

// Event Listeners
addEventListener('mousemove', event => {
    mouse.x = event.clientX
    mouse.y = event.clientY
    drawMouse()
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
