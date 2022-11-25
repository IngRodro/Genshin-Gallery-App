import React from 'react';
import StyledMoon from './style';

const Moon = React.forwardRef<HTMLElement, React.HTMLAttributes<HTMLElement>>(
  (props, ref) => (
      <>
        <StyledMoon {...props} ref={ref} icon-role='moon' />
      </>
    ),
)

export default Moon;
