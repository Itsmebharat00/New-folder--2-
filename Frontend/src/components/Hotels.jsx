/** @format */

import useFetch from "../useFetch";
import { useState } from "react";

const Hotels = () => {
  const [successMessage, setSuccessMessage] = useState("");
  const { data, loading, error } = useFetch("http://localhost:5000/hotels");

  const deleteHandle = async (hotelId) => {
    try {
      console.log(successMessage);
      const response = await fetch(`http://localhost:5000/hotels/${hotelId}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw "Failed to delete Hotel";
      }

      const data = await response.json();
      if (data) {
        setSuccessMessage("Hotel delete successfully");
        window.location.reload();
        console.log("Deleted Hotel:", data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <ul>
        {data?.map((hotel) => (
          <li>
            {hotel.name}
            {""}
            <button onClick={() => deleteHandle(hotel._id)}> Delete </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Hotels;
