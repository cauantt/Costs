import styles from './Home.module.css'
import savings from "../../img/savings.svg"
import Linkbutton from '../layout/Linkbutton'


 function Home () {

    return(
        <section className={styles.home_container}>
            
            <h1>Welcome to <span>Costs</span></h1>
            <p>Start managing your projects right now!</p>
            <Linkbutton to="/newproject" text="Start your project"/>
            <img src={savings}/>

        </section>
    )


}

export default Home