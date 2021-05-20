import React from "react";
import { Grid, Card, CardActionArea } from "@material-ui/core";
import { motion } from "framer-motion";
import styles from "./blog.module.scss";

const blogsData = [
  {
    title: "UI Interactions of the week",
    type: "Express, Handlebars",
  },
  {
    title: "Top JS Libraries",
    type: "Programming,Javascript",
  },
  {
    title: "What is Node.js?",
    type: "Programming,Node Js",
  },
  {
    title: "Best Plugins for Figma",
    type: "Figma, UI Weekly",
  },
];

export default function Blog() {
  return (
    <Grid
      component={motion.div}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        when: "beforeChildren",
        staggerChildren: 0.4,
        duration: 1,
      }}
      className={styles.container}
      container
      spacing={3}
      justify='space-between'
    >
      <Grid item xs={12} sm={12} md={12}>
        <span className={styles.heading}>Blogs</span>
      </Grid>
      {blogsData.map((blog) => (
        <Grid
          key={blog.type}
          item
          xs={12}
          sm={12}
          md={12}
          style={{ borderBottom: "1px solid #E0E0E0" }}
        >
          <Card className={styles.card} elevation={0}>
            <CardActionArea>
              <span>{blog.title}</span>
              <span style={{ display: "flex", gap: ".5rem" }}>
                12 Feb 2021 |<p style={{ color: "#8695A4" }}>{blog.type}</p>
              </span>
              <span>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Expedita ipsam totam voluptatibus aliquam blanditiis officiis
                nesciunt non, optio hic consequatur aperiam ab aspernatur
                laborum ducimus repellendus quibusdam et sequi? Deserunt!
              </span>
            </CardActionArea>
          </Card>
        </Grid>
      ))}
    </Grid>
  );
}
