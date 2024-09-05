import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from './components/HomePage';
import MusicLearningPlatform from './components/MusicLearningPlatform';

function App() {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/platform" element={<MusicLearningPlatform />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;