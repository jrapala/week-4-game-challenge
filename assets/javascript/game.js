// jQuery: Star Wars RPG! | By Juliette Rapala
// =====================================================================================

$(document).ready(function(){

		var starWarsApp = {

			// Variables 
			// =====================================================================================

			userCharacter : '',
			characters : {
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
			},

			// Functions
			// =====================================================================================	
			//
			// Initialize game
			init : function() {
				for (var key in this.characters) {
					var $characterDiv = $('<div>');
					$characterDiv.addClass("img-white-wrapper character");
					$characterDiv.attr("value", key);
					var $characterImg = $('<img>');
					$characterImg.addClass("img");
					$characterImg.attr("src", this.characters[key].photo);
					var $characterName = this.characters[key].name;
					var $characterHP = this.characters[key].hp;
					$characterDiv.append($characterName);
					$characterDiv.append($characterImg);
					$characterDiv.append($characterHP);
					$('#characterChoice').append($characterDiv);
				}
				this.chooseCharacter();
			},

			// On click, character becomes your character
			chooseCharacter : function() {
				var self = this;
				$('.character').on("click", function() {
					self.userCharacter = $(this).attr("value");
					$('#characterChoice').hide();
				});

			}
			// Other characters become enemies
			// Start pick enemy mode
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

	}
	// Gameplay
	// =====================================================================================

starWarsApp.init();
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
