interface SpinningBlueRoseProps {
  size?: number
  className?: string
}

export default function SpinningBlueRose({ size = 300, className = "" }: SpinningBlueRoseProps) {
  return (
    <div className={`inline-block ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 300 300"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="animate-spin drop-shadow-2xl"
        style={{ animationDuration: "8s" }}
      >
        {/* Gradients for lighting effects */}
        <defs>
          <radialGradient id="outerPetal" cx="0.3" cy="0.3" r="0.8">
            <stop offset="0%" stopColor="#93c5fd" />
            <stop offset="50%" stopColor="#3b82f6" />
            <stop offset="100%" stopColor="#1e40af" />
          </radialGradient>
          <radialGradient id="midPetal" cx="0.2" cy="0.2" r="0.9">
            <stop offset="0%" stopColor="#bfdbfe" />
            <stop offset="40%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#2563eb" />
          </radialGradient>
          <radialGradient id="innerPetal" cx="0.1" cy="0.1" r="1">
            <stop offset="0%" stopColor="#dbeafe" />
            <stop offset="30%" stopColor="#93c5fd" />
            <stop offset="100%" stopColor="#3b82f6" />
          </radialGradient>
          <radialGradient id="centerGrad" cx="0.2" cy="0.2" r="0.8">
            <stop offset="0%" stopColor="#fef3c7" />
            <stop offset="50%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#d97706" />
          </radialGradient>
        </defs>

        {/* Outer layer petals */}
        <g transform="translate(150,150)">
          {/* 8 outer petals */}
          <ellipse cx="0" cy="-80" rx="25" ry="45" fill="url(#outerPetal)" transform="rotate(0)" />
          <ellipse cx="0" cy="-80" rx="25" ry="45" fill="url(#outerPetal)" transform="rotate(45)" />
          <ellipse cx="0" cy="-80" rx="25" ry="45" fill="url(#outerPetal)" transform="rotate(90)" />
          <ellipse cx="0" cy="-80" rx="25" ry="45" fill="url(#outerPetal)" transform="rotate(135)" />
          <ellipse cx="0" cy="-80" rx="25" ry="45" fill="url(#outerPetal)" transform="rotate(180)" />
          <ellipse cx="0" cy="-80" rx="25" ry="45" fill="url(#outerPetal)" transform="rotate(225)" />
          <ellipse cx="0" cy="-80" rx="25" ry="45" fill="url(#outerPetal)" transform="rotate(270)" />
          <ellipse cx="0" cy="-80" rx="25" ry="45" fill="url(#outerPetal)" transform="rotate(315)" />
        </g>

        {/* Middle layer petals */}
        <g transform="translate(150,150)">
          {/* 8 middle petals offset by 22.5 degrees */}
          <ellipse cx="0" cy="-60" rx="20" ry="35" fill="url(#midPetal)" transform="rotate(22.5)" />
          <ellipse cx="0" cy="-60" rx="20" ry="35" fill="url(#midPetal)" transform="rotate(67.5)" />
          <ellipse cx="0" cy="-60" rx="20" ry="35" fill="url(#midPetal)" transform="rotate(112.5)" />
          <ellipse cx="0" cy="-60" rx="20" ry="35" fill="url(#midPetal)" transform="rotate(157.5)" />
          <ellipse cx="0" cy="-60" rx="20" ry="35" fill="url(#midPetal)" transform="rotate(202.5)" />
          <ellipse cx="0" cy="-60" rx="20" ry="35" fill="url(#midPetal)" transform="rotate(247.5)" />
          <ellipse cx="0" cy="-60" rx="20" ry="35" fill="url(#midPetal)" transform="rotate(292.5)" />
          <ellipse cx="0" cy="-60" rx="20" ry="35" fill="url(#midPetal)" transform="rotate(337.5)" />
        </g>

        {/* Inner layer petals */}
        <g transform="translate(150,150)">
          {/* 6 inner petals */}
          <ellipse cx="0" cy="-40" rx="15" ry="25" fill="url(#innerPetal)" transform="rotate(0)" />
          <ellipse cx="0" cy="-40" rx="15" ry="25" fill="url(#innerPetal)" transform="rotate(60)" />
          <ellipse cx="0" cy="-40" rx="15" ry="25" fill="url(#innerPetal)" transform="rotate(120)" />
          <ellipse cx="0" cy="-40" rx="15" ry="25" fill="url(#innerPetal)" transform="rotate(180)" />
          <ellipse cx="0" cy="-40" rx="15" ry="25" fill="url(#innerPetal)" transform="rotate(240)" />
          <ellipse cx="0" cy="-40" rx="15" ry="25" fill="url(#innerPetal)" transform="rotate(300)" />
        </g>

        {/* Innermost petals */}
        <g transform="translate(150,150)">
          {/* 4 innermost petals */}
          <ellipse cx="0" cy="-25" rx="10" ry="18" fill="url(#innerPetal)" transform="rotate(30)" />
          <ellipse cx="0" cy="-25" rx="10" ry="18" fill="url(#innerPetal)" transform="rotate(120)" />
          <ellipse cx="0" cy="-25" rx="10" ry="18" fill="url(#innerPetal)" transform="rotate(210)" />
          <ellipse cx="0" cy="-25" rx="10" ry="18" fill="url(#innerPetal)" transform="rotate(300)" />
        </g>

        {/* Center of the rose */}
        <circle cx="150" cy="150" r="15" fill="url(#centerGrad)" />

        {/* Center highlight */}
        <circle cx="145" cy="145" r="8" fill="#fef9c3" opacity="0.8" />
        <circle cx="142" cy="142" r="4" fill="#ffffff" opacity="0.6" />
      </svg>
    </div>
  )
}