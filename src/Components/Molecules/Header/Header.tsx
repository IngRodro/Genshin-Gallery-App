import { Button } from '../../Atoms/Button';
import Title from '../../Atoms/Title/Title';
import { StyleActions, StyledChildWrapper, StyleRefreshButton, StyleWrapper } from './style';

interface IHeaderProps {
  title: string;
  onRefresh?: () => void;
  children?: React.ReactNode;
  onAdd?: () => void;
}

const Header = ({ title, onRefresh, children, onAdd } : IHeaderProps) => (
  <StyleWrapper>
  <Title size={'48px'} lineHeight={'75px'}>
    {title}
  </Title>
  <StyledChildWrapper>{children}</StyledChildWrapper>
  <StyleActions>
    {onRefresh && (
      <StyleRefreshButton color='info' labelColor='white' onClick={onRefresh}/>
    )}
    {onAdd && (
      <Button labelColor='white' onClick={onAdd} color={'text'} loading={false} disabled={false}>
        Agregar
      </Button>
    )}
  </StyleActions>
</StyleWrapper>
  );

export default Header;
