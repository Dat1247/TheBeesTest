const changeToHex = (num: number): string => {
    let numChange: number;
    if(num < 0) {
        numChange = 0;
    } else if (num > 255) {
        numChange = 255;
    } else {
        numChange = num;
    }
    let hex = numChange.toString(16);
    return hex.length == 1 ? "0" + hex : hex
}


export function rgb(r: number, g: number, b: number): string {
    return "#" + changeToHex(r) + changeToHex(g) + changeToHex(b);
}
