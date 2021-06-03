import React from "react";
import styles from '../Navigation/navigation.module.css'

const listItems = [
  { name: 'Home', id: 1 },
  { name: 'Products', id: 2 },
  { name: 'Contact', id: 3 }
]

export default function Navigation() {
  return (
    <div>
      <nav className={styles.navBox}>
        {/* <img className={styles.ToDoIcon} src={'https://www.svgrepo.com/show/11307/task-list.svg'} /> */}
        <h1 className={styles.navTittle}>To Do List</h1>
        <ul className={styles.listBox}>
          {listItems.map((item) => {
            return (
              <li key={item.id}>{item.name}</li>
            )
          })}
        </ul>
      </nav>
    </div>
  );
}
