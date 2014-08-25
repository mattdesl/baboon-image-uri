require('domready')(function() {
    //makes an image object and appends it to the body
    var img = new Image()
    img.onload = function() {
        document.body.appendChild(img)
    }
    img.src = require('../')
})