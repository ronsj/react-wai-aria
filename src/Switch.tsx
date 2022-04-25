import * as React from 'react'

export interface SwitchProps {
  label?: string | null
  checked: boolean
  tabIndex?: number
  children?: React.ReactNode
}

type StatusState = boolean | undefined

export function Switch({
  label = null,
  checked = false,
  tabIndex = 0,
}: SwitchProps) {
  const [status, setStatus] = React.useState<StatusState>()

  React.useEffect(() => {
    setStatus(checked)
  }, [checked])

  if (status === undefined) {
    return null
  }

  const handleClick: React.MouseEventHandler<HTMLDivElement> = () => {
    setStatus(!status)
  }

  const handleKeyDown: React.KeyboardEventHandler<HTMLDivElement> = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault()
      setStatus(!status)
    }
  }

  return (
    <div
      role="switch"
      aria-checked={status}
      tabIndex={tabIndex}
      onClick={handleClick}
      onKeyDown={handleKeyDown}
      style={{
        margin: '2px',
        padding: '4px 4px 8px 8px',
        border: '0 solid #005a9c',
        borderRadius: '5px',
        width: '15em',
        userSelect: 'none',
      }}
    >
      {label && <span className="label">{label}</span>}
      <span
        className="switch"
        style={{
          position: 'relative',
          display: 'inline-block',
          top: '6px',
          border: '2px solid black',
          borderRadius: '12px',
          height: '20px',
          width: '40px',
        }}
      >
        <span
          style={{
            position: 'absolute',
            top: '2px',
            left: status ? '21px' : '2px',
            display: 'inline-block',
            border: '2px solid black',
            borderRadius: '8px',
            borderColor: status ? 'green' : undefined,
            height: '12px',
            width: '12px',
            background: status ? 'green' : 'black',
          }}
        ></span>
      </span>
      <span
        className="on"
        aria-hidden="true"
        style={{
          display: status ? 'inline' : 'none',
        }}
      >
        On
      </span>
      <span
        className="off"
        aria-hidden="true"
        style={{
          display: status ? 'none' : 'inline',
        }}
      >
        Off
      </span>
    </div>
  )
}
