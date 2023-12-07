import { useEffect, useState } from 'react'


const useVisibility = (elements:HTMLElement[], fnClose?: () => void) => {

  const [elementIsVisible, setELementIsVisible] = useState<boolean>(false);

  useEffect(() => {
    const checkClick = (e:MouseEvent) => {
      if(!elements) return;

      const clickedOutsideElement = elements.every((element) => {
        if(!element) return false;
        if(
          e.target !== element && 
          !element.contains(e.target as HTMLElement)
        ) {
          return true;
        }
        return false;
      });

      if(clickedOutsideElement){
        setELementIsVisible(false);
        if(fnClose) fnClose();
      }
    };

    document.addEventListener("click", checkClick);
    return () => {
      document.removeEventListener("click", checkClick);
    }
  },[elements, fnClose]);

  const closeElement = () => {
    setELementIsVisible(false);
  };

  const showElement = () => {
    setELementIsVisible(true);
  };

  return {elementIsVisible, closeElement, showElement};
}

export default useVisibility;