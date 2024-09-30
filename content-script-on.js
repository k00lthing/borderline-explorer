extensionGUI = document.createElement("div")
extensionGUI.id = "extension-gui";

var isDragging = false;
var offsetX, offsetY;

extensionGUI.addEventListener('mousedown', function(event) {
	isDragging = true;
	offsetX = event.clientX - extensionGUI.offsetLeft;
	offsetY = event.clientY - extensionGUI.offsetTop;
});

document.addEventListener('mousemove', function(event) {
	if (isDragging) {
		extensionGUI.style.left = `${event.clientX - offsetX}px`;
		extensionGUI.style.top = `${event.clientY - offsetY}px`;
	}
});

document.addEventListener('mouseup', function() {
	isDragging = false;
});

extensionGUI.insertAdjacentHTML('beforeend', `
	<div>
		<input type="color" id="colorPickerNonSemantic" value="#808080">
		<label for="colorPicker">Non-semantic elements</label>
	</div>

	<div>
		<input type="color" id="colorPickerText" value="#000000">
		<label for="colorPickerText">Text elements</label>
	</div>

	<div>
		<input type="color" id="colorPickerTables" value="#ff7f50">
		<label for="colorPickerTables">Tables</label>
	</div>

	<div>
		<input type="color" id="colorPickerMedia" value="#adff2f">
		<label for="colorPickerMedia">Media elements</label>
	</div>

	<div>
		<input type="color" id="colorPickerFrames" value="#0000ff">
		<label for="colorPickerFrames">Different browsing contexts</label>
	</div>



`);
document.body.appendChild(extensionGUI);

document.getElementById('colorPickerNonSemantic').addEventListener('input', function(event) {
	const color = event.target.value;
	document.documentElement.style.setProperty('--non-semantic-color', color);
	
});

document.getElementById('colorPickerText').addEventListener('input', function(event) {
	const color = event.target.value;
	document.documentElement.style.setProperty('--text-color', color);
	
});

document.getElementById('colorPickerTables').addEventListener('input', function(event) {
	const color = event.target.value;
	document.documentElement.style.setProperty('--tables-color', color);
	
});

document.getElementById('colorPickerMedia').addEventListener('input', function(event) {
	const color = event.target.value;
	document.documentElement.style.setProperty('--media-color', color);
	
});


document.getElementById('colorPickerFrames').addEventListener('input', function(event) {
	const color = event.target.value;
	document.documentElement.style.setProperty('--frames-color', color);
	
});

