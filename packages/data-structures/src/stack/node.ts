export class Node<T> {
    #data: T;

    constructor(data: T) {
        this.#data = data;
    }
}
