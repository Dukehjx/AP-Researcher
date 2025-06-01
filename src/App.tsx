import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme } from './styles/theme';
import GlobalStyles from './styles/GlobalStyles';
import Navigation from './components/Navigation/Navigation';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import News from './pages/News/News';
import ApSeminar from './pages/ApSeminar/ApSeminar';
import ApResearch from './pages/ApResearch/ApResearch';
import RepetitiveResearch from './pages/RepetitiveResearch/RepetitiveResearch';
import Essay from './pages/Essay/Essay';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Router>
        <div className="App" style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Navigation />
          <main style={{ flex: 1 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/news" element={<News />} />
              <Route path="/news/algorithm-vs-adolescence" element={<Essay />} />
              <Route path="/ap-seminar" element={<ApSeminar />} />
              <Route path="/ap-research" element={<ApResearch />} />
              <Route path="/repetitive-research" element={<RepetitiveResearch />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;
