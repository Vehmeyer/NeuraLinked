function linkSectionMaker () {
    const linkContainerDiv = document.createElement("div"); 
    const linkDiv = document.createElement("div");
    const listUL = document.createElement("ul");
    const listLI = document.createElement("li");
    const linkA = document.createElement("a");

    linkContainerDiv.appendChild(linkDiv);
    linkDiv.appendChild(listUL);   
    listUL.appendChild(listLI);
    listLI.appendChild(linkA);

    return linkContainerDiv;

}

function imageMaker () {
    const imageContainerDiv = document.createElement("div");
    const image = document.createElement("img");

    imageContainerDiv.appendChild(image);

    return imageContainerDiv;

}

function headlineMaker () {
    const headlineContainerDiv = document.createElement("div");
    const headline = document.createElement("h1");
    const headlineLink = document.createElement("a");

    headlineContainerDiv.appendChild(headline);
    headlineContainerDiv.appendChild(headlineLink);

    return headlineContainerDiv;
    
}