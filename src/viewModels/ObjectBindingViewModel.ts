import { Observable } from "./../rvvm/models/observable";
import { ViewModel } from "./../rvvm/models/viewModel";

export class ObjectBindingViewModel extends ViewModel {
    item: Observable<{ title: string; observableTitle: Observable<string>; }> 
        = new  Observable(
            { 
                title: "xxx", 
                observableTitle: new Observable("yyy") }
        );

    appendItemTitle = () => {
        this.set(this.item, { ...this.item.get(), title: this.item.get().title + "x" });
        this.applyChanges();
    }
}