import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import { NavbarAnimated } from '../navBarAnimated/navbar'
import { BsJustifyRight, BsXLg, BsHouseDoorFill,BsWrench, BsFileEarmarkTextFill} from 'react-icons/bs';
import Router from "next/router"

export function HeaderMobile() {

  const [closeMenu, setcloseMenu] = useState(true)

  const [theme, setTheme] = useState(1)
  useEffect(() => {
    const handleScroll = () => {
      const show = window.scrollY > 100
      if (show) {
        setTheme(2)
      } else {
        setTheme(1)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflowY = !closeMenu ? 'hidden' : 'auto'
  }, [closeMenu])

  const Navigate = (screen) => {
    setcloseMenu(true)
    Router.push(screen)
  }

  return (
    <>
      <div className={styles.menuMobile} hidden={closeMenu}>
        <div className={styles.topContainer}>
          <div className={styles.topImageContainer}>
            <img onClick={() => Navigate('/')} src={'/TitleMobile.svg'} width={120} height={60} alt="Icon" />
          </div>
        </div>
        <div onClick={() => setcloseMenu(true)} className={styles.closeButton}>
          <BsXLg />
        </div>
        <div className={styles.menuNav}>
        <a onClick={()=> Navigate('/')}>
          <BsHouseDoorFill size={28} className={styles.iconNav}/>
          <span>HOME</span>
        </a>
        <a onClick={()=> Navigate('/orcamento')}>
          <BsFileEarmarkTextFill size={28} className={styles.iconNav}/>
          <span>ORÇAMENTO</span>
        </a>
        <a onClick={()=> Navigate('/servicos')}>
          <BsWrench size={28} className={styles.iconNav}/>
          <span>SERVIÇOS</span>
        </a>
        </div>
      </div>
      <div className={`${theme === 2 ? styles.headerContainerB : styles.headerContainer}`} hidden={!closeMenu}>
        <div className={styles.content}>
          <div className={styles.icone}>
            <img onClick={() => Router.push('/')} src={'/IgluIcon.svg'} width={60} height={55} alt="Icon" />
          </div>
          <div className={styles.center}>
            <img onClick={() => Router.push('/')} src={'/TitleMobile.svg'} width={140} height={58} alt="Icon" />
          </div>
          <div className={styles.toggle} onClick={() => setcloseMenu(false)}>
            <BsJustifyRight />
          </div>
        </div>
      </div>
    </>
  )

}
