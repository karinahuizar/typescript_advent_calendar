import React from 'react';
import Hatch from './components/Hatch/Hatch';
import { HatchType, createCalendar } from './helpers';
// Styles
import { GlobalStyle, StyledApp } from './App.styles';

const App: React.FC = () => {
  const [hatches, setHatches] = React.useState<HatchType[]>(
    localStorage.calendar ? JSON.parse(localStorage.calendar) : createCalendar()
  );

  // Store calendar in localStorage
  React.useEffect(() => {
    localStorage.setItem('calendar', JSON.stringify(hatches));
  }, [hatches]);

  const handleClickHatch = (nr: number) => {
    setHatches(prev => prev.map(hatch => (hatch.nr === nr ? { ...hatch, open: !hatch.open } : hatch)));
  };

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
