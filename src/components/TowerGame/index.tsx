'use client'
import { GameProps } from '@/types';
import React, { useEffect, useRef } from 'react';

interface Box {
  x: number;
  y: number;
  width: number;
}

interface Debris {
  x: number;
  y: number;
  width: number;
}

const TowerGame= ({handleGameComplete}: GameProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const height = 50;
  let boxes: Box[] = [];
  boxes[0] = {
    x: 100,
    y: 300,
    width: 150
  };
  let debris: Debris = {
    x: 0,
    y: 0,
    width: 0
  };
  let scrollCounter: number | undefined, cameraY: number, current: number, mode: string, xSpeed: number;
  let ySpeed = 5;

  const newBox = () => {
    boxes[current] = {
      x: 0,
      y: (current + 10) * height,
      width: boxes[current - 1].width
    };
  };

  const gameOver = () => {
    mode = 'gameOver';
    const canvas = canvasRef.current;
    const context = canvas!.getContext('2d');
    context!.fillText('Game over. Click to play again!', 10, 10);
    handleGameComplete('You lost the Tower Game')
  };

  const animate = () => {
    if (mode !== 'gameOver') {
      const canvas = canvasRef.current;
      const context = canvas!.getContext('2d');
      context!.clearRect(0, 0, canvas!.width, canvas!.height);
      context!.fillText('Score: ' + (current - 1).toString(), 10, 10);
      for (let n = 0; n < boxes.length; n++) {
        let box = boxes[n];
        context!.fillStyle = 'rgb(' + n * 8 + ',' + n * 18 + ',' + n * 16 + ')';
        context!.fillRect(box.x, 600 - box.y + cameraY, box.width, height);
      }
      context!.fillStyle = 'red';
      context!.fillRect(debris.x, 600 - debris.y + cameraY, debris.width, height);
      if (mode === 'bounce') {
        boxes[current].x = boxes[current].x + xSpeed;
        if (xSpeed > 0 && boxes[current].x + boxes[current].width > canvas!.width)
          xSpeed = -xSpeed;
        if (xSpeed < 0 && boxes[current].x < 0)
          xSpeed = -xSpeed;
      }
      if (mode === 'fall') {
        boxes[current].y = boxes[current].y - ySpeed;
        if (boxes[current].y === boxes[current - 1].y + height) {
          mode = 'bounce';
          let difference = boxes[current].x - boxes[current - 1].x;
          if (Math.abs(difference) >= boxes[current].width) {
            gameOver();
          }
          debris = {
            x: boxes[current].x,
            y: boxes[current].y,
            width: difference
          };
          if (boxes[current].x > boxes[current - 1].x) {
            boxes[current].width = boxes[current].width - difference;
            debris.x = boxes[current].x + boxes[current].width;
          } else {
            debris.x = boxes[current].x - difference;
            boxes[current].width = boxes[current].width + difference;
            boxes[current].x = boxes[current - 1].x;
          }
          if (xSpeed > 0)
            xSpeed++;
          else
            xSpeed--;
          current++;
          scrollCounter = height;
          newBox();
        }
      }
      debris.y = debris.y - ySpeed;
      if (scrollCounter) {
        cameraY++;
        scrollCounter--;
      }
    }
    window.requestAnimationFrame(animate);
  };

  const restart = () => {
    boxes.splice(1, boxes.length - 1);
    mode = 'bounce';
    cameraY = 0;
    scrollCounter = 0;
    xSpeed = 2;
    current = 1;
    newBox();
    debris = {
      x: 0,
      y: 0,
      width: 0
    };
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas!.getContext('2d');
    restart();
    animate();

    canvas!.onpointerdown = () => {
      if (mode === 'gameOver')
        restart();
      else {
        if (mode === 'bounce')
          mode = 'fall';
      }
    };

    return () => {
      canvas!.onpointerdown = null;
    };
  }, []);

  return <canvas ref={canvasRef} width={300} height={600} />;
};

export default TowerGame;
