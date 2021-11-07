import { FILE_TYPE_ARTICLE, FILE_TYPE_PROFILE } from '@constants';

import { FaUser, FaRegFileAlt } from 'react-icons/fa';

export default function FileIcon({ type }) {
  switch (type) {
    case FILE_TYPE_ARTICLE:
      return <FaRegFileAlt />
    case FILE_TYPE_PROFILE:
      return <FaUser />
    default:
      return null
  }
}
