import React from "react";

const EmailForm = () => {
    const onSubmit = event => {
        event.preventDefault();
    };

    return (
        <form onSubmit={onSubmit} className="email_registration">
            <label htmlFor="email">Get Register for this event</label>
            <div className="input_wrapper">
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Please enter your email"
                />

                <input type="submit" value="Submit" />
            </div>
        </form>
    );
};

export default EmailForm;
