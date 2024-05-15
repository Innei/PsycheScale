'use client'

import { useMemo, type FC } from 'react'
import { getScaleAtom } from '../atoms'
import { useAtomValue } from 'jotai'
import { selectAtom } from 'jotai/utils'

export const ScaleResult: FC<{
  scaleName: string

  recommendation?: Recommendation
  interpretation?: Interpretation
}> = ({ scaleName, interpretation, recommendation }) => {
  const scaleAtom = getScaleAtom(scaleName)
  const totalScore = useAtomValue(
    useMemo(
      () =>
        selectAtom(scaleAtom, (v) => {
          return v.reduce((acc, cur) => acc + (cur || 0), 0)
        }),
      [],
    ),
  )

  const findCurrent = (
    data: Interpretation | Recommendation | undefined,
    totalScore: number,
  ) => {
    if (!data) return null
    return Object.entries(data).find(([periodRange]) => {
      const [min, max] = periodRange.split('-').map(Number)
      return min <= totalScore && max >= totalScore
    })?.[1]
  }

  const currentPeriod = useMemo(
    () => findCurrent(interpretation, totalScore),
    [interpretation, totalScore],
  )
  const currentRecommendation = useMemo(
    () => findCurrent(recommendation, totalScore),
    [recommendation, totalScore],
  )

  return (
    <div>
      <div>
        得分：{totalScore} / {currentPeriod}
      </div>
      <div>建议：{currentRecommendation}</div>
    </div>
  )
}
