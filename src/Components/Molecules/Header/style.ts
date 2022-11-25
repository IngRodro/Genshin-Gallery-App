import styled from 'styled-components';
import { Button } from '../../Atoms/Button';

export const StyleWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px 0;
`;

export const StyleActions = styled.div`
  button {
    margin-left: 10px;
  }
`;

export const StyledChildWrapper = styled.div`
  height: 100%;
  display: inline-flex;
  align-items: center;
  margin-right: 15px;
`;

export const StyleRefreshButton = styled(Button)`
  border-color: transparent white;
  border-radius: 50%;
  border-style: solid;
  border-width: 0.125em;
  height: 1.5em;
  margin: 0.25em;
  width: 1.5em;
  &:before,
  &:after {
    border-style: solid;
    content: '';
    display: block;
    position: absolute;
    width: 0;
    -webkit-transform: rotate(-45deg);
    transform: rotate(-45deg);
  }
  &:after {
    border-color: transparent transparent transparent white;
    border-width: 0.3125em 0 0.3125em 0.5em;
    top: -0.3125em;
    left: 0.0625em;
  }
  &:before {
    border-color: transparent white transparent transparent;
    border-width: 0.3125em 0.5em 0.3125em 0;
    bottom: -0.3125em;
    right: 0.0625em;
  }
`;
