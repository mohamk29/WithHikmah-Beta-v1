import styles from "./ContactForm.module.css";

const ContactForm = () => {
  return (
    <div className={styles.contactFormContent}>
      <div className={styles.contactTextDiv}>
        <h3 className={styles.contact}>Contact</h3>
        <p className={styles.londonOnCanada}>London, ON, Canada</p>
        <a
          className={styles.contactwithhikmahgmailcom}
          href="mailto:contactwithHikmah@gmail.com"
        >
          contactwithHikmah@gmail.com
        </a>
      </div>
      <div className={styles.contactFormDiv}>
        <input className={styles.nameinput} placeholder="Name" type="text" />
        <input className={styles.emailinput} placeholder="Email" type="email" />
        <input
          className={styles.emailinput}
          placeholder="Subject"
          type="text"
        />
        <textarea
          className={styles.messageinput}
          placeholder="Type your message here..."
        />
        <button className={styles.formSubmitButton}>
          <div className={styles.submit}>Submit</div>
        </button>
      </div>
    </div>
  );
};

export default ContactForm;
