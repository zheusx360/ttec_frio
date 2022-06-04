import { GetStaticProps } from 'next';
import { QuemSomos } from '../containers/quemSomos'

export default QuemSomos;

export const getStaticProps: GetStaticProps = async () => {

  return{
    props:{},
    revalidate: 60 * 30
  }

}
