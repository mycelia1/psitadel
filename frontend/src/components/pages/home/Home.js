import { Container, Row } from 'react-bootstrap';

import HomeHeader from './HomeHeader';
import TopNav from '../../TopNav';
import Values from './Values';
import JoinAndAbout from './JoinAndAbout';

const Home = () => {
  const theme = 'light';
  return (
    <>
      <TopNav theme={theme} />
      <Container className="home d-flex flex-column justify-content-around">
        <HomeHeader theme={theme} />
        <Values className="section values-section" />
        <Row className="align-items-center justify-content-center section values-section">
          <JoinAndAbout className="" />
        </Row>
      </Container>
    </>
  );
};

export default Home;
