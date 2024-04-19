export default class InputFile {
    constructor(HTMLelement) {
        this.HTMLelement = HTMLelement;
        this.file = null;
        this.fileURL = null;
        this.changeFN = null;
        
        this.init();
    }

    init() {
        this.HTMLelement.addEventListener('change', async () => {
            await this.change();
            this.changeFN({ file: this.file, fileURL: this.fileURL });
        });
    }

    change() {
        return new Promise((resolve, reject) => {
            this.file = this.HTMLelement.files[0];
            const reader = new FileReader();

            reader.onload = (e) => {
                this.fileURL = e.target.result;
                resolve();
            };

            reader.readAsDataURL(this.file);
        });
    }

    onChange(fn) {
        this.changeFN = fn;
    }
}