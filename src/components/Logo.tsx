import logoImg from '../assets/zernyx-logo.png'

type LogoProps = {
  size?: number
  className?: string
}

export default function Logo({ size = 30, className }: LogoProps) {
  return (
    <a href="#top" className={className} aria-label="Zernyx home">
      <img
        src={logoImg}
        alt="Zernyx"
        width={116}
        height={size}
        style={{ width: 116, height: size, display: 'block' }}
      />
    </a>
  )
}
