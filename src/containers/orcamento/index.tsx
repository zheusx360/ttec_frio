import React, { useState } from 'react'
import Image from 'next/image'
import Icon from '../../../public/images/IconIgluCircle.svg'
import style from './servicos.module.scss'
import Input from '../../components/input'
import { BsFileText } from 'react-icons/bs';
import { Button } from '../../components/buttons/animatedButton'
import dayjs from 'dayjs'
import IconsAnimated from '../../components/IconsAnimated'
import api from '../../utils/baseUrl'

export function Orcamento() {
  const [nome, setName] = useState('')
  const [fone, setFone] = useState('')
  const [email, setEmail] = useState('')
  const [text, setText] = useState('')
  const [loading, setLoading] = useState(false)
  const [sucesso, setSucesso] = useState(false)
  const [txtSend, setTxtSend] = useState('')

  let data = `Data: ${dayjs().format("DD/MM/YYYY")} Hora: ${dayjs().format('HH:MM')}`

  const verificaCampos = () => {
    if (!nome || fone.length < 13 || !email || !text) {
      alert(`Os seguintes campos devem ser verificados:

      ${!nome ? 'Nome' : ''}
      ${fone.length < 15 ? 'Telefone' : ''}
      ${!email ? "Email" : ''}
      ${!text ? 'Resumo' : ''}
      `)
      return
    } else {
      return true
    }
  }

  const Sucess = () =>{
    setSucesso(false)
    setName('')
    setEmail('')
    setFone('')
    setText('')
  }

  const sendEmail = () => {
    if (verificaCampos()) {
      setLoading(true)
      api.post('/ttecSend', {
          nome,
          fone,
          email,
          text,
          data
      }).then((response) => {
        setLoading(false)
        setTxtSend('Email enviado com sucesso! Aguarde nosso contato.')
        setSucesso(true)
      }).catch((error) => {
        setLoading(false)
        console.log(error)
        setTxtSend('Erro ao enviar o email!')
        setSucesso(true)
      })
      Sucess()
    }
  }

  return (
    <div className={style.container}>
      <div className={style.leftContent}>
        <div className={style.iconContent}>
          <Image src={Icon} width={145} height={145} alt="TTECFRIO" />
        </div>
        <span>SOLICITE UM ORÇAMENTO CONOSCO</span>
        <p>Preencha os dados do formulário e receba um super desconto em nossos serviços para sua casa ou empresa, com a TTEC FRIO você sempre ganha!</p>
      </div>
      <div className={style.rightContent}>
        {sucesso ?
          <div className={style.message}>
            <span>{txtSend}</span>
            <Button type={4} width={'60%'} text='OK' onClick={() => Sucess()} />
          </div>
          :
          <>
            {loading ?
              <IconsAnimated/>
              :
              <>
                <div className={style.icon}>
                  <IconsAnimated width={'100%'} height={'100%'} imagem='formulario' loop={false}/>
                </div>
                <span>PREENCHA OS DADOS PARA SOLICITAR SEU ORÇAMENTO</span>
                <div className={style.buttons}><Input  width={350} onChange={setName} /></div>
                <div className={style.buttons}><Input  type={'tel'} placeholder={'Digite seu telefone'} name={'Telefone'} width={350} onChange={setFone} /></div>
                <div className={style.buttons}><Input  placeholder={'Insira seu e-mail'} name={'Email'} width={350} onChange={setEmail} /></div>
                <div className={style.buttons}><Input  multiline height={130} placeholder={'Do que você precisa?.'} name={'Resumo'}  width={350} onChange={setText} /></div>
                <Button type={5} text={"SOLICITAR ORÇAMENTO"} onClick={sendEmail} />
              </>
            }
          </>
        }
      </div>
    </div>
  )
}
