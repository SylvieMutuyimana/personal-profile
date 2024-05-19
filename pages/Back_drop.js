import { useEffect } from 'react';

export const Back_drop =() => {
  useEffect(() => {
    const ROWS = 100;
    const COLS = 300;
    const NUM_PARTICLES = ROWS * COLS;
    const THICKNESS = Math.pow(80, 2);
    const SPACING = 3;
    const MARGIN = 100;
    const COLOR = 220;
    const DRAG = 0.95;
    const EASE = 0.25;

    let container, canvas, ctx, list;
    let mx = 0, my = 0, man = false, tog = true;
    let w, h;

    const particle = {
      vx: 0,
      vy: 0,
      x: 0,
      y: 0,
    };

    const init = () => {
      container = document.getElementById('container');
      canvas = document.createElement('canvas');

      ctx = canvas.getContext('2d');
      list = [];

      w = canvas.width = COLS * SPACING + MARGIN * 2;
      h = canvas.height = ROWS * SPACING + MARGIN * 2;

      container.style.marginLeft = Math.round(w * -0.5) + 'px';
      container.style.marginTop = Math.round(h * -0.5) + 'px';

      for (let i = 0; i < NUM_PARTICLES; i++) {
        let p = Object.create(particle);
        p.x = p.ox = MARGIN + SPACING * (i % COLS);
        p.y = p.oy = MARGIN + SPACING * Math.floor(i / COLS);
        list[i] = p;
      }

      container.addEventListener('mousemove', function (e) {
        const bounds = container.getBoundingClientRect();
        mx = e.clientX - bounds.left;
        my = e.clientY - bounds.top;
        man = true;
      });

      container.appendChild(canvas);
    };

    const step = () => {
      if (tog = !tog) {
        if (!man) {
          const t = +new Date() * 0.001;
          mx = w * 0.5 + (Math.cos(t * 2.1) * Math.cos(t * 0.9) * w * 0.45);
          my = h * 0.5 + (Math.sin(t * 3.2) * Math.tan(Math.sin(t * 0.8)) * h * 0.45);
        }

        for (let i = 0; i < NUM_PARTICLES; i++) {
          const p = list[i];
          const dx = mx - p.x, dy = my - p.y;
          const d = dx * dx + dy * dy;
          const f = -THICKNESS / d;

          if (d < THICKNESS) {
            const t = Math.atan2(dy, dx);
            p.vx += f * Math.cos(t);
            p.vy += f * Math.sin(t);
          }

          p.x += (p.vx *= DRAG) + (p.ox - p.x) * EASE;
          p.y += (p.vy *= DRAG) + (p.oy - p.y) * EASE;
        }
      } else {
        const a = ctx.createImageData(w, h);
        const b = a.data;

        for (let i = 0; i < NUM_PARTICLES; i++) {
          const p = list[i];
          const n = (~~p.x + (~~p.y * w)) * 4;
          b[n] = b[n + 1] = b[n + 2] = COLOR;
          b[n + 3] = 255;
        }

        ctx.putImageData(a, 0, 0);
      }

      requestAnimationFrame(step);
    };

    init();
    step();
  }, []);

  return (
      <span id="container">
      </span>
  );
}
