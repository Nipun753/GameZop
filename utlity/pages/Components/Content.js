import React, { useState } from "react";
import styles from "../../styles/Home.module.css";
import Link from "next/link"
import News from "../News";
import User from "../User";
import TopUserPage from "./TopUserPage";







function Content() {
    const [showNews,setShowNews] =useState(true)
	const [showUser,setShowUser] =useState(false)

	const [showTopUser,setshowTopUser]=useState(false)
    function handleChange(){
		setShowUser(false);
		setShowNews(true);
		setshowTopUser(false);
    }
    function handleChange2(){
		setShowUser(true);
		setShowNews(false);
		setshowTopUser(false);
    }  
	function handleChange3(){
		setShowUser(false);
		setShowNews(false);
		setshowTopUser(true);
	}
	return (
        <>
       
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
                    <button style={{width:"100px"}} className="button" onClick={handleChange3}>Top Users</button>
					</div>
				</div>
				
			</div>
			{/* chart started  */}
			
		</div>
              {showNews?<News/>:""}	
			  {showUser?<User/>:""}	
			  {showTopUser?<TopUserPage/>:""}
        </>
	);
}

export default Content;