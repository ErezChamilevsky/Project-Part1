
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Watch from './watching_Screen/watching-video';
import Com from './com'
import vidData from './data/vid.json';
import userDataList from './data/user.json';
import commentsDataList from './data/comments.json';


function App() {
  return (

    <Routes>
        {/* toolbar should come here */}
      <Route path='/watch/:vid_id' element={<Watch videoDataList={vidData} userDataList={userDataList} commentsDataList={commentsDataList}  />} />
      <Route path ='/:vid_id' element={<Com/>}/>
    </Routes>
    
  
  );
}

export default App;
