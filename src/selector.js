// YOUR CODE HERE


class $ {
    constructor(str) {
        const className = [];
        const id = [];
        const tagName = [];
        if (str[0] === '.') {
            className.push(str.slice(1));
        }
        else if (str[0] === '#') {
            id.push(str.slice(1));
        }
        else {
            tagName.push(str.toUpperCase());
        }
    }
}