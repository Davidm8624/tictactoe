"use strict";

let player = "X";
let turn = 0;
let xPoints = 0;
let oPoints = 0;
let active = true;
let buttons = [document.getElementById(`buttona1`), document.getElementById(`buttona2`), document.getElementById(`buttona3`), document.getElementById(`buttonb1`), document.getElementById(`buttonb2`), document.getElementById(`buttonb3`), document.getElementById(`buttonc1`), document.getElementById(`buttonc2`), document.getElementById(`buttonc3`)]


function mark(blank) {

	if (active == false){
		return;
	}
	if (document.getElementById(`button${blank}`).classList.contains("usedX") || document.getElementById(`button${blank}`).classList.contains("usedO")) {
		return;
	} else {
		document.getElementById(`button${blank}`).textContent = player;
		document.getElementById(`button${blank}`).classList.add(`used${player}`);
	}

	if (player == "X") {
		player = "O";
		document.getElementById("player").textContent = "Player: O";
	} else {
		player = "X";
		document.getElementById("player").textContent = "Player: X";
	}

	turn++;
	document.getElementById("turn").textContent = `Turn: ${turn}`;
	checkWin();
}

function checkWin() {
	if (buttons[0].classList.contains("usedX") &&
		buttons[1].classList.contains("usedX") &&
		buttons[2].classList.contains("usedX")) {
		buttons[0].classList.add("winningButtons")
		buttons[1].classList.add("winningButtons")
		buttons[2].classList.add("winningButtons")
		winner("X");
		return;
	}
	if (buttons[0].classList.contains("usedO") &&
		buttons[1].classList.contains("usedO") &&
		buttons[2].classList.contains("usedO")) {
		buttons[0].classList.add("winningButtons")
		buttons[1].classList.add("winningButtons")
		buttons[2].classList.add("winningButtons")
		winner("O");
		return;
	}
	if (buttons[3].classList.contains("usedX") &&
		buttons[4].classList.contains("usedX") &&
		buttons[5].classList.contains("usedX")) {
		buttons[3].classList.add("winningButtons")
		buttons[4].classList.add("winningButtons")
		buttons[5].classList.add("winningButtons")
		winner("X");
		return;
	}
	if (buttons[3].classList.contains("usedO") &&
		buttons[4].classList.contains("usedO") &&
		buttons[5].classList.contains("usedO")) {
		buttons[3].classList.add("winningButtons")
		buttons[4].classList.add("winningButtons")
		buttons[5].classList.add("winningButtons")
		winner("O");
		return;
	}
	if (buttons[6].classList.contains("usedX") &&
		buttons[7].classList.contains("usedX") &&
		buttons[8].classList.contains("usedX")) {
		buttons[6].classList.add("winningButtons")
		buttons[7].classList.add("winningButtons")
		buttons[8].classList.add("winningButtons")
		winner("X");
		return;
	}
	if (buttons[6].classList.contains("usedO") &&
		buttons[7].classList.contains("usedO") &&
		buttons[8].classList.contains("usedO")) {
		buttons[6].classList.add("winningButtons")
		buttons[7].classList.add("winningButtons")
		buttons[8].classList.add("winningButtons")
		winner("O");
		return;
	}


	if (buttons[0].classList.contains("usedX") &&
		buttons[3].classList.contains("usedX") &&
		buttons[6].classList.contains("usedX")) {
		buttons[0].classList.add("winningButtons")
		buttons[3].classList.add("winningButtons")
		buttons[6].classList.add("winningButtons")
		winner("X");
		return;
	}
	if (buttons[0].classList.contains("usedO") &&
		buttons[3].classList.contains("usedO") &&
		buttons[6].classList.contains("usedO")) {
		buttons[0].classList.add("winningButtons")
		buttons[3].classList.add("winningButtons")
		buttons[6].classList.add("winningButtons")
		winner("O");
		return;
	}
	if (buttons[1].classList.contains("usedX") &&
		buttons[4].classList.contains("usedX") &&
		buttons[7].classList.contains("usedX")) {
		buttons[1].classList.add("winningButtons")
		buttons[4].classList.add("winningButtons")
		buttons[7].classList.add("winningButtons")
		winner("X");
		return;
	}
	if (buttons[1].classList.contains("usedO") &&
		buttons[4].classList.contains("usedO") &&
		buttons[7].classList.contains("usedO")) {
		buttons[1].classList.add("winningButtons")
		buttons[4].classList.add("winningButtons")
		buttons[7].classList.add("winningButtons")
		winner("O");
		return;
	}
	if (buttons[2].classList.contains("usedX") &&
		buttons[5].classList.contains("usedX") &&
		buttons[8].classList.contains("usedX")) {
		buttons[2].classList.add("winningButtons")
		buttons[5].classList.add("winningButtons")
		buttons[8].classList.add("winningButtons")
		winner("X");
		return;
	}
	if (buttons[2].classList.contains("usedO") &&
		buttons[5].classList.contains("usedO") &&
		buttons[8].classList.contains("usedO")) {
		buttons[2].classList.add("winningButtons")
		buttons[5].classList.add("winningButtons")
		buttons[8].classList.add("winningButtons")
		winner("O");
		return;
	}


	if (buttons[0].classList.contains("usedX") &&
		buttons[4].classList.contains("usedX") &&
		buttons[8].classList.contains("usedX")) {
		buttons[0].classList.add("winningButtons")
		buttons[4].classList.add("winningButtons")
		buttons[8].classList.add("winningButtons")
		winner("X");
		return;
	}
	if (buttons[0].classList.contains("usedO") &&
		buttons[4].classList.contains("usedO") &&
		buttons[8].classList.contains("usedO")) {
		buttons[0].classList.add("winningButtons")
		buttons[4].classList.add("winningButtons")
		buttons[8].classList.add("winningButtons")
		winner("O");
		return;
	}
	if (buttons[2].classList.contains("usedX") &&
		buttons[4].classList.contains("usedX") &&
		buttons[6].classList.contains("usedX")) {
		buttons[2].classList.add("winningButtons")
		buttons[4].classList.add("winningButtons")
		buttons[6].classList.add("winningButtons")
		winner("X");
		return;
	}
	if (buttons[2].classList.contains("usedO") &&
		buttons[4].classList.contains("usedO") &&
		buttons[6].classList.contains("usedO")) {
		buttons[2].classList.add("winningButtons")
		buttons[4].classList.add("winningButtons")
		buttons[6].classList.add("winningButtons")
		winner("O");
		return;
	}

	if (turn >= 9) {
		document.getElementById("player").textContent = "DRAW";
	}
}

function winner(winner) {
	document.getElementById("player").textContent = window.alert("congrats you won!");
	document.getElementsByClassName("button");
	if (winner == "X") {
		xPoints++;
		document.getElementById("xPoints").textContent = `X = ${xPoints}`;
	} else if (winner == "O") {
		oPoints++;
		document.getElementById("oPoints").textContent = `O = ${oPoints}`;
	}
	active = false;
}

function restart() {
	for (let i = 0; i < 9; i++) {
		document.getElementsByClassName("button")[i].textContent = "";
		document.getElementsByClassName("button")[i].classList.remove("winningButtons");

	}
	for (let i = 0; i < buttons.length; i++) {
		buttons[i].textContent = "";
		buttons[i].classList.remove("usedX");
		buttons[i].classList.remove("usedO");
	}

	turn = 0
	player = "X"
	document.getElementById("player").textContent = `Player: ${player}`;
	document.getElementById("turn").textContent = `Turn: ${turn}`;
}