import React, { useEffect, useState } from 'react';
import useWindowSize from './hooks/useWindowSize';
import useDebounce from './hooks/useDebounce';
import useAxios from './hooks/useAxios';



function App() {

  // const [deneme, setDeneme] = useState('')

  const { width, height } = useWindowSize();

  const debounce = useDebounce("kadir", 2000)

  const [results, error, loading] = useAxios({
    method: 'get',
    url: "/all"
  })

  console.log(results, error, loading);

  // console.log(debounce);


  // console.log("width: ", width, "px", "height: ", height);

  if (!debounce) {
    return <div> Loading ...</div>
  }




  return (
    <>
      <div className={`${width} > 600 ? "bg-green-500" : "bg-gray-500"`}>
        width : {width} --- height : {height}
      </div>
    </>
  );
}

export default App;
