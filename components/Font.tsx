import React from "react";
import Tag from "./Tag";

const Font: React.FunctionComponent<{
  image: React.FunctionComponent<React.SVGProps<{}>>;
  title: string;
  description: string;
  tag: string;
}> = ({ image: Image, title, description, tag }) => {
  return (
    <div className="flex flex-col text-base hover:text-gray-1 fill-fg hover:fill-gray">
      <Image width="105px" height="45px" />
      <div className="mt-2">
        {title} <Tag>{tag}</Tag>
      </div>
      <div className="leading-tight text-gray-1 text-sm">{description}</div>
    </div>
  );
};

export default Font;
