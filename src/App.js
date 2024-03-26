import './App.css';
import ColorControls from './components/ColorControls/ColorControls';
import { useState } from 'react';
import SwitchControl from './components/SwitchControl/SwitchControl';
import SelectInput from './components/SelectInput/SelectInput';
import TextInput from './components/TextInput/TextInput';

function App() {

  const [color, setColor] = useState("rgba(255,255,255,1)");
  const [isChecked, setIsChecked] = useState(false);
  const [selected, setSelected] = useState("");
  const [text, setText] = useState("");
  const [number, setNumber] = useState("");

  const options = [
    { label: "Honda", value: "honda" },
    { label: "Toyota", value: "toyota" },
    { label: "BMW", value: "bmw" },
    { label: "Honda", value: "honda" },
  ]


  return (
    <div className="app">
      <div className="container">
        <ColorControls label="Background Color" value={color} onChange={setColor} />
        <SwitchControl label="Switch" value={isChecked} onChange={setIsChecked} />
        <SelectInput label="Select Please" options={options} value={selected} onChange={setSelected} />
        <TextInput type="number" label="Number" value={number} onChange={setNumber} />
        <TextInput type="text" label="Text" value={text} onChange={setText} />
      </div>
    </div>
  );
}

export default App;
