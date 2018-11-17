import * as React from "react";
import * as ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

import { Store } from "./rvvm/store/store";
import { BindingComponent } from "./components/BindingComponents";
import { BindingViewModel } from "./viewModels/BindingViewModel";
import { ObjectBindingViewModel } from "./viewModels/ObjectBindingViewModel";
import { ObjectBindingComponent } from "./components/ObjectBindingComponent";
import { ArrayViewModel } from "./viewModels/ArrayViewModel";
import { ArrayComponent } from "./components/ArrayComponent";

let bindingStore = new Store(new BindingViewModel());
let objectBindingStore = new Store(new ObjectBindingViewModel());
let arrayStore = new Store(new ArrayViewModel());

const render = () => {
  return ReactDOM.render(
    <div>
      
        <h2>Bindings</h2>
        <BindingComponent store={bindingStore}/>

        <h2>Objects</h2>
        <ObjectBindingComponent store={objectBindingStore}/>

        <h2>Arrays</h2>
        <ArrayComponent store={arrayStore}/>

    </div>,
    document.getElementById("root") as HTMLElement
  );
};

render();
registerServiceWorker();
