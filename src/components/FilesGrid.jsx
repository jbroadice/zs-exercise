import styles from '@/styles/FilesGrid.module.css'
import colourStyles from '@/styles/Colours.module.css'

import { useState, useEffect } from 'react'
import FileIcon from '@/components/FileIcon'

export default function FilesGrid({ files, filterByType, filterByName }) {
  const [filesFiltered, setFilesFiltered] = useState(
    // Sort files alphabetically
    files.sort((a, b) => a.title.localeCompare(b.title))
  )

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
          <FileIcon type={type.id} />

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
