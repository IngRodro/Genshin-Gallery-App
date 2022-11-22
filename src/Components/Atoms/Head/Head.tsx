import {Helmet} from 'react-helmet'


const Head = ({title} : {title : string}) => (
  <Helmet>
      <title>{title}</title>
      <meta name='description' content='Helmet application' />
  </Helmet>
);

export default Head;
