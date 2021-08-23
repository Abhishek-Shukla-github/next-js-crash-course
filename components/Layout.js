import { Navbar } from './Navbar';
import { Header } from './Header';
import styles from "../styles/Home.module.css";
const Layout = ({ children }) => {
    return (
        <>
            <Navbar />
            <Header />
            <div className={styles.container}>
                <main className={styles.main}>
                    {children}
                </main>
            </div>
        </>
    )
}

export default Layout;
