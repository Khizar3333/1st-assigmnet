
import React from 'react'
import styles from '../table.module.css'
const Table = () => {
  return (
        <table className={styles.table}>
    <thead>
      <tr className={styles.tr}>
        <th className={styles.th}>Name</th>
        <th className={styles.th}>Age</th>
        <th className={styles.th}>Country</th>
      </tr>
    </thead>
    <tbody>
      <tr className={styles.tr}>
        <td className={styles.td}>John Doe</td>
        <td className={styles.td}>25</td>
        <td className={styles.td}>USA</td>
      </tr>
      <tr className={styles.tr}>
        <td className={styles.td}>Jane Smith</td>
        <td className={styles.td}>30</td>
        <td className={styles.td}>Canada</td>
      </tr>
      <tr className={styles.tr}>
        <td className={styles.td}>David Johnson</td>
        <td className={styles.td}>28</td>
        <td className={styles.td}>UK</td>
      </tr>
    </tbody>
  </table>

  )
}

export default Table