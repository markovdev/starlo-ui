import React, { useEffect, useState } from "react";
import Input from "../components/UI/Input/Input";
import Button from "../components/UI/Button/Button";
import { useSelector } from "react-redux";
import Message from "../components/UI/Message/Message";
import { Navigate } from "react-router";
import Slider from "../components/Slider/Slider";
import Slide from "../components/Slider/Slide/Slide";
import TwoFactorAuthForm from "../components/TwoFactorAuth/TwoFactorAuthForm";
import Container from "../components/Containers/Container";
import Form from "../components/UI/Form/Form";
import Section from "../components/Section/Section";
import useLogin from "../hooks/useLogin";
const Login = () => {
  const [curIndex, setCurIndex] = useState(0);
  const { loginHandler: login, isLoading, status } = useLogin();
  const auth = useSelector((state) => state.auth);
  const loginHandler = (e) => {
    e.preventDefault();
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    login(email, password);
  };
  useEffect(() => {
    if (auth.status === "pending") setCurIndex(1);
  }, [auth.status]);
  console.log(curIndex);
  return (
    <React.Fragment>
      {status && <Message text="Logged in successfully!" />}
      {status && <Navigate to="/" />}
      {auth.error && <Message text={auth.error} error />}
      <Section className="section--login section--full">
        <Container>
          <div className="login grid grid--col-2 ">
            <div className="login__text">
              <h3 className="login__heading">
                login and get access to your room
              </h3>
              <Form className="form" onSubmit={loginHandler}>
                <Input type="email" id="email" label="Email" />
                <Input type="password" id="password" label="Password" />
                <Button isInline isLoading={isLoading}>
                  Login
                </Button>
              </Form>
            </div>
            <div className="login__info">
              <p className="login__paragraph paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                debitis eveniet veritatis hic doloribus praesentium itaque illum
                quod molestiae!
              </p>
            </div>
          </div>
        </Container>
      </Section>
    </React.Fragment>
  );
};
export default Login;
