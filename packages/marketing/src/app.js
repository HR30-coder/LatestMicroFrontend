import React    from "react";
import { Switch, Route, Router ,BrowserRouter} from "react-router-dom";
import { StylesProvider , createGenerateClassName } from "@material-ui/core/styles";
import Landing from "./components/Landing";
import Pricing from "./components/Pricing";
import "../public/app.css";

// const createGenerateClassNam = createGenerateClassName({
//     productionPrefix: "mk"
// })

export default ({history}) => {
    return <div className="marketing">
        <h2 className="this">THIS FROM MARKETING</h2>
        <StylesProvider>
            <Router history={history}>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </Router>

            {/* <BrowserRouter>
                <Switch>
                    <Route exact path="/pricing" component={Pricing} />
                    <Route path="/" component={Landing} />
                </Switch>
            </BrowserRouter> */}

        </StylesProvider>
    </div>
}