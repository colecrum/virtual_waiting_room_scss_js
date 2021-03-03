var theLine = [];

function takeANumber(currentLine) {
  var newName = document.getElementById('name').value
  var lineNumber = document.getElementById('lineNumber')
  currentLine.push(newName)
  numberMessage.innerHTML = "Welcome, " + newName + ". You are number " + currentLine.length + " in line."
}

function nowServing(currentline) {
  var servingMsg = document.getElementById('servingMsg')
  if (currentline.length < 1) {
    servingMsg.innerHTML = "There is noone in session!"
  } else {
    servingMsg.innerHTML = "Currently in session " + currentline[0] + "."
  }
}

function served(currentline) {
  var servedMsg = document.getElementById('servedMsg')
  if (currentline.length < 1) {
    servedMsg.innerHTML = "There is noone in session!"
  } else {
    servedMsg.innerHTML = "Thank You " + currentline.shift() + ". Your session has ended."
  }
}


function currentLine(thisLine){
  var currentMsg = document.getElementById('currentMsg')
  var lineArray = [];
  if(thisLine.length < 1) {
    currentMsg.innerHTML = "The line is currently empty."
  } else {
  for(var i=0; i<thisLine.length; i++) {
    lineArray.push(i+1 + ". "+ thisLine[i])
  }
  currentMsg.innerHTML = "The line is currently: " + lineArray.join(', ')
  }
}