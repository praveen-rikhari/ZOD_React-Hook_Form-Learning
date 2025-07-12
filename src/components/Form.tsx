import React from 'react';
import './Form.css';

const Form: React.FC = () => {
  return (
    <form className="form-container">
      <h2>User Details</h2>
      <hr />

      <div className="form-row">
        <div className="form-group">
          <label>Name</label>
          <input type="text" placeholder="Enter name" />
        </div>
        <div className="form-group">
          <label>Username</label>
          <input type="text" placeholder="Enter username" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Email</label>
          <input type="email" placeholder="Enter email" />
        </div>
        <div className="form-group">
          <label>Phone</label>
          <input type="text" placeholder="Enter phone" />
        </div>
        <div className="form-group">
          <label>Website</label>
          <input type="text" placeholder="Enter website" />
        </div>
      </div>

      <h2>Address</h2>
      <hr />

      <div className="form-row">
        <div className="form-group">
          <label>Street</label>
          <input type="text" placeholder="Enter street" />
        </div>
        <div className="form-group">
          <label>Suite</label>
          <input type="text" placeholder="Enter suite" />
        </div>
        <div className="form-group">
          <label>City</label>
          <input type="text" placeholder="Enter city" />
        </div>
      </div>

      <div className="form-row">
        <div className="form-group">
          <label>Zipcode</label>
          <input type="text" placeholder="Enter zipcode" />
        </div>
        <div className="form-group">
          <label>Latitude</label>
          <input type="text" placeholder="Enter latitude" />
        </div>
        <div className="form-group">
          <label>Longitude</label>
          <input type="text" placeholder="Enter longitude" />
        </div>
      </div>

      <h2>Company Info</h2>
      <hr />

      <div className="form-row">
        <div className="form-group">
          <label>Company Name</label>
          <input type="text" placeholder="Enter company name" />
        </div>
        <div className="form-group">
          <label>Catch Phrase</label>
          <input type="text" placeholder="Enter catch phrase" />
        </div>
      </div>

      <div className="form-actions">
        <button type="submit" className="submit-button">Submit</button>
      </div>
    </form>
  );
};

export default Form;
