import { useEffect, useState } from 'react'
import { buildEndpointUrl, normalizeItems } from './api'

function Leaderboard({ apiBaseUrl }) {
  const [rows, setRows] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchLeaderboard = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(buildEndpointUrl(apiBaseUrl, 'leaderboard'))
        if (!response.ok) {
          throw new Error(`Failed to fetch leaderboard (${response.status})`)
        }

        const data = await response.json()
        setRows(normalizeItems(data))
      } catch (requestError) {
        setError(requestError.message)
        setRows([])
      } finally {
        setLoading(false)
      }
    }

    fetchLeaderboard()
  }, [apiBaseUrl])

  if (loading) {
    return <p className="text-secondary">Loading leaderboard...</p>
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>
  }

  return (
    <section>
      <h2 className="h4 mb-3">Leaderboard</h2>
      <ol className="list-group list-group-numbered">
        {rows.map((entry) => (
          <li
            key={entry._id ?? `${entry.userId ?? 'user'}-${entry.period ?? 'period'}`}
            className="list-group-item d-flex justify-content-between align-items-center"
          >
            <div>
              <div className="fw-semibold">{entry.userId?.name ?? entry.userName ?? 'Athlete'}</div>
              <small className="text-secondary">{entry.period ?? '-'}</small>
            </div>
            <span className="badge text-bg-primary rounded-pill">{entry.points ?? 0}</span>
          </li>
        ))}
      </ol>
    </section>
  )
}

export default Leaderboard