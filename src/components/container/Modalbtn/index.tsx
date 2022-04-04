import React, { useState } from "react";
import { Button, Input, Modal } from 'antd';
import './style.css'
import { useDispatch } from "react-redux";

const ModalBtn = () => {
    const [source, setSource] = useState<string>('')
    const [name, setName] = useState<string>('')
    const [isModalVisible, setIsModalVisible] = useState<boolean>(false);

    //const dispatch = useDispatch();

    //Add
    const onAdd = () => {
        // dispatch({ type: 'ADD_PICTURE', data: { source: source, name: name } })
        setIsModalVisible(false)
    }


    const handleOpenModal = () => {
        setIsModalVisible(true)
    }

    const handleCancel = () => {
        setIsModalVisible(false)
    }

    return <div>
        <div>
            <div className="btn-add">
                <Button className="btn-modal" type="primary" onClick={handleOpenModal}>
                    Add New Picture
                </Button>
            </div>
            <Modal title="Add New Product" visible={isModalVisible} footer={null} onCancel={handleCancel}>
                <div className="input-text">
                    <Input onChange={(e) => setSource(e.target.value)} placeholder="Picture source" type="text" className="ant-input" />
                </div>
                <div className="input-text">
                    <Input onChange={(e) => setName(e.target.value)} placeholder="Picture Name" type="text" className="ant-input" />
                </div>
                <div className="div-button">
                    <Button onClick={onAdd} className="btn-modal" type="primary">
                        Add New Product
                    </Button>
                </div>
            </Modal>
        </div>
    </div >
};

export default ModalBtn;