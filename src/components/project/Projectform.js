import styles from './Projectform.module.css'
import Input from '../form/Input'
import Select from '../form/Select'
import Submit from '../form/Submit'
import { useEffect, useState } from 'react'


function Projectform ({btnText}) {

     const [categories, setCategories] = useState([])

     useEffect(() => {fetch("http://localhost:5000/categories",{
        method: "GET",
        headers: {

            'Content-Type': 'application/json'
 }

}).then((resp) => resp.json())
    .then((data) => {
        setCategories(data)
    })
.catch(err => console.log(err))},[])

    
    return(

        <form className={styles.form}>
            <div>
            <Input name="name" type="text" text="Project name" placeholder="Insert project name"/>
            </div>
            <div>
                <Input name="Budget" type="text" text="Budget" placeholder="Insert total budget" />
            </div>
            
                <Select name="category_id" text="Choose an option" options={categories}/>
            
                <Submit text={btnText} />




        </form>

    )


}

export default Projectform