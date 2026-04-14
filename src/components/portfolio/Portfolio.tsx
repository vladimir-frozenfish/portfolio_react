import { Component } from 'react'
import ProjectList from '../projectList/ProjectList'
import Toolbar from '../toolbar/Toolbar'
import { projectData, categories } from "../../data/projectData"
import styles from './Portfolio.module.css'

export default class Portfolio extends Component {
  state = {
    selected: 'All',
  }

  handleSelectFilter = (filter: string) => {this.setState({ selected: filter })}

  render() {
    const { selected } = this.state

    const projectList = projectData.filter(item => selected === 'All' || item.category === selected)

    return (
      <div className={styles.portfolio}>
        <Toolbar
          categories={categories}
          selected={selected}
          onSelectFilter={this.handleSelectFilter}
        />
        <ProjectList projectData={projectList} />
      </div>
    )
  }
}