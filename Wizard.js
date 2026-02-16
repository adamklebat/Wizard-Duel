/*Wizard Duel
Background
You are building a small console-based game for a wizard academy.
Wizards train by dueling each other using spells.
Each wizard behaves differently, but the duel system should work with all of them.
This assignment focuses on design and structure, not visuals.

Goal
Create a duel game where:
● Two wizards fight until one is defeated
● The system is easy to extend
● Rules cannot be broken accidentally

Main Requirements
❖ Wizards
● Every wizard must have:
○ name
○ health
○ mana
● Health and mana must not be changeable directly from outside the wizard
● Wizards control how their data changes

❖ Spells
● Wizards can cast spells on each other
● Casting a spell:
○ costs mana
○ reduces the opponent’s health
● Spell behavior must differ between wizard types

Wizard Types
● Implement at least two wizard types
● Wizard types must share common behavior
● Each type must define how its spell works

Duel Logic
● Create a duel system that:
○ runs the fight
○ does not know spell details
○ does not access wizard data directly
● The duel system should work with any wizard type
Rules to Enforce
● Health must never go below zero
● Spells fail if mana is insufficient
● Defeated wizards cannot act
● The duel ends automatically when one wizard is defeated

Restrictions
● Do not modify wizard health or mana directly
● Do not hard-code wizard types in the duel logic
● Do not duplicate logic between wizard types
● Do not put duel rules outside the wizard system */

// Define the Wizard class
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





        

