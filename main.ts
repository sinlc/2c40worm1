input.onButtonPressed(Button.A, function () {
    A1.turn(Direction.Right, 90)
})
input.onButtonPressed(Button.B, function () {
    A1.move(1)
    if (A1.isTouching(A2)) {
        A2.delete()
        game.addScore(1)
        game.gameOver()
    } else if (A1.isTouchingEdge()) {
        game.gameOver()
    }
})
let A2: game.LedSprite = null
let A1: game.LedSprite = null
A1 = game.createSprite(1, 1)
A2 = game.createSprite(2, 2)
game.startCountdown(10000)
