import Projectform from '../project/Projectform'
import styles from './Newproject.module.css'


function NewProject () {

    return(
        <div className={styles.newproject_container}>
            <h1>Create Project</h1>
            <p>First, create your project, and then add your service!</p>
            <Projectform btnText="Create Project"/>
          
        </div>


    )


}

export default NewProject