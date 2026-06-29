# Octofit Frontend (React 19 + Vite)

## Environment variable requirement

Define `VITE_CODESPACE_NAME` in `octofit-tracker/frontend/.env.local` when running in Codespaces:

```env
VITE_CODESPACE_NAME=your-codespace-name
```

The app builds API URLs as:

```text
https://${VITE_CODESPACE_NAME}-8000.app.github.dev/api/[component]/
```

Example endpoints:

- `/api/users/`
- `/api/teams/`
- `/api/activities/`
- `/api/leaderboard/`
- `/api/workouts/`

If `VITE_CODESPACE_NAME` is unset, the app safely falls back to:

```text
http://localhost:8000/api
```

This fallback prevents malformed URLs such as `https://undefined-8000.app.github.dev`.
