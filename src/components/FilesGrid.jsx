import styles from '@/styles/FilesGrid.module.css'
import colourStyles from '@/styles/Colours.module.css'

import { useState, useEffect } from 'react'

export default function FilesGrid({ files, filterByType, filterByName }) {
  const [filesFiltered, setFilesFiltered] = useState(files)

  // Handle filter change
  useEffect(() => {
    setFilesFiltered(files.filter((file) =>
      (!filterByType || file.type.id === filterByType.value) &&
      (!filterByName || file.title.toLowerCase().includes(filterByName.toLowerCase()))
    ))
  }, [files, filterByType, filterByName])

  return (
    <div className={styles.grid}>
      {filesFiltered.map(({ title, type, createdBy, modifiedBy }, i) =>
        <div key={i} className={`${styles.col} ${colourStyles[`colour_${type.colourId}`]}`}>
          <div className={styles.title}>{title}</div>

          <div className={styles.createdBy}>
            Created by: {createdBy.givenName} {createdBy.familyName}
          </div>

          <div className={styles.modifiedBy}>
            Modified by: {modifiedBy.givenName} {modifiedBy.familyName}
          </div>
        </div>
      )}
    </div>
  )
}
