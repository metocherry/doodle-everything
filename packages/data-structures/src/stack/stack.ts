
export class Stack<T> {
    #storage: { [key: number]: T } = {};
    #count: number = 0;

    public push(data: T): void {
        this.#storage[this.#count] = data;
        this.#count++;
    }

    public pop(): void {
        if (this.empty()) {
            return;
        }

        delete this.#storage[this.#count - 1];
        this.#count--;
    }

    public peek(): T|null {
        if (this.empty()) {
            return null;
        }

        return this.#storage[this.#count - 1];
    }

    public empty(): boolean {
        return this.#count < 1;
    }

    public size(): number {
        return this.#count;
    }
}
