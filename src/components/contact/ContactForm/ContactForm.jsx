import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

import Recaptcha from 'react-recaptcha';

import { FaEnvelope } from '@react-icons/all-files/fa/FaEnvelope';

import * as classes from './ContactForm.module.css';

const NAME_PLACEHOLDER = 'Your name...';
const EMAIL_PLACEHOLDER = 'Your email...';
const MESSAGE_PLACEHOLDER = 'Write your message here...';

function ContactForm() {
    const [state, handleSubmit] = useForm('xpzbewbo');

    const toggleActiveField = (e, action) => {
        if (action === 'add') {
            e.target.parentElement.classList.add(classes.activeField);
        } else if (action === 'remove') {
            e.target.parentElement.classList.remove(classes.activeField);
        }
    };

    if (state.succeeded) {
        return (
            <>
                <hr />
                <p>Thank you for your message</p>
                <p>I will get back to you as soon as possible :)</p>
            </>
        );
    }

    return (
        <>
            <form onSubmit={handleSubmit} className={classes.contactForm}>
                <fieldset className={classes.formField}>
                    <legend>Name: </legend>
                    <input
                        type="text"
                        name="name"
                        placeholder={NAME_PLACEHOLDER}
                        onFocus={(e) => {
                            toggleActiveField(e, 'add');
                        }}
                        onBlur={(e) => {
                            toggleActiveField(e, 'remove');
                        }}
                        required
                    ></input>
                </fieldset>
                <fieldset className={classes.formField}>
                    <legend>Email:</legend>
                    <input
                        type="email"
                        name="email"
                        placeholder={EMAIL_PLACEHOLDER}
                        onFocus={(e) => {
                            toggleActiveField(e, 'add');
                        }}
                        onBlur={(e) => {
                            toggleActiveField(e, 'remove');
                        }}
                        required
                    />
                </fieldset>
                {
                    <ValidationError
                        prefix="Email"
                        field="email"
                        errors={state.errors}
                    />
                }
                <fieldset className={classes.formField}>
                    <legend>Message:</legend>
                    <input
                        type="hidden"
                        name="subject"
                        value="Personal website - Contact"
                    />
                    <textarea
                        name="message"
                        placeholder={MESSAGE_PLACEHOLDER}
                        onFocus={(e) => {
                            toggleActiveField(e, 'add');
                        }}
                        onBlur={(e) => {
                            toggleActiveField(e, 'remove');
                        }}
                        required
                    />
                </fieldset>
                {
                    <ValidationError
                        prefix="Message"
                        field="message"
                        errors={state.errors}
                    />
                }
                <Recaptcha
                    sitekey="6LffqJMgAAAAAF4RsbqCApkUjXeSwpXZW_Kf3DbI"
                    size="invisible"
                />
                <div style={{ fontSize: 'var(--font-sxx)' }}>
                    This site is protected by reCAPTCHA and the Google&nbsp;
                    <a href="https://policies.google.com/privacy">
                        Privacy Policy
                    </a>
                    &nbsp; and&nbsp;
                    <a href="https://policies.google.com/terms">
                        Terms of Service
                    </a>
                    &nbsp; apply.
                </div>
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
        </>
    );
}

export default ContactForm;
