import { useCallback, useEffect } from 'react';

function useClickOutside(ref, onClose) {

    const handleClose = useCallback((e) => {
        if (!ref.current?.contains(e.target)) {
            onClose();
        }
    }, [ref, onClose]);

    useEffect(() => {
        let timeout = setTimeout(() => {
            document.addEventListener('click', handleClose);
        }, 100)


        return () => {
            clearTimeout(timeout);
            document.removeEventListener('click', handleClose);
        };
    }, [handleClose]);
}

export default useClickOutside;