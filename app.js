function Game(){
	this.guesses = [];
	this.phrases = [
		new Phrase({answer: "FORREST GUMP",hint: 'Guess a movie?'}),
		new Phrase({answer: "UNFORGIVEN",hint: 'Guess a movie?'}),
		new Phrase({answer: "STAR WARS",hint: 'Guess a movie?'}),
		new Phrase({answer: "CINDERELLA MAN",hint: 'Guess a movie?'}),
		new Phrase({answer: "THE ROOKIE",hint: 'Guess a movie?'}),
		new Phrase({answer: "JASON BOURNE",hint: 'Guess a movie?'}),
		new Phrase({answer: "ROCKY",hint: 'Guess a movie?'}),
		new Phrase({answer: "SIDEWAYS",hint: 'Guess a movie?'}),
		new Phrase({answer: "HACKERS",hint: 'Guess a movie?'}),
		new Phrase({answer: "THE NATURAL",hint: 'Guess a movie?'}),
		new Phrase({answer: "HACKERS",hint: 'Guess a movie?'}),
		new Phrase({answer: "JOSEY WALES",hint: 'Guess a movie?'}),
		new Phrase({answer: "SEABISCUIT",hint: 'Guess a movie?'})
	];
	this.current_phrase;
	this.random_phrase = function(){
		var random_phrase = this.phrases[(Math.random() * this.phrases.length) | 0]
		return random_phrase;
	}
	this.start = function() {
		this.current_phrase = this.random_phrase();
		this.draw_board();
	}
	this.guess = function(){
		var letter = document.getElementById('letter').value;
		this.guesses.push(letter);
		document.getElementById('letter').value = ''
		console.log('Guessing: '+ letter);
		$('#guessed').append(letter);
		this.draw_board();
	}
	this.draw_board = function(){
		console.log('Answer: '+ this.current_phrase.answer);
		var content = '';
		for(var i = 0; i < this.current_phrase.answer.length; i++){
			if(this.guesses.indexOf(this.current_phrase.answer[i]) == -1){
				// should not contain letter
				content += '<div class="tile" id="tile-'+(i+1)+'"><h1>&nbsp;</h1></div>';	
			} else {
				// contains the letter
				content += '<div class="tile" id="tile-'+(i+1)+'"><h1>'+ this.current_phrase.answer[i] +'</h1></div>';	
			}
		}
		$('#hint').html(this.current_phrase.hint);	
		$('#board').html(content);		
	}

}

function Phrase(options) {
	this.answer = options["answer"];
	this.hint = options["hint"]
}

function search(myArray, input) {

	document.getElementById('letter').value.toUpperCase();
}

var game;

$(function() {
	game = new Game;
	game.start();
});
