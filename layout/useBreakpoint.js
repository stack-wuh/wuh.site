import { useMediaQuery } from 'react-responsive'

const useBreakPOint = () => {

  const isMobileSmall = useMediaQuery({ query: '(max-width: 325px)' });
  const isMobileMid = useMediaQuery({ query: '(max-width: 375px)' });
  const isMobileFloor = useMediaQuery({ query: '(max-width: 425px)' });

  const isTabletFloor = useMediaQuery({ query: '(max-width: 426px)' });
  const isTabletMid = useMediaQuery({ query: '(max-width: 768px)' });
  const isTabletCeil = useMediaQuery({ query: '(max-width: 1024px)' });

  const isLaptopFloor = useMediaQuery({ query: '(max-width: 1025px)' });
  const isLaptopCeil = useMediaQuery({ query: '(max-width: 1440px)' });

  const isXHDFloor = useMediaQuery({ query: '(max-width: 1441px)' });
  const isXHDCeil = useMediaQuery({ query: '(max-width: 4096px)' });

  
  return {
    isMobileSmall,
    isMobileMid,
    isMobileFloor,
    isTabletFloor,
    isTabletMid,
    isTabletCeil,
    isLaptopFloor,
    isLaptopCeil,
    isXHDFloor,
    isXHDCeil
  }
}

export default useBreakPOint