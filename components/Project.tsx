import Tag from "./Tag"

const Back = ({title, description, tag}) => {
  return (
    <div className="text-base w-[20rem] hover:text-gray">
      <div className="font-bold mb-1">{title} <Tag>{tag}</Tag></div>
      <div className="leading-tight">{description}</div>
    </div>
  )
}

export default Back