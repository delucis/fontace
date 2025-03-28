import { describe, expect, test } from 'vitest';
import { fontace } from '../src';

import interVariableWoff2String from '@fontsource-variable/inter/files/inter-latin-wght-normal.woff2?url&inline';
import roboto400ItalicWoff2String from '@fontsource/roboto/files/roboto-latin-400-italic.woff2?url&inline';
import roboto400ItalicWoffString from '@fontsource/roboto/files/roboto-latin-400-italic.woff?url&inline';
import roboto400Woff2String from '@fontsource/roboto/files/roboto-latin-400-normal.woff2?url&inline';
import roboto400WoffString from '@fontsource/roboto/files/roboto-latin-400-normal.woff?url&inline';
import roboto900Woff2String from '@fontsource/roboto/files/roboto-latin-900-normal.woff2?url&inline';
import roboto900WoffString from '@fontsource/roboto/files/roboto-latin-900-normal.woff?url&inline';
import openSans400TTFString from './fonts/open-sans_5.0.28_latin-400-normal.ttf?url&inline';
import openSans300ItalicTTFString from './fonts/open-sans_5.1.0_latin-300-italic.ttf?url&inline';

// WOFF2 fonts
const interVariableWoff2 = dataUrlToBuffer(interVariableWoff2String);
const roboto400Woff2 = dataUrlToBuffer(roboto400Woff2String);
const roboto400ItalicWoff2 = dataUrlToBuffer(roboto400ItalicWoff2String);
const roboto900Woff2 = dataUrlToBuffer(roboto900Woff2String);

// WOFF fonts
const roboto400Woff = dataUrlToBuffer(roboto400WoffString);
const roboto400ItalicWoff = dataUrlToBuffer(roboto400ItalicWoffString);
const roboto900Woff = dataUrlToBuffer(roboto900WoffString);

// TTF fonts
const openSans400TTF = dataUrlToBuffer(openSans400TTFString);
const openSans300ItalicTTF = dataUrlToBuffer(openSans300ItalicTTFString);

describe('fontace', () => {
	describe('TTF', () => {
		test('should infer properties for a regular font', () => {
			expect(fontace(openSans400TTF)).toMatchInlineSnapshot(`
				{
				  "family": "Open Sans",
				  "format": "truetype",
				  "isVariable": false,
				  "style": "normal",
				  "unicodeRange": "U+0, U+D, U+20-7E, U+A0-FF, U+131, U+152-153, U+2BC, U+2C6, U+2DA, U+2DC, U+300-301, U+303-304, U+308-309, U+323, U+2002, U+2009, U+200B, U+2013-2014, U+2018-201A, U+201C-201E, U+2022, U+2026, U+2032-2033, U+2039-203A, U+2044, U+2074, U+20AC, U+2122, U+2212, U+2215, U+FEFF, U+FFFD, U+FFFF",
				  "weight": "400",
				}
			`);
		});

		test('should infer properties for a light italic font', () => {
			expect(fontace(openSans300ItalicTTF)).toMatchInlineSnapshot(`
				{
				  "family": "Open Sans Light",
				  "format": "truetype",
				  "isVariable": false,
				  "style": "italic",
				  "unicodeRange": "U+0, U+D, U+20-7E, U+A0-FF, U+131, U+152-153, U+2BC, U+2C6, U+2DA, U+2DC, U+300-301, U+303-304, U+308-309, U+323, U+2002, U+2009, U+200B, U+2013-2014, U+2018-201A, U+201C-201E, U+2022, U+2026, U+2032-2033, U+2039-203A, U+2044, U+2074, U+20AC, U+2122, U+2212, U+2215, U+FEFF, U+FFFD, U+FFFF",
				  "weight": "300",
				}
			`);
		});
	});

	describe('WOFF', () => {
		test('should infer properties for a regular font', () => {
			expect(fontace(roboto400Woff)).toMatchInlineSnapshot(`
				{
				  "family": "Roboto",
				  "format": "woff",
				  "isVariable": false,
				  "style": "normal",
				  "unicodeRange": "U+0, U+2, U+D, U+20-7E, U+A0-FF, U+131, U+152-153, U+2BC, U+2C6, U+2DA, U+2DC, U+300-301, U+303, U+309, U+323, U+2002, U+2009, U+200B, U+2013-2014, U+2018-201A, U+201C-201E, U+2022, U+2026, U+2032-2033, U+2039-203A, U+2044, U+20AC, U+2122, U+2212, U+FEFF, U+FFFD, U+FFFF",
				  "weight": "400",
				}
			`);
		});

		test('should infer properties for a super bold font', () => {
			expect(fontace(roboto900Woff)).toMatchInlineSnapshot(`
				{
				  "family": "Roboto Black",
				  "format": "woff",
				  "isVariable": false,
				  "style": "normal",
				  "unicodeRange": "U+0, U+2, U+D, U+20-7E, U+A0-FF, U+131, U+152-153, U+2BC, U+2C6, U+2DA, U+2DC, U+300-301, U+303, U+309, U+323, U+2002, U+2009, U+200B, U+2013-2014, U+2018-201A, U+201C-201E, U+2022, U+2026, U+2032-2033, U+2039-203A, U+2044, U+20AC, U+2122, U+2212, U+FEFF, U+FFFD, U+FFFF",
				  "weight": "900",
				}
			`);
		});

		test('should infer properties for an italic font', () => {
			expect(fontace(roboto400ItalicWoff)).toMatchInlineSnapshot(`
				{
				  "family": "Roboto",
				  "format": "woff",
				  "isVariable": false,
				  "style": "italic",
				  "unicodeRange": "U+0, U+2, U+D, U+20-7E, U+A0-FF, U+131, U+152-153, U+2BC, U+2C6, U+2DA, U+2DC, U+300-301, U+303, U+309, U+323, U+2002, U+2009, U+200B, U+2013-2014, U+2018-201A, U+201C-201E, U+2022, U+2026, U+2032-2033, U+2039-203A, U+2044, U+20AC, U+2122, U+2212, U+FEFF, U+FFFD, U+FFFF",
				  "weight": "400",
				}
			`);
		});
	});

	describe('WOFF2', () => {
		test('should infer properties for a variable font', () => {
			expect(fontace(interVariableWoff2)).toMatchInlineSnapshot(`
				{
				  "family": "Inter",
				  "format": "woff2",
				  "isVariable": true,
				  "style": "normal",
				  "unicodeRange": "U+0, U+20-7E, U+A0-AC, U+AE-FF, U+131, U+152-153, U+2BB-2BC, U+2C6, U+2DA, U+2DC, U+300-301, U+303-304, U+308-309, U+323, U+2002, U+2009, U+200B, U+2013-2014, U+2018-201A, U+201C-201E, U+2022, U+2026, U+2032-2033, U+2039-203A, U+2044, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+FEFF, U+FFFF",
				  "weight": "100 900",
				}
			`);
		});

		test('should infer properties for a regular font', () => {
			expect(fontace(roboto400Woff2)).toMatchInlineSnapshot(`
				{
				  "family": "Roboto",
				  "format": "woff2",
				  "isVariable": false,
				  "style": "normal",
				  "unicodeRange": "U+0, U+2, U+D, U+20-7E, U+A0-FF, U+131, U+152-153, U+2BC, U+2C6, U+2DA, U+2DC, U+300-301, U+303, U+309, U+323, U+2002, U+2009, U+200B, U+2013-2014, U+2018-201A, U+201C-201E, U+2022, U+2026, U+2032-2033, U+2039-203A, U+2044, U+20AC, U+2122, U+2212, U+FEFF, U+FFFD, U+FFFF",
				  "weight": "400",
				}
			`);
		});

		test('should infer properties for a super bold font', () => {
			expect(fontace(roboto900Woff2)).toMatchInlineSnapshot(`
				{
				  "family": "Roboto Black",
				  "format": "woff2",
				  "isVariable": false,
				  "style": "normal",
				  "unicodeRange": "U+0, U+2, U+D, U+20-7E, U+A0-FF, U+131, U+152-153, U+2BC, U+2C6, U+2DA, U+2DC, U+300-301, U+303, U+309, U+323, U+2002, U+2009, U+200B, U+2013-2014, U+2018-201A, U+201C-201E, U+2022, U+2026, U+2032-2033, U+2039-203A, U+2044, U+20AC, U+2122, U+2212, U+FEFF, U+FFFD, U+FFFF",
				  "weight": "900",
				}
			`);
		});

		test('should infer properties for an italic font', () => {
			expect(fontace(roboto400ItalicWoff2)).toMatchInlineSnapshot(`
				{
				  "family": "Roboto",
				  "format": "woff2",
				  "isVariable": false,
				  "style": "italic",
				  "unicodeRange": "U+0, U+2, U+D, U+20-7E, U+A0-FF, U+131, U+152-153, U+2BC, U+2C6, U+2DA, U+2DC, U+300-301, U+303, U+309, U+323, U+2002, U+2009, U+200B, U+2013-2014, U+2018-201A, U+201C-201E, U+2022, U+2026, U+2032-2033, U+2039-203A, U+2044, U+20AC, U+2122, U+2212, U+FEFF, U+FFFD, U+FFFF",
				  "weight": "400",
				}
			`);
		});
	});

	describe('errors', () => {
		test('should throw an error for an invalid ArrayBuffer', () => {
			const invalidBuffer = Buffer.from(new ArrayBuffer(8));
			expect(() => fontace(invalidBuffer)).toThrow('Unknown font format');
		});

		test('should throw an error for an empty ArrayBuffer', () => {
			const emptyBuffer = Buffer.from(new ArrayBuffer(0));
			expect(() => fontace(emptyBuffer)).toThrow('Unknown font format');
		});
	});
});

/**
 * Convert a Data URL to a `Buffer`.
 * Based on https://github.com/vitejs/vite/issues/12366#issuecomment-2674191945
 * @param dataUrl Data URL imported using `?url&inline` Vite import query.
 */
function dataUrlToBuffer(dataUrl: string) {
	const base64StartIndex = dataUrl.indexOf('base64,');
	if (base64StartIndex >= 0) {
		const base64 = dataUrl.slice(base64StartIndex + 'base64,'.length);
		const binaryString = atob(base64);
		const bytes = new Uint8Array(binaryString.length);
		for (var i = 0; i < binaryString.length; i++) {
			bytes[i] = binaryString.charCodeAt(i);
		}
		return Buffer.from(bytes.buffer);
	}
	const str = decodeURIComponent(dataUrl.slice(dataUrl.indexOf(',') + 1));
	const enc = new TextEncoder();
	const bytes = enc.encode(str);
	return Buffer.from(bytes.buffer);
}
