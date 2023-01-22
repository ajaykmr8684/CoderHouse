import React from 'react'
import { useState } from 'react'
import { StepPhoneEmail, StepOtp } from '../Steps'

const steps = {
    1: StepPhoneEmail,
    2: StepOtp
}

const Login = () => {
    function onNext() {
        setStep(step + 1)
    }
    const [step, setStep] = useState(1)
    const Step = steps[step]
  return (
    <div>
        <Step onClick={onNext}/>
    </div>
  )
}

export default Login