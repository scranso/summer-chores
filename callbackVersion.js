function fallsAsleep() {
   if (Math.random() < 0.2) {
        return true; 
    } else {
        return false;
    }
}

function doSummerChores(name) {
    mowYard(name,() => {
        weedEat(name,() => {
            trimHedges(name,() => {
                collectWood(name,() => {
                    waterGarden(name,(name) => console.log(`${name} has finished her chores!`));
                })
            })
        })
    })
}

function mowYard(name, callback) {
    setTimeout(() => {
        console.log(`${name} mowed the yard.`);
        callback(name, trimHedges)
      }, 2000);
}

function weedEat(name, callback) {
    const didFallAsleep = fallsAsleep();
    setTimeout(() => {
        if (!didFallAsleep) {
            console.log(`${name} finished using the weed eater.`);
            callback(name, collectWood);
        } else {
            console.log(`${name} fell asleep after mowing the yard.`)
        }
    }, 1500)
}

function trimHedges(name, callback) {
    const didFallAsleep = fallsAsleep();
    setTimeout(() => {
        if (!didFallAsleep) {
            console.log(`${name} finished trimming the hedges.`);
            callback(name, waterGarden);
        } else {
            console.log(`${name} fell asleep after weed eating the yard.`)
        }
    }, 1000)
}

function collectWood(name, callback) {
    const didFallAsleep = fallsAsleep();
    setTimeout(() => {
        if (!didFallAsleep) {
            console.log(`${name} finished collecting wood.`);
            callback(name);
        } else {
            console.log(`${name} fell asleep after trimming the hedges.`)
        }
    }, 2500)
}

function waterGarden(name, callback) {
    const didFallAsleep = fallsAsleep();
    setTimeout(() => {
        if (!didFallAsleep) {
            console.log(`${name} finished watering the garden.`);
            callback(name);
            // console.log("Sarah finished all their chores!");
        } else {
            console.log(`${name} fell asleep after collecting wood.`)
        }
    }, 500)
}

let name = "Sarah";
doSummerChores(name);

