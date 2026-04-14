import { useState } from 'react'
import ProjectList from '../projectList/ProjectList'
import Toolbar from '../toolbar/Toolbar'
import { projectData, categories } from "../../data/projectData"
import styles from './Portfolio.module.css'

export default function Portfolio() {
  const [ selected, setSelected ] = useState('All')

  return (
    <div className={styles.portfolio}>
      <Toolbar 
        categories={categories} 
        selected={selected}
        onSelectFilter={(filter) => setSelected(filter)}
      />
      <ProjectList projectData={projectData.filter(item => selected === 'All' || item.category === selected)} />
    </div>
  )
}