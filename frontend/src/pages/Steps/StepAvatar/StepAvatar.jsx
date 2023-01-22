import React from 'react'
import Button from '../../../components/shared/Button/Button'

const StepAvatar = ({onClick}) => {
  return (
    <div>StepAvatar
      <Button onClick={onClick} text="Next"/>
    </div>
  )
}

export default StepAvatar