import React, { useContext } from 'react';
import { useRouter } from 'next/router'
import Loading from "../components/Loading"
import Header from '../components/Header';
import Principal from '../components/Principal';
import { LoadContext } from '../contexts/LoadContext';

export default function Home() {
  const { loading } = useContext(LoadContext);
  const router = useRouter();

  async function handleSearch(query) {
    router.push(`/search/?${query}`, {replace: false});
  };
 
  if(loading){
    return (
      <Loading />
    )
  } else {
    return (
      <>
        <Header onSearch={handleSearch} />
        <Principal />
      </>
    );
  }
}
