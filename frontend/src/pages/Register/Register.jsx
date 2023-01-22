import React from 'react'
import styles from "./Register.module.css"
import { StepPhoneEmail, StepOtp, StepName, StepAvatar, StepUsername } from '../Steps'
import { useState } from 'react'
import Home from "../Home/Home"

const steps = {
    1: StepPhoneEmail,
    2: StepOtp,
    3: StepName,
    4: StepAvatar,
    5: StepUsername,
    6: Home
}



const Register = () => {
  const [step, setStep] = useState(1);
  const Step = steps[step]

  function onNext() {
    setStep(step + 1);
  }
  return (
    <div>
      <Step onClick={onNext}/>
    </div>
  )
}

export default Register