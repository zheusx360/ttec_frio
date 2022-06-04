import { Carossel } from '../../components'
import styles from './home.module.scss'
import { Button } from '../../components/buttons/animatedButton'
import Router from "next/router"

export function Home() {
  return (
    <div>
      <Carossel />
      <div className={styles.section}>

        <div className={styles.column}>
          <div className={styles.row}>
            <div className={styles.content}>
              <img src="/images/ImagesCarousel/satisfacao.jpg" alt="Satisfação" width={'100%'} height={'100%'} />
            </div>
            <div className={styles.contentText}>
              <span>Excelência no Atendimento</span><br />
              <p>A ttec frio tem como uma de suas maiores prioridades a excelência no atendimento e esse é um dos motivos para sua permanência por mais de duas décadas no mercado.</p>
              <p>&bull; Atendimento extremamente rápido</p>
              <p>&bull; Equipe especializada</p>
              <p>&bull; Preços abaixo do mercado</p>
              <p>&bull; Suporte técnico 24 horas</p>
            </div>
          </div>
          <div className={styles.row2}>
            <div className={styles.contentText}>
              <span>Equipe técnica especializada</span><br />
              <p>Contamos com uma equipe altamente especializada, estamos sempre buscando o que existe de melhor e mais técnologico no mercado, para oferecer sempre um serviço de ponta e atualizado.</p>
              <p>&bull; Equipe altamente treinada</p>
              <p>&bull; Técnologia de ponta</p>
              <p>&bull; Equipamentos modernos</p>
            </div>
            <div className={styles.content}>
              <img src="/images/ImagesCarousel/freezer6.jpg" alt="Técnologia" width={'100%'} height={'100%'} />
            </div>
          </div>
        </div>

      </div>
      <div className={styles.sectionContainer}>
        <div className={styles.controlContent}>
        <div className={styles.Lcontent}>
          <img src="/images/ImagesCarousel/qualidade.jpg" alt="Eficiencia" width={'100%'} height={'100%'}/>
        </div>
        <div className={styles.Rcontent}>
        <p>Qualidade e agilidade</p>
        <span>
            Estamos preparados com o que há de melhor no mercado para entregar o serviço desejado com muita qualidade e agilidade, garantindo assim a melhor entrega no menor prazo. solicite um orçamento e se surpreenda com o que temos para te oferecer.
            <div style={{marginTop:'3%'}}>
              <Button type={5} width={280} text={"SOLICITAR ORÇAMENTO"} onClick={() => Router.push('/orcamento')}/>
            </div>
        </span>
        </div>
      </div>
      </div>
    </div>
  )
}
