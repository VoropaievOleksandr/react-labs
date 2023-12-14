import React, { useContext } from "react"
import { FaTimes } from "react-icons/fa"
import { AppContext } from "./context"
import { links, social } from "./data"
import logo from "./logo.svg"

const Sidebar = () => {
  const { sideBarOpen, setSideBarOpen } = useContext(AppContext)

  return (
    sideBarOpen && (
      <aside className={"sidebar show-sidebar"}>
        <div className="sidebar-header">
          <img src={logo} alt="logo" className="logo" />{" "}
          <button className="close-btn" onClick={() => setSideBarOpen(false)}>
            <FaTimes />
          </button>
        </div>
        <ul className="links">
          {links.map((link) => {
            const { id, url, text, icon } = link
            return (
              <li key={id}>
                <a href={url}>
                  {icon} {text}
                </a>
              </li>
            )
          })}
        </ul>
        <ul className="social-icons">
          {social.map((link) => {
            const { id, url, icon } = link
            return (
              <li key={id}>
                <a href={url}>{icon}</a>{" "}
              </li>
            )
          })}
        </ul>
      </aside>
    )
  )
}

export default Sidebar
