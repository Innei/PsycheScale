interface Scale {
  name: string
  type: string
  items: ItemsItem[]
  scoring: Scoring
  frequency: Frequency
}
interface ItemsItem {
  question: string
  options: OptionsItem[]
}
interface OptionsItem {
  value: number
  text: string
}
interface Scoring {
  range: number[]
  interpretation: Interpretation
  recommendation: Recommendation
}
interface Interpretation {
  [key: string]: string
}
interface Recommendation {
  [key: string]: string
}
interface Frequency {
  [key: string]: string
}
