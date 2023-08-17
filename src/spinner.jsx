import * as React from 'react';
import querystring from 'querystring';
import SockJS from 'sockjs-client';
// ...
console.log('query:', __resourceQuery);
export default function Spinner() {
  const [showSpinner, setShowSpinner] = React.useState(false);
  React.useEffect(() => {
    const sockOptions = querystring.parse(__resourceQuery.substr(1));
    const connection = new SockJS(
      `${window.location.protocol}//${sockOptions.sockHost ?? window.location.hostname}:${
        sockOptions.sockPort ?? window.location.port
      }${sockOptions.sockPath ?? '/sockjs-node'}`,
    );

    // Some message handling
  }, []);

  return <div>{/* Render some markup that shows a spinner */}</div>;
}
