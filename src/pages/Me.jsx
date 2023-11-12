import React, { useContext } from "react";
import Layout from "../components/Containers/Layout/Layout";
import ChangeUserInfo from "../components/ChangeUserInfo/ChangeUserInfo";
import ChangeUserPassword from "../components/ChangeUserPassword/ChangeUserPassword";
import AuthMessage from "../components/AuthMessage/AuthMessage";
import { connect, useSelector } from "react-redux";
import authState from "../utils/authState";
const Me = () => {
  const { user } = useSelector((state) => state.auth);
  let data = (
    <Layout>
      {/* Change Information */}
      <ChangeUserInfo />
      {/* Change Password */}
      <ChangeUserPassword />
    </Layout>
  );
  if (!user?.token)
    data = <AuthMessage message="You do not have access to this page!" />;
  return data;
};

export default connect(authState)(Me);
