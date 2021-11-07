import styles from '@/styles/FileTypeSelector.module.css'

import { useState } from 'react'
import { getFileTypes } from '@/data/files'

import AsyncSelect from 'react-select/async'
import FileTypeTag from '@/components/FileTypeTag'

const loadOptions = (inputValue) =>
  new Promise((resolve) => {
    getFileTypes().then((types) => {
      const typesFiltered = types.filter((type) =>
        !inputValue || type.name.toLowerCase().includes(inputValue.toLowerCase())
      )

      resolve(typesFiltered.map((type) => ({
        label: type.name,
        value: type.id,
        colourId: type.colourId
      })))
    })
  })

export default function FileTypeSelector({ onChange }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleOnChange = (option) => {
    setSelectedOption(option)

    if (typeof onChange === 'function') {
      onChange(option)
    }
  }

  return <AsyncSelect
    instanceId='select-filter-file-type'
    placeholder='Filter by file type...'
    className={styles.selector}
    defaultOptions
    isClearable
    value={selectedOption}
    onChange={handleOnChange}
    loadOptions={loadOptions}
    formatOptionLabel={(option) => <FileTypeTag {...option} />}
  />
}
