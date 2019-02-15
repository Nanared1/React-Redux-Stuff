// Import React and ReactDom libraries
import React from 'react';
import ReactDom from 'react-dom';


// function getButtonText(){
//   return 'Click On Me';
// }

// Create a react component
const App = () => {
  const buttonText = 'Click Me';

  const styles = {
    backgroundColor:"blue",
    color:"white"
  };
  return (
    <div>
      <label className="label" htmlFor="name">Enter Name:</label>
      <input id="name" type="text" />
      <button style={styles}>
        {buttonText}
      </button>
    </div>
  );
}

// Take the react component and show on screen
ReactDom.render(
  <App />,
  document.querySelector('#root')
);
