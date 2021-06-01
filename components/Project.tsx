const Project = ({title, description}) => {
  return (
    <div className="text-base hover:text-gray">
      <div className="font-bold mb-1">{title}</div>
      <div className="leading-tight">{description}</div>
    </div>
  )
}

export default Project