import { mount } from 'auth/authIndex';
import React, { useRef, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export default ({onSignIn}) => {
  const ref = useRef(null);
  const history = useHistory();

  useEffect(() => {
    const { onContainerNavigate } = mount(ref.current, {
      path: history.location.pathname,
      onNavigate: ({ pathname: nextPathname }) => {
        const { pathname } = history.location;

        if (pathname !== nextPathname) {
          history.push(nextPathname);
        }
      },
      onSignIn
    });

    history.listen(onContainerNavigate);
  }, []);

  return <div ref={ref} />;
};
