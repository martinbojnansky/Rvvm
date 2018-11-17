import { Observable } from "./../rvvm/models/observable";
import { ViewModel } from "./../rvvm/models/viewModel";
import { ObservableArray } from "../rvvm/models/observableArray";

export class ArrayViewModel extends ViewModel {
    todo: Observable<string> = new Observable("");
    todos: ObservableArray<string>
        = new ObservableArray(
            [
                new Observable("milk"),
                new Observable("carrot")
            ]
        );

    addTodo = () => {
        this.set(this.todos, [ ...this.todos.get(), new Observable(this.todo.get())]);
        this.set(this.todo, "");
        this.applyChanges();
    }

    generateTodos = () => {
        let todos: Observable<string>[] = [];
        for (let i = 0; i < 1000; i++) {
            todos.push(new Observable(`Task ${i}`));
        }
        this.set(this.todos, todos);
        this.applyChanges();
    }
}