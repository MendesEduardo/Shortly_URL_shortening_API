import './styles/generalStyles.scss';
import Container from './components/Container';
import Header from './components/Header';
import Introduction from './components/Introduction';
import LinkAdd from './components/LinkAdd';
import Cards from './components/Cards';
import PreFooter from './components/PreFooter';
import Footer from './components/Footer';

function App() {
  return (
    <Container>
      <Header />
      <Introduction />
      <LinkAdd />
      <Cards />
      <PreFooter />
      <Footer />
    </Container>
  );
}

export default App;
