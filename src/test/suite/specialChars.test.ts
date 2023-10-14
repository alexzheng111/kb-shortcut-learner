import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
// import * as myExtension from '../../extension';
import { replaceAllSpecialChars } from '../../specialChars';

suite('Test Keyboard Keys as Unicode Characters', () => {
	test('test zero unicode characters', () => {
		const shortcut = "this is not a keyboard shortcut";
		assert.strictEqual(replaceAllSpecialChars(shortcut), "this is not a keyboard shortcut");
	});

	test('test a shortcut with some unicode characters', () => {
		const shortcut = "shift+alt+cmd+down";
		assert.strictEqual(replaceAllSpecialChars(shortcut), "\u21E7+\u2325+\u2318+\u2193");
	});

	test('test a shortcut with every unicode characters', () => {
		const shortcut = "cmd+option+alt+ctrl+backspace+enter+shift+tab+escape+up+down+left+right";
		assert.strictEqual(replaceAllSpecialChars(shortcut), "\u2318+\u2325+\u2325+\u2303+\u232B+\u23CE+\u21E7+\u21B9+\u238B+\u2191+\u2193+\u2190+\u2192");
	});

	test('test multiple of the same unicode characters', () => {
		const shortcut = "cmd+cmd+cmd";
		assert.strictEqual(replaceAllSpecialChars(shortcut), "\u2318+\u2318+\u2318");
	});

	test('test shortcut with escape characters', () => {
		const shortcut = "alt+\\";
		assert.strictEqual(replaceAllSpecialChars(shortcut), "\u2325+\\");
	});

	test('test shortcut with multiple commands', () => {
		const shortcut = "cmd+l cmd+o";
		assert.strictEqual(replaceAllSpecialChars(shortcut), "\u2318+l \u2318+o");
	});
});
