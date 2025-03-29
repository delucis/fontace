export type FontStyle =
	| 'auto'
	| 'normal'
	| 'italic'
	| 'oblique'
	| `oblique ${number}deg`
	| `oblique ${number}deg ${number}deg`;
type FontWeightAbsolute = 'normal' | 'bold' | `${number}`;
export type FontWeight =
	| 'auto'
	| FontWeightAbsolute
	| `${FontWeightAbsolute} ${FontWeightAbsolute}`;

export interface FontMetadata {
	/** The font family name as stored in the font file, e.g. `"Inter"`. */
	family: string;
	/** The range of Unicode code points this font file contains, e.g. `"U+0-10FFFF"`. */
	unicodeRange: string;
	/** The style of this font file, e.g. `"normal"` or `"italic"`. */
	style: FontStyle;
	/** The font weight(s) this file supports, which can be a range for variable fonts, e.g. `"400"` or `"100 900"`. */
	weight: FontWeight;
	/** Font format compatible with `format()` values in `@font-face` `src` properties. */
	format: 'truetype' | 'woff' | 'woff2';
	/** Whether or not this font is variable. */
	isVariable: boolean;
}
