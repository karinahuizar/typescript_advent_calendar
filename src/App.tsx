import React from 'react';
import Hatch from './components/Hatch/Hatch';
import { HatchType, createCalendar } from './helpers';
// Styles
import { GlobalStyle, StyledApp } from './App.styles';

const App: React.FC = () => {
  const [hatches, setHatches] = React.useState<HatchType[]>(createCalendar());

  const handleClickHatch = () => console.log('click!');

  return (
    <StyledApp>
      <GlobalStyle />
      {hatches.map(hatch => (
        <Hatch key={hatch.nr} hatch={hatch} handleClick={handleClickHatch} onClick={() => handleClick(nr)} />
      ))}
    </StyledApp>
  );
};

export default App;
