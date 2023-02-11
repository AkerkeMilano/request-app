import React from 'react';
import { Button } from './components/Button/Button';
import { Input } from './components/Input/Input';


function App() {
  const onClick = () => {
    console.log("click");
  }
  return (
    <div className="App">
      <Input id="fefe33" name="name" label="Name" type="text" placeholder="Ваше имя" error={false} success={true}/>
      <Button onClick={onClick}>Отправить</Button>
    </div>
  );
}

export default App;
