import { ArrowLeft } from "react-feather";

const Project = () => {
  return (
    <a onClick={() => history.back()} className="md:fixed block mt-9 gap-3 cursor-pointer text-gray hover:text-fg">
        <ArrowLeft size="1.2rem" />
        <div className="mt-1">Back</div>
    </a>
  );
};

export default Project;
