import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [
  {
    title: "Easy to Use",
    Svg: require("@site/static/img/16.svg").default,
    description: <>Scikit-LLM allows to create NLP pipelines in just a few lines of code.</>,
  },
  {
    title: "Familiar Syntax",
    Svg: require("@site/static/img/11.svg").default,
    description: (
      <>Scikit-LLM is built on top of scikit-learn and follows the same API.</>
    ),
  },
  {
    title: "Wide Variety of Tasks",
    Svg: require("@site/static/img/12.svg").default,
    description: (
      <>
        Scikit-LLM simplifies many NLP tasks such as Classification,
        Summarization, Clustering, etc.
      </>
    ),
  },
];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div className="text--center">
        <Svg className={styles.featureSvg} role="img" />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
