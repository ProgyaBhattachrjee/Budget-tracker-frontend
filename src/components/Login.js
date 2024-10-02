import React from 'react';
import { useAuth0 } from "@auth0/auth0-react";
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import logo from "../img/favicon.ico"
import sideimg from "../img/side.svg"
const Login = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (isAuthenticated) {
      navigate('/dashboard');
    } else {
      loginWithRedirect();
    }
  };

  return (
    <LandingPage>
      <TopSection>
        <Logo src={logo} alt="Tracky Logo" />
        <AppName>Tracky</AppName>
      </TopSection>
      <MainContent>
        <ContentSection>
          <WelcomeMessage>Welcome to Tracky</WelcomeMessage>
          <Tagline>Track your expenses, manage your income, and achieve your financial goals effortlessly.</Tagline>
          <LoginButton onClick={handleButtonClick}>
            {isAuthenticated ? "Go to Dashboard" : "Log In"}
          </LoginButton>
        </ContentSection>
        <ImageSection>
          <Image src={sideimg} alt="Tracky App" />
        </ImageSection>
      </MainContent>
    </LandingPage>
  );
};

const LandingPage = styled.div`
 font-family: Courier, monospace;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100vh;
  background: linear-gradient(180deg, #f0e6ef 0%, #6320ee 100%);
`;

const TopSection = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  position: absolute;
  top: 0;
  left: 0;
`;

const Logo = styled.img`
  width: 50px;
  height: 50px;
  margin-right: 1rem;
`;

const AppName = styled.h1`
  color: #fff;
  font-size: 3rem;
  font-weight: bold;
  overflow: hidden; 
  border-right: 0.1em solid; 
  white-space: nowrap; 
  letter-spacing: 0.15em; 
  animation: typing 1s steps(7) 1s 1 normal both, blink 1s step-end infinite;

  @keyframes typing {
    from { width: 0 }
    to { width: 7ch }
  }

  @keyframes blink {
    from, to { border-color: transparent }
    50% { border-color: #6c5ce7 }
  }
`;

const MainContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: auto;
  width: 80%;
`;

const ContentSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  text-align: left;
`;

const WelcomeMessage = styled.h1`
  font-size: 3rem;
  color: #fff;
  margin-bottom: 1rem;
`;

const Tagline = styled.h2`
  font-size: 1.8rem;
  color: #fff;
  margin-bottom: 2rem;
`;

const LoginButton = styled.button`
  background: #eff7f6;
  color: #421173;
  padding: 1rem 2rem;
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: all 0.3s ease;
  &:hover {
    background-color: #f2e5df;
    transform: translateY(-3px);
  }
`;

const ImageSection = styled.div`
  max-width: 40%;
`;

const Image = styled.img`
  width: 100%;
  height: auto;
`;

export default Login;
