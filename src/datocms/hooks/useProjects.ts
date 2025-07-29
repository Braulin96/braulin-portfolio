import { useState, useEffect } from 'react';
import { datomcmsClient } from '../../datocms/datocms';
import { GET_PROJECTS } from '../../datocms/queries/project';
import type { DatoCmsProjectResponse, DatoCmsProject } from 'datocms/types/project';

interface UseProjectsReturn {
    projects: DatoCmsProject[];
    loading: boolean;
    error: string | null;
}

export const useProjects = (): UseProjectsReturn => {
    const [projects, setProjects] = useState<DatoCmsProject[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                setLoading(true);
                const data: DatoCmsProjectResponse = await datomcmsClient.request(GET_PROJECTS);
                setProjects(data.allProjects);
            } catch (error) {
                console.error('Error fetching projects:', error);
                setError('Failed to fetch projects');
            } finally {
                setLoading(false);
            }
        };

        fetchProjects();
    }, []);

    return { projects, loading, error };
};

