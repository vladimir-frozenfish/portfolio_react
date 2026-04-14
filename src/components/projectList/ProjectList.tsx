import type { ProjectDataType } from '../../types/projectListTypes';
import styles from './ProjectList.module.css'

interface ProjectListProps {
  projectData: ProjectDataType[];
}

export default function ProjectList({ projectData }: ProjectListProps) {
  return (
      <div className={styles.project_list}>
        {projectData.map((project, index) => {return <img className={styles.project_list_img} key={index} src={project.img}></img>})}
      </div>
  )
}