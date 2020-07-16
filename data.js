var puzzle = [
  [00, 01, 02, 03, 04, 05, 06, 07, 08],
  [09, 10, 11, 12, 13, 14, 15, 16, 17],
  [18, 19, 20, 21, 22, 23, 24, 25, 26],
  [27, 28, 29, 30, 31, 32, 33, 34, 35],
  [36, 37, 38, 39, 40, 41, 42, 43, 44],
  [45, 46, 47, 48, 49, 50, 51, 52, 53],
  [54, 55, 56, 57, 58, 59, 60, 61, 62],
  [63, 64, 65, 66, 67, 68, 69, 70, 71],
  [72, 73, 74, 75, 76, 77, 78, 79, 80]
];

var board = [
    "00", "01", "02", "03", "04", "05", "06", "07", "08",
    "09", "10", "11", "12", "13", "14", "15", "16", "17",
    "18", "19", "20", "21", "22", "23", "24", "25", "26",
    "27", "28", "29", "30", "31", "32", "33", "34", "35",
    "36", "37", "38", "39", "40", "41", "42", "43", "44",
    "45", "46", "47", "48", "49", "50", "51", "52", "53",
    "54", "55", "56", "57", "58", "59", "60", "61", "62",
    "63", "64", "65", "66", "67", "68", "69", "70", "71",
    "72", "73", "74", "75", "76", "77", "78", "79", "80"
];

var boardLength = board.length;


function newBoard() {
  for (i = 0; i < cells.length; i++) {
    cells[i].style.border = "2px solid #b5b2c2";
  }
  for (var i = 0; i < boardLength; i++) {
    document.getElementById(board[i]).style.background = "#a0c1d1";
    document.getElementById(board[i]).style.border = "2px solid #5a7d7c";
    document.getElementById(board[i]).innerHTML = '<div class="staticcell">' + Math.floor(Math.random() * 9 + 1) + '</div>';
  }
  for (var i = 0; i < 80; i++) {
    var rand = Math.floor(Math.random() * 81);
    document.getElementById(board[rand]).innerHTML = '<div id="' + board[rand] + '"><input + class="inputcell" maxlength="1"></div>'
  }
};

//Number.isInteger()
function check() {
  for (var i = 0; i < 5; i++) {
    var rand = Math.floor(Math.random() * 81);
    document.getElementById(board[rand]).style.background = "#D89A9E";
  }
};

var clicks = 0;
var cells = document.getElementsByClassName('bigcell');

function pattern() {
  clicks = clicks + 1
  for (i = 0; i < cells.length; i++) {
    cells[i].style.border = "2px solid black";
  }
  for (i = 0; i < boardLength; i++) {
    document.getElementById(board[i]).innerHTML = "";
    document.getElementById(board[i]).style.border = "2px solid black";
  }

  /*CHECKERBOARD*/
  if (clicks == 1) {
    for (var i = 0; i < boardLength; i++) {
      var temp = i % 2;
      if (temp == 0) {
        document.getElementById(board[i]).style.background = "#232c33";
      }
      if (temp == 1) {
        document.getElementById(board[i]).style.background = "white";
      }
      }
    }

  /*RAINBOW*/
  if (clicks == 2) {
    var tone1 = ["00", "08", "72", "80"];
    var tone2 = ["01", "07", "09", "17", "63", "71", "73", "79"];
    var tone3 = ["02", "06", "10", "16", "18", "26", "54", "64", "74", "62", "70", "78"];
    var tone4 = ["03", "11", "19", "27", "05", "15", "25", "35", "45", "55", "65", "75", "53", "61", "69", "77"];
    var tone5 = ["04", "12", "14", "20", "24", "34", "44", "28", "36", "46", "56", "66", "76", "68", "60", "52"];
    var tone6 = ["13", "23", "33", "43", "51", "59", "67", "57", "47", "37", "29", "21"];
    var tone7 = ["22", "32", "42", "50", "58", "48", "38", "30"];
    var tone8 = ["31", "41", "49", "39"];
    var tone9 = ["40"];
    var tones = [tone1, tone2, tone3, tone4, tone5, tone6, tone7, tone8, tone9];
    var colors = ["#4f000b", "#e71d36", "#f46036", "#e5d352", "#32965d", "#063a74", "#265e92", "#6f5f95", "#fef8ec"];
    for (var i = 0; i < 9; i++) {
      tlength = tones[i].length;
      list = tones[i];
      color = colors[i];
      for (var y = 0; y < tlength; y++) {
        document.getElementById(list[y]).style.background = color;
      }
    }
  }
  /*HEART*/
  if (clicks == 3) {
    var blue = ["00", "01", "02", "03", "04", "05", "06", "07", "08", "72", "73", "74", "75", "76", "77", "78", "79", "80", "09", "10", "13", "16", "17", "18", "27", "36", "45", "46", "54", "55", "56", "63", "64", "65", "66", "68", "69", "70", "71", "60", "61", "62", "52", "53", "44", "35", "26"];
    var black = ["11", "12", "14", "15", "19", "22", "25", "28", "37", "47", "57", "67", "59", "51", "43", "34"];
    var white = ["20"];
    var red = ["21", "23", "24", "29", "30", "31", "32", "33", "38", "39", "40", "41", "48", "49"];
    var dred = ["50", "42", "58"];
    var tones = [blue, black, white, red, dred];
    var colors = ["#2092EC", "#000000", "#ffffff", "#ff0000", "#991200"]
    for (var i = 0; i < 5; i++) {
      tlength = tones[i].length;
      list = tones[i];
      color = colors[i];
      console.log(color)
      for (var y = 0; y < tlength; y++) {
        document.getElementById(list[y]).style.background = color;
      }
    }
  clicks = 0
  }
};

var beginCell = '<td class="cell">'

function inCell(val) {
  return '<td class="cell" id="' + val + '">\n<input type="number" maxlength="1">\n</td>'
};
