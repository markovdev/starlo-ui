import Message from "../components/UI/Message/Message";
import { Navigate } from "react-router";
import Section from "../components/Section/Section";
import Container from "../components/Containers/Container";
import { useSelector } from "react-redux";
import SignupForm from "../components/SignupForm/SignupForm";
const Signup = () => {
  const { token, error, loading } = useSelector((state) => state.auth);

  if (token) return <Navigate to="/me" />;
  return (
    <>
      {token && <Message text="Signed up successfully!" />}
      {error && <Message text={error} error />}
      <Section className="section--signup">
        <Container>
          <div className="signup grid grid--col-2 grid--no-gap">
            <div className="signup__text">
              <h3 className="signup__heading">
                Signup and get access to your room
              </h3>
              <SignupForm />
            </div>
            <div className="signup__info">
              <p className="signup__paragraph paragraph">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Totam
                debitis eveniet veritatis hic doloribus praesentium itaque illum
                quod molestiae!
              </p>
              <p className="signup__author">Alex Mason</p>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
};

export default Signup;
