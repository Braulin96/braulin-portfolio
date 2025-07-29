import type { DatoCmsProject } from 'datocms/types/project';

export interface ProjectCardData {
    title: string;
    description: string;
    technologies: string[];
    gradient?: string;
    mainImage?: string;
    moreImages?: string[];
}

export const transformDatoCMSProject = (datocmsProject: DatoCmsProject): ProjectCardData => {
    return {
        title: datocmsProject.title,
        description: datocmsProject.description,
        technologies: datocmsProject.technologies,
        mainImage: datocmsProject.mainImage?.url,
        moreImages: datocmsProject.moreImages?.map(img => img.url) || [],
    };
};