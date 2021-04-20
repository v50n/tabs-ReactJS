
import './App.css';
import Profile from './components/Profile';
import React, {useEffect, useState} from "react";
import ProfileDetail from './components/ProfileDetail';

const url = 'https://course-api.com/react-tabs-project'

function App() {
  const [data, SetData] = useState([]);
  const [loading, SetLoading] = useState(true);
  const [currentVal, SetCurrentVal] = useState(0);

  const loadData = async () =>{
    var response = await fetch(url);
    var data = await response.json();
    SetData(data);
    SetLoading(false);
  }

  const handleSelectProfile = (index) =>{
    SetCurrentVal(index)
  }

  useEffect(()=>{
    loadData();
  }, []);

  if(loading){
    return(
      <div className="title">
        <h1>Loading...</h1>
      </div>
    );
  }else{
    
    // const {id, title, dates, duties, company} = data[1];
    const {id, title, dates, duties, company} = data[currentVal];
    console.log(id)
    return (
      <div className="App">
        <div className="title">
          <h1>Experience</h1>
          <hr/>
        </div>
        <div className="profile-section">
              <div className="tabs-profile">
              {
                data.map((data,index) => {
                  return index == currentVal ? (
                      <Profile key={index} index={index} company={data.company} handleSelectProfile={handleSelectProfile} isSelected="selected" />
                    ) :
                    (
                      <Profile key={index} index={index} company={data.company} handleSelectProfile={handleSelectProfile} isSelected="not-selected" />
                    );
                  })
              }
              </div>
              <ProfileDetail key={id} title={title} dates={dates} duties={duties} company={company} />
          </div>
  
      </div>
    );
  }

}

export default App;
