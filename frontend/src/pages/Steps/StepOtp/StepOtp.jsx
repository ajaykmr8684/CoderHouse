import React from 'react'
import Button from '../../../components/shared/Button/Button'
import styles from "./StepOtp.module.css"
import Card from '../../../components/shared/Card/Card'
import TextInput from '../../../components/shared/TextInput/TextInput'
import { useState } from 'react'

const StepOtp = ({onClick}) => {
  const [otp, setOtp] = useState("")
  function onNext(){}
  return (
    <>
    <div className={styles.cardWrapper}>
    <Card title="Enter the code we just texted you" icon="lock-emoji">
    <TextInput value={otp} onChange={(e) => setOtp(e.target.value)}/>
      <div className={styles.actionButtonWrap}>
        <Button text="Next" onClick={onNext}/>
      </div>
      <p className={styles.bottomParagraph}>
        By entering your number, you are agreeing to our Service & Privacy Policy. Thanks!
      </p>
    </Card>
    </div>
</>
  )
}

export default StepOtp