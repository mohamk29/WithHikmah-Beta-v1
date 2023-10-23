import React from "react";
import Header from "../components/Header";
import SubscriptionForm from "../components/SubscriptionForm";
import Footer from "../components/Footer";
import styles from "./TafseerGuidesPage.module.css";

function TafseerGuidesPage() {
  return (
    <div className={styles.container}>
      <Header />

      <SubscriptionForm />
      <Footer />
    </div>
  );
}

export default TafseerGuidesPage;
