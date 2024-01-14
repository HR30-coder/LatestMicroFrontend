// import React, { lazy, Suspense } from 'react';
// import { BrowserRouter, Route, Switch } from 'react-router-dom';
// import {
//   StylesProvider,
//   createGenerateClassName,
// } from '@material-ui/core/styles';

// // import MarketingApp from './components/MarketingApp';
// // import AuthApp from './components/authApp';   converting these coomps into lazy loading modules to decreaase the initial bundle size
// import Header from './components/Header';

// let AuthLazy = lazy(() => { import('./components/authApp') }); //addde dynamic import to the module
// let MarketLazy = lazy(() => { import("./components/MarketingApp") });

// // const generateClassName = createGenerateClassName({
// //   productionPrefix: 'co',
// // });

// export default () => {
//   return (
//     <BrowserRouter>
//       <StylesProvider >
//         <div>
//           <Header />
//           <Suspense fallback={<div>Loading...</div>}>
//             <Switch>
//               <Route path="/auth" component={AuthLazy} />
//               <Route path="/" component={MarketLazy} />
//             </Switch>
//           </Suspense>
//         </div>
//       </StylesProvider>
//     </BrowserRouter>
//   );
// };


import React, { lazy, Suspense,useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {
  StylesProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import Header from './components/Header';

const MarketingLazy = lazy(() => import('./components/marketingApp'));
// const AuthLazy = lazy(() => import('./components/AuthApp'));

const generateClassName = createGenerateClassName({
  productionPrefix: 'co',
});

export default () => {

  const [isSignedIn, setSignedIn] = useState(false);
  return (
    <BrowserRouter>
      <StylesProvider generateClassName={generateClassName}>
        <div>
        
          <Header onSignOut={() => { setSignedIn(false); }} signedIn={isSignedIn} />
          <Suspense fallback={<div>Loading....</div>}>
            <Switch>
              {/* <Route path="/auth" >
                <AuthLazy onSignIn={() => { setSignedIn(true) }}/>
              </Route> */}
              {/* to trigger the workflow */}
              <Route path="/" >
                <MarketingLazy/>
              </Route>
            </Switch>
          </Suspense>
        </div>
      </StylesProvider>
    </BrowserRouter>
  );
};
