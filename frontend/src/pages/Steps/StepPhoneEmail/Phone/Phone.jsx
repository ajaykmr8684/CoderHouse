import React from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import styles from "../StepPhoneEmail.module.css"
import TextInput from '../../../../components/shared/TextInput/TextInput'
import { useState } from 'react'

const Phone = ({onNext}) => {
    const [phoneNumber, setPhoneNumber] = useState("")
  return (
    <Card title="Enter your phone number" icon="phone">
    <TextInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
    <div>
      <div className={styles.actionButtonWrap}>
        <Button text="Next" onClick={onNext} />
      </div>
      <p className={styles.bottomParagraph}>
        By entering your number, you are agreeing to our Service & Privacy Policy. Thanks!
      </p>
    </div>
    </Card>
  )
}

export default Phone