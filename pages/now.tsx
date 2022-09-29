import { GetServerSideProps, NextPage } from "next";

type NowPageProps = {
  now: string;
};

const NowPage: NextPage<NowPageProps> = ({ now }) => {
  return (
    <div>
      <h1>Now</h1>
      <p>{now}</p>
    </div>
  );
};

export default NowPage;

export const getServerSideProps: GetServerSideProps<
  NowPageProps
> = async () => {
  const result = await fetch("http://localhost:3000/api/now").then(
    (res) => res.json() as Promise<{ now: string }>
  );

  return {
    props: {
      now: result.now,
    },
  };
};
