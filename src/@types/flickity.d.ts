// flickity.d.ts  
import 'flickity';  

declare module 'flickity' {  
  interface Flickity {
    previousSlide: unknown; // You may specify a more specific type here based on your application
    nextSlide: unknown; // Same as above
    _createPrevNextCells(): void;
    setPrevNextCells(): void;
  }  
  
  interface FlickityStatic {  
    createMethods: string[];  
  }  
}