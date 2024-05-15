import { StyledButton } from 'shiro-rc'

export default function Home() {
  return (
    <div className="max-w-[80ch] mx-auto h-dvh flex flex-col">
      <h1 className="mt-24 font-bold leading-loose text-3xl text-center">
        Shiro UI Template
      </h1>
      <div className="mt-12 flex gap-6 mx-auto items-center justify-center w-full">
        <StyledButton>Click!</StyledButton>
      </div>
      <footer className="grow flex items-end pb-6">
        <div className="flex items-center gap-1 text-base-content/60 justify-center w-full text-sm">
          <span>2024 ©</span>
          <a href="https://github.com/innei" target="_blank">
            Innei
          </a>
        </div>
      </footer>
    </div>
  )
}
