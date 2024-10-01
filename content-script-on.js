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
		<input type="color" id="colorPickerFlow" value="#696969">
		<label for="colorPickerFlow">Flow elements</label>
	</div>

	<div>
		<input type="color" id="colorPickerNonSemantic" value="#808080">
		<label for="colorPickerNonSemantic">Non-semantic elements</label>
	</div>

	<div>
		<input type="color" id="colorPickerSections" value="#4169e1">
		<label for="colorPickerSections">Sectioning elements</label>
	</div>

	<div>
		<input type="color" id="colorPickerText" value="#000000">
		<label for="colorPickerText">Text elements</label>
	</div>

	<div>
		<input type="color" id="colorPickerMedia" value="#adff2f">
		<label for="colorPickerMedia">Media elements</label>
	</div>

	<div>
		<input type="color" id="colorPickerInteractive" value="#ffff00">
		<label for="colorPickerInteractive">Interactive elements</label>
	</div>

	<div>
		<input type="color" id="colorPickerEmbed" value="#0000ff">
		<label for="colorPickerEmbed">Embedded/Other browsing contexts</label>
	</div>

	<div>
		<input type="color" id="colorPickerTables" value="#ff7f50">
		<label for="colorPickerTables">Tables</label>
	</div>

	<div>
		<input type="color" id="colorPickerDeprecated" value="#ff0000">
		<label for="colorPickerDeprecated">Deprecated</label>
	</div>

	<div>
		<input type="color" id="colorPickerPseudo" value="#da70d6">
		<label for="colorPickerPseudo">Pseudo-elelments</label>
	</div>
`);
document.body.appendChild(extensionGUI);

document.getElementById('colorPickerFlow').addEventListener('input', function(event) {
	const color = event.target.value;
	document.documentElement.style.setProperty('--flow-color', color);	
});

document.getElementById('colorPickerNonSemantic').addEventListener('input', function(event) {
	const color = event.target.value;
	document.documentElement.style.setProperty('--non-semantic-color', color);
});

document.getElementById('colorPickerSections').addEventListener('input', function(event) {
	const color = event.target.value;
	document.documentElement.style.setProperty('--sectioning-color', color);
});

document.getElementById('colorPickerText').addEventListener('input', function(event) {
	const color = event.target.value;
	document.documentElement.style.setProperty('--text-color', color);	
});

document.getElementById('colorPickerMedia').addEventListener('input', function(event) {
	const color = event.target.value;
	document.documentElement.style.setProperty('--media-color', color);
});

document.getElementById('colorPickerInteractive').addEventListener('input', function(event) {
	const color = event.target.value;
	document.documentElement.style.setProperty('--interactive-color', color);
});

document.getElementById('colorPickerEmbed').addEventListener('input', function(event) {
	const color = event.target.value;
	document.documentElement.style.setProperty('--embedded-color', color);
});

document.getElementById('colorPickerTables').addEventListener('input', function(event) {
	const color = event.target.value;
	document.documentElement.style.setProperty('--tables-color', color);
});

document.getElementById('colorPickerDeprecated').addEventListener('input', function(event) {
	const color = event.target.value;
	document.documentElement.style.setProperty('--deprecated-color', color);
});

document.getElementById('colorPickerPseudo').addEventListener('input', function(event) {
	const color = event.target.value;
	document.documentElement.style.setProperty('--pseudoelements-color', color);
});

