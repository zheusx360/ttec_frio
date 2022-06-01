import React, { useState } from 'react'
import styles from './input.module.scss'
import { MaskTel } from './maskTel';

export default function Input({
  placeholder = 'Digite seu nome.',
  name = 'Nome',
  width = 250 || '0',
  multiline = false,
  height = multiline ? 100 || '0' : 51 || '0',
  marginTop = 0 || '0',
  maxLength = multiline ? 200 : 30,
  marginBottom = 0 || '0',
  marginRight = 0 || '0',
  marginLeft = 0 || '0',
  type = 'text',
  onChange
}) {
  const [value, setValue] = useState('');

  const setValueInput = (arg) => {
    if (type === 'tel') {
      const tel = MaskTel(arg)
      setValue(tel)
      onChange(tel)
    } else {
      setValue(arg)
      onChange(arg)
    }
  }

  return (
    <div style={{ width: width, height: height, marginTop: marginTop, marginBottom: marginBottom, marginLeft: marginLeft, marginRight: marginRight }} className={styles.inputContainer}>
      {!multiline ?
        <input
          type='text'
          id='username'
          maxLength={maxLength}
          autoComplete='off'
          placeholder={placeholder}
          className={styles.textInput}
          value={value}
          onChange={e => setValueInput(e.target.value)}
        >
        </input>
        :
        <textarea
          style={{resize: 'none'}}
          maxLength={maxLength}
          id='username'
          autoComplete='off'
          placeholder={placeholder}
          className={styles.textInput}
          value={value}
          onChange={e => setValueInput(e.target.value)}
        >
        </textarea>
      }
      <label className={styles.label}>{name}</label>
    </div>
  )
}
