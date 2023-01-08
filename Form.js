import "./Form.css";
import { useState } from "react";
import Select from "react-select";

function Form() {
  const [attention, setAttention] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [phone, setPhone] = useState("");
  const [fax, setFax] = useState("");

  const handleSetAttention = (event) => {
    setAttention(event.target.value);
  };

  const handleSetHouseNo = (event) => {
    setHouseNo(event.target.value);
  };

  const handlePhone = (event) => {
    setPhone(event.target.value);
  };

  const handleFax = (event) => {
    setFax(event.target.value);
  };

  //  select styling
  const customStyle = {
    control: (baseStyles) => ({
      ...baseStyles,
      height: 20,
      minHeight: 30,
      marginTop: 30,
      marginBottom: 10,
      borderRadius: 0,
      width: 510,
    }),
  };

  // The Country and District
  const counDistrict = [
    { label: "Search for select", value: "Search for select" },
    { label: "Bangladesh", value: "Bangladesh" },
    { label: "Dhaka", value: "Dhaka" },
    { label: "Khunla", value: "Khunla" },
    { label: "Barisal", value: "Barisal" },
    { label: "Chittagong", value: "Chittagong" },
    { label: "Rangpur", value: "Rangpur" },
    { label: "Rajshahi", value: "Rajshahi" },
    { label: "Mymensingh", value: "Mymensingh" },
  ];

  // City, Union, Zipcode, and Street Address.
  const general = [
    { label: "Search for select", value: "Search for select" },
    { label: "Narayangang", value: "Narayangang" },
    { label: "Gazipur", value: "Gazipur" },
    { label: "Dhaka Sadar", value: "Dhaka Sadar" },
    { label: "Faridpur", value: "Faridpur" },
    { label: "Kishoreganj", value: "Kishoreganj" },
    { label: "Munshiganj", value: "Munshiganj" },
    { label: "Narsingdi", value: "Narsingdi" },
  ];

  return (
    <div className="form_container">
      <form>
        <h5 className="sm">BILLING ADDRESS</h5>
        <label className="att">Attention</label>
        <input
          className="put"
          type="text"
          placeholder="Enter person/site name"
          id="1"
          name="attention"
          value={attention}
          onChange={handleSetAttention}
        />
        <label className="con">Country</label>
        <Select
          id="2"
          className="set"
          styles={customStyle}
          placeholder="Please Search"
          options={counDistrict}
          isMulti={false}
          filterOption={(option, searchText) =>
            option.label.toLowerCase().includes(searchText.toLowerCase())
          }
        />
        <label className="small">Division/Province/State</label>
        <Select
          id="3"
          className="set"
          styles={customStyle}
          placeholder="Please Search"
          options={counDistrict}
          isMulti={false}
          filterOption={(option, searchText) =>
            option.label.toLowerCase().includes(searchText.toLowerCase())
          }
        />
        <label className="small">District</label>
        <Select
          id="4"
          className="set"
          styles={customStyle}
          placeholder="Please Search"
          options={general}
          isMulti={false}
          filterOption={(option, searchText) =>
            option.label.toLowerCase().includes(searchText.toLowerCase())
          }
        />
        <label className="small">City/Sub District/Thana</label>
        <Select
          id="5"
          className="set"
          styles={customStyle}
          placeholder="Please Search"
          options={general}
          isMulti={false}
          filterOption={(option, searchText) =>
            option.label.toLowerCase().includes(searchText.toLowerCase())
          }
        />
        <label className="small">Uninon/Area/Town</label>
        <Select
          id="6"
          className="set"
          styles={customStyle}
          placeholder="Please Search"
          options={general}
          isMulti={false}
          filterOption={(option, searchText) =>
            option.label.toLowerCase().includes(searchText.toLowerCase())
          }
        />
        <label className="small">Zipcode</label>
        <Select
          id="7"
          className="set"
          styles={customStyle}
          placeholder="Please Search"
          options={general}
          isMulti={false}
          filterOption={(option, searchText) =>
            option.label.toLowerCase().includes(searchText.toLowerCase())
          }
        />
        <label className="small">Street Address/Village</label>
        <Select
          id="8"
          className="set"
          styles={customStyle}
          placeholder="Please Search"
          options={general}
          isMulti={false}
          filterOption={(option, searchText) =>
            option.label.toLowerCase().includes(searchText.toLowerCase())
          }
        />
        <label className="att">House/suite/apartment no</label>
        <input
          className="put"
          type="text"
          id="9"
          name="attention"
          value={houseNo}
          onChange={handleSetHouseNo}
        />
        <label className="att">Phone</label>
        <input
          className="put"
          type="text"
          id="10"
          name="attention"
          value={phone}
          onChange={handlePhone}
        />
        <label className="att">Fax</label>
        <input
          className="put"
          type="text"
          id="11"
          name="attention"
          value={fax}
          onChange={handleFax}
        />
      </form>
    </div>
  );
}

export default Form;
