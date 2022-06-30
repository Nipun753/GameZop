import Head from "next/head";
import styles from "../styles/Home.module.css";
import Content from "./components/Content";
import Header from "./components/Header";
import LeftNavbar from "./components/LeftNavbar";
import News from "./Components/News";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Create dashboard</title>
				<meta name="description" content="Created by streamline" />
				
			</Head>
			<div className={styles.container}>
				<LeftNavbar />
				<Header />
				<Content />
    
			</div>
		</div>
	);
}