// Mock JWT implementation
const jwt = {
	sign: (data) => {
		// Replace with actual JWT signing logic
		return `Bearer ${data.username}`;
	},
	verify: (token) => {
		// Replace with actual JWT verification logic
		return token.split(' ')[1];
	}
};




// Check for token on page load
const token = localStorage.getItem('token');
if (token) {
	const username = jwt.verify(token);
	alert(`Welcome back, ${username}!`); }