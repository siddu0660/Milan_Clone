import "../App.css";
import { useState, useEffect } from "react";

export const clearContents = () => {
  document.getElementById("email").value = "";
  document.getElementById("fullname").value = "";
  document.getElementById("phoneNumber").value = "";
  document.getElementById("hostels").value = "";
  const eventCheckboxes = document.querySelectorAll('input[name="events[]"]');
  eventCheckboxes.forEach((checkbox) => {
    checkbox.checked = false;
  });
};

export const validateForm = (event) => {
  event.preventDefault();

  const fullName = document.getElementById("fullname").value.trim();
  const email = document.getElementById("email").value.trim();
  const phoneNumber = document.getElementById("phoneNumber").value.trim();
  const hostel = document.getElementById("hostels").value;
  const events = Array.from(
    document.querySelectorAll('input[name="events[]"]:checked')
  ).map((checkbox) => checkbox.value);

  if (!fullName || !email || !phoneNumber || !hostel || !events.length) {
    alert("Please fill in all the required fields.");
    return false;
  }

  const formData = {
    fullName,
    email,
    phoneNumber,
    hostel,
    events,
  };

  localStorage.setItem(email, JSON.stringify(formData));

  clearContents();
  alert("Form submitted successfully!");
  return true;
};

const Registration = ({ userEmail, handleCancel }) => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phoneNumber: "",
    hostel: "",
    events: [],
  });

  useEffect(() => {
    const dataFromLocalStorage = localStorage.getItem(userEmail);
    if (dataFromLocalStorage) {
      const userData = JSON.parse(dataFromLocalStorage);
      setFormData(userData);
    }
  }, [userEmail]);

  const handleFormSubmit = (event) => {
    event.preventDefault();

    localStorage.setItem(formData.email, JSON.stringify(formData));
    clearContents();
    alert("User data updated successfully!");
    handleCancel();
  };

  return (
    <div>
      <div className="Register" id="Register_Form" style={{ display: "flex" }}>
        <div>
          <form className="Form" onSubmit={handleFormSubmit}>
            <div className="Top">
              <aside style={{ textAlign: "center", width: "100%" }}>
                <h2 className="RegisterText">Register</h2>
              </aside>
            </div>
            <p className="Mandatory" style={{ color: "red" }}>
              * Indicates Mandatory Field
            </p>
            <div className="inputs" id="Registration">
              <label>
                Full name <sup>*</sup>
              </label>
              <input
                type="text"
                placeholder="Enter your full name"
                required
                id="fullname"
                value={formData.fullName}
                onChange={(e) =>
                  setFormData({ ...formData, fullName: e.target.value })
                }
              />
              <br />
              <label>
                Email <sup>*</sup>
              </label>
              <input
                type="email"
                placeholder="Enter your email id"
                required
                id="email"
                value={formData.email || userEmail}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
              />
              <br />
              <label>
                Phone Number <sup>*</sup>
              </label>
              <input
                type="tel"
                pattern="[0-9]{5}-[0-9]{5}"
                required
                id="phoneNumber"
                placeholder="(Format: XXXXX-XXXXX)"
                value={formData.phoneNumber}
                onChange={(e) =>
                  setFormData({ ...formData, phoneNumber: e.target.value })
                }
              />
              <br />
              <label>
                Hostel Block <sup>*</sup>
              </label>
              <select
                className="hostel"
                required
                id="hostels"
                value={formData.hostel}
                onChange={(e) =>
                  setFormData({ ...formData, hostel: e.target.value })
                }
              >
                <option value="">Select your Hostel Block</option>
                <option value="Raman">Raman</option>
                <option value="Bhaba">Bhaba</option>
                <option value="Charaka">Charaka</option>
                <option value="Susruta">Susruta</option>
                <option value="Aryabhatta">Aryabhatta</option>
                <option value="Ramanuja">Ramanuja</option>
                <option value="Bhaskara">Bhaskara</option>
                <option value="Bramhagupta">Bramhagupta</option>
                <option value="Gargi">Gargi</option>
                <option value="Kapila">Kapila</option>
                <option value="Kautilya">Kautilya</option>
                <option value="Maitreyi">Maitreyi</option>
                <option value="Varahamitra">Varahamitra</option>
                <option value="Vyasa">Vyasa</option>
                <option value="Ramanujan">Ramanujan</option>
                <option value="Kalam">Kalam</option>
                <option value="Sarabhai">Sarabhai</option>
                <option value="Visveswaraya">Visveswaraya</option>
              </select>
              <br />
              <fieldset>
                <legend>Events</legend>
                <input
                  type="checkbox"
                  id="e1"
                  name="events[]"
                  value="Event 1"
                  checked={formData.events.includes("Event 1")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const event = e.target.value;
                    setFormData((prevData) => ({
                      ...prevData,
                      events: isChecked
                        ? [...prevData.events, event]
                        : prevData.events.filter((e) => e !== event),
                    }));
                  }}
                />
                <label htmlFor="e1">Event 1</label>
                <br />
                <input
                  type="checkbox"
                  id="e2"
                  name="events[]"
                  value="Event 2"
                  checked={formData.events.includes("Event 2")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const event = e.target.value;
                    setFormData((prevData) => ({
                      ...prevData,
                      events: isChecked
                        ? [...prevData.events, event]
                        : prevData.events.filter((e) => e !== event),
                    }));
                  }}
                />
                <label htmlFor="e2">Event 2</label>
                <br />
                <input
                  type="checkbox"
                  id="e3"
                  name="events[]"
                  value="Event 3"
                  checked={formData.events.includes("Event 3")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const event = e.target.value;
                    setFormData((prevData) => ({
                      ...prevData,
                      events: isChecked
                        ? [...prevData.events, event]
                        : prevData.events.filter((e) => e !== event),
                    }));
                  }}
                />
                <label htmlFor="e3">Event 3</label>
                <br />
                <input
                  type="checkbox"
                  id="e4"
                  name="events[]"
                  value="Event 4"
                  checked={formData.events.includes("Event 4")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const event = e.target.value;
                    setFormData((prevData) => ({
                      ...prevData,
                      events: isChecked
                        ? [...prevData.events, event]
                        : prevData.events.filter((e) => e !== event),
                    }));
                  }}
                />
                <label htmlFor="e4">Event 4</label>
                <br />
                <input
                  type="checkbox"
                  id="e5"
                  name="events[]"
                  value="Event 5"
                  checked={formData.events.includes("Event 5")}
                  onChange={(e) => {
                    const isChecked = e.target.checked;
                    const event = e.target.value;
                    setFormData((prevData) => ({
                      ...prevData,
                      events: isChecked
                        ? [...prevData.events, event]
                        : prevData.events.filter((e) => e !== event),
                    }));
                  }}
                />
                <label htmlFor="e5">Event 5</label>
                <br />
              </fieldset>
            </div>
            <button
              className="button"
              id="Submit"
              style={{ backgroundColor: "green", color: "white" }}
            >
              Submit
            </button>
            <button
              className="button"
              id="Cancel"
              style={{ backgroundColor: "red", color: "white" }}
              onClick={handleCancel}
            >
              Cancel
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
export default Registration;