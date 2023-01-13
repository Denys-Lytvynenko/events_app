import { Button, Input } from "@mui/material";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const EmailForm = () => {
    const inputEmail = useRef();
    const router = useRouter();

    const [message, setMessage] = useState("");
    const onSubmit = async event => {
        event.preventDefault();

        const emailValue = inputEmail.current.value;
        const eventId = router.query.id;
        const validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (!emailValue.match(validRegex)) {
            setMessage("Please introduce correct email address");
            return;
        }

        try {
            const response = await fetch("/api/email-registration", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ email: emailValue, eventId }),
            });

            if (!response.ok) throw new Error(`ERROR: ${response.status}`);

            const data = await response.json();

            setMessage(data.message);
            inputEmail.current.value = "";
        } catch (error) {
            console.log("Error: ", error);
        }
    };

    return (
        <form onSubmit={onSubmit}>
            <label htmlFor="email">Get Register for this event</label>
            <div>
                <Input
                    name="email"
                    id="email"
                    placeholder="Please enter your email"
                    inputRef={inputEmail}
                />

                <Button type="submit" variant="contained">
                    Submit
                </Button>
            </div>
            <span>{message}</span>
        </form>
    );
};

export default EmailForm;
