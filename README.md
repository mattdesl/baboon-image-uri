[![browser support](https://ci.testling.com/mattdesl/baboon-image-uri.png)](https://ci.testling.com/mattdesl/baboon-image-uri)

# baboon-image-uri

[![stable](http://badges.github.io/stability-badges/dist/stable.svg)](http://github.com/badges/stability-badges)

![img](https://raw.githubusercontent.com/mattdesl/baboon-image-uri/master/baboon.png)

Baboon test image (128x128) in the form of a PNG base64-encoded Data URI string. This is useful for quick visual demos where you just want to get an image on screen via CSS or the `Image` object. 

```js
//gives us a string
var baboon = require('baboon-image-uri')

//append the image to the body when ready
var img = new Image()
img.onload = function() {
	document.body.appendChild(img)
}
img.src = baboon
```

## Usage

[![NPM](https://nodei.co/npm/baboon-image-uri.png)](https://nodei.co/npm/baboon-image-uri/)

## Credits

Image is public domain.

Rest of module is MIT, see [LICENSE.md](http://github.com/mattdesl/baboon-image-uri/blob/master/LICENSE.md) for details.