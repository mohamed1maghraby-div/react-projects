import { Container } from "react-bootstrap";
import {person} from './data';
import DatesCount from "./component/DatesCount";
import DatesList from './component/DatesList';
import DatesAction from "./component/DatesAction";
import React, { useState } from "react";

function App() {
  const [personData, setpersonData] = useState(person)
  const onDelete=()=>{
    setpersonData([])
  }
  const onViewData=()=>{
    setpersonData(person)
  }
  return (
    <div className="font color-body">
      <Container className="py-5">
        <DatesCount person={personData}/>
        <DatesList person={personData}/>
        <DatesAction deleteData={onDelete} onViewData={onViewData}/>
      </Container>
    </div>
  );
}

export default App;
