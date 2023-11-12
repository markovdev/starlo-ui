import React, { useState } from "react";
import Form from "./UI/Form/Form";
import Input from "./UI/Input/Input";
import InputImg from "./UI/Form/InputImg/InputImg";
import Grid from "./Containers/Layout/Grid";
import Button from "./UI/Button/Button";
const statusOpts = [
  {
    label: "Empty",
    value: "empty",
  },
  {
    label: "Occupied",
    value: "occupied",
  },
];
const AddRoomForm = ({ onSubmit, isLoading, handleData }) => {
  const [roomPhotos, setRoomPhotos] = useState([]);
  const [singleRoomPhoto, setSingleRoomPhoto] = useState(null);
  const photosPreviewHandler = (e) => {
    const selectedPhotos = e.target.files;
    const photosArr = Array.from(selectedPhotos);
    const photos = photosArr.map((photo) => {
      return URL.createObjectURL(photo);
    });
    setRoomPhotos(photos);
  };
  const coverPreviewHandler = (e) => {
    const selectedPhoto = e.target.files[0];
    const photoUrl = URL.createObjectURL(selectedPhoto);
    setSingleRoomPhoto(photoUrl);
  };

  return (
    <Form onSubmit={onSubmit}>
      <Input label="Room name" name="name" onChange={handleData} />
      <Input label="Room Price" name="price" min={2} onChange={handleData} />
      <Input label="Room Categories" name="categories" onChange={handleData} />
      <Input label="Room Beds" name="bedsCount" onChange={handleData} />
      <Input label="Room Extra Beds" name="extraBeds" onChange={handleData} />
      <Input label="Room Meals " name="meals" onChange={handleData} />
      <Input
        type="select"
        label="Room Status"
        name="roomStatus"
        options={statusOpts}
        onChange={handleData}
      />
      <Input label="Room Summary" name="summary" onChange={handleData} />{" "}
      <InputImg
        id="roomCover"
        name="roomCover"
        text="Add Room Cover"
        onChange={coverPreviewHandler}
      />
      {singleRoomPhoto ? (
        <div className="img-box">
          <img
            src={singleRoomPhoto}
            className="img-box__img"
            height="200"
            alt="New room cover on Starlo"
          />
        </div>
      ) : null}
      <InputImg
        id="roomPhotos"
        name="roomPhotos"
        text="Add Room Photos"
        onChange={photosPreviewHandler}
        isMulti
      />
      <Grid col="3">
        {" "}
        {roomPhotos?.map((photo) => (
          <div className="img-box">
            <img
              src={photo}
              alt="New room photos on Starlo"
              className="img-box__img"
            />
          </div>
        ))}
      </Grid>
      <Button text="Add Room" isInline isLoading={isLoading} />
    </Form>
  );
};

export default AddRoomForm;
