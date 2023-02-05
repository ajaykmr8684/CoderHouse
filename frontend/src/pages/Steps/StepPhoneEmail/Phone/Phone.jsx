import React from 'react'
import Card from '../../../../components/shared/Card/Card'
import Button from '../../../../components/shared/Button/Button'
import styles from "../StepPhoneEmail.module.css"
import TextInput from '../../../../components/shared/TextInput/TextInput'
import { useState } from 'react'
import { sendOtp } from '../../../../http'

const Phone = ({onNext}) => {
    const [phoneNumber, setPhoneNumber] = useState("")

    /**
     * This method invokes when onNext is clicked, it is made
     * for the reason that you only open OTP entering page if the OTP is properly generated and sent
     * to the client.
     */
    async function submit()
    {
      //Server request, get the data then only open OTP Page
      const res = await sendOtp({phone: phoneNumber});
      console.log(res);
      onNext();
    }


  return (
    <Card title="Enter your phone number" icon="phone">
    <TextInput value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)}/>
    <div>
      <div className={styles.actionButtonWrap}>
        <Button text="Next" onClick={submit} />
      </div>
      <p className={styles.bottomParagraph}>
        By entering your number, you are agreeing to our Service & Privacy Policy. Thanks!
      </p>
    </div>
    </Card>
  )
}

export default Phone