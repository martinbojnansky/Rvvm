import { Utils } from "../utils/utils";

export class Observable<T> {
    id: string;
    protected value: T;

    constructor(value: T) {
        this.id = Utils.generateUuid();
        this.value = value;
    }

    get() {
        return this.value;
    }

    _set(value: T) {
        this.value = value;
    }
}