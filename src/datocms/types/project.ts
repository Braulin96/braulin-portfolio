export interface DatoCmsImage {
    url: string;
    alt?: string;    
}

export interface DatoCmsProject {
    id: string;
    title: string;
    description: string;
    technologies: string[];
    mainImage?: DatoCmsImage;
    moreImages?: DatoCmsImage[];
}

export interface DatoCmsProjectResponse {
    allProjects: DatoCmsProject[];
}   