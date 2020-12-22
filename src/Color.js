function getRandomColor() {
  var letters = '0123456789ABCD'.split('')
  var color = '#'
  for (var i = 0; i < 6; i++) {
    color += letters[Math.round(Math.random() * 13)]
  }
  return color
}

export default getRandomColor
