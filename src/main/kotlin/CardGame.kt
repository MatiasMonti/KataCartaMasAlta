open class CardGame(NumberOfPlays: Int) {
    private var cardSet = listOf<String>("2","3","4","5","6","7","8","9","10","A","J","Q","K")
    private var NumberOfPlays: Int
    private var PlayerOnePoints = 0
    private var PlayerTwoPoints = 0

    init {
        this.NumberOfPlays = NumberOfPlays
    }

    fun playRound(playerOneCard: String, playerTwoCard: String): String {
        return if(checkValidCard(playerOneCard,playerTwoCard)){
            getRoundWinner(playerOneCard,playerTwoCard)
        } else DefaultMessages.alertwrongvalues.message
    }

    private fun checkValidCard(playerOneCard: String, playerTwoCard: String): Boolean{
        return (playerOneCard in cardSet && playerTwoCard in cardSet)
    }

    private fun getRoundWinner(playerOneCard: String,playerTwoCard: String): String{
        var result = DefaultMessages.draw.message

        if(cardSet.indexOf(playerOneCard) > cardSet.indexOf(playerTwoCard)) {
                result = DefaultMessages.winner1.message
                PlayerOnePoints++
            } else if (cardSet.indexOf(playerTwoCard) > cardSet.indexOf(playerOneCard)) {
            result = DefaultMessages.winner2.message
            PlayerTwoPoints++
        }
        return result
    }

    fun playGame(PlayerOneCards: List<String>, PlayerTwoCards: List<String>): String {
        for(i in 0 until NumberOfPlays){
            getRoundWinner(PlayerOneCards[i],PlayerTwoCards[i])
        }
        return if(PlayerOnePoints > PlayerTwoPoints){
            DefaultMessages.GameWinner1.message+PlayerOnePoints+" to "+PlayerTwoPoints
        }else if (PlayerTwoPoints > PlayerOnePoints ){
            DefaultMessages.GameWinner2.message+PlayerTwoPoints+" to "+PlayerOnePoints
        }
        else DefaultMessages.GameDraw.message
    }
}