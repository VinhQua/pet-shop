button = document.querySelector("button");
allpets = [];
petlist = document.querySelector(".all-pets");
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
    allpets.push(pet);
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
//console.log(clover,baxter);
clover.isTired = 8;
francine.isTired = 9;
button.addEventListener('click',function(){
    showPets(allpets);
    button.disabled = true;
});
const showPets = function(petArray){
    for (let pet of petArray){
        let petStatus = `is ready to play!`;
        if (pet.isTired >= 7){
            petStatus ="is sleeping.";
        }
        const li = document.createElement("li");
        li.innerHTML = `<li><span class="pet-name"> ${pet.name} </span> the ${pet.species} ${petStatus} </li>`
        petlist.append(li);
    }
};
