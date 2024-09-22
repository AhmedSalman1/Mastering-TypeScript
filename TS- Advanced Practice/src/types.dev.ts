let userInput: unknown;
let useName: string;

userInput = 5;
userInput = 'Max';

if (typeof userInput === 'string') {
	useName = userInput;
}

function generateError(msg: string, code: number): never {
	throw { message: msg, errorCode: code };
}

generateError('An error occurred!', 500);
