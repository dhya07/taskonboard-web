import { useEffect, useMemo, useState } from 'react'

/**
 * Shown when the marketing site serves the SPA for /auth-app-password-reset.html
 * (e.g. SPA fallback). Hands off to the native app with the same query string as the static bridge HTML.
 */
export default function PasswordResetBridge() {
  const [deepLink, setDeepLink] = useState('')
  const [invalid, setInvalid] = useState(false)

  const params = useMemo(() => new URLSearchParams(typeof window !== 'undefined' ? window.location.search : ''), [])

  useEffect(() => {
    const oob = params.get('oobCode')
    const mode = params.get('mode') || 'resetPassword'
    const app = (params.get('app') || 'prod').toLowerCase()
    const scheme = app === 'dev' ? 'taskonboard-dev' : 'taskonboard'
    if (!oob) {
      setInvalid(true)
      return
    }
    const deep = `${scheme}://Auth/reset-password?oobCode=${encodeURIComponent(oob)}&mode=${encodeURIComponent(mode)}`
    setDeepLink(deep)
    window.location.replace(deep)
  }, [params])

  return (
    <div
      style={{
        fontFamily: 'system-ui, -apple-system, sans-serif',
        background: '#f6f7f9',
        color: '#111',
        minHeight: '100vh',
        margin: 0,
        padding: 24,
        lineHeight: 1.45,
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {invalid ? (
        <p style={{ maxWidth: 420 }}>This reset link is missing required information. Request a new password reset from the app.</p>
      ) : (
        <>
          <p style={{ maxWidth: 420 }}>Open the TaskOnBoard app to set your new password.</p>
          <p style={{ maxWidth: 420 }}>
            <a href={deepLink || '#'} style={{ color: '#0d6efd', fontWeight: 600, wordBreak: 'break-all' }}>
              Open TaskOnBoard
            </a>
          </p>
          <p style={{ fontSize: 14, color: '#555', maxWidth: 420 }}>
            If nothing happens, open the app from your home screen, then return here and tap the link again.
          </p>
        </>
      )}
    </div>
  )
}
