import styles from "./SubscriptionForm.module.css";

const SubscriptionForm = () => {
  return (
    <section className={styles.subscriptionSection}>
      <h4 className={styles.wantToKnow}>
        Want to know about our Qur’an Resources? Subscribe below!
      </h4>
      <div className={styles.subscriptionformdiv}>
        <input
          className={styles.subscriptionemailinput}
          placeholder="e.g., email@example.com"
          type="email"
        />
        <button className={styles.subscriptionbutton}>
          <div className={styles.join}>Join</div>
        </button>
      </div>
    </section>
  );
};

export default SubscriptionForm;
