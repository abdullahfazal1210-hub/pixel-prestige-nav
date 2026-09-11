import { useEffect } from "react";
import Lenis from "lenis";

export function useSmoothScroll() {
  useEffect(() => {
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    let lenis: Lenis | undefined;

    const updateScrolling = () => {
      lenis?.destroy();
      lenis = undefined;

      if (!reducedMotion.matches) {
        lenis = new Lenis({
          autoRaf: true,
          smoothWheel: true,
          lerp: 0.1,
          anchors: true,
          allowNestedScroll: true,
        });
      }
    };

    updateScrolling();
    reducedMotion.addEventListener("change", updateScrolling);

    return () => {
      reducedMotion.removeEventListener("change", updateScrolling);
      lenis?.destroy();
    };
  }, []);
}
