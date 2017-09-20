// jQuery: Star Wars RPG! | By Juliette Rapala
// =====================================================================================

$(document).ready(function(){

		// Variables 
		// =====================================================================================

		var userCharacter = '';
		var currentDefender = '';
		var isCharacterChosen = false;
		var isDefenderChosen = false;		
		var characters = {
			obiwan : {
				name : 'Obi-Wan Kenobi',
				photo : 'assets/images/obiwankenobi.jpg',
				alive : true,
				hp : 120,
				attack : 8,
				counterAttack : 24
			},

			luke : {
				name : 'Luke Skywalker',
				photo : 'assets/images/lukeskywalker.jpg',
				alive : true,
				hp : 100,
				attack : 10,
				counterAttack : 5 
			},

			darthsid : {
				name : 'Darth Sidious',
				photo : 'assets/images/darthsidious.jpg',
				alive : true,
				hp : 150,
				attack : 10,
				counterAttack : 20
			},

			darthmaul : {
				name : 'Darth Maul',
				photo : 'assets/images/darthmaul.jpg',
				alive : true,
				hp : 180,
				attack : 12,
				counterAttack : 25
			}
		}

		// Functions
		// =====================================================================================	

		// Initialize game
		function init() {
			// For each character in characters object..
			for (var key in characters) {
				// Create character div
				var $characterDiv = $('<div>');
				// Add white background color class and Choice class
				$characterDiv.addClass("img-white-wrapper choice");
				// Add a value attribute containing the name of the object
				$characterDiv.attr("value", key);
				// Create image tag
				var $characterImg = $('<img>');
				// Add img class
				$characterImg.addClass("img");
				// Add source code of character image
				$characterImg.attr("src", characters[key].photo);
				// Get name from character object
				var $characterName = characters[key].name;
				// Get HP from character object
				var $characterHP = characters[key].hp;
				// Append name, image, and HP to character div
				$characterDiv.append($characterName);
				$characterDiv.append($characterImg);
				$characterDiv.append($characterHP);
				// Append character div to top row of screen
				$('#characterChoice').append($characterDiv);
			};
		};			
		
		// On click, character becomes your character



		// // If a character has not been chosen yet..
		// if (!isCharacterChosen) {
		// 	console.log("A character needs to be chosen.");
		// 	// Run choose character function
		// 	chooseCharacter();
		// };
		// if (isCharacterChosen && !isDefenderChosen) {
		// 	console.log("A defender needs to be chosen.");
		// 	// Run choose character function
		// 	chooseDefender();
		// }; 	

			//
			// Pick enemy
			// If you have HP, and enemyies available, change backgrounds to red w/black border, pick enemy to move to defender, start fight mode
			// If you have HP and no enemies left, game over mode
			//
			// Fight
			// Change defender background to black w/green border, text to white
			// While you have HP, attack button works
			// Attack button = drain enemy HP, drain your HP, increase your attack power
			// If your HP runs out, game over mode
			// If enemy HP runs out, pick enemy mode 
			//
			// Game Over
			// If you are alive, you win!
			// If you are dead, you lose!

	
	// Gameplay
	// =====================================================================================

	init();
	$('.choice').on("click", function() {
		if (isCharacterChosen) return;
		// Set userCharacter variable to name of character clicked on
		userCharacter = $(this).attr("value");
		isCharacterChosen = true;
		console.log("User chose " + userCharacter + " as their character.");
		// Remove "choice" class from character clicked on
		$(this).removeClass("choice");
		// Move character clicked on to "Your Character" section
		$(this).appendTo($('#player'));
		// Hide row of choices
		$('#characterChoice').hide();
		// Move remaining characters to "Enemies Available to Attack"
		$('.choice').appendTo($('#enemies'));
		// Change background color of enemies and add enemy class
		$('.choice').addClass('img-red-wrapper enemy');
		// Remove old background color and choice class
		$('.choice').removeClass('img-white-wrapper choice');
		$('.enemy').on("click", function() {
			//if (isDefenderChosen) return;
			currentDefender = $(this).attr("value");
			isDefenderChosen = true;
			console.log("User chose " + currentDefender + " as their defender.");
			$(this).removeClass("enemy");
			$(this).appendTo($('#defender'));
			$(this).addClass('img-green-wrapper defender');
			$(this).removeClass('img-white-wrapper');
		});
	});
	fight();



});

// Notes:
// 




// "Star Wars RPG!"" -- top right
// 4 clickable characters
// [Obi-Wan Kenobi / Photo / 120] [Luke Skywalker / Photo / 100] [Darth Sidious / Photo / 150] [Darth Maul / Photo / 180]
// "Your Character"
// 
// "Enemies Available to Attack"
// "Fight Section"
// [Attack] button
// "Defender"
//
// 1. On click on character, top row disappears, character becomes your character and rest become enemies
// 2. On click of enemy, moves them to defender area
// 3. On click of Attack button, "You attacked Darth Maul for 8 damange. / Darth Maul attacked you back for 25 damage." --> HP goes down on both
// Enemy attack always has same damage. Attacking enemy slowly increases. Continues to increase after you defeat an enemy.
// If you are defeated, "You have been defeated. GAME OVER!!! / [Restart] Button"
// If enemy is defeated, "You have defeated #enemy. You can choose to fight another enemy."
// If attack pressed with no ememy, "No enemy here."
// Once you defeat everyone "You won!!! GAME OVER!!!" / [Restart] Button
//
// * Each character in the game has 3 attributes: `Health Points`, `Attack Power` and `Counter Attack Power`.
// * Each time the player attacks, their character's Attack Power increases by its base Attack Power. 
//  * For example, if the base Attack Power is 6, each attack will increase the Attack Power by 6 (12, 18, 24, 30 and so on).
// * The enemy character only has `Counter Attack Power`. 
//
//  * Unlike the player's `Attack Points`, `Counter Attack Power` never changes.
//
//* The `Health Points`, `Attack Power` and `Counter Attack Power` of each character must differ.
//
//* No characters in the game can heal or recover Health Points. 
//
//  * A winning player must pick their characters wisely by first fighting an enemy with low `Counter Attack Power`. This will allow them to grind `Attack Power` and to take on enemies before they lose all of their `Health Points`. Healing options would mess with this dynamic.
//
//* Your players should be able to win and lose the game no matter what character they choose. The challenge should come from picking the right enemies, not choosing the strongest player.
