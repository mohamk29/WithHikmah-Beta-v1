import styles from "./SubscriptionForm.module.css";
import Button from "./Button";

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

        <Button
          label="Join"
          widthClass={styles.buttonWidth}
          heightClass={styles.buttonHeight}
          color="dark"
          className={styles.buttonInSubscriptionForm}
        />
      </div>
    </section>
  );
};

export default SubscriptionForm;
