class Shape {
    constructor(text, color, background) {
        this.text = text;
        this.color = color;
        this.background = background;
    }
}

class Triangle extends Shape {
    constructor(text, color, background) {
        super(text, color, background)
    };

    render() {
        console.log('Sketching a triangle');
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="150, 18 244, 182 56, 182" fill="${this.background}" /><text x="150" y="150" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`
    }
}

class Square extends Shape {
    constructor(text, color, background) {
        super(text, color, background)
    };

    render() {
        console.log('I made a square');
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect x="25" y="25" rx="10" ry="10" width="150" height="150" fill="${this.background}" /><text x="100" y="115" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`
    }
}

class Circle extends Shape {
    constructor(text, color, background) {
        super(text, color, background)
    };

    render() {
        console.log('Drawing a circle');

        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="80" fill="${this.background}" /><text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.color}">${this.text}</text></svg>`
    }
}

const createSVG = ({ text, shape, color, background }) => {
    if (shape === 'Circle') {
        const svgShape = new Circle(text, color, background);
        return svgShape.render();
    } else if (shape === 'Square') {
        const svgShape = new Square(text, color, background);
        return svgShape.render();
    } else {
        const svgShape = new Triangle(text, color, background);
        return svgShape.render();
    }

}

module.exports = { Shape, Triangle, Circle, Square, createSVG };