import { MouseEvent } from 'react';
import { motion, useMotionTemplate, useMotionValue } from 'framer-motion';


const defaultTiltSettings = {
  max: 25,
  perspective: 1000,
  scale: 1.1,
  speed: 500,
  easing: 'cubic-bezier(.03,.98,.52,.98)',
};

export default function Demo() {

  let mouseX = useMotionValue(0);
  let mouseY = useMotionValue(0);
  let perspective = useMotionValue(1000);
  let rotateX = useMotionValue(0);
  let rotateY = useMotionValue(0);
  let scaleX = useMotionValue(1);
  let scaleY = useMotionValue(1);
  let scaleZ = useMotionValue(1);

  function handleMouseMove({ currentTarget, clientX, clientY }: MouseEvent) {
    const cardWidth = currentTarget.offsetWidth;
    const cardHeight = currentTarget.offsetHeight;
    const centerX = currentTarget.offsetLeft + cardWidth / 2;
    const centerY = currentTarget.offsetTop + cardHeight / 2;
    const X = clientX - centerX;
    const Y = clientY - centerY;

    const rotateXUncapped =
      (+1 * defaultTiltSettings.max * Y) / (cardHeight / 2);

    const rotateYUncapped =
      (-1 * defaultTiltSettings.max * X) / (cardWidth / 2);

    const rotate_X =
      rotateXUncapped < -defaultTiltSettings.max
        ? -defaultTiltSettings.max
        : rotateXUncapped > defaultTiltSettings.max
        ? defaultTiltSettings.max
        : rotateXUncapped;

    const rotate_Y =
      rotateYUncapped < -defaultTiltSettings.max
        ? -defaultTiltSettings.max
        : rotateYUncapped > defaultTiltSettings.max
        ? defaultTiltSettings.max
        : rotateYUncapped;

    perspective.set(defaultTiltSettings.perspective);
    rotateX.set(rotate_X);
    rotateY.set(rotate_Y);
    scaleX.set(defaultTiltSettings.scale);
    scaleY.set(defaultTiltSettings.scale);
    scaleZ.set(defaultTiltSettings.scale);

    let { left, top } = currentTarget.getBoundingClientRect();

    mouseX.set(clientX - left);
    mouseY.set(clientY - top);
  }

  return (
    <div className="flex justify-center item-center">
      <motion.div
        className="group relative max-w-md rounded-xl border border-white/10 bg-gray-900 px-8 py-16 shadow-2xl"
        onMouseMove={handleMouseMove}
        style={{
          transform: useMotionTemplate`
          perspective(${perspective}px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scaleX}, ${scaleY}, ${scaleZ})
          `,
        }}
      >
        <motion.div
          className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition duration-300 group-hover:opacity-100"
          style={{
            background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              rgba(14, 165, 233, 0.15),
              transparent 80%
            )
          `,
          }}
        />
        <div>
          <h3 className="text-base font-semibold leading-7 text-sky-500">
            Parallax
          </h3>
          <div className="mt-2 flex items-center gap-x-2">
            <span className="text-5xl font-bold tracking-tight text-white">
              Framer motion
            </span>
          </div>
          <p className="mt-6 text-base leading-7 text-gray-300">
            Lorem ipsum dolor sit amet consectetur adipisicing elit, facilis
            illum eum ullam nostrum atque quam.
          </p>
        </div>
      </motion.div>
    </div>
  );
}
