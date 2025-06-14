declare module 'react-material-ui-carousel' {
  import { ReactNode } from 'react';
  import { SxProps, Theme } from '@mui/material';

  export interface CarouselProps {
    animation?: 'fade' | 'slide';
    autoPlay?: boolean;
    interval?: number;
    indicators?: boolean;
    navButtonsAlwaysVisible?: boolean;
    navButtonsAlwaysInvisible?: boolean;
    cycleNavigation?: boolean;
    fullHeightHover?: boolean;
    swipe?: boolean;
    children?: ReactNode;
    className?: string;
    sx?: SxProps<Theme>;
    height?: string | number;
    index?: number;
    strictIndexing?: boolean;
    onChange?: (index: number) => void;
    next?: () => void;
    prev?: () => void;
  }

  const Carousel: React.FC<CarouselProps>;
  export default Carousel;
} 