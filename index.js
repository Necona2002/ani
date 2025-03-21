const yesBtn  = document.querySelector('#yesBtn');
        const noBtn = document.querySelector('#noBtn');
        const carta = document.querySelector('#carta');
        
        yesBtn.addEventListener('click', function () {
            carta.style.display = 'block';
        });
        
        noBtn.addEventListener('mouseover', function () {
            const randomX = parseInt(Math.random() * 100);
            const randomY = parseInt(Math.random() * 100);
            noBtn.style.setProperty('top', randomY + '%');
            noBtn.style.setProperty('left', randomX + '%');
            noBtn.style.setProperty('transform', `translate(-${randomX}%, -${randomY}%)`);
        });