import { IdUtils } from "../utils/idUtils";

export class Observable<T> {
    id: string;
    protected value: T;

    constructor(value: T) {
        this.id = IdUtils.uuid();
        this.value = value;
    }

    get() {
        return this.value;
    }

    _set(value: T) {
        this.value = value;
    }
}