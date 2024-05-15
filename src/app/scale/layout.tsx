import type { PropsWithChildren } from 'react'
import { readdir } from 'fs/promises'
import Link from 'next/link'
import { clsxm } from 'shiro-rc'
import { readScaleFile } from '@/lib/scale-fs'

export default async ({ children }: PropsWithChildren) => {
  const scales = (await readdir(process.cwd() + '/data')).filter(
    (file) => !file.startsWith('.'),
  )

  return (
    <div>
      <aside
        className={clsxm(
          'flex flex-col gap-2 fixed overflow-auto inset-y-0',

          'mt-24 p-4',
          'w-[220px] hidden lg:block',
        )}
      >
        {scales.map(async (scale) => (
          <Link
            className="p-1 flex-shrink-0 flex flex-col opacity-50 text-sm hover:opacity-100 duration-200"
            href={`/scale/${scale}`}
            key={scale}
          >
            <span>{scale}</span>

            <small className="ml-1">
              {await readScaleFile(scale).then((c) =>
                c ? JSON.parse(c).name : null,
              )}
            </small>
          </Link>
        ))}
      </aside>
      <div className={clsxm('relative', 'lg:ml-[220px] px-5 lg:px-0')}>
        {children}
      </div>
    </div>
  )
}
