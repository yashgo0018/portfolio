<script>
  import { onMount } from "svelte";

  export let color;

  let canvas; //= new HTMLCanvasElement();

  const blockCount = 20;
  const connectorWidth = 3;
  const minGap = 100;
  const maxMove = 30;
  const maxSpeed = 1.2;
  const sizeRange = [50, 100];
  let blocks = [];

  function randomRange(a, b) {
    return a + Math.floor(Math.random() * (b - a));
  }

  function GetSortOrder(prop) {
    return function (a, b) {
      if (a[prop] > b[prop]) {
        return 1;
      } else if (a[prop] < b[prop]) {
        return -1;
      }
      return 0;
    };
  }

  onMount(() => {
    let ctx = canvas.getContext("2d");
    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
    let raf;

    class Block {
      constructor(x = 0, y = 0) {
        this.originX = x;
        this.originY = y;
        this.x = x;
        this.y = y;
        this.vx = 0;
        this.vy = 0;
        this.size = 100;
        this.color = color;

        this.img = new Image();
        this.img.src =
          "https://storage.googleapis.com/thangs-thumbnails/production/2814c998-b24c-4a84-8133-4ccda6b282b0.png";
      }

      draw() {
        ctx.drawImage(
          this.img,
          this.x - this.size / 2,
          this.y - this.size / 2,
          this.size,
          this.size
        );
      }

      distanceTo(x = canvas.width / 2, y = canvas.height / 2) {
        return Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));
      }

      nearestBlock() {
        let min = window.innerHeight + window.innerHeight;
        let nearest = this;
        for (let b of blocks) {
          const dist = this.distanceTo(b.x, b.y);
          if (b != this && dist < min) {
            nearest = b;
            min = dist;
          }
        }
        return nearest;
      }
    }

    function init() {
      for (let i = 0; i < blockCount; i++) {
        let flag = true;
        while (flag) {
          const newBlock = new Block(
            randomRange(minGap, canvas.offsetWidth),
            randomRange(minGap, canvas.offsetHeight)
          );
          let isBreak = true;
          for (let b of blocks) {
            if (newBlock.distanceTo(b.x, b.y) < minGap) {
              isBreak = false;
              break;
            }
          }
          if (isBreak) {
            newBlock.vx = randomRange(-maxSpeed, maxSpeed);
            newBlock.vy = randomRange(-maxSpeed, maxSpeed);
            newBlock.size = randomRange(sizeRange[0], sizeRange[1]);
            blocks.push(newBlock);
            flag = false;
          }
        }
      }
    }

    function draw() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      blocks.sort(GetSortOrder("y"));

      for (let b of blocks) {
        ctx.beginPath();
        ctx.moveTo(b.x, b.y);
        const nearestBlock = b.nearestBlock();
        ctx.lineTo(nearestBlock.x, nearestBlock.y);
        ctx.lineWidth = connectorWidth;
        ctx.stroke();
        ctx.strokeStyle = `${color.slice(0, 7)}55`;
        ctx.closePath();
      }

      for (let b of blocks) {
        b.draw();
        b.x += b.vx/10;
        b.y += b.vy/10;
        if (b.distanceTo(b.originX, b.originY) > maxMove) {
          b.vx =
            -1 * (b.vx / Math.abs(b.vx)) * randomRange(maxSpeed / 10, maxSpeed);
          b.vy =
            -1 * (b.vy / Math.abs(b.vy)) * randomRange(maxSpeed / 10, maxSpeed);
        }
      }

      raf = window.requestAnimationFrame(draw);
    }

    // raf = window.requestAnimationFrame(draw);

    init();
    setTimeout(() => {
      draw();
    }, 1000);
  });
</script>

<canvas bind:this={canvas} class="h-full w-full" />
