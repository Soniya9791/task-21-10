import React from "react";

const Form = () => {

  return (
    <div>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="job">Job</label>
        <input type="text" name="job" id="job" />
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Form;
