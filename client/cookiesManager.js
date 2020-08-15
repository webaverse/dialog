// import jsCookie from './node_modules/js-cookie/src/js.cookie.js';

const jsCookie = new Map();

const USER_COOKIE = 'mediasoup-demo.user';
const DEVICES_COOKIE = 'mediasoup-demo.devices';

export function getUser()
{
	return jsCookie.get(USER_COOKIE);
}

export function setUser({ displayName })
{
	jsCookie.set(USER_COOKIE, { displayName });
}

export function getDevices()
{
	return jsCookie.get(DEVICES_COOKIE);
}

export function setDevices({ webcamEnabled })
{
	jsCookie.set(DEVICES_COOKIE, { webcamEnabled });
}
