import React from 'react';
// Types
import { HatchType } from '../../helpers';
// Styles
import { Wrapper } from './Hatch.styles';

type Props = {
  hatch: HatchType;
  handleClick: (nr: number) => void;
  enabledCallback: (nr: number) => boolean;
};


const Hatch: React.FC = () => (
  <Wrapper>
    <p>Hatch</p>
  </Wrapper>
);

export default Hatch;
