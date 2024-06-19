import React from 'react';
import './App.css';
import FamilyTree from "components/shared/family/FamilyTree";
import { Tree } from 'models/Tree';

function App() {
  return (
    <div className="App">
      {/* TODO: @burwinliu - Add Issue to allow for selector between family lines */}
      <FamilyTree tree={new Tree("croissant")}/>
    </div>
  );
}

export default App;
