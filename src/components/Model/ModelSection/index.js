
import React, { useEffect, useRef } from 'react'
import useModel from '../useModal'
import { Container } from './styles'
const ModelSection = ({
  modelName,
  overlayNode,
  children,
  id,
  modelImgs,
  ...props
}) => {
  const { registerModel } = useModel(modelName)
  const ref = useRef(null)

  useEffect(() => {
    if (ref?.current) {
      registerModel({
        modelName,
        overlayNode,
        sectionRef: ref
      })
    }
  }, [children, modelImgs, modelName, overlayNode, registerModel])

  return (
    <Container ref={ref} {...props} id={`${id}`}>
      <img src={require(`../../../assets/images/${modelImgs}`).default} width="100%" height="100%" style={{objectFit:"cover"}}/>
      {children}
    </Container>
  )
}

export default ModelSection
