<h1 align="center">fontace</h1>
<p align="center">Extract useful information from font files</p>

## Installation

```sh
npm install fontace
```

## Import

```js
import { fontace } from 'fontace';
```

## Why `fontace`?

`fontace` is a small library, which intends to extract data specifically to help generate CSS `@font-face` declarations based on font files.

`fontace` returns CSS-compatible values for:

- `family`: The font family name as stored in the font file, e.g. `"Inter"`.
- `format`: The font file format for use in [`format()`](https://developer.mozilla.org/en-US/docs/Web/CSS/@font-face/src#format), e.g.`"woff2"` or `"truetype"`.
- `style`: The style of this font file, e.g. `"normal"` or `"italic"`.
- `unicodeRange`: The range of Unicode code points this font file contains, e.g. `"U+0-10FFFF"`.
- `weight`: The weight this file supports, which can be a range for variable fonts, e.g. `"400"` or `"100 900"`.

## Usage

Pass a buffer containing font file data to `fontace()` and get useful information back.

### Example: local font file

Use file-system APIs to read a local font file and then pass it to `fontace()`:

```js
import { fontace } from 'fontace';
import fs from 'node:fs';

const fontBuffer = fs.readFileSync('./Inter.woff2');
const metadata = fontace(fontBuffer);
// { family: "Inter", format: 'woff2', style: "normal", weight: "400", unicodeRange: "U+0, U+20-7E..." }
```

### Example: remote font file

Fetch a font file over the network and then pass it to `fontace()`:

```js
import { fontace } from 'fontace';
import fs from 'node:fs';

const response = await fetch('https://example.com/Inter-Variable.woff2');
const fontBuffer = new Buffer(await response.arrayBuffer());
const metadata = fontace(fontBuffer);
// { family: "Inter", format: 'woff2', style: "normal", weight: "100 900", unicodeRange: "U+0, U+20-7E..." }
```

### Example: using `fontace` data to create CSS

```js
const { family, format, style, unicodeRange, weight } = fontace(fontBuffer);

const fontFaceDeclaration = `@font-face {
  font-family: ${family};
  font-style: ${style};
  font-weight: ${weight};
  font-display: swap;
  unicode-range: ${unicodeRange};
  src: url(/MyFont.woff2) format('${format}');
}`;
```

## Acknowledgements

`fontace` uses the [`fontkit`](https://www.npmjs.com/package/fontkit) package to extract data from font files.

## License

[MIT](LICENSE)
