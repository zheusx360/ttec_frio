import styles  from "./navbar.module.scss"
import Link from "next/link"
import Router from "next/router"


export function NavbarAnimated({marginLeft = 5, closeVisible}){

  const Navigation = (url) => {
    setTimeout(() => {
      closeVisible(true);
      Router.push(url)
    }, 500);
  }

  return(
    <>
    <div style={{marginLeft: marginLeft}}>
      <ul className={styles.ul}>
	       <li className={styles.li} onClick={()=> Navigation('./')}>Home</li>
	       <li className={styles.li} onClick={()=> Navigation('./orcamento')}>Orçamento</li>
	       <li className={styles.li} onClick={()=> Navigation('./servicos')}>Serviços</li>
	       {/* <li className={styles.li} onClick={()=> Navigation('./quemsomos')}>Quem somos</li> */}
      </ul>
    </div>

</>
  )

}
