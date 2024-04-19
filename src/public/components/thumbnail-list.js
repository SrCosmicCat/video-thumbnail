export default class ThumbnailList {
    constructor(HTMLElement) {
        this.HTMLElement = HTMLElement;
        this.thumbnails = [];
        this.selectedThumb = null;
    }

    addThumbnail(thumbnail) {
        this.thumbnails.push(thumbnail);
    }

    render() {
        for (let thumbnail of this.thumbnails) {
            this.HTMLElement.appendChild(thumbnail.render());
        }
        return this.HTMLElement;
    }
}