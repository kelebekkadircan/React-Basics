import styles from './App.module.css'
import { Title } from './Components.jsx'
import Test from "./Test";
import Bootstrap from "./Bootstrap";
import './style.scss'

function Styles() {


    return (

        <>



            <div className={styles.App}>
                <h3>{process.env.NODE_ENV}</h3>

                <p className="env" >
                    {process.env.REACT_APP_API_URL}
                    <span>Test</span>
                </p>

                <Title>
                    Kadircan KELEBEK
                </Title>

                <Title theme='dark'>
                    Kadircan KELEBEK
                </Title>

                <Test />

                {process.env.NODE_ENV === 'production' &&
                    <div>
                        <p>
                            {process.env.REACT_APP_API_URL}
                        </p>

                        <h3>KADİRCAN KELEBEK</h3>
                    </div>}

                <Bootstrap />

            </div>

            <div className="bg-red-800">
                yeni deneme tailwind
            </div>
        </>)
}

export default Styles