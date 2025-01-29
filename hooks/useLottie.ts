"use client"
import { useEffect, type RefObject } from "react";


const useLottie = (containerRef: RefObject<HTMLElement>, animationPath: string, loop : boolean = true) => {
  useEffect(() => {
    let anim: any

    const loadAnimation = async () => {
      const lottie = (await import("lottie-web")).default
      if (containerRef.current) {
        anim = lottie.loadAnimation({
          container: containerRef.current,
          renderer: "svg",
          loop: loop,
          autoplay: true,
          path: animationPath,
        })
      }
    }

    loadAnimation()

    return () => {
      if (anim) {
        anim.destroy()
      }
    }
  }, [containerRef, animationPath])
}

export default useLottie

