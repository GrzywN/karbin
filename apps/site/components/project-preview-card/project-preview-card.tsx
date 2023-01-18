import styles from './project-preview-card.module.css';

/* eslint-disable-next-line */
export interface ProjectPreviewCardProps {}

export function ProjectPreviewCard(props: ProjectPreviewCardProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to ProjectPreviewCard!</h1>
    </div>
  );
}

export default ProjectPreviewCard;
