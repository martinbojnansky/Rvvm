import { Observable } from "./observable";
import { createSetObservableAction } from "../actions/setObservableAction";
import { createApplyChangesAction } from "../actions/applyChangesAction";
import { Store } from "../store/store";

export class ViewModel {
    private store: Store<ViewModel>;

    connect(store: Store<ViewModel>) {
        this.store = store;
    }

    set<T>(prop: Observable<T>, value: T) {
        this.store.dispatch(createSetObservableAction(prop, value));
    }

    applyChanges() {
        this.store.dispatch(createApplyChangesAction());
    }
}