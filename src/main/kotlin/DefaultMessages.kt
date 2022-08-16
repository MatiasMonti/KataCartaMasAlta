enum class DefaultMessages(
    val message: String
    ) {
    winner1(message = "Player 1 win this round"),
    winner2(message = "Player 2 win this round"),
    alertwrongvalues(message = "Invalid Card played, it's a draw"),
    draw(message = "It's a Draw round"),
    GameWinner1(message = "Player 1 win the GAME by "),
    GameWinner2(message = "Player 2 win the GAME by "),
    GameDraw(message = "It's a Draw!!");
}