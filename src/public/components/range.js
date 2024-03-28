export default class Range {
    constructor(HTMLelement) {
        this.HTMLelement = HTMLelement;
        this.value = HTMLelement.value;
        this.min = HTMLelement.min;
        this.max = HTMLelement.max;
        this.changeFN = null;
    
        this.init();
    }

    init() {
        this.HTMLelement.addEventListener('input', () => {
            this.value = this.HTMLelement.value;
            this.changeFN(this.value);
        });
    }

    change(fn) {
        this.changeFN = fn;
    }
}
