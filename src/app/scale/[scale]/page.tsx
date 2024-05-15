import { readFile } from 'fs/promises'
import { notFound } from 'next/navigation'
import { ScaleRadio } from './components/radio'
import { ScaleResult } from './components/result'

export default async ({
  params: { scale },
}: {
  params: {
    scale: string
  }
}) => {
  const content = await readFile(
    process.cwd() + '/data/' + scale + '/zh.json',
    'utf-8',
  ).catch(() => null)

  if (!content) notFound()

  const parsedData = JSON.parse(content) as Scale

  return (
    <div className="prose">
      <h1>{parsedData.name}</h1>
      <h4>{parsedData.type}</h4>

      <section>
        {parsedData.items.map((item, index) => (
          <div key={item.question}>
            <p className="font-bold">
              {index + 1}: {item.question}
            </p>

            <ul className="!p-0 m-2">
              {item.options.map((option) => {
                return (
                  <li className="flex items-center gap-2" key={option.value}>
                    <ScaleRadio
                      fieldIndex={index}
                      scaleName={scale}
                      value={option.value}
                    ></ScaleRadio>
                    {option.text}
                  </li>
                )
              })}
            </ul>
          </div>
        ))}

        <ScaleResult
          scaleName={scale}
          interpretation={parsedData.scoring.interpretation}
          recommendation={parsedData.scoring.recommendation}
        />
      </section>
    </div>
  )
}
