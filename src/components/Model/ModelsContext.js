import React, { ReactNode, useRef } from 'react'

export const CarModel = {
  modelName: "",
  overlayNode: ReactNode,
  sectionRef: React.Ref
}

const ModelsContext = {
  wrapperRef : React.Ref,
  registeredModels: CarModel,
  registerModel : (model = CarModel) => {},
  unregisterModel : (modelName) => {},
  getModelByName : (modelName) => CarModel | null
}

// Export with default values
export default React.createContext(ModelsContext)
