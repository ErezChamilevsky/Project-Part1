
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Watch from './watching_Screen/watching-video';
import vidData from './data/vid.json';
import userDataList from './data/user.json';
import commentsDataList from './data/comments.json';


function App() {
  return (

    <Routes>
      <Route path='/watch/:vid_id' element={<Watch videoDataList={vidData} userDataList={userDataList} commentsDataList={commentsDataList} />} />
    </Routes>
    
  
  );
}

export default App;
