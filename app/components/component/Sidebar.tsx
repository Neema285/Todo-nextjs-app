import React from "react"
import styles from "../component/Style/sidebar.module.css"
import Link from 'next/link'
  
function Sidebar() {
  return (
    <div className="sidebar">
      <ul>
        <li>
          <Link href="Homepage">Home</Link>
        </li>
        {/* Add more links/buttons for other sections */}
      </ul>
    </div>
  );
}

export default Sidebar;