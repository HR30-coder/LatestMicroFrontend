import React from 'react';
import ReactDom from 'react-dom';
import App from "./app";
import { createMemoryHistory,createBrowserHistory } from 'history';

const mount = (el,{path,onNavigate,defaultHistory,onSignIn}) => {

    const history = defaultHistory || createMemoryHistory({
        initialEntries: [path]
    });

    if (onNavigate) {
        history.listen(onNavigate);   
    }

    ReactDom.render(
        <App onSignIn={onSignIn} history={history} />,
        el
    );

    return {
        onContainerNavigate({ pathname: nextPathName }){
            const { pathname } = history.location;

            console.log("next path name auth : ",nextPathName);
            

            if (nextPathName !== pathname) {
                // console.log("hhjei");
                history.push(nextPathName);
            }
        }
    }
}

if (process.env.NODE_ENV === 'development') {
    if (document.querySelector("#isolatedDev")) {
        mount(document.querySelector("#isolatedDev"), { defaultHistory: createBrowserHistory() });
        console.log("mounted");
    }
}

export {
    mount
};