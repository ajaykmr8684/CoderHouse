import React from 'react'
import Button from '../../../components/shared/Button/Button'

const StepName = ({onClick}) => {
  return (
    <div>StepName
      <Button onClick={onClick} text="Next"/>
    </div>
  )
}

export default StepName