import * as React from "react";
import { ViewModel } from "../models/viewModel";
import { Component, ComponentProps } from "./Component";
import { Observable } from "../models/observable";

export class TextboxProps extends ComponentProps {
    text: Observable<string>;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export class Textbox<TProps extends TextboxProps, TState> 
    extends Component<ViewModel, TProps, TState> {
    
    constructor(props: TProps & ComponentProps) {
        super(props);

        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        this.change(this.props.text, e.target.value);
        
        if (this.props.onChange) {
            this.props.onChange(e);
        }
    }

    render() {
        return (
            <input 
                type="text" 
                value={this.bind(this.props.text)}
                onChange={this.handleChange}
                onBlur={this.applyChanges}
            />
        );
    }
}