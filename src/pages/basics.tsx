import type { NextPage } from "next";
import Head from "next/head";
import { BasicsView } from "../views";

const Basics: NextPage = (props) => {
  return (
    <div>
      <Head>
        <title>Koala</title>
        <meta
          name="description"
          content="mice"
        />
      </Head>
      <BasicsView />
    </div>
  );
};

export default Basics;
