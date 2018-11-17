import { ActionBase, ActionTypes } from "./action";

export interface SetViewModelAction extends ActionBase {
    type: ActionTypes.SET_VIEWMODEL;
    viewModel: any;
}

export function createSetViewModelAction(viewModel: any): SetViewModelAction {
    return {
        type: ActionTypes.SET_VIEWMODEL,
        viewModel: viewModel
    };
}