import { ActionBase, ActionTypes } from "./action";
import { Observable } from "../models/observable";

export interface SetObservableAction extends ActionBase {
    type: ActionTypes.SET_OBSERVABLE;
    observable: Observable<any>;
    value: any;
    observerId?: string;
}

export function createSetObservableAction
(prop: Observable<any>, value: any, observerId?: string): SetObservableAction {
    return {
        type: ActionTypes.SET_OBSERVABLE,
        observable: prop,
        value: value,
        observerId: observerId
    };
}