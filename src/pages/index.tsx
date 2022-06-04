import { GetStaticProps } from "next";
import { Home } from "../containers/home";

export default Home;


export const getStaticProps: GetStaticProps = async () => {

  return{
    props:{},
    revalidate: 60 * 30
  }

}
