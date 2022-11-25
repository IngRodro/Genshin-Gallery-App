import { Head } from '../Atoms/Head';
import { Navbar } from './Navbar';

const Layout = ({ children, title }: {children : React.ReactElement, title: string}) => (
    <>
      <Head title={title} />
      <div className='layout'>
        <Navbar />
        <div className='layout__content'>{children}</div>
      </div>
    </>
  );

export default Layout;
