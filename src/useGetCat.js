
import { useQuery } from '@tanstack/react-query'
import axios from 'axios';

export const useGetCat = ()=>{
    const fetchCatFact = async () => {
        const res = await axios.get('https://catfact.ninja/fact');
        return res.data;
      };
      const { data, isLoading, isError, refetch } = useQuery({
        queryKey :["cat"],
        queryFn: fetchCatFact,
      });


      const refetchData = ()=>{
        alert("Data refetch")
        refetch()
      }
      return { data , refetchData , isLoading , isError}
}