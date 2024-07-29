// Login functionality
document.getElementById('login-btn').addEventListener('click', (e) => {
	e.preventDefault();
	const username = document.getElementById('username').value;
	const password = document.getElementById('password').value;
	// Replace with actual login logic
	const token = jwt.sign({ username });
	localStorage.setItem('token', token);
	alert('Logged in successfully!');
});