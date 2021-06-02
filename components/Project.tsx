import Tag from "./Tag"

const Back = ({title, description, tag}) => {
  return (
    <div className="text-base hover:text-gray" style={{width: "20rem"}}>
      <div className="text-lg mb-0.5s">{title} <Tag>{tag}</Tag></div>
      <div className="leading-tight text-gray">{description}</div>
    </div>
  )
}

export default Back