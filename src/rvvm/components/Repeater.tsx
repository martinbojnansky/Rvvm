import { ViewModel } from "../models/viewModel";
import { Component, ComponentProps } from "./Component";
import { Observable } from "../models/observable";
import { ObservableArray } from "../models/observableArray";

export class RepeaterProps extends ComponentProps {
    dataSource: ObservableArray<Observable<any>>;
}

export class Repeater<TProps extends RepeaterProps, TState> 
    extends Component<ViewModel, TProps, TState> {
    
    constructor(props: TProps & ComponentProps) {
        super(props);
    }

    render() {
        return null;
    }
}