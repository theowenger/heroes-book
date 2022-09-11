class gameMaker {
    constructor(scenes) {
        this.scene = scene
        this.currentScene = currentScene
    }

};

class scene {
    constructor(title, image, description,choices){
        this.title = title
        this.image = image
        this.description = description
        this.choices = choices
}};
const sceneKidRoom = new scene('kidroom', '<:https://..', 'Vous etes dans la chambre du kid');
const sceneCorridor = new scene('corridor', '<:https://..', 'Vous etes dans le couloir');
const sceneSaloon = new scene('saloon', '<:https://..', 'Vous etes dans le salon');
const sceneKitchen = new scene('kitchen', '<:https://..', 'Vous etes dans la cuisine');
const sceneParentRoom = new scene('parentroom', '<:https://..', 'Vous etes dans la chambre des parents');
const sceneBathroom = new scene('bathroom', '<:https://..', 'Vous etes dans la salle de bain');
const sceneNightmare = new scene('nightmare', '<:https://..', 'Vous etes dans une reve');
const sceneCave = new scene('cave', '<:https://..', 'Vous etes dans la cave');

class currentScene {
    constructor(currentTitle, currentImage, currentDescription,currentChoices){
        this.currentTitle = scene.title
        this.currentImage = scene.image
        this.currentDescription = scene.description
        this.currentChoices = scene.choices
}};
let insertCurrentScene = document.getElementById("game-container").innerHTML= `<div class="description__title">
        <h2 id="tittleAdd">${currentScene.title}</h2>
    </div>

    <div class="container__image" id="imgAdd">
    ${currentScene.image}
    </div>

    <div class="description__text">
        <h2 id="textAdd">${currentScene.description}</h2>
    </div>

    <div class="container__answer" id="addChoices">
    ${currentScene.choices}
    </div>`