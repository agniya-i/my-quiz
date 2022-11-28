import React from 'react';
import { useSelector } from 'react-redux';

import CreateInstanceModal from '../CreateInstanceModal/CreateInstanceMoldal';

const MODAL_COMPONENTS = {

    'CREATE_INSTANCE': CreateInstanceModal
}

const ModalRoot = () => {

    const modalType = useSelector(state => state.modal.modalType);
    const modalProps = useSelector(state => state.modal.modalProps);

    const SpecificModal = MODAL_COMPONENTS[modalType];

    return (
        modalType ?
            <SpecificModal {...modalProps} /> : null
    )
}

export default ModalRoot;