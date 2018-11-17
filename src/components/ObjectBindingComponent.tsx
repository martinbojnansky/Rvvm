import * as React from "react";
import { ObjectBindingViewModel } from "./../viewModels/ObjectBindingViewModel";
import { ComponentProps, Component } from "../rvvm/components/Component";
import { Literal } from "../rvvm/components/Literal";
import { Textbox } from "../rvvm/components/Textbox";

export interface ObjectBindingComponentProps extends ComponentProps {

}

export class ObjectBindingComponent extends Component<ObjectBindingViewModel, ObjectBindingComponentProps, {}> {
    constructor(props: ObjectBindingComponentProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>
                    <button onClick={this.vm.appendItemTitle}>
                        Append
                    </button>
                    &nbsp;
                    {this.bind(this.vm.item).title} 
                    {/* <Literal store={this.store} text={this.vm.item.get().title} /> */}
                </p>
                <p>
                    <Textbox store={this.store} text={this.vm.item.get().observableTitle} />
                    &nbsp;
                    <Literal store={this.store} text={this.vm.item.get().observableTitle} />
                </p>
            </div>
        );
    }
}