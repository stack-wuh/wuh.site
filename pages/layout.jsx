import styles from '@/styles/layout.module.css'

const layout = () => {
  return (<div className={styles.layout}>
      <div className={styles.header}>
        header
      </div>
      <main className={styles.container}>
        <div className={styles.main}>
          <div className={styles.nav}>
            <nav className={styles.menu}> menu-item </nav>
          </div>

          <div className={styles.body}>
            <div style={{ height: '200vh' }}>main</div>
          </div>
        </div>
      </main>
      <div className={styles.footer}>
        footer
      </div>
    </div>)
}

export default layout