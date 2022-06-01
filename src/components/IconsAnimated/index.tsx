import React, { useState,useEffect } from 'react'
import Lottie from 'react-lottie';
import loading from '../../../public/LottieAnims/loading.json'
import formulario from '../../../public/LottieAnims/formulario.json'
import certificado from '../../../public/LottieAnims/certificado.json'

export default function Loading({
  width = '30%' || 30,
  height = '30%' || 30,
  texto = '',
  imagem = 'loading',
  loop = true,
  marginTop = 0,
  marginBottom = 0 ,
  marginRight = 0 ,
  marginLeft = 0 ,
}) {

  const [animationState, setAnimationState] = useState({
    isStopped: false, isPaused: false
  })

  const imageIcon = () => {
    switch (imagem) {
      case 'loading':
        return loading
      case 'formulario':
        return formulario
      case 'certificado':
        return certificado
      default: return loading
    }
  }

  const defaultOptions = {
    loop: loop,
    autoplay: true,
    animationData: imageIcon(),
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
  };

  return (
    <div style={{
      display: 'flex',
      width: '100%',
      height: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'column',
      marginTop: marginTop,
      marginBottom: marginBottom,
      marginLeft: marginLeft,
      marginRight: marginRight
      }}>
      <Lottie options={defaultOptions}
        height={height}
        width={width}
        isStopped={animationState.isStopped}
        isPaused={animationState.isPaused}
        />
        {texto !== '' && <span>{texto}</span>}

    </div>
  )

}
