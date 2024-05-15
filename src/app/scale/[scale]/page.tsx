import { readScaleFile } from '@/lib/scale-fs'
import { notFound } from 'next/navigation'
import { ScaleRadio } from './components/radio'
import { ScaleResult } from './components/result'
import { MotionButtonBase } from 'shiro-rc'
import Link from 'next/link'

export default async ({
  params: { scale },
}: {
  params: {
    scale: string
  }
}) => {
  const content = await readScaleFile(scale)

  if (!content) notFound()

  const parsedData = JSON.parse(content) as Scale

  return (
    <div>
      <MotionButtonBase>
        <Link
          className="flex items-center opacity-50 duration-200 hover:opacity-100 p-2 gap-2 lg:hidden my-4"
          href={'/scale'}
        >
          <i className="icon-[mingcute--arrow-left-up-circle-line]" />
          <span>返回</span>
        </Link>
      </MotionButtonBase>
      <div className="prose">
        <h1>{parsedData.name}</h1>
        <h4>{parsedData.type}</h4>

        <section>
          {parsedData.frequency &&
            Object.values(parsedData.frequency).map((item, index) => {
              return (
                <div className="leading-loose text-sm" key={index}>
                  {parsedData.items[0].options[index].text}: {item}
                </div>
              )
            })}
        </section>

        <section>
          {parsedData.items.map((item, index) => (
            <div key={item.question}>
              <p className="font-bold">
                {item.question.startsWith(`${index + 1}`)
                  ? ''
                  : `${index + 1}. `}{' '}
                {item.question}
              </p>

              <ul className="!p-0 m-2">
                {item.options.map((option, optionIndex) => {
                  return (
                    <li className="flex items-center gap-2" key={option.value}>
                      <ScaleRadio
                        fieldIndex={index}
                        scaleName={scale}
                        value={option.value}
                        optionIndex={optionIndex}
                      ></ScaleRadio>
                      <label htmlFor={`${scale}-${index}-${optionIndex}`}>
                        {option.text}
                      </label>
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

      <footer className="mt-12 font-bold text-center">
        加油，你一定会好起来的！
      </footer>
    </div>
  )
}
