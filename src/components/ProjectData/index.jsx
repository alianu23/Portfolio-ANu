import Link from "next/link";
import React from "react";

export const ProjectData = (props) => {
  return (
    <Link href={props.data.url}>
      <div className="flex flex-col gap-3 items-center mt-7 lg:hover:bg-black lg:hover:opacity-50 lg:bg-slate-900 rounded-md">
        <img
          className="lg:h-[250px] lg:w-[250px] w-[600px] h-[250px] rounded-t-md"
          src={props.data.img}
          alt="project-img"
        />
        <p className="lg:text-slate-100 text-black pb-7">{props.data.name}</p>
      </div>
    </Link>
  );
};
