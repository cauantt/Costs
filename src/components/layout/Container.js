import styles from "./Container.modules.css"



function Container (props) {

    return(
        <div className={`${styles.container} ${props.customClass}`}>{props.children}</div>
    )

}

export default Container