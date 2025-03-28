import { create, type FontCollection } from 'fontkit';
import { Font, FontStyle, FontWeight, FontMetadata } from './types';

/** Get CSS weight for a font. */
function getWeight(font: Font): FontWeight {
	if (font.variationAxes.wght) {
		return `${font.variationAxes.wght.min} ${font.variationAxes.wght.max}`;
	}
	const weight = font['OS/2']?.usWeightClass || (font['OS/2']?.fsSelection?.['bold'] ? 700 : 400);
	return `${weight}`;
}

/** Get CSS style for a font. */
function getStyle(font: Font): FontStyle {
	return font['OS/2']?.fsSelection?.italic || font.italicAngle !== 0 ? 'italic' : 'normal';
}

/**
 * Infer font-face properties from a buffer containing font file data.
 * @param fontBuffer Buffer containing font file data.
 * @example
 * import { fontace } from 'fontace';
 * import fs from 'node:fs';
 *
 * const fontBuffer = fs.readFileSync('./Inter.ttf');
 * const fontMetaData = fontace(fontBuffer);
 * // { family: "Inter", style: "normal", weight: "400", unicodeRange: "U+0, U+20-7E...
 */
export function fontace(fontBuffer: Buffer): FontMetadata {
	const font = create(fontBuffer) as Font | FontCollection;
	if (font.type === 'TTC') {
		throw new Error('TrueType Collection (TTC) files are not supported.');
	} else if (font.type === 'DFont') {
		throw new Error('DFONT files are not supported.');
	} else if (font.type !== 'TTF' && font.type !== 'WOFF' && font.type !== 'WOFF2') {
		throw new Error(`Unknown font type: ${font.type}`);
	}

	return {
		family: font.familyName,
		style: getStyle(font),
		unicodeRange: getUnicodeRange(font),
		weight: getWeight(font),
		format: ({ TTF: 'truetype', WOFF: 'woff', WOFF2: 'woff2' } as const)[font.type],
	};
}

/**
 * Convert an array of unicode code points to a CSS unicode-range string.
 * @param font A fontkit font object.
 * @returns A CSS unicode-range string, e.g. `"U+20-22, U+4E-50"`.
 */
function getUnicodeRange({ characterSet }: Font): string {
	if (!characterSet || characterSet.length === 0) {
		// The default value of `unicodeRange` is U+0-10FFFF, which represents all Unicode characters.
		return 'U+0-10FFFF';
	}
	characterSet.sort((a, b) => a - b);
	const ranges: string[] = [];
	let start = characterSet[0];
	let end = start;
	for (let i = 1; i < characterSet.length; i++) {
		if (characterSet[i] === end + 1) {
			end = characterSet[i];
		} else {
			ranges.push(formatRange(start, end));
			start = characterSet[i];
			end = start;
		}
	}
	ranges.push(formatRange(start, end));
	return ranges.join(', ');
}

/**
 * Format a range of unicode code points as a CSS unicode-range string.
 * @param start The start of the range, e.g. `32`.
 * @param end The end of the range, e.g. `34`.
 * @returns A CSS unicode-range string, e.g. `"U+20-22"`.
 */
function formatRange(start: number, end: number): string {
	return start === end
		? `U+${start.toString(16).toUpperCase()}`
		: `U+${start.toString(16).toUpperCase()}-${end.toString(16).toUpperCase()}`;
}
