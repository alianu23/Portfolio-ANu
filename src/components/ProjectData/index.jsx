import Link from "next/link";
import React from "react";

export const ProjectData = (props) => {
  return (
    <Link href={props.data.url}>
      <div className="flex flex-col gap-3 items-center mt-7 hover:bg-black hover:opacity-50 bg-slate-900 rounded-md">
        <img
          className="h-[250px] w-[250px] rounded-t-md"
          src={props.data.img}
          alt="project-img"
        />
        <p className="text-slate-100 pb-7">{props.data.name}</p>
      </div>
    </Link>
  );
};
