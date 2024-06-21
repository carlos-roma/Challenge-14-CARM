let idleTime = 0;

const resetIdleTime = () => {
  idleTime = 0;
};

// Increment the idle time counter every minute.
const incrementIdleTime = () => {
  idleTime += 1;
  if (idleTime >= 30) { // 30 minutes
    alert('You have been logged out due to inactivity.');
    window.location.href = '/logout';
  }
};

document.addEventListener('mousemove', resetIdleTime);
document.addEventListener('keypress', resetIdleTime);

setInterval(incrementIdleTime, 60 * 1000); // 1 minute
