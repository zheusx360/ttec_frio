import styles from './footer.module.scss'

export default function Footer() {
  return (
    <div className={styles.footerContainer}>
      <div className={styles.textContent}>
        <p>TTEC FRIO - CÂMARAS FRIGORÍFICAS.</p>
        <p>Fale conosco pelo Whatsapp.</p>
        <span>
          <div className={styles.imagem}>
            <img src={"/images/whatsApp.png"} alt={'WhatsApp'} width={25} height={25}/>
          </div>
          11 94645-8365
        </span>
      </div>
          <p>&copy; TTEC FRIO Todos os direitos reservados.</p>
    </div>
  )
}
