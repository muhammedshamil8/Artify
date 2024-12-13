import { useIsomorphicLayoutEffect, animate, useInView } from "motion/react";
import { useRef } from "react";

const AnimatedCounter = ({ from, to, animationOptions }) => {

    const ref = useRef(null);
    const inView = useInView(ref, { once: true });
    useIsomorphicLayoutEffect(() => {
        const element = ref.current;

        if (!element) {
            return;
        }
        // if (!inView) {
        //     return;
        // }

        element.textContent = String(from);

        const controls = animate(
            from,
            to,
            {
                duration: 3,
                ease: "easeInOut",
                ...animationOptions,
                onUpdate(value) {
                    // console.log(value);
                    element.textContent = Number(value.toFixed(0));
                }
            }
        )
        return () => controls.stop();
    }, [ref, from, to, animationOptions]);

    return <span ref={ref} />;
};

export default AnimatedCounter;