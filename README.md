# pixel-search

**pixel-search** is a Node.js tool for finding an image inside another image and taking screenshots. You can use it as a CLI or as a module in your own projects. Super fast, super simple!

![]()

### Features
- Find the position of a small image inside a big image
- Take screenshots (Windows only)
- CLI and module support
- Fast pixel matching with grayscale optimization

### Installation
```bash
npm install pixel-search
```
With cli
```bash
npm install -g pixel-search
```

### Usage (CLI)
```bash
pixel-search shot screenshot.png
pixel-search find big.png small.png
```

### Usage (Module)
```js
const { findImageInImage, takescreenshot } = require('pixel-search');

// Find image
findImageInImage('big.png', 'small.png').then(res => {
    console.log(res); // { x, y, score }
});

// Take screenshot
takescreenshot('screenshot.png');
```

### CLI Help
```bash
pixel-search help
```