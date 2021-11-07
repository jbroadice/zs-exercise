import { useState } from 'react'
import { getFiles } from '@/data/files'

import FilesGrid from '@/components/FilesGrid'
import FilesGridFilters from '@/components/FilesGridFilters'

export default function Home({ files }) {
  const [filesFilterByType, setFilesFilterByType] = useState(null)
  const [filesFilterByName, setFilesFilterByName] = useState(null)

  const onFileTypeFilterChange = (type) => {
    setFilesFilterByType(type)
  }

  const onFileNameFilterChange = (name) => {
    setFilesFilterByName(name)
  }

  return (
    <div>
      <FilesGridFilters
        onFileTypeFilterChange={onFileTypeFilterChange}
        onFileNameFilterChange={onFileNameFilterChange}
      />

      <FilesGrid
        files={files}
        filterByType={filesFilterByType}
        filterByName={filesFilterByName}
      />
    </div>
  )
}

export const getServerSideProps = async () => {
  const files = await getFiles()

  return {
    props: {
      files,
    }
  }
}
