import React from 'react';
import SideBar from './components/Sidebar';
import Heading from './components/Heading';
import Card from './components/Card'
import Data from './components/Data';


const App = () => {
  return (
    <>
      <div className="container">
        <SideBar />
        <Heading />

      </div>
      <div className="container_two">
        {Data.map((val) => {
          return (
            <Card
              imgsrc={val.imgsrc}
              title={val.title}
            />
          );
        })}
      </div>
    </>
  );
}

export default App;
