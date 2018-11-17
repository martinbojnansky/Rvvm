import { SetViewModelAction } from "./setViewModelAction";
import { SetObservableAction } from "./setObservableAction";
import { ApplyChangesAction } from "./applyChangesAction";

export enum ActionTypes {     
    SET_VIEWMODEL = "SET_VIEWMODEL", 
    SET_OBSERVABLE = "SET_OBSERVABLE",
    APPLY_CHANGES = "APPLY_CHANGES"
}

export interface ActionBase {
    type: ActionTypes;
}

export type Action =
    SetViewModelAction
    | SetObservableAction
    | ApplyChangesAction
;