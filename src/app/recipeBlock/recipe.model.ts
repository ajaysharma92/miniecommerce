export class Recipet {
    public name: string;
    public description: string;
    public imagePath: string;
    public altText: string;
    constructor(name: string, desc: string, imagePath: string, altText: string) {
        this.name = name;
        this.description = desc;
        this.imagePath = imagePath;
        this.altText = altText;

    }
}