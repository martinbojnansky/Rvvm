import { Observable } from "./observable";

export class ObservableArray<T> extends Observable<Observable<T>[]> {
    static fromArray<T>(array: T[]): ObservableArray<T> {
        let items: Observable<T>[] = [];
        array.forEach(item => {
            items.push(new Observable(item));
        });
        return new ObservableArray(items);
    }
}