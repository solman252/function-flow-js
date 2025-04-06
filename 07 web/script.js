const canvas = document.createElement("canvas");
canvas.width = 600;
canvas.height = 400;
document.body.appendChild(canvas);

const ctx = canvas.getContext("2d");

const steps = ["Start", "Process", "Decision", "Action", "End"];

ctx.font = "25px serif";
ctx.strokeStyle = "red";
ctx.direction = 'ltr';

function drawFlowStep(step,index) {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.fillText(step,100*index,100)
}

function animateFlow() {
  // Your code here
    for (let index = 0; index < steps.length; index++) {
        const step = steps[index];
        setTimeout(() => {
            drawFlowStep(step,index);
          }, 500*(index));
    }
}


animateFlow()
setTimeout(() => {
    animateFlow()
}, 500*(steps.length));