import { useState } from "react";
const frameworks = ["react", "angular", "vue", "svelte"];

const FormCheckBox = () => {
  const [shipping, setShipping] = useState(false);
  const [framework, setFramework] = useState("react");

  const handleShipping = (e) => {
    console.log(e.target.checked);
    setShipping(e.target.checked);
  };

  const handleFramework = (e) => {
    setFramework(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      `You chose ${framework} and ${
        shipping ? "free shipping" : "no free shipping"
      }.`
    );
  };

  return (
    <div>
      <form className="form" onSubmit={handleSubmit}>
        <h4>Form Inputs</h4>
        {/* name */}
        <div className="form-row" style={{ textAlign: "left" }}>
          <input
            type="checkbox"
            checked={shipping}
            id="shipping"
            name="shipping"
            onChange={handleShipping}
          />
          <label htmlFor="shipping"> Free Shipping </label>
        </div>
        <div className="form-row" style={{ textAlign: "left" }}>
          <label htmlFor="framework" className="form-label">
            Framework
          </label>
          <select
            name="framework"
            id="framework"
            value={framework}
            onChange={handleFramework}
          >
            {frameworks.map((framework) => {
              return <option key={framework}>{framework}</option>;
            })}
          </select>
        </div>
        <button type="submit" className="btn btn-block">
          submit
        </button>
      </form>
    </div>
  );
};
export default FormCheckBox;
