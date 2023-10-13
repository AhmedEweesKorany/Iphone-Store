let img0 = document.getElementById('img0')
let img1 = document.getElementById('img1')
let img2 = document.getElementById('img2')
let img3 =document.getElementById('img3')
let img4 = document.getElementById('img4')
let img = document.getElementById('main-img')
let body = document.getElementById('body')

img0.onclick = function(){
    img.src = img0.src
    body.style.background = "#222"
}
img1.onclick = function(){
    img.src = img1.src
    body.style.background = "#217AC0"
}
img2.onclick = function(){
    img.src = img2.src
    body.style.background = "#222"
}
img3.onclick = function(){
    img.src = img3.src
    body.style.background = "#AE894C"
}

img4.onclick = function(){
    img.src = img4.src
    body.style.background = "#B02023"

}