import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';

import * as classes from './ContactForm.module.css';

function ContactForm() {
    const [state, handleSubmit] = useForm('xpzbewbo');
    if (state.succeeded) {
        return <p>Thanks for joining!</p>;
    }
    return (
        <form onSubmit={handleSubmit} className={classes.contactForm}>
            <fieldset className={classes.formField}>
                <legend>Email:</legend>
                <input
                    id="email"
                    type="email"
                    name="email"
                    placeholder="Your email address..."
                    onFocus={(e) => {
                        e.target.parentElement.classList.add(
                            classes.activeField
                        );
                        e.target.placeholder = '';
                    }}
                    onBlur={(e) => {
                        e.target.parentElement.classList.remove(
                            classes.activeField
                        );
                        e.target.placeholder = 'Your email address...';
                    }}
                />
            </fieldset>
            <ValidationError
                prefix="Email"
                field="email"
                errors={state.errors}
            />
            <fieldset className={classes.formField}>
                <legend>Message:</legend>
                <textarea
                    id="message"
                    name="message"
                    placeholder="Write your message here..."
                    onFocus={(e) => {
                        e.target.parentElement.classList.add(
                            classes.activeField
                        );
                        e.target.placeholder = '';
                    }}
                    onBlur={(e) => {
                        e.target.parentElement.classList.remove(
                            classes.activeField
                        );
                        e.target.placeholder = 'Write your message here...';
                    }}
                />
            </fieldset>
            <ValidationError
                prefix="Message"
                field="message"
                errors={state.errors}
            />
            <button
                className={classes.submitButton}
                type="submit"
                disabled={state.submitting}
            >
                <FaEnvelope
                    style={{
                        position: 'relative',
                        top: '-1px',
                        marginRight: '5px',
                    }}
                />
                Submit
            </button>
        </form>
    );
}

export default ContactForm;
