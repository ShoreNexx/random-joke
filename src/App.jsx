
import { useEffect, useState } from 'react'


function App() {
  const[joke,setJoke]=useState("")
  const[loading,setLoading]=useState(false)
  const[errors,setErrors]=useState("")

  const randomJoke= async () => {
    setLoading(true);
    setErrors("");
    setJoke("")
    try {
      const res= await fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,sexist&type=single")
    if (!res.ok) {
      throw new Error ("failed to fetch jokes")
      
    }
    const data = await res.json()
    setJoke(data)
    } catch (error) {
      console.log(error.message || "something went wrong")
    }
    finally{
      setLoading(false)
    }
  }

  useEffect(()=>{
    randomJoke()
  },[])


  return (
   <div className='bg-[#130018] h-screen flex justify-center items-center 
  sm:p-6
  md:p-8
   
   '>
    <div className='bg-[#1c1021]  min-h-[250px] w-[550px] rounded-xl p-4 flex flex-col justify-between max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl '>
      <div className='flex justify-center flex-col'>
        <h2 className='text-gray-300 text-center text-5xl p-4'>Random Joke</h2>
        {loading && <p className='text-center text-white'>Loading......</p> }
        {errors && <p>{errors}</p> }

        { !loading && joke && 
        (
          <p className='text-white text-xl text-center p-4'>{joke.joke}</p>
        )}
      </div>
      <div>
        <button onClick={randomJoke} className='bg-blue-700 w-full p-2 rounded-xl text-white text-lg'>Next Joke</button>
      </div>
    </div>
   </div>
  )
}

export default App;
