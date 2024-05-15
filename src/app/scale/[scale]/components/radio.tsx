'use client'
import {
  atom,
  useAtom,
  useAtomValue,
  useSetAtom,
  useStore,
  type PrimitiveAtom,
} from 'jotai'
import { selectAtom } from 'jotai/utils'
import { useMemo, type FC } from 'react'
import { getScaleAtom, scaleAtomsMap } from '../atoms'

export const ScaleRadio: FC<{
  scaleName: string
  fieldIndex: number
  value: number
}> = ({ fieldIndex, scaleName, value }) => {
  const scaleAtom = getScaleAtom(scaleName)

  const setValues = useSetAtom(scaleAtom)
  const checked = useAtomValue(
    useMemo(
      () => selectAtom(scaleAtom, (values) => values[fieldIndex] === value),
      [],
    ),
  )
  return (
    <input
      name={`${fieldIndex}`}
      type="radio"
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
