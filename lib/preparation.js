class Preparation{
  consructor() {
  }

  calculateArrow() {
    radian = Math.PI / 180 * angle;
    lineX = -(Math.cos(radian) * 700 - x);
    lineY = -(Math.sin(radian) * 700 - y - radius);
  }

  calculateSpeed(angle, ball) {
    let theta = Math.atan((lineY - ball.y - radius)/(lineX - ball.x));
    let theta_a = theta * 180 / Math.PI;
    let dxValue, dyValue;
    if (theta_a > 0) {
      dxValue = -(Math.cos(theta) * speed);
      dyValue = -(Math.sin(theta) * speed);
    } else {
      dxValue = (Math.cos(theta) * speed);
      dyValue = (Math.sin(theta) * speed);
    }

    ball.dx = dxValue;
    ball.dy = dyValue;
  }

  prepareBricks() {

    const getRandomLevel = (min, max) => {
      return Math.floor(Math.random() * (max - min + 1)) + min;
    };

    for (var c = 0; c < brickColumnCount; c++) {
      if (bricks[c] === undefined) bricks[c] = [];
      for (var r = 0; r < brickRowCount; r++) {

        if (bricks[c][r] === undefined) {
          bricks[c][r] = {x : 0, y : 0, status: getRandomLevel(0, level* difficulty), sound: new Audio('./sounds/bounce_sound.mp3')};
        }

        let brickX = (c * (brickWidth + brickPadding)) + brickOffsetLeft;
        let brickY = (r * (brickHeight + brickPadding)) + brickOffsetTop;
        bricks[c][r].x = brickX;
        bricks[c][r].y = brickY;
      }
    }
  }
}
