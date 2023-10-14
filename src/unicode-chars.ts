export const specialChars = {
    "cmd": "\u2318",
    "option": "\u2325",
    "alt": "\u2325",
    "ctrl": "\u2303",
    "backspace": "\u232B",
    "enter": "\u23CE",
    "shift": "\u21E7",
    "tab": "\u21B9",
    "escape": "\u238B",
    "up": "\u2191",
    "down": "\u2193",
    "left": "\u2190",
    "right": "\u2192"
};

export function replaceAllSpecialChars(str: string): string {
    let result = str;
    Object.entries(specialChars).forEach(entry => {
        const [key, value] = entry;
        const regex = new RegExp(key, 'g');
        result = result.replace(regex, value);
    });
    return result;
}