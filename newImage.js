function newImage(url){
    let image = document.createElement('img')
    image.src = url
    image.style.position = 'absolute'
    document.getElementById('game').appendChild(image)
    return image
}