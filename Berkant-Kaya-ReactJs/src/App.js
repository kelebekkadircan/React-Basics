import axios from "axios";
import React, { useEffect, useState } from "react";
//  https://restcountries.com/v3.1/all


function App() {

  // const dispatch = useDispatch()

  // console.log(useSelector{ state => state });

  // const getData = () => {

  // }


  const [country, setCountry] = useState([])

  useEffect(() => {
    const getCountry = async () => {
      const data = await axios.get('https://restcountries.com/v3.1/all')
      setCountry(data)
    }

    getCountry()
  }, [])

  console.log("Country", country);

  return (
    <>




      {
        country?.data?.map((data, index) => (
          <div key={index}>{data.name.common}</div>
        ))
      }

    </>
  )



}
export default App;
