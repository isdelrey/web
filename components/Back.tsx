import { ArrowLeft } from "react-feather";
import { useRouter } from "next/router";
import $ from "classname";

const Project = () => {
  const router = useRouter();
  const home = router.route === "/";

  return (
    <a
      onClick={() => router.back()}
      className={$(
        "md:fixed block cursor-pointer text-gray-1 hover:text-fg md:flex items-center gap-3",
        !home && "mt-0"
      )}
    >
      <ArrowLeft size="1.2rem" />
      <div className="mt-1 md:mt-0">Back</div>
    </a>
  );
};

export default Project;
