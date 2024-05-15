import { readFile } from 'fs/promises'
import path from 'path'

export const readScaleFile = async (scale: string, fallbackLanguage = 'en') => {
  const filePath = path.join(process.cwd(), 'data', scale, 'zh.json')
  let content

  try {
    content = await readFile(filePath, 'utf-8')
  } catch (error) {
    const fallbackFilePath = path.join(
      process.cwd(),
      'data',
      scale,
      `${fallbackLanguage}.json`,
    )
    try {
      content = await readFile(fallbackFilePath, 'utf-8')
    } catch (fallbackError) {
      content = null
    }
  }

  return content
}
