import { Observable } from "./../rvvm/models/observable";
import { ViewModel } from "./../rvvm/models/viewModel";

export class BindingViewModel extends ViewModel {
    name: Observable<string> = new Observable("");
    surname: Observable<string> = new Observable("");
    
    clearName = () => {
        this.set(this.name, "");
        this.set(this.surname, "");
        this.applyChanges();
    }
}