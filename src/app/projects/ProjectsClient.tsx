'use client';

import { useState, useMemo } from 'react';
import ProjectListItem from '@/components/ProjectListItem/ProjectListItem';
import List from '@/components/List/List';
import { Repo } from '@/api/github-api';
import { FaSearch, FaGraduationCap, FaBriefcase } from 'react-icons/fa';
import styles from './ProjectsClient.module.css';

const listBox = 'listBox';

interface ProjectsClientProps {
  data: [Repo];
  githubUserLink: string;
}

export default function ProjectsClient({ data, githubUserLink }: ProjectsClientProps) {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSchoolProjects, setShowSchoolProjects] = useState<'all' | 'yes' | 'no'>('all');

  const filteredData = useMemo(() => {
    return data?.filter((repo) => {
      // Search filter - check name, description, and topics
      const matchesSearch = 
        searchQuery === '' ||
        repo.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.description?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        repo.topics?.some((topic) => topic.toLowerCase().includes(searchQuery.toLowerCase()));

      // School project filter - check if topics include "school-project" or similar
      const isSchoolProject = repo.topics?.some((topic) => 
        topic.toLowerCase().includes('school') || 
        topic.toLowerCase().includes('university') ||
        topic.toLowerCase().includes('chalmers')
      );

      const matchesSchoolFilter = 
        showSchoolProjects === 'all' ||
        (showSchoolProjects === 'yes' && isSchoolProject) ||
        (showSchoolProjects === 'no' && !isSchoolProject);

      return matchesSearch && matchesSchoolFilter;
    });
  }, [data, searchQuery, showSchoolProjects]);

  return (
    <main>
      <div className={listBox + ' roboto-regular'}>
        <h1> Projects </h1>

        <p>
          Here is a list of projects i have been working on, for a full view of my GitHub please visit{' '}
        </p>

        <a href={githubUserLink} target="_blank" rel="noopener noreferrer">
          My GitHub
        </a>

        {/* Search and Filter Controls */}
        <div className={styles.controlsContainer}>
          {/* Search Bar */}
          <div className={styles.searchContainer}>
            <FaSearch className={styles.searchIcon} />
            <input
              type="text"
              placeholder="Search projects by name, description, or topic..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className={styles.searchInput}
            />
          </div>

          {/* School Projects Filter */}
          <div className={styles.filterContainer}>
            <label className={styles.filterLabel}>School Projects:</label>
            <div className={styles.filterButtons}>
              <button
                className={`${styles.filterButton} ${showSchoolProjects === 'all' ? styles.active : ''}`}
                onClick={() => setShowSchoolProjects('all')}
              >
                All
              </button>
              <button
                className={`${styles.filterButton} ${showSchoolProjects === 'yes' ? styles.active : ''}`}
                onClick={() => setShowSchoolProjects('yes')}
              >
                <FaGraduationCap className={styles.buttonIcon} /> School
              </button>
              <button
                className={`${styles.filterButton} ${showSchoolProjects === 'no' ? styles.active : ''}`}
                onClick={() => setShowSchoolProjects('no')}
              >
                <FaBriefcase className={styles.buttonIcon} /> Personal
              </button>
            </div>
          </div>
        </div>

        {/* Results Count */}
        <p className={styles.resultsCount}>
          Showing {filteredData?.length || 0} of {data?.length || 0} projects
        </p>

        <List>
          {filteredData?.map((repo) => (
            <ProjectListItem
              title={repo.name}
              description={repo.description}
              link={githubUserLink + repo.name}
              topics={repo.topics}
              created={repo.created_at}
              lastUpdated={repo.updated_at}
              key={repo.id}
            />
          ))}
        </List>
      </div>
    </main>
  );
}
