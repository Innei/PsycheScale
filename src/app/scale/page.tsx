import { readScaleFile } from '@/lib/scale-fs'
import { readdir } from 'fs/promises'
import Link from 'next/link'
import { clsxm } from 'shiro-rc'

export default async () => {
  const scales = (await readdir(process.cwd() + '/data')).filter(
    (file) => !file.startsWith('.'),
  )

  return (
    <div
      className={clsxm(
        'flex flex-col gap-2',

        'mt-24 p-4',
        'block lg:hidden',
      )}
    >
      {scales.map(async (scale) => (
        <Link
          className="p-3 flex-shrink-0 flex flex-col"
          href={`/scale/${scale}`}
          key={scale}
        >
          <span>{scale}</span>

          <span>
            {await readScaleFile(scale).then((c) =>
              c ? JSON.parse(c).name : null,
            )}
          </span>
        </Link>
      ))}
    </div>
  )
}
