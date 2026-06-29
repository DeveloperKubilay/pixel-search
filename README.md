# pixel-search

![](https://raw.githubusercontent.com/DeveloperKubilay/pixel-search/refs/heads/main/examples/Ads%C4%B1z.png)
![](https://raw.githubusercontent.com/DeveloperKubilay/pixel-search/refs/heads/main/examples/big.png)
![](https://raw.githubusercontent.com/DeveloperKubilay/pixel-search/refs/heads/main/examples/small.png)

**pixel-search** is a Node.js tool for finding an image inside another image and taking screenshots. You can use it as a CLI or as a module in your own projects. Super fast, super simple!

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

### Installation
```bash
npm install pixel-search
```
With cli
```bash
npm install -g pixel-search
```

### Features
- Find the position of a small image inside a big image
- Take screenshots (Windows only)
- CLI and module support
- Fast pixel matching with grayscale optimization

### CLI Help
```bash
pixel-search help
```