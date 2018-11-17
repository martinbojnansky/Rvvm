import { Action, ActionTypes } from "./../actions/action";
import { ViewModel } from "../models/viewModel";

export const Reducer = (viewModel: ViewModel = new ViewModel(), action: Action) => {
    switch (action.type) {
        case ActionTypes.SET_VIEWMODEL:
            break;
        case ActionTypes.SET_OBSERVABLE:
            action.observable._set(action.value);
            break;
        case ActionTypes.APPLY_CHANGES:
            break;
        default:
            break;
    }
};