import { Component, ComponentProps } from "./../rvvm/components/Component";
import * as React from "react";
import { ArrayViewModel } from "./../viewModels/ArrayViewModel";
import { Observable } from "../rvvm/models/observable";
import { ViewModel } from "../rvvm/models/viewModel";
import { Textbox } from "../rvvm/components/Textbox";
import { Literal } from "../rvvm/components/Literal";

export class ArrayItemComponent extends Component<ViewModel, 
{ todo: Observable<string> } & ComponentProps, {}> {
    constructor(props: { todo: Observable<string> } & ComponentProps) {
        super(props);
    }

    render() {
        return (
        <li>
            <input 
                type="text" 
                value={this.bind(this.props.todo)}
                onChange={(e) => this.change(this.props.todo, e.target.value)}
                onBlur={this.applyChanges}
            />
        </li>);
    }
}

export interface ArrayComponentProps extends ComponentProps {

}

export class ArrayComponent extends Component<ArrayViewModel, ArrayComponentProps, {}> {
    constructor(props: ArrayComponentProps) {
        super(props);
    }

    render() {
        return (
            <div>
                <p>
                    <Textbox store={this.store} text={this.vm.todo} />
                    <button onClick={this.vm.addTodo}>
                        Add Todo
                    </button>
                </p>
                <ul>
                {this.bind(this.vm.todos).map(todo => {
                    return ( 
                        <li key={todo.id}>
                            <Literal store={this.store} text={todo} />
                        </li>
                    );
                })}
                </ul>
                <ul>
                {this.bind(this.vm.todos).map(todo => {
                    return ( 
                       <ArrayItemComponent store={this.store} key={todo.id} todo={todo}/> 
                    );
                })}
                </ul>
                <p>
                    <button onClick={this.vm.generateTodos}>
                        Generate Todos
                    </button>
                </p>
            </div>
        );
    }
}