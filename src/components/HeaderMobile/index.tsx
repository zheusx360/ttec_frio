import React, { useState, useEffect } from 'react'
import styles from './styles.module.scss'
import Image from 'next/image'
import icon from '../../../public/images/imagesPng/IgluIcon.svg'
import texto from '../../../public/images/imagesPng/TitleLogo.svg'
import { NavbarAnimated } from '../navBarAnimated/navbar'
import { BsJustifyRight, BsXLg } from 'react-icons/bs';
import Router from "next/router"

export function HeaderMobile(){

  const [closeMenu, setcloseMenu] = useState(true)

  const [theme, setTheme] = useState(1)
  useEffect(()=>{
    const handleScroll = () =>{
      const show = window.scrollY > 100
      if(show){
        setTheme(2)
      }else{
        setTheme(1)
      }
    }
    document.addEventListener('scroll', handleScroll)
    return () => {
      document.removeEventListener('scroll',handleScroll)
    }
  }, [])

  useEffect(()=>{
    document.body.style.overflowY = !closeMenu ? 'hidden' : 'auto'
   },[closeMenu])

  return(
    <>
    <div className={styles.menuMobile} hidden={closeMenu}>
        <div onClick={()=> setcloseMenu(true)} className={styles.closeButton}>
          <BsXLg/>
        </div>
        <a>
        <NavbarAnimated closeVisible={setcloseMenu} marginLeft={40}/>
      </a>
    </div>
    <div className={`${theme === 2 ? styles.headerContainerB : styles.headerContainer}`} hidden={!closeMenu}>
      <div className={styles.content}>
        <div className={styles.icone}>
          <Image onClick={() => Router.push('/')} src={icon} width={60} height={55} alt="Icon"/>
        </div>
        <div className={styles.center}>
          <Image onClick={() => Router.push('/')} src={texto} width={140} height={58} alt="Icon"/>
        </div>
        <div className={styles.toggle} onClick={() => setcloseMenu(false)}>
            <BsJustifyRight/>
        </div>
      </div>
    </div>
    </>
  )

}
