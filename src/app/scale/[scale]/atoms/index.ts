import { atom, type PrimitiveAtom } from 'jotai'

export const scaleAtomsMap = {} as Record<string, PrimitiveAtom<number[]>>

export const getScaleAtom = (scaleName: string) => {
  let scaleAtom = scaleAtomsMap[scaleName]

  if (!scaleAtom) {
    scaleAtomsMap[scaleName] = atom([] as number[])
    scaleAtom = scaleAtomsMap[scaleName]
  }

  return scaleAtom
}
