PropsandStates.jsx
import React, { useState } from "react";
function Child(props) {
  return <h2>Hello, {props.name}</h2>;
}
function Parent() {
  const [name, setName] = useState("Kavya");

  return (
    <div>
      <h1>Props and State Demo</h1>

      {/* Passing state as props */}
      <Child name={name} />

      <button onClick={() => setName("Ramya")}>
        Change Name
      </button>
    </div>
  );
}

export default Parent;
