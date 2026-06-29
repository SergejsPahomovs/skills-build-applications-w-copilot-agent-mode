import { useEffect, useState } from 'react'
import { buildEndpointUrl, normalizeItems } from './api'

const codespacesTeamsPath = '-8000.app.github.dev/api/teams'

function Teams({ apiBaseUrl }) {
  const [teams, setTeams] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchTeams = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(buildEndpointUrl(apiBaseUrl, 'teams'))
        if (!response.ok) {
          throw new Error(`Failed to fetch teams (${response.status})`)
        }

        const data = await response.json()
        setTeams(normalizeItems(data))
      } catch (requestError) {
        setError(
          `${requestError.message}. Expected Codespaces format: https://<codespace>${codespacesTeamsPath}/`,
        )
        setTeams([])
      } finally {
        setLoading(false)
      }
    }

    fetchTeams()
  }, [apiBaseUrl])

  if (loading) {
    return <p className="text-secondary">Loading teams...</p>
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>
  }

  return (
    <section>
      <h2 className="h4 mb-3">Teams</h2>
      <div className="row g-3">
        {teams.map((team) => (
          <div className="col-md-6" key={team._id ?? team.id ?? team.name}>
            <article className="card h-100">
              <div className="card-body">
                <h3 className="h5 card-title">{team.name ?? 'Unnamed team'}</h3>
                <p className="card-text mb-1">
                  <strong>Coach:</strong> {team.coachName ?? '-'}
                </p>
                <p className="card-text mb-0">
                  <strong>Members:</strong> {team.memberIds?.length ?? 0}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Teams