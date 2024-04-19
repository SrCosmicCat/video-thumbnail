export default class Thumbnail {
    constructor(src = null) {
        this.HTMLElement = document.createElement('article');
        this.img = document.createElement('img');
        src != null ? this.setImgSrc(src) : null;
        this.clickFN = null;

        this.HTMLElement.addEventListener('click', () => {
            this.clickFN(this.img.src);
        })
    }

    setImgSrc(src) {
        this.img.src = src;
    }

    onClick(cb) {
        this.clickFN = cb;
    }

    render() {
        this.HTMLElement.classList.add('thumbnail');
        this.img.draggable = false;
        this.HTMLElement.appendChild(this.img);
        return this.HTMLElement;
    }
}