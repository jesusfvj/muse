import React from 'react'

export const TrendingElement = ({artist, songTitle, album, year, producer, genre, styles}) => {
  return (
    <div className={styles}>
        <p>{artist}</p>
    </div>
  )
}
