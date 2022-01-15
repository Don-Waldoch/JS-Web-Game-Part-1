// This function places the specified image at the given X, Y coordinates
function newImage (source, x, y) {
    let Image = document.createElement('img')
    Image.src = source
    Image.style.position = 'fixed'
    Image.style.left   = x + 'px'
    Image.style.bottom = y + 'px'
    document.body.append(Image)
    return Image
}

// This function places the specified item at the given X, Y coordinates
// The item can be picked up by the user with a double-click
function newItem (source, x, y) {
    let Item = newImage(source, x, y)
    Item.addEventListener('dblclick', function() {
        Item.remove()
    })
    return Item
}

// Fill the background with grass up to 60% of the screen height.
// Fill the rest of the background with sky
for (let x=0; x<window.innerWidth; x += 100) {
    for (let y=0; y<window.innerHeight; y += 100) {
        if (y < window.innerHeight * 0.6 ) {
            newImage('assets/grass.png', x, y)
        } else {
            newImage('assets/sky.png', x, y)
        }
    }
}

// Add images
let greenChar = newImage('assets/green-character.gif', 100, 100)
let pineTree  = newImage('assets/pine-tree.png',       450, 200)
let tree      = newImage('assets/tree.png',            200, 300)
let pillar    = newImage('assets/pillar.png',          350, 100)
let crate     = newImage('assets/crate.png',           150, 200)
let well      = newImage('assets/well.png',            500, 425)
let sword     = newImage('assets/sword.png',           500, 405)

//Add items the user can pick up
let shield = newItem('assets/sheild.png', 165, 185)
let staff  = newItem('assets/staff.png',  600, 100)
