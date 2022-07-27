import React from 'react';
function App() {
  return (
    <div>
      <C1 name="Gaurav Nasa" />
    </div>
  );
}

function C1(props) {
  return <C2 name={props.name} />;
}

function C2(props) {
  return <C3 name={props.name} />;
}
function C3(props) {
  return <C4 name={props.name} />;
}
function C4(props) {
  return (
    <h3>
      {props.name} 
    </h3>
  );
}

export default App;
