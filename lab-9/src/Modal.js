import React, { useContext } from "react"
import { FaTimes } from "react-icons/fa"
import { AppContext } from "./context"

const Modal = () => {
  const { setModalOpen, modalOpen } = useContext(AppContext)

  return (
    modalOpen && (
      <div className="modal-overlay show-modal">
        <div className="modal-container">
          <h3>Modal content</h3>
          <button className="close-modal-btn" onClick={() => setModalOpen(false)}>
            <FaTimes />
          </button>
        </div>
      </div>
    )
  )
}

export default Modal
