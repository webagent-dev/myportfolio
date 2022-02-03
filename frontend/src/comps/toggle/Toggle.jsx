import React from 'react';
import { FaTimes} from 'react-icons/fa'

function Toggle(props) {
  return <div>
     <FaTimes  size='30px' color='coral' onClick={() => props.getToggle(false)}/>
  </div>;
}

export default Toggle;
