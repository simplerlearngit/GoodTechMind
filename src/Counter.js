import React from 'react'
import styles from './Counter.module.css'
function Counter() {
  return (
      <div className={styles.container}>        
        <div className={styles.numberContainer}>
          <div className={styles.maincounter}>
            <div className={styles.projectNumber}>42+</div>
            <div className={styles.project}>Projects</div>
          </div>
          <div>
            <div className={styles.yearNumber}>6+</div>
            <div className={styles.year}>Years</div>
          </div>
          <div className={styles.maincounter}>
            <div className={styles.clientNumber}>3930</div>
            <div className={styles.client}>Client</div>
          </div>
        </div>
        <div className={styles.craft}>
          <div className={styles.lineCraft}></div>
          <div>
            <p className={styles.CraftText}><strong>Crafting and excellence</strong></p>
          </div>
          <div className={styles.lineCraft}></div>
        </div>
      </div>
  )
}
export default Counter
