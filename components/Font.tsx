import React from "react"
import Tag from "./Tag"

const Font: React.FunctionComponent<{
  image: React.FunctionComponent<React.SVGProps<{}>>,
  title: string}> = ({image: Image, title}) => {
  return (
    <div className="flex flex-col text-base hover:text-gray fill-fg hover:fill-gray">
      <Image width="105px" height="45px" />
      <div className="mt-1">{title} <Tag>v1</Tag></div>
    </div>
  )
}

export default Font