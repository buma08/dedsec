import {useLocation} from 'react-router-dom';

function UseQuery() {
    const { search } = useLocation();
  
    return  new URLSearchParams(search);
  }
  export default UseQuery