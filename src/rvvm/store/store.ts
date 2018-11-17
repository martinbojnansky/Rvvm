import { Reducer } from "./reducer";
import { Action, ActionTypes } from "./../actions/action";
import { ViewModelObservableObserver } from "./../models/viewModelObservableObserver";
import { ViewModel } from "../models/viewModel";
import { SetObservableAction } from "../actions/setObservableAction";
import { ApplyChangesAction } from "../actions/applyChangesAction";

interface ViewModelObservableObserverMap {
    [observerId: string]: () => void;
}

interface ViewModelObservableObserversMap {
    [observableId: string]: ViewModelObservableObserverMap;
}

interface ObservableChangesMap {
    [observableId: string]: boolean;
}

interface ObserverChangesMap {
    [observerId: string]: () => void;
}

export class Store<TViewModel extends ViewModel> {
    private viewModel: TViewModel;
    private reducer: (viewModel: TViewModel, action: Action) => void;
    private observers: ViewModelObservableObserversMap = {};
    private observableChanges: ObservableChangesMap = {};

    constructor(viewModel: TViewModel) {
        this.viewModel = viewModel;
        this.reducer = Reducer;

        this.viewModel.connect(this);
    }

    getViewModel() { 
        return this.viewModel;
    }

    dispatch(action: Action) {
        this.reducer(this.viewModel, action);

        switch (action.type) {

            case ActionTypes.SET_OBSERVABLE:
                this.setObservable(action);
                break;

            case ActionTypes.APPLY_CHANGES:
                this.applyChanges(action);
                break;

            default:
                break;
        }
    }

    subscribe(observer: ViewModelObservableObserver) {
        if (this.observers[observer.observableId] === undefined) {
            this.observers[observer.observableId] = {};
        }

        this.observers[observer.observableId][observer.observerId] = observer.forceUpdate;
    }

    unsubscribe(id: string) {
        for (let observer in this.observers) {
            if (this.observers[observer][id] !== undefined) {
                delete this.observers[observer][id];
            }
        }
    }

    private setObservable(action: SetObservableAction) {
        this.observableChanges[action.observable.id] = true;
                
        if (action.observerId) {
            this.observers[action.observable.id][action.observerId]();
        }
    }

    private applyChanges(action: ApplyChangesAction) {
        let observerChanges: ObserverChangesMap = {}; 
            
        for (let observableId in this.observableChanges) {
            if (observableId) {
                let observer = this.observers[observableId];
                for (let observerId in observer) {
                    if (observerId) {
                        observerChanges[observerId] = observer[observerId];
                    }
                }
            }
        }

        for (let observerId in observerChanges) {
            if (observerId) {
                observerChanges[observerId]();
            }
        }

        this.observableChanges = {};
    }
}