window.addEventListener('load', () => {
    const canvas = document.getElementById('canvas1');
    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    ctx.lineWidth = 3;
    ctx.strokeStyle = 'red'
    ctx.beginPath();
    ctx.moveTo(canvas.width / 2, 100);
    ctx.lineTo(400, 500);
    ctx.stroke();

    const text = 'Hello!';
    const textX = canvas.width / 2;
    const textY = canvas.height / 2;
    console.log(ctx);
    ctx.fillStyle = 'yellow';
    ctx.strokeStyle = 'white'
    ctx.font = '80px Helvetica';
    ctx.letterSpacing = '10px'
    ctx.fillText(text, textX, textY);
    ctx.strokeText(text, textX, textY);
});