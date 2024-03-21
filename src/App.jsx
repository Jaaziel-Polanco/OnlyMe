import React, { useEffect, useRef } from 'react';
import Btn from './Btn';
import Jaaziel from './Jaaziel';
import { TweenLite, Circ } from 'gsap'; // Asegúrate de haber instalado GSAP

function App() {
  const canvasRef = useRef(null);
  let points = [];
  let width, height, target, animateHeader = true;

  useEffect(() => {
    init();
    function init() {
      initHeader();
      initAnimation();
      addListeners();
    }

    function initHeader() {
      width = window.innerWidth;
      height = window.innerHeight;
      target = { x: width / 2, y: height / 2 };

      const canvas = canvasRef.current;
      canvas.width = width;
      canvas.height = height;

      // Crear puntos
      for (let x = 0; x < width; x = x + width / 20) {
        for (let y = 0; y < height; y = y + height / 20) {
          const px = x + Math.random() * width / 20;
          const py = y + Math.random() * height / 20;
          const p = { x: px, originX: px, y: py, originY: py, circle: new Circle(px, py, 2 + Math.random() * 2, 'rgba(255,255,255,0.3)') };
          points.push(p);
        }
      }

      for (let point of points) {
        let closest = [];
        let p1 = point;
        for (let p2 of points) {
          if (!(p1 === p2)) {
            var placed = false;
            for (var j = 0; j < 5; j++) {
              if (!placed) {
                if (closest[j] === undefined) {
                  closest[j] = p2;
                  placed = true;
                }
              }
            }

            for (var j = 0; j < 5; j++) {
              if (!placed) {
                if (getDistance(p1, p2) < getDistance(p1, closest[j])) {
                  closest[j] = p2;
                  placed = true;
                }
              }
            }
          }
        }
        point.closest = closest;
      }

      // Asignar un círculo a cada punto
      for (let point of points) {
        point.circle = new Circle(point, 2 + Math.random() * 2, 'rgba(255,255,255,0.3)');
      }
    }

    function addListeners() {
      if (!('ontouchstart' in window)) {
        window.addEventListener('mousemove', mouseMove);
      }
      window.addEventListener('scroll', scrollCheck);
      window.addEventListener('resize', resize);
    }

    function mouseMove(e) {
      let posx = 0;
      let posy = 0;
      if (e.pageX || e.pageY) {
        posx = e.pageX;
        posy = e.pageY;
      } else if (e.clientX || e.clientY) {
        posx = e.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
        posy = e.clientY + document.body.scrollTop + document.documentElement.scrollTop;
      }
      target.x = posx;
      target.y = posy;
    }

    function scrollCheck() {
      if (document.body.scrollTop > height) animateHeader = false;
      else animateHeader = true;
    }

    function resize() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvasRef.current.width = width;
      canvasRef.current.height = height;
    }

    function initAnimation() {
      animate();
      for (let point of points) {
        shiftPoint(point);
      }
    }

    function animate() {
      if (animateHeader) {
        const ctx = canvasRef.current.getContext('2d');
        ctx.clearRect(0, 0, width, height);
        for (let point of points) {
          // Detectar puntos en rango
          if (Math.abs(getDistance(target, point)) < 4000) {
            point.active = 0.3;
            point.circle.active = 0.6;
          } else if (Math.abs(getDistance(target, point)) < 20000) {
            point.active = 0.1;
            point.circle.active = 0.3;
          } else if (Math.abs(getDistance(target, point)) < 40000) {
            point.active = 0.02;
            point.circle.active = 0.1;
          } else {
            point.active = 0;
            point.circle.active = 0;
          }

          drawLines(point);
          point.circle.draw();
        }
      }
      requestAnimationFrame(animate);
    }

    function shiftPoint(point) {
      TweenLite.to(point, 1 + 1 * Math.random(), {
        x: point.originX - 50 + Math.random() * 100, y: point.originY - 50 + Math.random() * 100, ease: Circ.easeInOut, onComplete: function () {
          shiftPoint(point);
        }
      });
    }

    function drawLines(point) {
      if (!point.active) return;
      const ctx = canvasRef.current.getContext('2d');
      for (let p of point.closest) {
        ctx.beginPath();
        ctx.moveTo(point.x, point.y);
        ctx.lineTo(p.x, p.y);
        ctx.strokeStyle = `rgba(156,217,249,${point.active})`;
        ctx.stroke();
      }
    }

    function Circle(pos, rad, color) {
      this.pos = pos || null;
      this.radius = rad || null;
      this.color = color || null;
      this.active = false;

      this.draw = function () {
        if (!this.active) return;
        const ctx = canvasRef.current.getContext('2d');
        ctx.beginPath();
        ctx.arc(this.pos.x, this.pos.y, this.radius, 0, 2 * Math.PI, false);
        ctx.fillStyle = `rgba(156,217,249,${this.active})`;
        ctx.fill();
      };
    }

    function getDistance(p1, p2) {
      return Math.pow(p1.x - p2.x, 2) + Math.pow(p1.y - p2.y, 2);
    }

    // Cleanup
    return () => {
      window.removeEventListener('mousemove', mouseMove);
      window.removeEventListener('scroll', scrollCheck);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div id='large-header' className='large-header flex flex-col items-center bg-slate-600 h-screen'>
      <canvas ref={canvasRef} id="demo-canvas"></canvas>
      <div className='mb-8 componente-encima'>
        <Jaaziel />
      </div>
      <div className='flex justify-center componente-encima '>
        <Btn />
      </div>
    </div>
  );
}

export default App;
