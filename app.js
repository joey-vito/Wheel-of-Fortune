function Game(){
	this.score = 0;
	this.guesses = [];
	this.phrases = [
		new Phrase({answer: "FORREST GUMP",hint: 'Clue: Shrimp Captain'}),
		new Phrase({answer: "UNFORGIVEN",hint: 'Clue: Clint & Morgan'}),
		new Phrase({answer: "STAR WARS",hint: 'Clue: Chewie'}),
		new Phrase({answer: "CINDERELLA MAN",hint: 'Clue: Poor Boxer'}),
		new Phrase({answer: "THE ROOKIE",hint: 'Clue: 98mph Teacher'}),
		new Phrase({answer: "JASON BOURNE",hint: 'Clue: Human Weapon'}),
		new Phrase({answer: "ROCKY",hint: 'Clue: Andrianne!!!!'}),
		new Phrase({answer: "SIDEWAYS",hint: 'Clue: Only Cabernet'}),
		new Phrase({answer: "HACKERS",hint: 'Clue: Computer Pro'}),
		new Phrase({answer: "THE NATURAL",hint: 'Clue: Connected at Hip'}),
		new Phrase({answer: "JOSEY WALES",hint: 'Clue: Outlaw'}),
		new Phrase({answer: "SEABISCUIT",hint: 'Clue: Unlikely Crown'})
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
		var guessed = [];
		var letter = document.getElementById('letter').value;
		//this.guesses.push(letter);
		this.guesses.push(letter.toUpperCase());
		$('#guessed').html = letter;
		letter = '';
		console.log('Guessing: '+ letter);
		//$('#guessed').append(letter);
		$('#guessed').append(letter.toUpperCase());
		$('#letter').val("");
		this.draw_board();
	}
	this.draw_board = function(){
		console.log('Answer: '+ this.current_phrase.answer);
		var content = '';
		for(var i = 0; i < this.current_phrase.answer.length; i++){
			if ((this.current_phrase.answer[i]) == " "){
				content += '<div class="tile space" id="tile-'+(i+1)+'"><h1>&nbsp;</h1></div>';
			}
			else if(this.guesses.indexOf(this.current_phrase.answer[i]) == -1){
			// should not contain letter
			content += '<div class="tile" id="tile-'+(i+1)+'"><h1>&nbsp;</h1></div>';	
			} 
			else {
				// contains the letter
				content += '<div class="tile" id="tile-'+(i+1)+'"><h1>'+ this.current_phrase.answer[i] +'</h1></div>';	
			}
		}
		$('#points').html(this.score);
		$('#hint').html(this.current_phrase.hint);	
		$('#board').html(content);		
	}
	this.show_answer = function(){
		var content = '';
		for(var i = 0; i < this.current_phrase.answer.length; i++){
			if ((this.current_phrase.answer[i]) == " "){
				content += '<div class="tile space" id="tile-'+(i+1)+'"><h1>&nbsp;</h1></div>';
			} else {
				content += '<div class="tile" id="tile-'+(i+1)+'"><h1>'+ this.current_phrase.answer[i] +'</h1></div>';	
			}
		}
		$('#board').html(content);		
	}
	this.solve = function() {
		$('#myModal').modal('show')
	}

	this.check = function() {
		var solvePuzzle = document.getElementById('solvePuzzle').value;
		if(solvePuzzle == this.current_phrase.answer) {
			alert("You are Correct");
			this.score += 300;
			this.show_answer();
			$('#points').html(this.score);
			$('#myModal').modal('hide')
		}else{
			alert("Please Try Again");
		}
	}

}

function Phrase(options) {
	this.answer = options["answer"];
	this.hint = options["hint"]
}

// function search(myArray, input) {

// 	document.getElementById('letter').value.toUpperCase();
// }

var game;

$(function() {
	game = new Game;
	game.start();
});
