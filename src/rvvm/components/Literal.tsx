import { ViewModel } from "../models/viewModel";
import { Component, ComponentProps } from "./Component";
import { Observable } from "../models/observable";

export class LiteralProps extends ComponentProps {
    text: Observable<string>;
}

export class Literal<TProps extends LiteralProps, TState> 
    extends Component<ViewModel, TProps, TState> {
    
    constructor(props: TProps & ComponentProps) {
        super(props);
    }

    render() {
        return this.bind(this.props.text);
    }
}