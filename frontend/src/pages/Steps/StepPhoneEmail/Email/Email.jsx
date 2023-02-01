import React from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import TextInput from '../../../../components/shared/TextInput/TextInput'
import { useState } from 'react'
import styles from "../StepPhoneEmail.module.css"

const Email = ({onNext}) => {
  const [email, setEmail] = useState("")
  return (
    <Card title="Enter your email address" icon="email-emoji">
    <TextInput value={email} onChange={(e) => setEmail(e.target.value)}/>
    <div>
      <div className={styles.actionButtonWrap}>
        <Button text="Next" onClick={onNext}/>
      </div>  
      <p className={styles.bottomParagraph}>
        By entering your email address, you are agreeing to our Service & Privacy Policy. Thanks!
      </p>
    </div>
    </Card>
  )
}

export default Email