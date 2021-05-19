import React from "react";
import { Button, Card, Grid, Typography } from "@material-ui/core";
import cx from "classnames";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import WorkCard from "../../utils/Works Card/card";
import styles from "./landing.module.scss";

const postsCardData = [
  { heading: "Making a design system from scratch", type: "Design, Pattern" },
  {
    heading: "Creating pixel perfect icons in Figma",
    type: "Figma, Icon Design",
  },
];

const featureWorksData = [
  {
    heading: "Designing Dashboards",
    type: "Dashboard",
    img:
      "https://s3-alpha-sig.figma.com/img/1c6b/bc0b/e719e9d93c02a87ba51308ebb0297cdf?Expires=1622419200&Signature=Yj1z-UiNbKbB5HygdobO~mL9Nog92l5Np4Ai4LxEnYJXXFgd6kMDK8JVamTjgSAwGA6-Y7qmwCudBrkDHvv5uHB0EYDAP2CZXDzsehSEHVBW42iDymu7zxY9orc8wvJ8RQnNspcUoBPK~FCPMcj0l6--yMZW9mB-MSFNvRFJu4JKsslK2JNu3NRrawQDNskVjl8cSH1bfsaP8dAVgsh6dTzo4jjpMHvGsre~cP7XMUW1TAKHJukjI8rcM6pl7VJqYJ8b7~ToN5LISllx~9ymon4P1lU0CfgMQQic1ktTxEK9Xvs-OS3OdpG4dcn5Z8PcbvZl-GX2dDG~jU9qN7lV9Q__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    heading: "Vibrant Portraits of 2020",
    type: "Illustration",
    img:
      "https://s3-alpha-sig.figma.com/img/44dc/7799/6f359e2db24fc4e08bfd61cf50427139?Expires=1622419200&Signature=cSYzMVwtSH8W6XZs5IdiakQX8QezVQLu1OKEhVn0UNgXdlTL928aIL6-zuBtXh2wWGFcpvIIR5ZvZdYUMtL4yACx3HHtP1nJ-Kwa2GzJAMWAqu9ta2D3fBTm6Ttu9fcAZkppHWKyNjE~51UpX78AqzjTsiak8geqF4KO9YYjqxeDDj~NO7YzWzMH2MyD~H4fx2t1xAIJZMbkUC0nI1pt6EyEvWezWsTtBWWoKrCznYBKNWUNBrlkZeW~PHaiGI~b7jzmdEhqH-rwybzuLtME-PhuZ72lJpsFislg7wppcbrYbBHYyniZe1~QUSgra8cTEpYrKefDUA1KQLNL48~MSQ__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
  {
    heading: "36 Days of Kanji type",
    type: "Typography",
    img:
      "https://s3-alpha-sig.figma.com/img/a511/7cdc/a561b38768fbe6667854fc00641b25fb?Expires=1622419200&Signature=OaGzC6KFwBFVzmoK2V6bfwdStbHmHB0hvhkZO8mEgULMWrTv8eTIzzVbq5rZc~2OCFSpMaQWgC70I-wt1QRk0Lkp6vAGqEonr8BXkQBU7TWjCv~4LXT2iFTWWoevoaks1fzgJoH-TLwcHKTJ3iF8fVaxjzL1srZupmC~uH2KoNYnh6b36jsbiMtoiD-jWqZV~8hKbQ5gabXR4dehzaiKU0Qrqkb8uJRR8CXR8J4CYc3WCMjFGT1~nFYRfRLqNdpAncfjD8ucwncfBhs6wf9CGWa2s~X0sILcoNjE6jxaPuFXUrSKv3ovAHhepOinxUEa~y19ulA7Rp4lu5bJeyiT-w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
];

export default function Landing() {
  const devImg =
    "https://images.pexels.com/photos/3211476/pexels-photo-3211476.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500";
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ when: "beforeChildren", staggerChildren: 0.4, duration: 1 }}
    >
      <section className={cx(styles.section, styles.intro_Section)}>
        <div className={styles.headerContainer}>
          <div className={styles.headerTextImg}>
            <div className={styles.devImg_BelowTablet}>
              <img src={devImg} alt='developer' />
            </div>
            <div className={styles.headerText}>
              <h4>
                Hi, I am John,
                <br /> Creative Technologist
              </h4>
              <p>
                Amet minim mollit non deserunt ullamco est sit aliqua dolor do
                amet sint. Velit officia consequat duis enim velit mollit.
                Exercitation veniam consequat sunt nostrud amet.
              </p>
            </div>
            <div className={styles.devImg_UptoTablet}>
              <img src={devImg} alt='developer' />
            </div>
          </div>
          <div>
            <Button
              className={styles.downloadBtn}
              variant='contained'
              color='default'
            >
              Download Resume
            </Button>
          </div>
        </div>
      </section>
      <section className={cx(styles.section, styles.recentPost_Section)}>
        <Grid
          container
          justify='space-between'
          style={{ margin: 0, width: "100%" }}
          spacing={3}
        >
          <Grid
            item
            xs={12}
            sm={12}
            md={12}
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant='h6'>Recent posts</Typography>
            <Typography>
              <Link
                style={{ color: "#00A8CC", textDecoration: "none" }}
                to='/blog'
              >
                View all
              </Link>
            </Typography>
          </Grid>
          <Grid item xs={12} sm={12} md={12}>
            <Grid container spacing={2}>
              {postsCardData.map((details) => (
                <Grid key={details.type} item xs={12} sm={12} md={6}>
                  <Card className={styles.postsCard} elevation={3}>
                    <span>{details.heading}</span>
                    <span>12 Feb 2020 | {details.type}</span>
                    <span>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                      Aliquam eum reiciendis sint! Officia fuga rem iure commodi
                      dolore maiores nobis!
                    </span>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </section>
      <section className={cx(styles.section, styles.featuredWork_Section)}>
        <Grid container spacing={4}>
          <Grid item xs={12} sm={12} md={12}>
            <Typography variant='h6' color='initial'>
              Feature Works
            </Typography>
          </Grid>
          {featureWorksData.map((work) => (
            <Grid
              key={work.type}
              item
              xs={12}
              sm={12}
              md={12}
              style={{ borderBottom: "1px solid #E0E0E0" }}
            >
              <WorkCard
                heading={work.heading}
                img={work.img}
                type={work.type}
              />
            </Grid>
          ))}
        </Grid>
      </section>
    </motion.div>
  );
}
