import React from 'react';
import Section from '@/components/Section';
import './App.scss';
import {useSelector} from "react-redux";

function App() {
    const  { whatWentWell, whatCanBeImproved, startDoing, actionItems } = useSelector(state => state);
  return (
    <div className="App">
        <div className="App_header">AGILE BOARD</div>
        <div className="App__Section">
            <Section sectionDetails={whatWentWell} className="App__Section_wentWellColor" />
            <Section sectionDetails={whatCanBeImproved} className="App__Section_startDoingColor" />
        </div>
        <div className="App__Section">
            <Section sectionDetails={startDoing} className="App__Section_canBeImprovedColor" />
            <Section sectionDetails={actionItems} className="App__Section_actionColor" />
        </div>
    </div>
  );
}

export default App;
