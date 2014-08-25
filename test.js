var test = require('tape').test
var uri = require('./')

test('creates image', function(t) {
    t.plan(1)

    if (typeof Image === 'undefined')
        throw new Error('test must be performed in a browser with Image support')
    
    var img = new Image()
    img.onload = function() {
        t.ok(img.width === 128 && img.height === 128, 'image loaded with correct size')
    }
    img.onerror = img.oncancel = function() {
        t.ok(false, 'there was an error loading the data URI image...')
    }
    img.src = uri
})