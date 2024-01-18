import React from 'react';

export default function Feedback() {
  // You can add state and methods to handle form submission if needed

  return (
    <div className="container height-full d-flex justify-content-center align-items-center">
      <div className="row w-100">
        <div className="col-12 col-md-8 col-lg-6 mx-auto">
          <h2 className="text-center mb-4 heading-color">Leave Feedback</h2>
          <textarea className="form-control custom-outline mb-3" rows="5" style={{ padding: '20px' }} placeholder="Your feedback..."></textarea>
          <button type="submit" className="btn body-color text-white w-100">Submit</button>
        </div>
      </div>
    </div>
  );
}
