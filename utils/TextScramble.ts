export class TextScramble {
    el: HTMLElement;
    chars: string;
    frameRequest: number = 0;
    frame: number = 0;
    queue: any[] = [];
    resolve: () => void = () => {
    };

    constructor(el: HTMLElement) {
        this.el = el;
        // Более "спокойные" символы — не режет глаз
        this.chars = "!-_/|\\=+*#•~";
        this.update = this.update.bind(this);
    }

    setText(newText: string) {
        const oldText = this.el.innerText;
        const length = Math.max(oldText.length, newText.length);
        const promise = new Promise<void>((resolve) => (this.resolve = resolve));
        this.queue = [];

        for (let i = 0; i < length; i++) {
            const from = oldText[i] || "";
            const to = newText[i] || "";
            const start = Math.floor(Math.random() * 40);
            const end = start + Math.floor(Math.random() * 60); // чуть дольше — плавнее
            this.queue.push({from, to, start, end});
        }

        cancelAnimationFrame(this.frameRequest);
        this.frame = 0;
        this.update();
        return promise;
    }

    update() {
        let output = "";
        let complete = 0;
        for (let i = 0, n = this.queue.length; i < n; i++) {
            let {from, to, start, end, char} = this.queue[i];
            if (this.frame >= end) {
                complete++;
                output += to;
            } else if (this.frame >= start) {
                if (!char || Math.random() < 0.05) {
                    char = this.randomChar();
                    this.queue[i].char = char;
                }
                output += `<span class="dud">${char}</span>`;
            } else {
                output += from;
            }
        }
        this.el.innerHTML = output;
        if (complete === this.queue.length) {
            this.resolve();
        } else {
            this.frameRequest = requestAnimationFrame(this.update.bind(this));
            this.frame++;
        }
    }

    randomChar() {
        return this.chars[Math.floor(Math.random() * this.chars.length)];
    }
}