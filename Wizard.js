
class Wizard {      
    constructor(name, health, mana) {   
        this.name = name;
        this.#health = health;
        this.#mana = mana;
    }

    #health;    
    #mana;      
    getHealth() {   // Return the current health of the wizard
        return this.#health;
    }
    getMana() {
        return this.#mana;
    }

    takeDamage(amount) {    // Reduce health by the damage amount, ensuring it does not go below zero
            this.#health -= amount;
            if (this.#health <= 0) {
                
            }

    }

    castSpell(spellCost, spellDamage, opponent) {   // Check if the wizard has enough mana to cast the spell
        if (this.#mana < spellCost) {
            console.log(`${this.name} does not have enough mana to cast the spell!`);
            return;
        }

        

        if (this.getHealth() <= 0) {    // Check if the wizard is already defeated
            console.log(`${this.name} is defeated and cannot cast spells!`);
            return;
        }

        attack(spellDamage, opponent);  // Call the attack function to apply damage to the opponent
        this.#mana -= spellCost;
    }   
}

function attack(damage, opponent) {     // Apply damage to the opponent and log the result
    opponent.takeDamage(damage);
    console.log(`${opponent.name} takes ${damage} damage! 
     ${opponent.name}'s health is now ${opponent.getHealth()}.
     ${opponent.name}'s mana is now ${opponent.getMana()}.`);
}



//input
const wizard1 = new Wizard("Gandalf", 100, 50);
const wizard2 = new Wizard("Harry Potter", 100, 50);

// Simulate a duel
wizard1.castSpell(10, 20, wizard2);  // Gandalf casts a spell on Harry Potter
wizard2.castSpell(15, 25, wizard1);  // Harry Potter casts a spell on Gandalf
wizard1.castSpell(20, 30, wizard2);  // Gandalf casts a stronger spell on Harry Potter
wizard2.castSpell(5, 10, wizard1);   // Harry Potter casts a weaker spell on Gandalf    





        

