import { Head } from '../Atoms/Head';

const Layout = ({ children, title }: {children : React.ReactElement, title: string}) => (
    <>
      <Head title={title} />
      <div className='layout'>
        <div className='layout__header'>Header</div>
        <div className='layout__content'>{children}</div>
        <div className='layout__footer'>Footer</div>
      </div>
    </>
  );

export default Layout;
