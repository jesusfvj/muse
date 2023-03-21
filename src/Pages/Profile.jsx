import { Body, Header, SecondBody } from "../Components";
import { Layout } from "../Components/Layout";

export const Profile = () => {
  return (
    <Layout>
      <Header />
      <div className='w-screen min-h-screen bg-gradient-to-b from-[#4A4A4A] to-[#0A4148]'>
        <Body />
        <SecondBody />
      </div>
    </Layout >
  );
};