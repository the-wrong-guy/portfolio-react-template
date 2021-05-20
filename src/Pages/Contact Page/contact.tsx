import { useState } from "react";
import { Grid, Card, Button } from "@material-ui/core";
import { motion } from "framer-motion";
import styles from "./contact.module.scss";
import ContactSVG from "../../Images/Icons/undraw_contact_us_15o2.svg";
export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ when: "beforeChildren", staggerChildren: 0.4, duration: 1 }}
      className={styles.mainContainer}
    >
      <span
        style={{
          fontSize: "44px",
          fontWeight: 700,
          lineHeight: "60px",
          marginTop: "1.5rem",
        }}
      >
        Contact Me
      </span>
      <div style={{ display: "grid", placeItems: "center" }}>
        <img src={ContactSVG} className={styles.contactSVG} alt='contact me' />
        <Card elevation={3} className={styles.card}>
          <Grid container className={styles.gridContainer} spacing={2}>
            <Grid item xs={12} sm={12} md={12}>
              <input
                type='text'
                name='name'
                placeholder='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={styles.nameInput}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <input
                type='email'
                name='email'
                placeholder='Email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={styles.emailInput}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12}>
              <textarea
                rows={6}
                value={message}
                placeholder='Type your message here...'
                onChange={(e) => setMessage(e.target.value)}
                className={styles.messageInput}
              />
            </Grid>
            <Grid
              item
              xs={12}
              sm={12}
              md={12}
              style={{ display: "flex", justifyContent: "center" }}
            >
              <Button className={styles.sendBtn} variant='outlined'>
                Send
              </Button>
            </Grid>
          </Grid>
        </Card>
      </div>
    </motion.div>
  );
}
