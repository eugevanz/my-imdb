import { useStoreState, useStoreActions } from 'easy-peasy';

import Toast from 'react-bootstrap/Toast';

function Toastee() {
    const { toast } = useStoreState(state => ({
        toast: state.toast
    }));

    const { showToast } = useStoreActions(actions => ({
        showToast: actions.showToast
    }));

    return <Toast onClose={() => showToast(false)} show={toast} delay={3000} autohide>
        <Toast.Header>
            <strong className="mr-auto">React-IMDB</strong>
            <small>just now</small>
        </Toast.Header>
        <Toast.Body>Woohoo, you're reading this text in a Toast!</Toast.Body>
    </Toast>
}
export default Toastee;