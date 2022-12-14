import { Box, Button, TextField } from "@mui/material";
import React, { useState } from "react";
import useAuth from "../../../../Hooks/useAuth";

const AddRolePage = () => {
  const [getGId, setGetGId] = useState();

  const { authToken } = useAuth();

  const handleOnBlur = (e) => {
    setGetGId(e.target.value);
  };

  const handleMakeAdmin = (e) => {
    const user = { getGId };

    fetch("https://vsportsg.herokuapp.com/api/user/admin", {
      method: "PUT",
      headers: {
        authorization: `Bearer ${authToken}`,
        "content-type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount) {
          window.alert("Create admin successfully.");
        }
      });

    e.preventDefault();
  };

  return (
    <>
      <Box>
        <div className="roleContent">
          <div className="makeAdmin">
            <form onSubmit={handleMakeAdmin}>
              <TextField
                required
                id="standard-basic"
                label="vID"
                name="admin"
                type="number"
                variant="standard"
                onBlur={handleOnBlur}
              />
              <Button type="submit" variant="contained">
                Create Admin
              </Button>
            </form>
          </div>
        </div>
      </Box>
    </>
  );
};

export default AddRolePage;
