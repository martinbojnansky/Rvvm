import * as React from "react";
import { Store } from "./../store/store";
import { IdUtils } from "./../utils/idUtils";
import { Observable } from "../models/observable";
import { createSetObservableAction } from "../actions/setObservableAction";
import { ViewModelObservableObserver } from "../models/viewModelObservableObserver";
import { createApplyChangesAction } from "../actions/applyChangesAction";
import { ViewModel } from "../models/viewModel";

export class ComponentProps {
    store: Store<any>;
}

export class Component<TViewModel extends ViewModel, TProps, TState> 
    extends React.Component<TProps & ComponentProps, TState> {
    
    get vm(): TViewModel {
        return this.props.store.getViewModel();
    }

    get store(): Store<TViewModel> {
        return this.props.store;
    }

    private observerId: string;

    constructor(props: TProps & ComponentProps) {
        super(props);

        this.observerId = IdUtils.uuid();
        
        this.bind = this.bind.bind(this);
        this.change = this.change.bind(this);
        this.applyChanges = this.applyChanges.bind(this);
    }

    componentWillUnmount() {
        this.store.unsubscribe(this.observerId);
    }

    bind<T>(observable: Observable<T>): T {
        this.store.subscribe(new ViewModelObservableObserver(
            observable.id, this.observerId, 
            () => this.forceUpdate()
        ));
        return observable.get();
    }

    change<T>(observable: Observable<T>, value: T) {
        this.store.dispatch(createSetObservableAction(observable, value, this.observerId));
    }

    applyChanges() {
        this.store.dispatch(createApplyChangesAction());
    }

    render() {
        return this.props.children;
    }
}