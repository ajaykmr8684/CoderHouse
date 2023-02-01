import React, { useState } from 'react'
import { StepOtp, StepPhoneEmail } from '../Steps'

const steps = {
    1: StepPhoneEmail,
    2: StepOtp
}
const Authenticate = () => {
    const [step, setStep] = useState(1);
    function onNext() {
        setStep(step + 1);
    }
    const Step = steps[step];

  return (
    <Step onNext={onNext}></Step>
  )
}

export default Authenticate