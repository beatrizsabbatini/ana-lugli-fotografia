import React from 'react'
import { Picture } from './styles'

export default function SquarePicture({
  source,
  isFirstItem,
  isLastItem
}) {
  return (
    <Picture src={source} alt="square-picture" style={{
      marginLeft: isFirstItem ? 40 : 0,
      marginRight: isLastItem ? 40 : 0,
      padding: 10
    }}/>
  )
}
