function linkSectionMaker () {
    const containerDiv = document.createElement("div"); 
    const linkDiv = document.createElement("div");
    const listUL = document.createElement("ul");
    const listLI = document.createElement("li");
    const linkA = document.createElement("a");

    containerDiv.appendChild(linkDiv);
    linkDiv.appendChild(listUL);   
    listUL.appendChild(listLI);
    listLI.appendChild(linkA);

    return containerDiv;

}

