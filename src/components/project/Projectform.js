import styles from './Projectform.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'


function Projectform ({btnText}) {
    
    return(

        <form className={styles.form}>
            <div>
            <Input name="name" type="text" text="Project name" placeholder="Insert project name"/>
            </div>
            <div>
                <Input name="Budget" type="text" text="Budget" placeholder="Insert total budget" />
            </div>
            
                <Select name="category_id" text="Choose an option"/>
            
                <Submit text={btnText} />




        </form>

    )


}

export default Projectform