import * as React from "react";
import { BindingViewModel } from "./../viewModels/BindingViewModel";
import { ComponentProps, Component } from "../rvvm/components/Component";
import { Textbox } from "../rvvm/components/Textbox";
import { Literal } from "../rvvm/components/Literal";

export interface BindingComponentProps extends ComponentProps {

}

export class BindingComponent extends Component<BindingViewModel, BindingComponentProps, {}> {
    constructor(props: BindingComponentProps) {
        super(props);
    }

    render() {
        return (
            <React.Fragment>
                <Textbox 
                    store={this.store}
                    text={this.vm.name}
                />
                &nbsp;
                +
                &nbsp;
                <Textbox 
                    store={this.store}
                    text={this.vm.surname}
                />
                &nbsp;
                <Literal store={this.store} text={this.vm.name} /> 
                &nbsp;
                <Literal store={this.store} text={this.vm.surname} />
                &nbsp;
                <button onClick={this.vm.clearName}>
                    Clear
                </button>       
            </React.Fragment>
        );
    }
}