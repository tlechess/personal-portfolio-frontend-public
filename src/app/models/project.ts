import { ProjectUrls } from "./project-urls";
import { Technology } from "./technology";

export class Project {
    id: number =0;
    projectName: string = "";
    projectCategory: string = "";
    cliant: string = "";
    projectDate: string = "";
    projectUrls: ProjectUrls = new ProjectUrls;
    details: string = "";
    shortDetails: string = "";
    technologies: Array<Technology>;
} 