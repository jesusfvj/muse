import { Typography } from "../Components";
import { Layout } from "../Components/Layout";

export const Profile = () => {
  return (
    <Layout>
      <div className="w-screen h-[8rem] bg-[#fef3c6]">
        <Typography text={sectionTitle} type="p2" color="white" family="lato" styles="mb-[0.2rem]"/>
        <Typography text={sectionTitle} type="p2" color="white" family="lato" styles="mb-[0.2rem]"/>
        <img/>
      </div>
    </Layout>
  );
};
