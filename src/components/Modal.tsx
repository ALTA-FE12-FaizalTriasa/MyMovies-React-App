import React, { Component } from 'react'

interface ModalProps{
    id: number
    handleOpen: boolean
    handleClose?: React.MouseEventHandler
    children?: React.ReactNode
}

export class Modal extends Component<ModalProps> {
    render() {
    
    const {id, handleOpen, handleClose, children} = this.props

    return (
        <>
            {handleOpen ? (
            <div
                id={""}
                onClick={handleClose}
            >
                <div>{children}</div>
            </div>
            ) : (
            <></>
            )}
        </>
    )
    }
}

export default Modal