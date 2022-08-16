(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin', 'KataCartaMasAlta', 'kotlin-test'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'), require('KataCartaMasAlta'), require('kotlin-test'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KataCartaMasAlta-test'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KataCartaMasAlta-test'.");
    }
    if (typeof KataCartaMasAlta === 'undefined') {
      throw new Error("Error loading module 'KataCartaMasAlta-test'. Its dependency 'KataCartaMasAlta' was not found. Please, check whether 'KataCartaMasAlta' is loaded prior to 'KataCartaMasAlta-test'.");
    }
    if (typeof this['kotlin-test'] === 'undefined') {
      throw new Error("Error loading module 'KataCartaMasAlta-test'. Its dependency 'kotlin-test' was not found. Please, check whether 'kotlin-test' is loaded prior to 'KataCartaMasAlta-test'.");
    }
    root['KataCartaMasAlta-test'] = factory(typeof this['KataCartaMasAlta-test'] === 'undefined' ? {} : this['KataCartaMasAlta-test'], kotlin, KataCartaMasAlta, this['kotlin-test']);
  }
}(this, function (_, Kotlin, $module$KataCartaMasAlta, $module$kotlin_test) {
  'use strict';
  var CardGame = $module$KataCartaMasAlta.CardGame;
  var Kind_OBJECT = Kotlin.Kind.OBJECT;
  var DefaultMessages = $module$KataCartaMasAlta.DefaultMessages;
  var assertEquals = $module$kotlin_test.kotlin.test.assertEquals_3m0tl5$;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var test = $module$kotlin_test.kotlin.test.test;
  var suite = $module$kotlin_test.kotlin.test.suite;
  CardGameTest$MyCardGame.prototype = Object.create(CardGame.prototype);
  CardGameTest$MyCardGame.prototype.constructor = CardGameTest$MyCardGame;
  function CardGameTest() {
    CardGameTest$MyCardGame_getInstance();
    this.myCardGame2rounds = new CardGame(2);
  }
  function CardGameTest$MyCardGame() {
    CardGameTest$MyCardGame_instance = this;
    CardGame.call(this, 1);
  }
  CardGameTest$MyCardGame.$metadata$ = {
    kind: Kind_OBJECT,
    simpleName: 'MyCardGame',
    interfaces: [CardGame]
  };
  var CardGameTest$MyCardGame_instance = null;
  function CardGameTest$MyCardGame_getInstance() {
    if (CardGameTest$MyCardGame_instance === null) {
      new CardGameTest$MyCardGame();
    }
    return CardGameTest$MyCardGame_instance;
  }
  CardGameTest.prototype.player1Win3to2 = function () {
    var result = CardGameTest$MyCardGame_getInstance().playRound_puj7f4$('3', '2');
    assertEquals(DefaultMessages.winner1.message, result);
  };
  CardGameTest.prototype.player1Win10to9 = function () {
    var result = CardGameTest$MyCardGame_getInstance().playRound_puj7f4$('10', '9');
    assertEquals(DefaultMessages.winner1.message, result);
  };
  CardGameTest.prototype.player2Win3to2 = function () {
    var result = CardGameTest$MyCardGame_getInstance().playRound_puj7f4$('2', '3');
    assertEquals(DefaultMessages.winner2.message, result);
  };
  CardGameTest.prototype.player2Win10to9 = function () {
    var result = CardGameTest$MyCardGame_getInstance().playRound_puj7f4$('9', '10');
    assertEquals(DefaultMessages.winner2.message, result);
  };
  CardGameTest.prototype.draw3to3 = function () {
    var result = CardGameTest$MyCardGame_getInstance().playRound_puj7f4$('3', '3');
    assertEquals(DefaultMessages.draw.message, result);
  };
  CardGameTest.prototype.player1InvalidCard = function () {
    var result = CardGameTest$MyCardGame_getInstance().playRound_puj7f4$('23', '3');
    assertEquals(DefaultMessages.alertwrongvalues.message, result);
  };
  CardGameTest.prototype.player2InvalidCard = function () {
    var result = CardGameTest$MyCardGame_getInstance().playRound_puj7f4$('3', '23');
    assertEquals(DefaultMessages.alertwrongvalues.message, result);
  };
  CardGameTest.prototype.player1WinQto10 = function () {
    var result = CardGameTest$MyCardGame_getInstance().playRound_puj7f4$('Q', '10');
    assertEquals(DefaultMessages.winner1.message, result);
  };
  CardGameTest.prototype.player1WinAtoQ = function () {
    var result = CardGameTest$MyCardGame_getInstance().playRound_puj7f4$('A', 'Q');
    assertEquals(DefaultMessages.winner2.message, result);
  };
  CardGameTest.prototype.player2WinKtoQ = function () {
    var result = CardGameTest$MyCardGame_getInstance().playRound_puj7f4$('Q', 'K');
    assertEquals(DefaultMessages.winner2.message, result);
  };
  CardGameTest.prototype.playGameAllInvalidCards = function () {
    var result = this.myCardGame2rounds.playGame_2mkhiy$(listOf(['w', '13']), listOf(['Z', '33']));
    assertEquals(DefaultMessages.GameDraw.message, result);
  };
  CardGameTest.prototype.player1WinsTheGame2Rounds = function () {
    var result = this.myCardGame2rounds.playGame_2mkhiy$(listOf(['10', 'A']), listOf(['5', '9']));
    assertEquals(DefaultMessages.GameWinner1.message + '2 to 0', result);
  };
  CardGameTest.prototype.player2WinsTheGame2Rounds = function () {
    var result = this.myCardGame2rounds.playGame_2mkhiy$(listOf(['4', '8']), listOf(['J', '9']));
    assertEquals(DefaultMessages.GameWinner2.message + '2 to 0', result);
  };
  CardGameTest.prototype.player2WinsTheGame2RoundsOnlyByOne = function () {
    var result = this.myCardGame2rounds.playGame_2mkhiy$(listOf(['4', '8']), listOf(['J', '8']));
    assertEquals(DefaultMessages.GameWinner2.message + '1 to 0', result);
  };
  CardGameTest.prototype.drawGame2Rounds = function () {
    var result = this.myCardGame2rounds.playGame_2mkhiy$(listOf(['J', '8']), listOf(['J', '8']));
    assertEquals(DefaultMessages.GameDraw.message, result);
  };
  CardGameTest.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CardGameTest',
    interfaces: []
  };
  Object.defineProperty(CardGameTest, 'MyCardGame', {
    get: CardGameTest$MyCardGame_getInstance
  });
  _.CardGameTest = CardGameTest;
  suite('', false, function () {
    suite('CardGameTest', false, function () {
      test('player1Win3to2', false, function () {
        return (new CardGameTest()).player1Win3to2();
      });
      test('player1Win10to9', false, function () {
        return (new CardGameTest()).player1Win10to9();
      });
      test('player2Win3to2', false, function () {
        return (new CardGameTest()).player2Win3to2();
      });
      test('player2Win10to9', false, function () {
        return (new CardGameTest()).player2Win10to9();
      });
      test('draw3to3', false, function () {
        return (new CardGameTest()).draw3to3();
      });
      test('player1InvalidCard', false, function () {
        return (new CardGameTest()).player1InvalidCard();
      });
      test('player2InvalidCard', false, function () {
        return (new CardGameTest()).player2InvalidCard();
      });
      test('player1WinQto10', false, function () {
        return (new CardGameTest()).player1WinQto10();
      });
      test('player1WinAtoQ', false, function () {
        return (new CardGameTest()).player1WinAtoQ();
      });
      test('player2WinKtoQ', false, function () {
        return (new CardGameTest()).player2WinKtoQ();
      });
      test('playGameAllInvalidCards', false, function () {
        return (new CardGameTest()).playGameAllInvalidCards();
      });
      test('player1WinsTheGame2Rounds', false, function () {
        return (new CardGameTest()).player1WinsTheGame2Rounds();
      });
      test('player2WinsTheGame2Rounds', false, function () {
        return (new CardGameTest()).player2WinsTheGame2Rounds();
      });
      test('player2WinsTheGame2RoundsOnlyByOne', false, function () {
        return (new CardGameTest()).player2WinsTheGame2RoundsOnlyByOne();
      });
      test('drawGame2Rounds', false, function () {
        return (new CardGameTest()).drawGame2Rounds();
      });
    });
  });
  Kotlin.defineModule('KataCartaMasAlta-test', _);
  return _;
}));

//# sourceMappingURL=KataCartaMasAlta-test.js.map
