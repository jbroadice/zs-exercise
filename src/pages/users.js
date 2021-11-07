import { getUsers } from '@/data/users'

export default function Users({ users }) {
  if (users === null) {
    return <div>Could not retrieve users after multiple retries, and no cache yet exists. Please refresh to try again.</div>
  }

  return users.map(({ givenName, familyName }, i) => (
    <div key={i}>{givenName} {familyName}</div>
  ))
}

export const getServerSideProps = async () => {
  const users = await getUsers()

  return {
    props: {
      users
    }
  }
}
