import { useEffect, useState } from 'react'
import { buildEndpointUrl, normalizeItems } from './api'

function Workouts({ apiBaseUrl }) {
  const [workouts, setWorkouts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchWorkouts = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(buildEndpointUrl(apiBaseUrl, 'workouts'))
        if (!response.ok) {
          throw new Error(`Failed to fetch workouts (${response.status})`)
        }

        const data = await response.json()
        setWorkouts(normalizeItems(data))
      } catch (requestError) {
        setError(requestError.message)
        setWorkouts([])
      } finally {
        setLoading(false)
      }
    }

    fetchWorkouts()
  }, [apiBaseUrl])

  if (loading) {
    return <p className="text-secondary">Loading workouts...</p>
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>
  }

  return (
    <section>
      <h2 className="h4 mb-3">Workouts</h2>
      <div className="row g-3">
        {workouts.map((workout) => (
          <div className="col-md-6" key={workout._id ?? workout.id ?? workout.title}>
            <article className="card h-100">
              <div className="card-body">
                <h3 className="h5 card-title">{workout.title ?? 'Workout plan'}</h3>
                <p className="card-text mb-1">
                  <strong>Focus:</strong> {workout.focusArea ?? '-'}
                </p>
                <p className="card-text mb-1">
                  <strong>Difficulty:</strong> {workout.difficulty ?? '-'}
                </p>
                <p className="card-text mb-1">
                  <strong>Duration:</strong> {workout.estimatedMinutes ?? '-'} min
                </p>
                <p className="card-text mb-0">
                  <strong>Recommended for:</strong> {workout.recommendedForGoal ?? '-'}
                </p>
              </div>
            </article>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Workouts