import { useEffect } from 'react';

const MyComponent=()=> {
  useEffect(() => {
    const observer = new MutationObserver((mutationsList) => {
      for (const mutation of mutationsList) {
        if (mutation.type === 'childList') {
          // Handle the DOM changes here
          console.log('A child node has been added or removed');
        }
      }
    });

    // Start observing the body or any specific element
    const targetNode = document.getElementById('myElement'); // Or document.body
    observer.observe(targetNode, { childList: true, subtree: true });

    // Clean up observer on component unmount
    return () => {
      observer.disconnect();
    };
  }, []);

  return <div id="myElement">Hello, world!</div>;
}
export default MyComponent;