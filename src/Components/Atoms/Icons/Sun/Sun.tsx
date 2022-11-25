import React from 'react';
import StyledSun from './style';

const Sun = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => (
      <>
        <StyledSun {...props} ref={ref} icon-role='moon' />
      </>
    ),
)

export default Sun;
