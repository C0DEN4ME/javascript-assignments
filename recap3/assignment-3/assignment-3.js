const target = document.querySelector('#target');
const agent = navigator.userAgent;
let browser = 'Unknown browser';
let version = '';
const browsers = [
  ['Edg/', 'Microsoft Edge'],
  ['OPR/', 'Opera'],
  ['Firefox/', 'Firefox'],
  ['Chrome/', 'Google Chrome'],
  ['Version/', 'Safari'],
];
for (const item of browsers) {
  if (agent.includes(item[0])) {
    browser = item[1];
    version = agent.split(item[0])[1].split(' ')[0];
    break;
  }
}
let os = 'Unknown operating system';
if (agent.includes('Android')) os = 'Android';
else if (/iPhone|iPad|iPod/.test(agent)) os = 'iOS';
else if (agent.includes('Windows')) os = 'Windows';
else if (agent.includes('Mac')) os = 'macOS';
else if (agent.includes('Linux')) os = 'Linux';
const now = new Date();
const date = now.toLocaleDateString('fi-FI', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});
const time = now.toLocaleTimeString('fi-FI', {
  hour: '2-digit',
  minute: '2-digit',
});
const details = [
  `Browser: ${browser} ${version}`,
  `Operating system: ${os}`,
  `Screen: ${screen.width} x ${screen.height}`,
  `Available screen: ${screen.availWidth} x ${screen.availHeight}`,
  `Browser window: ${window.innerWidth} x ${window.innerHeight}`,
  `Date: ${date}`,
  `Time: ${time}`,
];
for (const detail of details) {
  const p = document.createElement('p');
  p.textContent = detail;
  target.appendChild(p);
}
