import { GetStaticProps } from "next";
import { Servicos } from "../containers/servicos"

export default Servicos;


export const getStaticProps: GetStaticProps = async () => {

  return{
    props:{},
    revalidate: 60 * 30
  }

}
