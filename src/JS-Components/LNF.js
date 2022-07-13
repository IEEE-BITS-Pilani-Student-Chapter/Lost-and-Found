import React from "react";
import "../CSS-Components/LNF.css";

function LNF(props) {
  return (
    <div className="lnf" id="lnf">
      {/* form for both lost and found */}
      <div className="lnf-form" id="lnf-form">
      <form action="">
        {/* item name */}
        <div className="lnf-form-div">
          <input type="text" name="item_name" autoComplete="off" required />
          <label htmlFor="item_name">Item's Name</label>
        </div>

        {/* location */}
        <div className="lnf-form-div">
          {/* input label acc to lost or found */}
          <input type="text" name="place" id="" autoComplete="off" required />
          <label htmlFor="place">{props.l_or_f === "l" ? "Where did you last see that?" : "Where did you found that?"}</label>
        </div>

        {/* upload img */}
        <div className="lnf-form-div">
          <span>Upload an image</span>
          <input type="file" class="upload" placeholder="Upload Image" required />
        </div>

        {/* user name */}
        <div className="lnf-form-div">
          <input type="text" name="user_name" autoComplete="off" required />
          <label htmlFor="user_name">Your Name</label>
        </div>

        {/* hostel */}
        <div className="lnf-form-div">
          <input type="text" name="hostel"  autoComplete="off" required/>
          <label htmlFor="hostel">Hostel and Room No.</label>
        </div>

        {/* contact */}
        <div className="lnf-form-div">
          <input type="number" name="contact" autoComplete="off" required pattern="[0-9]{10,10}" />
          <label htmlFor="contact">Contact</label>
        </div>

        {/* submit */}
        <div className="lnf-form-div lnf-form-submit">
          <input type="submit" className="submit" />
        </div>
      </form>
    </div>

    <div className="lnf-text">
      <div>
      {props.l_or_f === 'l' ? 'LOST' : 'FOUND'}
      </div>
      <div>
        SOMETHING?
      </div>
    </div>
    </div>
  );
}

export default LNF;
