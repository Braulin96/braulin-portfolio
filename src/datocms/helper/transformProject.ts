import type { DatoCmsImage, DatoCmsProject } from 'datocms/types/project';

export interface ProjectCardData {
    title: string;
    description: string;
    technologies: string[];
    gradient?: string;
    mainImage?: string;
    moreImages?: string[];
    isMobileApp?: boolean;
}

const isPortrait = (image?: DatoCmsImage): boolean =>
    !!image?.width && !!image?.height && image.height > image.width;

export const transformDatoCMSProject = (datocmsProject: DatoCmsProject): ProjectCardData => {
    return {
        title: datocmsProject.title,
        description: datocmsProject.description,
        technologies: datocmsProject.technologies,
        mainImage: datocmsProject.mainImage?.url,
        moreImages: datocmsProject.moreImages?.map(img => img.url) || [],
        // Portrait screenshots (taller than wide) are mobile apps: show them uncropped.
        isMobileApp: isPortrait(datocmsProject.mainImage),
    };
};