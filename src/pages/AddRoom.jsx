import React, { useCallback, useState } from "react";
import Layout from "../components/Containers/Layout/Layout";
import useHttp from "../hooks/http";
import Message from "../components/UI/Message/Message";
import Heading from "../components/Typography/Heading";
import AddRoomForm from "../components/AddRoomForm";
const AddRoom = () => {
  const { sendRequest, data, status, isLoading, error } = useHttp();
  const [newRoom, setNewRoom] = useState({
    name: "",
    price: "",
    categories: "",
    bedsCount: "",
    extraBeds: "",
    meals: "",
    status: "empty",
    summary: "",
  });

  const handleData = (e) => {
    const { name, value } = e.target;
    setNewRoom({ ...newRoom, [name]: value });
  };
  const addRoomHandler = useCallback((e) => {
    e.preventDefault();

    const cover = document.getElementById("roomCover").files[0];
    const photos = document.getElementById("roomPhotos").files;
    sendRequest(
      `/rooms/`,
      "POST",
      true,
      {
        ...newRoom,
        cover,
        photos,
      },
      true
    );
  }, []);
  return (
    <Layout>
      {error && <Message text={error.response.data.message} error />}
      {status && <Message text="Room added successfully!" />}
      <div className="change-info">
        <Heading text="Add room " isTertiary />
        <AddRoomForm
          handleData={handleData}
          onSubmit={addRoomHandler}
          isLoading={isLoading}
        />
      </div>
    </Layout>
  );
};

export default AddRoom;
