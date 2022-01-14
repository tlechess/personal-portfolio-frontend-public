import { EducationDetails } from "./education-details";

export class Education {
    id: number;
    schoolName: string = "";
    location: string = "";
    dateAttended: string = "";
    details: string = "";
    educationDetails: Array<EducationDetails> = new Array;
}