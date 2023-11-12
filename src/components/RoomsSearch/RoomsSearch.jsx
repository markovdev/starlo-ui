import React from "react";
import Grid from "../Containers/Layout/Grid";
import Room from "../Room/Room";

const RoomsSearch = ({ rooms }) => {
  return (
    <Grid isAuto>
      {rooms?.map((room) => (
        <Room room={room} key={room._id} />
      ))}
    </Grid>
  );
};

export default RoomsSearch;
