import styles from './styles.module.scss'
import Link from 'next/link'

export function WhatsAppButton(){

  let url = 'https://api.whatsapp.com/send?phone=5511946458365&text=Ol%C3%A1!%20gostaria%20de%20informa%C3%A7%C3%B5es'

  return(
    <div className={styles.main}>
      {/* <button className={styles.container} onClick={()=> <Link href='www.uol.com.br'/>}/> */}
      <Link href={url}>{<a target='_blank'><div className={styles.container}></div></a>}</Link>
    </div>
  )
}
