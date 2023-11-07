import React from 'react'
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';
function Home() {


  const fetchCatFact = async () => {
    const res = await axios.get('https://catfact.ninja/fact');
    return res.data;
  };
  const { data, isLoading, isError, refetch } = useQuery({
    queryKey :["cat"],
    queryFn: fetchCatFact,
  });
  if(isError){
    return <h1>Sorry, there was an error</h1>
  }
  if(isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <>
    <button onClick={refetch}>update data</button>
    <h1>{data?.fact}</h1>
    </>
  )
}

export default Home



