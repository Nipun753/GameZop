import React from "react";
import styles from "../../styles/Home.module.css";

function Header() {
	return (
		<div className={styles.headcontainer}>
			<div className={styles.headwrapper}>
				<div className={styles.title}>
					<h2>
						Hello, <span>Jenny</span>
					</h2>
					<p>welcome to the board.</p>
				</div>
				
			</div>
		</div>
	);
}

export default Header;