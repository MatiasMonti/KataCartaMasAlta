(function (root, factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'kotlin'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('kotlin'));
  else {
    if (typeof kotlin === 'undefined') {
      throw new Error("Error loading module 'KataCartaMasAlta'. Its dependency 'kotlin' was not found. Please, check whether 'kotlin' is loaded prior to 'KataCartaMasAlta'.");
    }
    root.KataCartaMasAlta = factory(typeof KataCartaMasAlta === 'undefined' ? {} : KataCartaMasAlta, kotlin);
  }
}(this, function (_, Kotlin) {
  'use strict';
  var toString = Kotlin.toString;
  var listOf = Kotlin.kotlin.collections.listOf_i5x0yv$;
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var Enum = Kotlin.kotlin.Enum;
  var throwISE = Kotlin.throwISE;
  DefaultMessages.prototype = Object.create(Enum.prototype);
  DefaultMessages.prototype.constructor = DefaultMessages;
  function CardGame(NumberOfPlays) {
    this.cardSet_llvjas$_0 = listOf(['2', '3', '4', '5', '6', '7', '8', '9', '10', 'A', 'J', 'Q', 'K']);
    this.NumberOfPlays_mjdt89$_0 = 0;
    this.PlayerOnePoints_1vqcua$_0 = 0;
    this.PlayerTwoPoints_12icpk$_0 = 0;
    this.NumberOfPlays_mjdt89$_0 = NumberOfPlays;
  }
  CardGame.prototype.playRound_puj7f4$ = function (playerOneCard, playerTwoCard) {
    var tmp$;
    if (this.checkValidCard_q54dmu$_0(playerOneCard, playerTwoCard)) {
      tmp$ = this.getRoundWinner_z6vfif$_0(playerOneCard, playerTwoCard);
    } else
      tmp$ = DefaultMessages$alertwrongvalues_getInstance().message;
    return tmp$;
  };
  CardGame.prototype.checkValidCard_q54dmu$_0 = function (playerOneCard, playerTwoCard) {
    return this.cardSet_llvjas$_0.contains_11rb$(playerOneCard) && this.cardSet_llvjas$_0.contains_11rb$(playerTwoCard);
  };
  CardGame.prototype.getRoundWinner_z6vfif$_0 = function (playerOneCard, playerTwoCard) {
    var tmp$;
    var result = DefaultMessages$draw_getInstance().message;
    if (this.cardSet_llvjas$_0.indexOf_11rb$(playerOneCard) > this.cardSet_llvjas$_0.indexOf_11rb$(playerTwoCard)) {
      result = DefaultMessages$winner1_getInstance().message;
      this.PlayerOnePoints_1vqcua$_0 = this.PlayerOnePoints_1vqcua$_0 + 1 | 0;
    } else if (this.cardSet_llvjas$_0.indexOf_11rb$(playerTwoCard) > this.cardSet_llvjas$_0.indexOf_11rb$(playerOneCard)) {
      result = DefaultMessages$winner2_getInstance().message;
      tmp$ = this.PlayerTwoPoints_12icpk$_0, this.PlayerTwoPoints_12icpk$_0 = tmp$ + 1 | 0;
    }
    return result;
  };
  CardGame.prototype.playGame_2mkhiy$ = function (PlayerOneCards, PlayerTwoCards) {
    var tmp$, tmp$_0;
    tmp$ = this.NumberOfPlays_mjdt89$_0;
    for (var i = 0; i < tmp$; i++) {
      this.getRoundWinner_z6vfif$_0(PlayerOneCards.get_za3lpa$(i), PlayerTwoCards.get_za3lpa$(i));
    }
    if (this.PlayerOnePoints_1vqcua$_0 > this.PlayerTwoPoints_12icpk$_0) {
      tmp$_0 = DefaultMessages$GameWinner1_getInstance().message + toString(this.PlayerOnePoints_1vqcua$_0) + ' to ' + toString(this.PlayerTwoPoints_12icpk$_0);
    } else if (this.PlayerTwoPoints_12icpk$_0 > this.PlayerOnePoints_1vqcua$_0) {
      tmp$_0 = DefaultMessages$GameWinner2_getInstance().message + toString(this.PlayerTwoPoints_12icpk$_0) + ' to ' + toString(this.PlayerOnePoints_1vqcua$_0);
    } else
      tmp$_0 = DefaultMessages$GameDraw_getInstance().message;
    return tmp$_0;
  };
  CardGame.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'CardGame',
    interfaces: []
  };
  function DefaultMessages(name, ordinal, message) {
    Enum.call(this);
    this.message = message;
    this.name$ = name;
    this.ordinal$ = ordinal;
  }
  function DefaultMessages_initFields() {
    DefaultMessages_initFields = function () {
    };
    DefaultMessages$winner1_instance = new DefaultMessages('winner1', 0, 'Player 1 win this round');
    DefaultMessages$winner2_instance = new DefaultMessages('winner2', 1, 'Player 2 win this round');
    DefaultMessages$alertwrongvalues_instance = new DefaultMessages('alertwrongvalues', 2, "Invalid Card played, it's a draw");
    DefaultMessages$draw_instance = new DefaultMessages('draw', 3, "It's a Draw round");
    DefaultMessages$GameWinner1_instance = new DefaultMessages('GameWinner1', 4, 'Player 1 win the GAME by ');
    DefaultMessages$GameWinner2_instance = new DefaultMessages('GameWinner2', 5, 'Player 2 win the GAME by ');
    DefaultMessages$GameDraw_instance = new DefaultMessages('GameDraw', 6, "It's a Draw!!");
  }
  var DefaultMessages$winner1_instance;
  function DefaultMessages$winner1_getInstance() {
    DefaultMessages_initFields();
    return DefaultMessages$winner1_instance;
  }
  var DefaultMessages$winner2_instance;
  function DefaultMessages$winner2_getInstance() {
    DefaultMessages_initFields();
    return DefaultMessages$winner2_instance;
  }
  var DefaultMessages$alertwrongvalues_instance;
  function DefaultMessages$alertwrongvalues_getInstance() {
    DefaultMessages_initFields();
    return DefaultMessages$alertwrongvalues_instance;
  }
  var DefaultMessages$draw_instance;
  function DefaultMessages$draw_getInstance() {
    DefaultMessages_initFields();
    return DefaultMessages$draw_instance;
  }
  var DefaultMessages$GameWinner1_instance;
  function DefaultMessages$GameWinner1_getInstance() {
    DefaultMessages_initFields();
    return DefaultMessages$GameWinner1_instance;
  }
  var DefaultMessages$GameWinner2_instance;
  function DefaultMessages$GameWinner2_getInstance() {
    DefaultMessages_initFields();
    return DefaultMessages$GameWinner2_instance;
  }
  var DefaultMessages$GameDraw_instance;
  function DefaultMessages$GameDraw_getInstance() {
    DefaultMessages_initFields();
    return DefaultMessages$GameDraw_instance;
  }
  DefaultMessages.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'DefaultMessages',
    interfaces: [Enum]
  };
  function DefaultMessages$values() {
    return [DefaultMessages$winner1_getInstance(), DefaultMessages$winner2_getInstance(), DefaultMessages$alertwrongvalues_getInstance(), DefaultMessages$draw_getInstance(), DefaultMessages$GameWinner1_getInstance(), DefaultMessages$GameWinner2_getInstance(), DefaultMessages$GameDraw_getInstance()];
  }
  DefaultMessages.values = DefaultMessages$values;
  function DefaultMessages$valueOf(name) {
    switch (name) {
      case 'winner1':
        return DefaultMessages$winner1_getInstance();
      case 'winner2':
        return DefaultMessages$winner2_getInstance();
      case 'alertwrongvalues':
        return DefaultMessages$alertwrongvalues_getInstance();
      case 'draw':
        return DefaultMessages$draw_getInstance();
      case 'GameWinner1':
        return DefaultMessages$GameWinner1_getInstance();
      case 'GameWinner2':
        return DefaultMessages$GameWinner2_getInstance();
      case 'GameDraw':
        return DefaultMessages$GameDraw_getInstance();
      default:
        throwISE('No enum constant DefaultMessages.' + name);
    }
  }
  DefaultMessages.valueOf_61zpoe$ = DefaultMessages$valueOf;
  _.CardGame = CardGame;
  Object.defineProperty(DefaultMessages, 'winner1', {
    get: DefaultMessages$winner1_getInstance
  });
  Object.defineProperty(DefaultMessages, 'winner2', {
    get: DefaultMessages$winner2_getInstance
  });
  Object.defineProperty(DefaultMessages, 'alertwrongvalues', {
    get: DefaultMessages$alertwrongvalues_getInstance
  });
  Object.defineProperty(DefaultMessages, 'draw', {
    get: DefaultMessages$draw_getInstance
  });
  Object.defineProperty(DefaultMessages, 'GameWinner1', {
    get: DefaultMessages$GameWinner1_getInstance
  });
  Object.defineProperty(DefaultMessages, 'GameWinner2', {
    get: DefaultMessages$GameWinner2_getInstance
  });
  Object.defineProperty(DefaultMessages, 'GameDraw', {
    get: DefaultMessages$GameDraw_getInstance
  });
  _.DefaultMessages = DefaultMessages;
  Kotlin.defineModule('KataCartaMasAlta', _);
  return _;
}));

//# sourceMappingURL=KataCartaMasAlta.js.map
