/** @format */

import React, { useState } from "react";

const AddHotelsForm = () => {
  const [formData, setFormData] = useState({
    name: String,
    category: String,
    location: String,
    rating: String,
    reviews: String,
    website: String,
    phoneNumber: String,
    checkInTime: String,
    checkOutTime: String,
    amenities: String,
    priceRange: Number,
    reservationsNeeded: Boolean,
    isParkingAvailable: Boolean,
    isWifiAvailable: Boolean,
    isPoolAvailable: Boolean,
    isSpaAvailable: Boolean,
    isRestaurantAvailable: Boolean,
    photos: String,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({
      ...prevState,
      [name]:
        name === "priceRange" || name === "rating" ? parseInt(value) : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    console.log("Hotel Data Submitted:", formData);
    try {
      const response = await fetch("http://localhost:5000/hotels", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw `Failed to add Hotel data with ${response.status} server response`;
      }
      const data = await response.json();

      console.log("Added Hotels:", data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h2>Add Hotel</h2>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
        />
        <br /> <br />
        <label>Category:</label>
        <select
          name="category"
          onChange={handleChange}
          value={formData.category}
        >
          <option value="Budget">Budget</option>
          <option value="Mid-Range">Mid-Range</option>
          <option value="Luxury">Luxury</option>
          <option value="Boutique">Boutique</option>
          <option value="Resort">Resort</option>
          <option value="Other">Other</option>
        </select>
        <br /> <br />
        <label>Location:</label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
        />
        <br /> <br />
        <label for="rating">Rating (0-5):</label>
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleChange}
        />
        <br /> <br />
        <label>Website:</label>
        <input
          type="text"
          name="website"
          value={formData.website}
          onChange={handleChange}
        />
        <br /> <br />
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <label>Check-in Time:</label>
        <input
          type="text"
          name="checkInTime"
          value={formData.checkInTime}
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <label>Check-out Time:</label>
        <input
          type="text"
          name="checkOutTime"
          value={formData.checkOutTime}
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <label>Amenities :</label>
        <input
          type="text"
          name="amenities"
          value={formData.amenities}
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <label>Price Range:</label>
        <select
          name="priceRange"
          value={formData.priceRange}
          onChange={handleChange}
        >
          <option value="$$ (11-30)">$$ (11-30)</option>
          <option value="$$$ (31-60)">$$$ (31-60)</option>
          <option value="$$$$ (61+)">$$$$ (61+)</option>
          <option value="Other">Other</option>
        </select>{" "}
        <br /> <br />
        <label>
          <input
            type="checkbox"
            name="reservationsNeeded"
            checked={formData.reservationsNeeded}
            onChange={handleChange}
          />{" "}
          Reservations Needed
        </label>{" "}
        <br />
        <label>
          <input
            type="checkbox"
            name="isParkingAvailable"
            checked={formData.isParkingAvailable}
            onChange={handleChange}
          />{" "}
          Parking Available
        </label>{" "}
        <br />
        <label>
          <input
            type="checkbox"
            name="isWifiAvailable"
            checked={formData.isWifiAvailable}
            onChange={handleChange}
          />{" "}
          Wifi Available
        </label>{" "}
        <br />
        <label>
          <input
            type="checkbox"
            name="isPoolAvailable"
            checked={formData.isPoolAvailable}
            onChange={handleChange}
          />{" "}
          Pool Available
        </label>{" "}
        <br />
        <label>
          <input
            type="checkbox"
            name="isSpaAvailable"
            checked={formData.isSpaAvailable}
            onChange={handleChange}
          />{" "}
          Spa Available
        </label>{" "}
        <br />
        <label>
          <input
            type="checkbox"
            name="isRestaurantAvailable"
            checked={formData.isRestaurantAvailable}
            onChange={handleChange}
          />{" "}
          Restaurant Available
        </label>{" "}
        <br /> <br />
        <label for="photos">Photos:</label>
        <input
          type="text"
          name="photos"
          value={formData.photos}
          onChange={handleChange}
        />{" "}
        <br /> <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default AddHotelsForm;
