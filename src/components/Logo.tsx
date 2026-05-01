import logoImg from '../assets/zernyx-logo.svg'

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
        height={size}
        style={{ height: size, width: 'auto', display: 'block' }}
      />
    </a>
  )
}
