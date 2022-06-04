import { GetStaticProps } from "next";
import { Orcamento } from "../containers/orcamento";

export default Orcamento;


export const getStaticProps: GetStaticProps = async () => {

  return{
    props:{},
    revalidate: 60 * 30
  }

}
