let buttonClicked = () => {
	let name = document.getElementById("input").value
	document.getElementById("text").innerHTML = "Hi " + name
}
document.getElementById("btn").addEventListener("click", buttonClicked)
