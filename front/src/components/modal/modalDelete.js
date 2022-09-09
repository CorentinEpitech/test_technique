import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "../../style/component/modalDelete.css";

const ModalDelete = ({ isShowing, hide, title, ...props }) =>
  isShowing
    ? ReactDOM.createPortal(
        <>
          <div className="modal-overlay">
            <div className="modal-wrapper">
              <div className="modalDelete">
                <div className="modal-header">
                  <h4>{title}</h4>
                </div>
                <div className="modal-body">{props.children}</div>
              </div>
            </div>
          </div>
        </>,
        document.body
      )
    : null;

ModalDelete.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired
};

export default ModalDelete;
