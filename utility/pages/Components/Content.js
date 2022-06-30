import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import News from "./News";
import TopUser from "./TopUser";
import User from "./User";


//data for bar chart


function Content() {
	const [show,setShow] =useState(false)
    function handleChange(){
        setShow(false)
    }
    function handleChange2(){
        setShow(true)
    }  

	return (
		<div className={styles.contentcontainer}>
			<div className={styles.contentwrapper}>
				<div className={styles.tabs}>
					<div className={styles.categories}>
					<button style={{width:"70px"}} onClick={handleChange}>News</button>
					</div>
				</div>
				<div className={styles.tabs}>
					<div className={styles.categories}>
					<button style={{width:"70px"}} className="button" onClick={handleChange2}>Users</button>
					</div>
				</div>
				<div className={styles.tabs}>
					<div className={styles.categories}>
					<button style={{width:"80px"}} className="button" onClick={handleChange2}>Top Users</button>
					</div>
				</div>
				
			</div>
			{/* chart started  */}
			{show?<User/>: <News/>}
			<TopUser/>
		</div>
	);
}

export default Content;