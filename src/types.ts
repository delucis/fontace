import type { Font as FKFont } from 'fontkit';

/**
 * Extended version of fontkit’s `Font` type as `@types/fontkit` is not fully updated.
 * Remove when https://github.com/DefinitelyTyped/DefinitelyTyped/pull/72314 is released.
 */
export interface Font extends FKFont {
	variationAxes: Partial<
		Record<string, { name: string; min: number; default: number; max: number }>
	>;
	'OS/2': FKFont['OS/2'] & {
		fsSelection: FKFont['OS/2']['fsSelection'] & {
			bold: boolean;
			regular: boolean;
			oblique: boolean;
		};
	};
}

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
	family: string;
	unicodeRange?: string;
	style?: FontStyle;
	weight?: FontWeight;
}
