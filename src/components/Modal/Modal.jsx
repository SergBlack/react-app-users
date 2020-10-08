import React from 'react';
import PropTypes from 'prop-types';
import './Modal.scss';
import Button from '../Button/Button';

const Modal = ({ isOpen, children, onDelete, onSave, onClose }) => {
  return (
    <>
      {
        isOpen && (
          <div className="modal_overlay">
            <div className="modal_window">
              <div className="modal_header">
                <button className="modal_closeBtn" onClick={onClose}/>
              </div>
              <div className="modal_body">
                {children}
              </div>
              <div className="modal_footer">
                <Button onClick={onDelete}>Удалить</Button>
                <Button onClick={onSave}>Сохранить</Button>
              </div>
            </div>
          </div>
        )
      }
    </>
  );
};

Modal.propTypes = {
  isOpen: PropTypes.bool,
  children: PropTypes.node,
  onDelete: PropTypes.func,
  onSave: PropTypes.func,
  onClose: PropTypes.func,
};

Modal.defaultProps = {
  isOpen: false,
  children: null,
};

export default Modal;
