import React from 'react';
import './App.css';
import Swal from 'sweetalert2';

const initialState = {
    ballX: 0,
    ballY: 0,
    dx: 2,
    dy: -2,
    ctx: null,
    paddleX: 0,
    score: 0,
    animationX: 0,
    animationSetTime: null,
    rightPressed: false,
    leftPressed: false,
    setTime: null
  };

//磚塊圖片
const imageArray = ['anders.JPG','minray.JPG','hero.JPG','gary.JPG'];

//平台與球的大小
const paddleWidth = 120;
const paddleHeight = 10;
const ballRadius = 10;

//關卡設定
let level = 0;
const levelName = ['anders','minray','hero','gary'];

//方塊設定
const bricks = [];
const brickRowCount = 3;
const brickColumnCount = 8;
const brickWidth = 55;
const brickHeight = 55;
const brickPadding = 10;
const brickOffsetTop = 40;
const brickOffsetLeft = (600 - brickWidth * brickColumnCount - (brickColumnCount - 1) * brickPadding) / 2;

class game extends React.Component{
    constructor(props) {
        super(props);
        this.state = initialState;
    }

    componentDidMount(){
        this.initAnimation();
        document.addEventListener("keydown", this.keyDownHandler);
    }
    
    componentWillUnmount() {
        document.removeEventListener("keydown", this.keyDownHandler);
        clearInterval(this.state.setTime);
    }

    keyDownHandler = (e) => {
        if(e.key === "Right" || e.key === "ArrowRight") {
            this.setState({rightPressed: true});
        }
        else if(e.key === "Left" || e.key === "ArrowLeft") {
            this.setState({leftPressed: true});
        }
    }

    getRndInteger = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) ) + min;
    }

    initAnimation = () => {
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const animationSetTime = setInterval(this.Transition, 10);
        this.setState({ctx: ctx, animationSetTime: animationSetTime, animationX: 0, ballY: 0, dx: 2, score: 0});
    }

    Transition = () => {
        const {ctx, animationX, animationSetTime} = this.state;
        const canvas = document.getElementById("myCanvas");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = 'black';
        ctx.fillRect(0, 0, canvas.width, canvas.height);

        if (animationX < canvas.width) {
            ctx.font = "80px Comic Sans MS";
            ctx.fillStyle = "#a6bec0";
            ctx.fillText("level:" + (Number(level)+1), animationX, 220);
            ctx.fillText(levelName[level], animationX, 300);
            this.setState({animationX: animationX + 5});
        } else if (animationX > canvas.width && animationX < 1000){
            ctx.font = "80px Comic Sans MS";
            ctx.fillStyle = "red";
            ctx.fillText("Ready?", 180, 260);
            this.setState({animationX: animationX + 3});
        } else if (animationX >= canvas.width && animationX < 1400){
            ctx.font = "80px Comic Sans MS";
            ctx.fillStyle = "red";
            ctx.fillText("go!", 260, 260);
            this.setState({animationX: animationX + 3});
        } else {
            clearInterval(animationSetTime);
            this.addComponentToCanvas();
        }
    }


    addComponentToCanvas = () => {
        const canvas = document.getElementById("myCanvas");
        const ctx = canvas.getContext("2d");
        const paddleX = (canvas.width - paddleWidth) / 2;
        const ballX = canvas.width / 2;
        const ballY = canvas.height - 30;
        const setTime = setInterval(this.draw, 1);

        for(let c = 0; c < brickColumnCount; c++) {
            bricks[c] = [];
            for(let r = 0; r < brickRowCount; r++) {
                const img = new Image();
                img.src = require('./image/' + imageArray[level]);
                bricks[c][r] = { x: 0, y: 0, img: img, status: 1};
            }
        }
        this.setState({ballX: ballX,ballY: ballY, ctx: ctx, paddleX: paddleX, setTime: setTime});
    }
    
  
    draw = () => {
        const {ballX, ballY, dx, dy, ctx, paddleX, rightPressed, leftPressed, setTime} = this.state;
        const canvas = document.getElementById("myCanvas");
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        if (ballX + dx > canvas.width - ballRadius || ballX + dx < ballRadius)
            this.setState({dx: -dx});

        if (ballY + dy < ballRadius) {
            this.setState({dy: -dy});
        } else if(ballY + dy > canvas.height - ballRadius) {
            if(ballX > paddleX - 3 && ballX < paddleX + paddleWidth) {
                this.setState({dy: -dy});
            } else {
                clearInterval(setTime);
                Swal.fire({
                    title: levelName[level] + ' says:you are loser~~~!!',
                    icon: 'error',
                    showCloseButton: true,
                    showCancelButton: true,
                    focusConfirm: false,
                    heightAuto: false,
                    confirmButtonText: 'play Again',
                    confirmButtonAriaLabel: 'Thumbs up, great!',
                    cancelButtonText:'go to menu',
                    cancelButtonAriaLabel: 'Thumbs down'
                  }).then((result) => {
                    if (result.value) {
                        this.initAnimation();
                    }else{
                        document.location.href = 'https://ruby840124.github.io/2dbreakoutgame/';
                    }
                  })
            }
        }

        if (rightPressed) {
            this.setState({paddleX: paddleX + 16});
            if (paddleX + paddleWidth > canvas.width)
                this.setState({paddleX: canvas.width - paddleWidth});
        } else if (leftPressed) {
            this.setState({paddleX: paddleX - 16});
            if (paddleX < 0)
                this.setState({paddleX: 0});
        }

        this.drawBall();
        this.drawPaddle();
        this.drawBricks();
        this.drawScore();
        this.collisionDetection();
        this.setState({ballX: ballX + dx,ballY: ballY + dy, rightPressed: false, leftPressed: false});
    }

    drawScore = () => {
        const {score, ctx} = this.state;
        ctx.font = "20px Arial";
        ctx.fillStyle = "#0095DD";
        ctx.fillText("Score: " + score, 8, 20);
    }

    drawPaddle = () => {
        const {ctx, paddleX} = this.state;
        const canvas = document.getElementById("myCanvas");
        ctx.beginPath();
        ctx.rect(paddleX, canvas.height - paddleHeight, paddleWidth, paddleHeight);
        ctx.fillStyle = "#a6bec0";
        ctx.fill();
        ctx.closePath();
    }

    drawBall = () => {
        const {ballX, ballY, ctx} = this.state;
        ctx.beginPath();
        ctx.arc(ballX, ballY, ballRadius, 0, Math.PI*2);
        ctx.fillStyle = "#a6bec0";
        ctx.fill();
        ctx.closePath();
    }

    drawBricks = () => {
        const {ctx} = this.state;
        for(let c = 0; c < brickColumnCount; c++) {
            for(let r = 0; r < brickRowCount; r++) {
                if(bricks[c][r].status === 1){
                    const brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
                    const brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
                    bricks[c][r].x = brickX;
                    bricks[c][r].y = brickY;
                    ctx.beginPath();
                    ctx.drawImage(bricks[c][r].img, brickX, brickY, brickWidth, brickHeight);
                    ctx.fill();
                    ctx.closePath();
                }
            }
        }
    }

    collisionDetection = () => {
        const {ballX, ballY, dy, score, setTime} = this.state;
        let newScore = score;
        for (let c = 0; c < brickColumnCount; c++) {
            for (let r = 0; r < brickRowCount; r++) {
                const b = bricks[c][r];
                if (b.status === 1) {
                    if (ballX >= b.x  && ballX <= b.x + brickWidth -3  && ballY >= b.y - 3  && ballY <= b.y + brickHeight) {
                        newScore = newScore + 1;
                        b.status = 0;
                        this.setState({dy: -dy, score: newScore});
                        if(newScore === brickRowCount * brickColumnCount) {
                            clearInterval(setTime);
                            if(level < 3){
                                Swal.fire({
                                    title: levelName[level] + ' says:ok fine= =',
                                    icon: 'warning',
                                    showCloseButton: true,
                                    showCancelButton: true,
                                    focusConfirm: false,
                                    heightAuto: false,
                                    confirmButtonText: 'next level',
                                    confirmButtonAriaLabel: 'Thumbs up, great!',
                                    cancelButtonText:'back to home',
                                    cancelButtonAriaLabel: 'Thumbs down'
                                }).then((result) => {
                                    if (result.value) {
                                        level = level + 1;
                                        this.initAnimation();
                                    } else {
                                        document.location.href = 'https://ruby840124.github.io/2dbreakoutgame/';
                                    }
                              })
                            } else {
                                Swal.fire({
                                    heightAuto: false,
                                    title: 'Congratulations!',
                                    imageUrl: 'https://lh3.googleusercontent.com/proxy/tXP2ofCdBllMR24EIPkieqasFGnAKq5MUZ-HoYyLgPv5n7MsgOAhmPsutIuALePLRxroJtoOhivHg-VHTQ',
                                    imageWidth: 300,
                                    imageHeight: 150,
                                    imageAlt: 'Custom image',
                                  }).then((result) => {
                                    if (result.value) {
                                        document.location.href = 'https://ruby840124.github.io/2dbreakoutgame/';
                                    }
                              })
                            }
                        }
                    }
                }
            }
        }
    }

  render() {
    return (
    <div className="App">
      <p style={{fontSize:"20px"}}>2D breakout game</p>
      <canvas  id="myCanvas" className="myCanvas" width="600" height="500"></canvas>
    </div>
    )
  }
}
export default game;