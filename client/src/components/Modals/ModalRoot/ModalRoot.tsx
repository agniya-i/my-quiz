import React from 'react';
import { useSelector } from 'react-redux';
import { useAppDispatch, useAppSelector } from '../../../hooks/useTypedSelector';

import CreateInstanceModal from '../CreateInstanceModal/CreateInstanceMoldal';

const MODAL_COMPONENTS = {
    'CREATE_INSTANCE': CreateInstanceModal
}

const ModalRoot = () => {
    const modalType = useAppSelector(state => state.modal.modalType);
    const modalProps = useAppSelector(state => state.modal.modalProps);

    console.log(modalType);

    const SpecificModal = MODAL_COMPONENTS[modalType];

    return (
        modalType ?
            <SpecificModal {...modalProps} /> : null
    )
}

export default ModalRoot;