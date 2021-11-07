import styles from '@/styles/FileTypeTag.module.css'
import colourStyles from '@/styles/Colours.module.css'

export default function FileTypeTag({ label, value, colourId }) {
  return (
    <div className={`${styles.tag} ${colourStyles[`colour_${colourId}`]}`}>
      {label}
    </div>
  )
}
