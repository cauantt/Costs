import Projectform from '../project/Projectform'
import styles from './Newproject.module.css'
import { useNavigate } from "react-router-dom"

function NewProject() {
    const navigate = useNavigate()
    
    

    function createPost(project) {
        // initialize cost and services
        project.cost = 0
        project.services = []

        fetch("http://localhost:5000/projects", {
            method: 'POST',
            headers: {
                "Content-type" : "application/json",
            },
            body: JSON.stringify(project),
        })
        .then((resp) => resp.json())
        .then((data) => {
            console.log(data)
            navigate('/projects')
            
          
            
            
        })
        .catch(err => console.log(err))
    }

    return (
        <div className={styles.newproject_container}>
            <h1>Create Project</h1>
            <p>First, create your project, and then add your service!</p>
            <Projectform handleSubmit={createPost} btnText="Create Project" />
        </div>
    )
}

export default NewProject
