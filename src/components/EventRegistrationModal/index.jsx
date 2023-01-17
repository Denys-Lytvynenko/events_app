import EmailForm from "../EmailForm/EmailForm";
import ModalWrapper from "../ModalWrapper";

const EventRegistrationModal = props => (
    <ModalWrapper
        {...props}
        title="Event registration"
        description="Enter your email address to register on this event"
    >
        <EmailForm />
    </ModalWrapper>
);

export default EventRegistrationModal;
