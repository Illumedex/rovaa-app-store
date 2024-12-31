import { BrowserRouter , Routes, Route } from 'react-router';
import { useTheme } from '@/hooks/useTheme';
import Home from './pages/HomePage';
import FeedbackPage from './pages/CommunityPage';
import NoRoutePage from './pages/NoRoutePage';


function App() {
  const { theme, toggleTheme } = useTheme();
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home theme={theme} toggleTheme={toggleTheme} />} />
          <Route path="/community" element={<FeedbackPage />} />
          <Route path="*" element={<NoRoutePage />} />
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;