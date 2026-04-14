import styles from './Toolbar.module.css'

interface ToolbarProps {
  categories: string[];
  selected: string;
  onSelectFilter: (filter: string) => void
}

export default function Toolbar({ categories, selected, onSelectFilter }: ToolbarProps) {
  return (
      <div className={styles.toolbar}>
        {categories.map((category, index) => {
          return (
            <div 
              className={selected === category ? styles.toolbar_category + ' ' + styles.toolbar_category_selected : styles.toolbar_category} 
              key={index}
              onClick={() => onSelectFilter(category)}
            >
                {category}
            </div>
          )
        })}
      </div>
  )
}