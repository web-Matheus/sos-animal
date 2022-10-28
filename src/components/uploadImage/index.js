import React, {useState} from 'react'
import storage from '../../firebase'
const Index = () => {
    const [image, setImage] = useState("");
  return (
    <div>
        <input type="file"/>
    </div>
  )
}

export default Index;