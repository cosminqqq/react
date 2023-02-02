var id1 = 0;
var id2 = 0;

// creates a 'Deck' class where objects can be made from using the OOP
class Deck {
	constructor(cards = freshDeck()) {
		this.cards = cards
	}
	// function that returns the length of the deck
	get numberOfCards() {
		return this.cards.length
	}
	// defines a shuffle function that shuffles the cards in the deck randomly
	shuffle() {
		for (let i = this.numberOfCards - 1; i > 0; i--) {
			const newIndex = Math.floor(Math.random() * (i + 1))
			const oldValue = this.cards[newIndex]
			this.cards[newIndex] = this.cards[i]
			this.cards[i] = oldValue
		}
	}
}
// class to make objects for each card including the card stats and properties
class MinionCard {
	constructor(attack, health, mana, info, imageString, name, rarity) {
		this.imageString = imageString;
		this.attack = attack;
		this.health = health;
		this.info = info;
		this.name = name;
		this.mana = mana;
		this.rarity = rarity;
	}
	// function to create the card in play element for the opponent
	getComputerHTML() {
		const computerCardDiv = document.createElement('div')
		const computerAttackValueBackground = document.createElement('div')
		const computerHealthValueBackground = document.createElement('div')
		const computerAttackValue = document.createElement('div')
		const computerHealthValue = document.createElement('div')
		computerCardDiv.id = "cpuCardInPlay" + id2
		computerCardDiv.classList.add("cardinplay")
		computerCardDiv.classList.add("computer-cardinplay")
		computerCardDiv.classList.add('placeCardAnim')
		computerAttackValue.classList.add("attackValue")
		computerHealthValue.classList.add("healthValue")
		computerAttackValueBackground.classList.add("attackValueBackground")
		computerHealthValueBackground.classList.add("healthValueBackground")
		computerCardDiv.appendChild(computerAttackValueBackground)
		computerCardDiv.appendChild(computerHealthValueBackground)
		computerAttackValueBackground.appendChild(computerAttackValue)
		computerHealthValueBackground.appendChild(computerHealthValue)
		computerAttackValue.innerText = this.attack
		computerHealthValue.innerText = this.health
		computerCardDiv.style.backgroundImage = "url('" + this.imageString + "')";
		computerCardDiv.style.backgroundPosition =  "center center";
		id2 += 1
		return computerCardDiv
	}
	// function to create the card in play element for the player
	getPlayerHTML() {
		const playerCardDiv = document.createElement('div')
		const playerAttackValueBackground = document.createElement('div')
		const playerHealthValueBackground = document.createElement('div')
		const playerAttackValue = document.createElement('div')
		const playerHealthValue = document.createElement('div')
		const legendary = document.createElement('div')
		const divineShield = document.createElement('div')
		const taunt = document.createElement('div')
		const nameOfCard = this.name;
		playerCardDiv.id = "playerCardInPlay" + id1
		playerCardDiv.classList.add("cardinplay")
		playerCardDiv.classList.add("player-cardinplay")
		if (nameOfCard == "Ragnaros the Firelord") {
			playerCardDiv.classList.add('ragnarosTheFirelord')
			setTimeout(function() {
				document.getElementById("game").classList.add("legendaryFlipAnim");
				setTimeout(function() {
					document.getElementById("game").classList.remove("legendaryFlipAnim");
				},1000);
			},1900);
		} else if (nameOfCard == "The Lich King") {
			playerCardDiv.style.visibility = "hidden";
			setTimeout(function() {
				playerCardDiv.classList.add('theLichKing')
				playerCardDiv.style.visibility = "visible";
				setTimeout(function() {
					document.getElementById("game").classList.add("theLichKingShake");
					setTimeout(function() {
						document.getElementById("game").classList.remove("theLichKingShake");
					},1000);
				},250)
			},2000)
		} else if (nameOfCard == "Stormwind Champion") {
			setTimeout(function() {
				playerCardDiv.classList.add("stormwindChampion");
			},750);
			setTimeout(function() {
				document.getElementById("game").classList.add("epicFlipAnim");
				setTimeout(function() {
					document.getElementById("game").classList.remove("epicFlipAnim");
				},1000);
			},2000);
		} else if (nameOfCard == "Deathwing") {
			playerCardDiv.classList.add("deathwing");
			setTimeout(function() {
				document.getElementById("game").classList.add("deathwingShake");
				setTimeout(function() {
					document.getElementById("game").classList.remove("deathwingShake");
				},1000);
			},1250);
		}
		else {
			playerCardDiv.classList.add('placeCardAnim')
		}
		playerAttackValue.classList.add("attackValue")
		playerHealthValue.classList.add("healthValue")
		playerAttackValueBackground.classList.add("attackValueBackground")
		playerHealthValueBackground.classList.add("healthValueBackground")
		legendary.classList.add("legendaryinplay");
		divineShield.classList.add("divineShield");
		taunt.classList.add("taunt");
		playerCardDiv.appendChild(playerAttackValueBackground)
		playerCardDiv.appendChild(playerHealthValueBackground)
		playerCardDiv.appendChild(divineShield)
		playerCardDiv.appendChild(taunt)
		playerCardDiv.appendChild(legendary)
		playerAttackValueBackground.appendChild(playerAttackValue)
		playerHealthValueBackground.appendChild(playerHealthValue)
		playerAttackValue.innerText = this.attack
		playerHealthValue.innerText = this.health
		playerCardDiv.style.backgroundImage = "url('" + this.imageString + "')";
		playerCardDiv.style.backgroundPosition = "center";
		id1 += 1
		return playerCardDiv
	}
	// function to create the card in hand element for the player
	getPlayerCardsInHandHTML() {
		const playerCardInHandDiv = document.createElement('div')
		const playerCardFaceInHandDiv = document.createElement('div')
		const playerCardBorderInHandDiv = document.createElement('div')
		const playerAttackValueInHand = document.createElement('div')
		const playerHealthValueInHand = document.createElement('div')
		const playerManaValueInHand = document.createElement('div')
		const playerInfoValueInHand = document.createElement('div')
		const playerNameValueInHand = document.createElement('div')
		const tutorialHintValueInHand = document.createElement('div')
		playerCardInHandDiv.classList.add("card")
		playerCardFaceInHandDiv.classList.add("card-face")
		playerCardBorderInHandDiv.classList.add("card-border")
		playerAttackValueInHand.classList.add("cardAttackValue")
		playerHealthValueInHand.classList.add("cardHealthValue")
		playerManaValueInHand.classList.add("cardManaValue")
		playerInfoValueInHand.classList.add("cardInfoValue")
		playerNameValueInHand.classList.add("cardNameValue")
		tutorialHintValueInHand.classList.add("cardtutorialhint")
		playerCardInHandDiv.appendChild(playerCardFaceInHandDiv)
		playerCardFaceInHandDiv.appendChild(playerAttackValueInHand)
		playerCardFaceInHandDiv.appendChild(playerHealthValueInHand)
		playerCardFaceInHandDiv.appendChild(playerManaValueInHand)
		playerCardFaceInHandDiv.appendChild(playerInfoValueInHand)
		playerCardFaceInHandDiv.appendChild(playerCardBorderInHandDiv)
		playerCardFaceInHandDiv.appendChild(playerNameValueInHand)
		playerCardFaceInHandDiv.appendChild(tutorialHintValueInHand)
		// if (isTutorial == true) {}
		let tutorialHintText = 'Mana Cost\nAttack' + '                     ' + 'Health';
		tutorialHintValueInHand.innerText = tutorialHintText
		playerAttackValueInHand.innerText = this.attack
		playerHealthValueInHand.innerText = this.health
		playerManaValueInHand.innerText = this.mana
		playerInfoValueInHand.innerText = this.info
		playerNameValueInHand.innerText = this.name
		playerCardFaceInHandDiv.style.backgroundImage = "url('" + this.imageString + "')";
		return playerCardInHandDiv
	}
}
// function to create the full deck both the player and the opponent's deck
function freshDeck() {
	// deck in use by the player and computer
	let murloc_scout = new MinionCard(1, 1, 0, "", "src/cards/4.jpg", "Drathal", "Common")
	let alexstrasza = new MinionCard(8, 8, 9, "Battlecry: Set a hero's remaining Health to 15.", "src/cards/5.jpg", "Thraxal", "Legendary")
	let elite_tauren_chieftain = new MinionCard(5, 5, 5, "Battlecry: Give both players the power to ROCK! (Draw a card)", "src/cards/6.jpg", "Wyrith", "Legendary")
	let deathwing = new MinionCard(12, 12, 10, "Battlecry: Destroy all other minions and discard your hand.", "src/cards/1.jpg", "Sepheron", "Legendary")
	let elven_archer = new MinionCard(1, 1, 1, "", "src/cards/2.jpg", "Ryoko", "Common")
	let voodoo_doctor = new MinionCard(2, 1, 1, "", "src/cards/3.jpg", "Calothosk", "Common")
	let king_krush = new MinionCard(8, 8, 9, "Charge", "src/cards/4.jpg", "Archion", "Legendary")
	let ragnaros_the_firelord = new MinionCard(8, 8, 8, "", "src/cards/5.jpg", "Teirac", "Legendary")
	let lich_king = new MinionCard(8, 8, 8, "Taunt", "src/cards/6.jpg", "Novax", "Legendary")
	let acidic_swamp_ooze = new MinionCard(3, 2, 2, "", "src/cards/1.jpg", "Valisha", "Common")
	let bloodfen_raptor = new MinionCard(3, 2, 2, "", "src/cards/2.jpg", "Mandrasath", "Common")
	let lifedrinker = new MinionCard(3, 3, 4, "Battlecry: Deal 3 damage to the enemy hero. Restore 3 Health to your hero.", "src/cards/3.jpg", "Rezoth", "Rare")
	let boar = new MinionCard(1, 1, 1, "", "src/cards/boar.jpg", "Temedius", "Common")
	let razorfen_hunter = new MinionCard(2, 3, 3, "Battlecry: Summon a 1/1 Boar.", "src/cards/4.jpg", "Razorfen Hunter", "Common")
	let murloc_tidehunter = new MinionCard(2, 1, 2, "Battlecry: Summon a 1/1 Murloc Scout.", "src/cards/5.jpg", "Murloc Tidehunter", "Common")
	let leeroy_jenkins = new MinionCard(6, 2, 4, "Charge. Battlecry: Summon two 1/1 Whelps for your opponent.", "src/cards/6.jpg", "Malthor", "Legendary")
	let gnomish_inventor = new MinionCard(2, 4, 4, "Battlecry: Draw a card.", "src/cards/1.jpg", "Gnomish Inventor", "Common")
	let senjin_shieldmasta = new MinionCard(3, 5, 4, "Taunt", "src/cards/2.jpg", "Draugh", "Common")
	let saronite_chain_gang = new MinionCard(2, 3, 4, "Taunt\nBattlecry: Summon a copy of this minion.", "src/cards/3.jpg", "Drayce Gang", "Rare")
	let archmage = new MinionCard(4, 7, 6, "", "src/cards/4.jpg", "Rinkyu", "Common")
	let boulderfist_ogre = new MinionCard(6, 7, 6, "", "src/cards/5.jpg", "Rhox", "Common")
	let stormwind_champion = new MinionCard(7, 7, 7, "Battlecry: Your other minions have +1/+1.", "src/cards/6.jpg", "Mandrasath", "Common")
	let whelp = new MinionCard(1, 1, 1, "", "src/cards/1.jpg", "Whelp", "Common")
	let devout_adventurer = new MinionCard(2, 2, 2, "Divine Shield", "src/cards/2.jpg", "Devoutor", "Common")
	let coldwraith = new MinionCard(3, 4, 3, "Battlecry: If an enemy is Frozen, draw a card.", "src/cards/2.jpg", "Coldwra", "Common")
	let water_elemental = new MinionCard(3, 6, 4, "Freeze any character damaged by this minion.", "src/cards/3.jpg", "Water Elemental", "Common")
	let ghoul = new MinionCard(2, 2, 2, "", "src/cards/5.jpg", "Ghoul", "Common")
	let skeletal_knight = new MinionCard(2, 3, 1, "Deathrattle: Add a Knights of the Frozen Throne card to your opponent's hand.", "src/cards/4.jpg", "Skeletal Knight", "Common")
	let glacial_shard = new MinionCard(2, 1, 1, "Battlecry: Freeze an enemy.", "src/cards/3.jpg", "Glacial Shard", "Common")
	let maexxna = new MinionCard(2, 8, 6, "Poisonous", "src/cards/2.jpg", "Maexxna", "Legendary")
	let trapped_soul = new MinionCard(2, 6, 3, "", "src/cards/1.jpg", "Trapped Soul", "Common")
	let sludge_belcher = new MinionCard(3, 5, 5, "Taunt\nDeathrattle: Summon a 1/2 Slime with Taunt.", "src/cards/6.jpg", "Sludge Belcher", "Rare")
	let grim_necromancer = new MinionCard(2, 4, 4, "Battlecry: Summon two 1/1 Skeletons.", "src/cards/5.jpg", "Grim Necromancer", "Common")
	let skeleton = new MinionCard(1, 1, 1, "", "src/cards/4.jpg", "Skeleton", "Common")
	let slime = new MinionCard(1, 2, 1, "Taunt", "src/cards/3.jpg", "Slime", "Common")
	let the_black_knight = new MinionCard(4, 5, 6, "Battlecry: Destroy an enemy minion with Taunt.", "src/cards/2.jpg", "The Black Knight", "Legendary")
	let bonemare = new MinionCard(5, 5, 7, "Battlecry: Give a friendly minion +4/+4 and Taunt.", "src/cards/1.jpg", "Bonemare", "Common")
	// spell cards

	return [
	// player's deck
	elite_tauren_chieftain,
	devout_adventurer,
	devout_adventurer,
	deathwing,
	elven_archer,
	elven_archer,
	voodoo_doctor,
	voodoo_doctor,
	king_krush,
	ragnaros_the_firelord,
	lich_king,
	acidic_swamp_ooze,
	acidic_swamp_ooze,
	lifedrinker,
	lifedrinker,
	alexstrasza,
	razorfen_hunter,
	razorfen_hunter,
	murloc_tidehunter,
	murloc_tidehunter,
	leeroy_jenkins,
	gnomish_inventor,
	gnomish_inventor,
	senjin_shieldmasta,
	senjin_shieldmasta,
	saronite_chain_gang,
	saronite_chain_gang,
	archmage,
	boulderfist_ogre,
	boulderfist_ogre,
	stormwind_champion,

	// lich king's deck
	coldwraith,
	coldwraith,
	water_elemental,
	water_elemental,
	ghoul,
	ghoul,
	skeletal_knight,
	skeletal_knight,
	skeletal_knight,
	glacial_shard,
	glacial_shard,
	saronite_chain_gang,
	saronite_chain_gang,
	maexxna,
	maexxna,
	trapped_soul,
	trapped_soul,
	sludge_belcher,
	sludge_belcher,
	grim_necromancer,
	grim_necromancer,
	skeleton,
	skeleton,
	slime,
	slime,
	the_black_knight,
	the_black_knight,
	bonemare,
	bonemare,

	// other (summoned from battlecries etc.)
	whelp,
	boar,
	murloc_scout
	]
}