export class ViewModelObservableObserver {
    observableId: string;
    observerId: string;
    forceUpdate: () => void;
    
    constructor(observableId: string, observerId: string, forceUpdate: () => void) {
        this.observableId = observableId;
        this.observerId = observerId;
        this.forceUpdate = forceUpdate;
    }
}