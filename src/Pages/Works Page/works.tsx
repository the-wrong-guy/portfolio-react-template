import React from "react";
import { Grid } from "@material-ui/core";
import { motion } from "framer-motion";
import WorksCard from "../../utils/Works Card/card";
import styles from "../Blog Page/blog.module.scss";

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
  {
    heading: "Components",
    type: "Components, Design",
    img:
      "https://s3-alpha-sig.figma.com/img/c493/dd85/ae266af13b0a7129c8191f3efbfe12b5?Expires=1622419200&Signature=gGZ1w3~HW67NgE4mqxS3g~Sxr4YxZYXqdnSrN54HwjItVkJ4GyGGdUiw8EFTtFbyvQQ-VzP5vkDLHCxYGGBb3TqWNlCMHoh6D2SQcST~j0G4jCGh5dA0EFRuW2sbn1dK2tlMv~ggsgMFZ6VxPTUdn7C0hd6WkxSWFABlLRMnWmGJnmg5~bOl-sA8Y6IWXjKz83WuqNkxkn6uIz2gpK~3eDGIYH2cP6WWWPk9s5JzEkyuDwfjs9hU~jKCP7BzzlSsl0qJnirQoFcYfR-r~gO4ggyTUxVVI6mlr4WlehEjtTSanwYguNpjXnhK1fHCMRByB3u6rl9nFw7o8-NvXcqs~w__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA",
  },
];

export default function Work() {
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
      {featureWorksData.map((work) => (
        <Grid
          key={work.type}
          item
          xs={12}
          sm={12}
          md={12}
          style={{ borderBottom: "1px solid #E0E0E0" }}
        >
          <WorksCard heading={work.heading} img={work.img} type={work.type} />
        </Grid>
      ))}
    </Grid>
  );
}
