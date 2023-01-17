import { Box, Button, Input, Typography } from "@mui/material";
import { useRouter } from "next/router";
import { useRef, useState } from "react";

const EmailForm = () => {
    const inputEmail = useRef();
    const router = useRouter();

    const [message, setMessage] = useState({ messageText: "", type: "" });

    const onSubmit = async event => {
        event.preventDefault();

        const emailValue = inputEmail.current.value;
        const eventId = router.query.id;
        const validRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

        if (!emailValue.match(validRegex)) {
            setMessage({
                messageText: "Please introduce correct email address",
                type: "error",
            });

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

            const data = await response.json();

            if (!response.ok) throw new Error(data.message);

            setMessage({ messageText: data.message, type: "success" });

            inputEmail.current.value = "";
        } catch (error) {
            console.log("Error: ", error);
            setMessage({
                messageText: error.message,
                type: "error",
            });
        }
    };

    return (
        <form
            onSubmit={onSubmit}
            style={{ display: "flex", flexDirection: "column", gap: 16 }}
        >
            <Box
                component="div"
                sx={{
                    display: "flex",
                    flexDirection: { xs: "column", md: "row" },
                    gap: 2,
                }}
            >
                <Input
                    name="email"
                    id="email"
                    placeholder="Please enter your email"
                    inputRef={inputEmail}
                    sx={{ flexGrow: 1 }}
                />

                <Button type="submit" variant="contained">
                    Submit
                </Button>
            </Box>

            <Typography
                component="span"
                color={message.type === "error" ? "red" : "green"}
            >
                {message.messageText}
            </Typography>
        </form>
    );
};

export default EmailForm;
