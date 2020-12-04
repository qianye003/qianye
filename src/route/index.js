import {Route, Switch} from "react-router-dom";

import About from "../page/about/About";
import Home from "../page/home/Home";
import Component from "../page/component/Component";

export default function Router(){ 
    
    return(
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/Home"component={Home}/>
            <Route path="/about"component={About}/>
            <Route path="/component"component={Component}/>
        </Switch>
    
    )
}