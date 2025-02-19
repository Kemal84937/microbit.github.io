document.addEventListener('DOMContentLoaded', function () {
    const releaseText = document.getElementById('release-text');
    const latestRelease = "Version 0.1.0";
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

    function getRandomChar() {
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    releaseText.addEventListener('mouseenter', () => {
        let index = 0;
        let maskedText = Array.from({ length: latestRelease.length }, () => getRandomChar()).join('');
        releaseText.textContent = maskedText;
        const interval = setInterval(() => {
            if (index < latestRelease.length) {
                maskedText = maskedText.substring(0, index) + latestRelease[index] + 
                             Array.from({ length: latestRelease.length - index - 1 }, () => getRandomChar()).join('');
                releaseText.textContent = maskedText;
                index++;
            } else {
                clearInterval(interval);
            }
        }, 10);

        releaseText.addEventListener('mouseleave', () => {
            clearInterval(interval);
            releaseText.textContent = "Hover to reveal the latest release";
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const releaseText = document.getElementById('prerelease-text');
    const latestRelease = "Version 0.1.1 Release Candidate 3";
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()';

    function getRandomChar() {
        return characters.charAt(Math.floor(Math.random() * characters.length));
    }

    releaseText.addEventListener('mouseenter', () => {
        let index = 0;
        let maskedText = Array.from({ length: latestRelease.length }, () => getRandomChar()).join('');
        releaseText.textContent = maskedText;
        const interval = setInterval(() => {
            if (index < latestRelease.length) {
                maskedText = maskedText.substring(0, index) + latestRelease[index] + 
                             Array.from({ length: latestRelease.length - index - 1 }, () => getRandomChar()).join('');
                releaseText.textContent = maskedText;
                index++;
            } else {
                clearInterval(interval);
            }
        }, 10);

        releaseText.addEventListener('mouseleave', () => {
            clearInterval(interval);
            releaseText.textContent = "Hover to reveal the latest pre-release";
        });
    });
});