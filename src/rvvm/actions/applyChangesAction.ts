import { ActionBase, ActionTypes } from "./action";

export interface ApplyChangesAction extends ActionBase {
    type: ActionTypes.APPLY_CHANGES;
}

export function createApplyChangesAction(): ApplyChangesAction {
    return {
        type: ActionTypes.APPLY_CHANGES,
    };
}