import React from "react";

export default function Form() {
  return (
    <>
      <form>
        <div className="mb-3">
          <label for="title" className="form-label">
            Title
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            
          />
         
           
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Discription
          </label>
          <textarea name="description" id="discription" cols="" rows="3" className="form-control"></textarea>
        </div>
       
        <button type="submit" className="btn btn-primary">
          Add Notes
        </button>
      </form>
    </>
  );
}
