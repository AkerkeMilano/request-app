import React from 'react';
import { SelectButton } from './components/SelectButton/SelectButton';
import { Input } from './components/Input/Input';

function App() {
  const onClick = () => {
    console.log('click');
  };
  return (
    <div className="App">
      <Input
        id="fefe33"
        name="name"
        label="Name"
        type="text"
        placeholder="Ваше имя"
        error={false}
        success={true}
      />
      <SelectButton />
    </div>
  );
}

export default App;
