const createPets = function(name,species){
    const pet = {
        name: name,
        species:species,
        isTired: 5,
        sleep: function(){
            console.log(` ${this.name} needs a nap. Zzz… `);
            this.isTired = 1;
        },
        play: function(){
            if (this.isTired === 10){
                console.log(`To tired to play`);
            } else {
                this.isTired += 1;
                console.log(`Yay! ${this.name} loves to play!`)
            }
        }
    };
    return pet;
};
const sora = createPets("Sora", "ferret");
const clover = createPets("Clover","rabbit");
const baxter = createPets("Baxter","hamster");
const cleo = createPets("Cleo","rat");
const francine = createPets("Francine","turtle");
//console.log(sora,clover,baxter,cleo,francine);
clover.sleep();
baxter.play();
console.log(clover,baxter);