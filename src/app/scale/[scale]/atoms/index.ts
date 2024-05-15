import { atom, type PrimitiveAtom } from 'jotai'
import { atomWithStorage } from 'jotai/utils'

export const scaleAtomsMap = {} as Record<string, PrimitiveAtom<number[]>>

const ns = 'psychological-scale'
export const getScaleAtom = (scaleName: string) => {
  let scaleAtom = scaleAtomsMap[scaleName]

  if (!scaleAtom) {
    scaleAtomsMap[scaleName] = atomWithStorage(
      ns + ' - ' + scaleName,
      [] as number[],
    )
    scaleAtom = scaleAtomsMap[scaleName]
  }

  return scaleAtom
}
