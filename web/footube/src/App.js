
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Watch from './watching_Screen/watching-video';
import Com from './com'
import vidData from './data/vid.json';

function App() {
  return (

    <Routes>
        {/* toolbar should come here */}
      <Route path='/:vid_id' element={<Watch videoDataList={vidData} />} />
        
    </Routes>
    
  
  );
}

export default App;
