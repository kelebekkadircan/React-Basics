import React, { useEffect, useRef, useState } from 'react'
// import Birincisayfa from './components/Birincisayfa';

function App() {

  const [status, setStatus] = useState("deniyoruz")
  const firstRef = useRef();

  // İçerisine değişken verilmediği zaman sayfa yüklendiği an verir diziye verirsek ona göre triggırlanır
  useEffect(() => {

    setStatus("deneme2")
  }, [])

  console.log("Firstref:  ", firstRef.current);

  return (
    <>
      <div>

        {status}
        <div>
          <input className='border-solid ' ref={firstRef} placeholder='ara' />

        </div>

      </div>



    </>
  )




}

export default App;
