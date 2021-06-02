import { ArrowLeft } from "react-feather";
import {useRouter} from "next/router"
import $ from "classname"

const Project = () => {
  const router = useRouter()
  const home = router.route === "/"

  return (
    <a onClick={() => router.back()} className={$("md:fixed block cursor-pointer text-gray hover:text-fg", !home && "mt-0 md:mt-12")}>
        <ArrowLeft size="1.2rem" />
        <div className="mt-1">Back</div>
    </a>
  );
};

export default Project;
