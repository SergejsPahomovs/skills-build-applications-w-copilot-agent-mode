import { useEffect, useState } from 'react'
import { buildEndpointUrl, normalizeItems } from './api'

function Activities({ apiBaseUrl }) {
  const [activities, setActivities] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true)
      setError('')

      try {
        const response = await fetch(buildEndpointUrl(apiBaseUrl, 'activities'))
        if (!response.ok) {
          throw new Error(`Failed to fetch activities (${response.status})`)
        }

        const data = await response.json()
        setActivities(normalizeItems(data))
      } catch (requestError) {
        setError(requestError.message)
        setActivities([])
      } finally {
        setLoading(false)
      }
    }

    fetchActivities()
  }, [apiBaseUrl])

  if (loading) {
    return <p className="text-secondary">Loading activities...</p>
  }

  if (error) {
    return <div className="alert alert-danger">{error}</div>
  }

  return (
    <section>
      <h2 className="h4 mb-3">Activities</h2>
      <div className="table-responsive">
        <table className="table table-striped table-bordered align-middle">
          <thead>
            <tr>
              <th>User</th>
              <th>Type</th>
              <th>Duration</th>
              <th>Calories</th>
              <th>Date</th>
            </tr>
          </thead>
          <tbody>
            {activities.map((activity) => (
              <tr key={activity._id ?? activity.id}>
                <td>{activity.userId?.name ?? activity.userName ?? '-'}</td>
                <td>{activity.activityType ?? '-'}</td>
                <td>{activity.durationMinutes ?? '-'} min</td>
                <td>{activity.caloriesBurned ?? '-'}</td>
                <td>
                  {activity.activityDate
                    ? new Date(activity.activityDate).toLocaleDateString()
                    : '-'}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Activities