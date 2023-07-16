window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    class Particle {
        constructor(effect, x, y, color) {
            this.effect = effect;
            this.x = Math.random() * this.effect.canvasWidth;
            this.y =  Math.random() * this.effect.canvasHeight;
            this.color = color;
            this.originX = x;
            this.originY = y;
            this.size = this.effect.gap;
            this.dx = 0;
            this.dy = 0;
            this.vx = 0;
            this.vy = 0;
            this.force = 0;
            this.angle = 0;
            this.distance = 0;
            this.friction = Math.random() * 0.6 * 0.15;
            this.ease = Math.random() * 0.1 + 0.005;
        }

        draw() {
            this.effect.context.fillStyle = this.color;
            this.effect.context.fillRect(this.x, this.y, this.size, this.size)
        }

        update() {
            this.x += (this.originX - this.x) * this.ease;
            this.y += (this.originY - this.y) * this.ease;
        }
    }

    class Effect {
        constructor(context, canvasWidth, canvasHeight) {
            this.context = context;
            this.canvasWidth = canvasWidth;
            this.canvasHeight = canvasHeight;
            this.textX = this.canvasWidth / 2;
            this.textY = this.canvasHeight / 2;
            this.fontSize = 100;
            this.letterSpacing = 10;
            this.lineHeight = this.fontSize * 0.8;
            this.maxTextWidth = canvas.width * 0.5;
            this.textInput = document.getElementById('textInput');
            this.textInput.addEventListener('keyup', (e) => {
                e.preventDefault();
                if (e.key !== ' ') {
                    this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
                    this.wrapText(e.target.value);   
                }
            })
            this.particles = [];
            this.gap = 3;
            this.mouse = {
                radious: 20000,
                x: 0,
                y: 0,
            };
            window.addEventListener('mousemove', (e) => {
                this.mouse.x = e.x;
                this.mouse.y = e.y;
            })
        }

        wrapText(text) {
            const gradient = this.context.createLinearGradient(0, 0, this.canvasWidth, this.canvasHeight);
            gradient.addColorStop(0.3, 'red');
            gradient.addColorStop(0.5, 'green');
            gradient.addColorStop(0.7, 'white');
            this.context.fillStyle = gradient;
            this.context.letterSpacing = `${this.letterSpacing}px`;
            this.context.textAlign = 'center';
            this.context.textBaseline = 'middle';
            this.context.lineWidth = 3;
            this.context.strokeStyle = 'white'
            this.context.font = `${this.fontSize}px Helvetica`;
            let linesArray = []; 
            let lineCounter = 0;
            let line = '';
            let words = text.split(' ');
            words.forEach((word, i) => {
                let testLine = line + word + ' ';
                if (this.context.measureText(testLine).width > this.maxTextWidth) {
                    line = word + ' ';
                    lineCounter++;
                } else {
                    line = testLine;
                }
                linesArray[lineCounter] = line;
            });
            let textHeiht = this.lineHeight * lineCounter;
            this.textY = canvas.height / 2 - textHeiht / 2;
            linesArray.forEach((word, i) => {
                this.context.fillText(word, this.textX, this.textY + (i * this.lineHeight));
                this.context.strokeText(word, this.textX, this.textY + (i * this.lineHeight));
            });
            this.convertToParticles();
        }

        convertToParticles() {
            this.particles = [];
            const pixels = this.context.getImageData(0, 0, this.canvasWidth, this.canvasHeight).data;
            this.context.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
            for (let y = 0; y < this.canvasHeight; y += this.gap) {
                for (let x = 0; x < this.canvasWidth; x += this.gap) {
                    const index = (y * this.canvasWidth + x) * 4;
                    const alpha = pixels[index + 3];
                    if (alpha > 0) {
                        const red = pixels[index];
                        const green = pixels[index + 1];
                        const blue = pixels[index + 2];
                        const color = `rgb(${red}, ${green}, ${blue})`
                        this.particles.push(new Particle(this, x, y, color))
                    }
                }
            }
        }

        render(){
            this.particles.forEach(particle => {
                particle.update();
                particle.draw();
            });  
        }
    }

    const effect = new Effect(ctx, canvas.width, canvas.height);
    effect.wrapText('Hello!');
    effect.render();

    function animate() {
        ctx.clearRect(0, 0 , canvas.width, canvas.height);
        effect.render();
        requestAnimationFrame(animate);
    }

    animate();
});









    // ctx.lineWidth = 3;
    // ctx.strokeStyle = 'red'
    // ctx.beginPath();
    // ctx.moveTo(canvas.width / 2, 0);
    // ctx.lineTo(canvas.width / 2, canvas.height);
    // ctx.stroke();

    // ctx.strokeStyle = 'green'
    // ctx.beginPath();
    // ctx.moveTo(0, canvas.height / 2);
    // ctx.lineTo(canvas.width, canvas.height / 2);
    // ctx.stroke();

    // const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    // gradient.addColorStop(0.3, 'red');
    // gradient.addColorStop(0.5, 'orange');
    // gradient.addColorStop(0.7, 'yellow');
    // ctx.fillStyle = gradient;
    // ctx.strokeStyle = 'white'
    // ctx.font = '80px Helvetica';
    // ctx.letterSpacing = '10px'
    // ctx.textAlign = 'center';
    // ctx.textBaseline = 'middle';


    // const maxTextWidth = canvas.width * 0.5;
    // const lineHeight = 80;

    // function wrapText(text) {
    //     let linesArray = []; 
    //     let lineCounter = 0;
    //     let line = '';
    //     let words = text.split(' ');
    //     words.forEach((word, i) => {
    //         let testLine = line + word + ' ';
    //         if (ctx.measureText(testLine).width > maxTextWidth) {
    //             line = word + ' ';
    //             lineCounter++;
    //         } else {
    //             line = testLine;
    //         }
    //         linesArray[lineCounter] = line;
    //     });
    //     let textHeiht = lineHeight * lineCounter;
    //     let textY = canvas.height / 2 - textHeiht / 2;
    //     linesArray.forEach((word, i) => ctx.fillText(word, canvas.width / 2, textY + (i * lineHeight)))
    // }

    // textInput.addEventListener('keyup', (e) => {
    //     e.preventDefault();
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    //     wrapText(e.target.value);
    // })