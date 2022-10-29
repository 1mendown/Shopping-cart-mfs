import { CSSProperties } from "react"

export default interface DataIN {
  addToCartHeader: {
    id: string
    header: string
    accessor: string | { [key: string]: unknown }
    withComputation?: { [key: string]: unknown } | boolean | string
    hasComponent?: boolean
    hasImage?: true
    imageComponent?: any
    sx?: CSSProperties | null
  }[]
  itemListHeader: {
    id: string
    nestedObj?: boolean
    mainObj?: string
    htmlSign?: JSX.Element
    withIcons?: JSX.Element
    accessor: string | Array<string>
    imageComponent?: any
    hasImage?: boolean
    className?: string
  }[]
}

export interface itemListHeader {
  id: string
  nestedObj?: boolean
  withIcons?: JSX.Element
  mainObj?: string
  htmlSign?: JSX.Element
  accessor: string | Array<string>
  imageComponent?: any
  hasImage?: boolean
  className?: string
}
