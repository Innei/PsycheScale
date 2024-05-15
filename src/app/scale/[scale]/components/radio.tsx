'use client'
import { useAtomValue, useSetAtom } from 'jotai'
import { selectAtom } from 'jotai/utils'
import { useMemo, type FC } from 'react'
import { getScaleAtom } from '../atoms'

export const ScaleRadio: FC<{
  scaleName: string
  fieldIndex: number
  optionIndex: number
  value: number
}> = ({ fieldIndex, scaleName, value, optionIndex }) => {
  const scaleAtom = getScaleAtom(scaleName)

  const setValues = useSetAtom(scaleAtom)
  const checked = useAtomValue(
    useMemo(
      () => selectAtom(scaleAtom, (values) => values[fieldIndex] === value),
      [fieldIndex, scaleAtom, value],
    ),
  )
  return (
    <input
      name={`${fieldIndex}`}
      type="radio"
      id={`${scaleName}-${fieldIndex}-${optionIndex}`}
      className="radio radio-sm radio-primary"
      key={value}
      checked={checked}
      onChange={(e) => {
        setValues((values) => {
          const newValues = [...values]
          newValues[fieldIndex] = value
          return newValues
        })
      }}
    ></input>
  )
}
