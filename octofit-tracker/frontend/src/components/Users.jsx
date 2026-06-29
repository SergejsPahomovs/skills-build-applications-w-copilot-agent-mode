import { useEffect, useState } from 'react'
import { buildEndpointUrl, normalizeItems } from './api'

const codespacesUsersPath = '-8000.app.github.dev/api/users'

function Users({ apiBaseUrl }) {
  const [users, setUsers] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchUsers = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(buildEndpointUrl(apiBaseUrl, 'users'))
        if (!response.ok) {
          throw new Error(`Failed to fetch users (${response.status})`)
        }

        const data = await response.json()
        setUsers(normalizeItems(data))
      } catch (requestError) {
        setError(
          `${requestError.message}. Expected Codespaces format: https://<codespace>${codespacesUsersPath}/`,
        )
        setUsers([])
      } finally {
        setLoading(false)
      }
    }

    fetchUsers()
  }, [apiBaseUrl])

  if (loading) {
    return <p className="text-secondary">Loading users...</p>
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>
  }

  return (
    <section>
      <h2 className="h4 mb-3">Users</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Grade</th>
              <th>Goal</th>
              <th>Weekly Target</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user._id ?? user.id ?? user.email}>
                <td>{user.name ?? '-'}</td>
                <td>{user.email ?? '-'}</td>
                <td>{user.gradeLevel ?? '-'}</td>
                <td>{user.fitnessGoal ?? '-'}</td>
                <td>{user.weeklyTargetMinutes ?? '-'} min</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Users