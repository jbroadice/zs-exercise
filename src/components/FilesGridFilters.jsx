import styles from '@/styles/FilesGridFilters.module.css'

import FileTypeSelector from '@/components/FileTypeSelector'
import FileTypeNameFilterInput from '@/components/FileTypeNameFilterInput'

export default function FilesGridFilters({ onFileTypeFilterChange, onFileNameFilterChange }) {
  return (
    <div className={styles.container}>
      <FileTypeSelector onChange={onFileTypeFilterChange} />
      <FileTypeNameFilterInput onChange={onFileNameFilterChange} />
    </div>
  )
}
