import React from 'react';
import './App.css';
import Layout from './Components/Organisms/Layout';
import { Loading } from './Components/Atoms/Loading';

function Home() {
  return (
    <Layout title='Gallery App | Home'>
      <Loading size='2em'/>
    </Layout>
  );
}

export default Home;
