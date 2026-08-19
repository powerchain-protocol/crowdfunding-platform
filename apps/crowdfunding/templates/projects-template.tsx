import type { ReactNode } from "react"; import { ProjectsHeaderCard } from "../components/projects-header-card";
export function ProjectsTemplate({children,count,title}:{children:ReactNode;count:number;title?:string}){return <div><ProjectsHeaderCard count={count} title={title}/><div className="mt-6">{children}</div></div>}
