
import './App.css'
import car1 from '/img/img1.jpg'
import car2 from '/img/img2.png'
import car3 from '/img/img3.jpg'
import car4 from '/img/img4.png'
import ImageSlider from './slider/ImageSlider'

const Images = [car1, car2, car3, car4]

function App() {

  return (
    <div style={{
      maxWidth: "1200px",
      width: "100%",
      aspectRatio: "10 / 6",
      margin: "0 auto"
    }}>
      <ImageSlider imageUrls={Images} />
    </div>
  )
}

export default App
