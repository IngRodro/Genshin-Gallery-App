import { MenuNavbar } from '../../Molecules/MenuNavbar';
import { StyleNavbar } from './style';
import { Title } from '../../Atoms/Title';

const Navbar = () => (
    <StyleNavbar>
      <div style={
        {
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-start',
          width: '100%',
        }
      }>
      <Title
        fontFamily='Bodoni MT'
        color='primary'
        size={'56px'}
        button={true}
      >
        {'Gallery App'}
      </Title>
      </div>
      <MenuNavbar/>
    </StyleNavbar>
  );



export default Navbar;
