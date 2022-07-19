// Code Keypad Component Here
import react from "react";
function Keypad() {
  function handleChange(event) {
    console.log("Entering password...");
  }
  return (
    <div>
      <input
        onChange={handleChange}
        type="password"
        name="Password"
        value="Entering password..."
      />
      ;
    </div>
  );
}
export default Keypad;
