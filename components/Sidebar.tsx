import styles from "styles/Sidebar.module.sass"

import React from "react"

class Sidebar extends React.Component {
    render() {
        return (
            <div className={styles.sidebar}>
                {styles.children}
            </div>
        )
    }
}

export default Sidebar