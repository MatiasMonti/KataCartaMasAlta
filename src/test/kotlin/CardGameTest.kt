import kotlin.test.Test
import kotlin.test.assertEquals

class CardGameTest {

companion object MyCardGame: CardGame(1)
var myCardGame2rounds: CardGame = CardGame(2)

    @Test
    fun player1Win3to2(){
        var result = MyCardGame.playRound("3", "2")
        assertEquals(DefaultMessages.winner1.message,result)
    }

    @Test
    fun player1Win10to9(){
        var result = MyCardGame.playRound("10", "9")
        assertEquals(DefaultMessages.winner1.message,result)
    }
    @Test
    fun player2Win3to2(){
        var result = MyCardGame.playRound("2", "3")
        assertEquals(DefaultMessages.winner2.message,result)
    }

    @Test
    fun player2Win10to9(){
        var result = MyCardGame.playRound("9", "10")
        assertEquals(DefaultMessages.winner2.message,result)
    }

    @Test
    fun draw3to3(){
        var result = MyCardGame.playRound("3", "3")
        assertEquals(DefaultMessages.draw.message,result)
    }

    @Test
    fun player1InvalidCard(){
        var result = MyCardGame.playRound("23", "3")
        assertEquals(DefaultMessages.alertwrongvalues.message,result)
    }

    @Test
    fun player2InvalidCard(){
        var result = MyCardGame.playRound("3", "23")
        assertEquals(DefaultMessages.alertwrongvalues.message,result)
    }


    @Test
    fun player1WinQto10(){
        var result = MyCardGame.playRound("Q", "10")
        assertEquals(DefaultMessages.winner1.message,result)
    }

    @Test
    fun player1WinAtoQ(){
        var result = MyCardGame.playRound("A", "Q")
        assertEquals(DefaultMessages.winner2.message,result)
    }

    @Test
    fun player2WinKtoQ(){
        var result = MyCardGame.playRound("Q", "K")
        assertEquals(DefaultMessages.winner2.message,result)
    }

    @Test
    fun playGameAllInvalidCards(){
        var result = myCardGame2rounds.playGame(listOf("w","13"), listOf("Z","33"))
        assertEquals(DefaultMessages.GameDraw.message,result)
    }
    @Test
    fun player1WinsTheGame2Rounds(){
        var result = myCardGame2rounds.playGame(listOf("10","A"), listOf("5","9"))
        assertEquals(DefaultMessages.GameWinner1.message+"2 to 0",result)
    }

    @Test
    fun player2WinsTheGame2Rounds(){
        var result = myCardGame2rounds.playGame(listOf("4","8"), listOf("J","9"))
        assertEquals(DefaultMessages.GameWinner2.message+"2 to 0",result)
    }

    @Test
    fun player2WinsTheGame2RoundsOnlyByOne(){
        var result = myCardGame2rounds.playGame(listOf("4","8"), listOf("J","8"))
        assertEquals(DefaultMessages.GameWinner2.message+"1 to 0",result)
    }

    @Test
    fun drawGame2Rounds(){
        var result = myCardGame2rounds.playGame(listOf("J","8"), listOf("J","8"))
        assertEquals(DefaultMessages.GameDraw.message,result)
    }
}

