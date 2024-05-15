import type { PropsWithChildren } from 'react'

export default ({ children }: PropsWithChildren) => {
  return <div className="mx-auto max-w-[75ch] mt-24 pb-24">{children}</div>
}
