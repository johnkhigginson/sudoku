I used JSON to carry each individual game. The data from each JSON file
is implemented into the gameGrid, and the object is printed into <p> element
below the gameGrid.

All JSON files stored in the /games folder. (easy#.json, med#.json, hard#.json).

Chrome has a web-security that doesn't allow XMLHttpRequests. This is crucial to accessing gameboards. Please do the following:

If you're on windows,run:
"C:/Program Files (x86)/Google/Chrome/Application/chrome.exe" --disable-web-security --disable-gpu --user-data-dir=~/chromeTemp
