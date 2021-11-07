import styles from '@/styles/FileTypeNameFilterInput.module.css'

export default function FileTypeNameFilterInput({ onChange, ...props }) {
  const handleInputChange = (evt) => {
    if (typeof onChange === 'function') {
      onChange(evt.target.value)
    }
  }

  return <input
    type='search'
    className={styles.input}
    placeholder='Filter by file name...'
    onChange={handleInputChange}
    {...props}
  />
}
