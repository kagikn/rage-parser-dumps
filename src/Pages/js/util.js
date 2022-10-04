
function gameIdToName(id) {
    switch (id) {
        case "gta4": return "Grand Theft Auto IV";
        case "gta5": return "Grand Theft Auto V";
        case "gta6": return "Grand Theft Auto VI";
        case "rdr2": return "Red Dead Redemption";
        case "rdr3": return "Red Dead Redemption II";
        case "mp3":  return "Max Payne 3";
        case "mc4": return "Midnight Club: Los Angeles";
        default:     return "Unknown game";
    }
}

function gameIdToFormattedName(id) {
    let name = `<span class=\"${id}-font\">`;
    switch (id) {
        case "gta4": name += "Grand Theft Auto IV"; break;
        case "gta5": name += "Grand Theft Auto <span class=\"gta5-font-detail\">V</span>"; break;
        case "gta6": name += "Grand Theft Auto <span class=\"gta6-font-detail\">VI</span> <small>(soon™)</small>"; break;
        case "rdr2": name += "Red Dead Redemption"; break;
        case "rdr3": name += "Red Dead Redemption <span class=\"rdr3-font-detail\">II</span>"; break;
        case "mp3":  name += "MAX PAYNE <span class=\"mp3-font-detail\">3</span>"; break;
        case "mc4":  name += "Midnight Club: Los Angeles"; break;
        default:     name += "Unknown game"; break;
    }
    name += "</span>";
    return name;
}

function getDumpURL(game, build, ext) {
    return `dumps/${game}/b${build}.${ext}`;
}

function hideElement(element, hide) {
    if (hide) {
        element.classList.add("hidden");
    } else {
        element.classList.remove("hidden");
    }
}

function animateButtonClick(element) {
    if (element.animateButtonClickTimeout) {
        clearTimeout(element.animateButtonClickTimeout);
    }

    element.classList.add("btn-clicked");
    element.animateButtonClickTimeout = setTimeout(() => element.classList.remove("btn-clicked"), 200);
}

export { gameIdToName, gameIdToFormattedName, getDumpURL, hideElement, animateButtonClick };