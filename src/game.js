const c = document.querySelector('canvas')
const canvas = c.getContext('2d')

c.width = innerWidth
c.height = innerHeight

var inputX = document.getElementById('inputX');
var ipnutY = document.getElementById('inputY')
var inputWidth = document.getElementById('inputWidth')
var inputHeight = document.getElementById('inputHeight')
var submit = document.getElementById('submit')
var form = document.getElementById('form')

submit.addEventListener('click', function() {
  canvas.clearRect(0, 0, canvas.width, canvas.height)
  canvas.beginPath()
  canvas.rect(inputX.value, inputY.value, inputWidth.value, inputHeight.value)
  canvas.stroke()
})

form.onsubmit = function(e) {
  e.preventDefault()
  canvas.clearRect(0, 0, c.width, c.height)
  canvas.beginPath()
  canvas.rect(inputX.value, inputY.value, inputWidth.value, inputHeight.value)
  canvas.stroke()
}
