import React from 'react'
import Profile from './profile'
import {useGetCat} from '../useGetCat'
function Home() {
const {data , refetchData , isLoading , isError  } = useGetCat()
  if(isError){
    return <h1>Sorry, there was an error</h1>
  }
  if(isLoading){
    return <h1>Loading...</h1>
  }
  return (
    <>
    <button onClick={refetchData}>update data</button>
    <h1>{data?.fact}</h1>
    <Profile/>
    </>
  )
}

export default Home



