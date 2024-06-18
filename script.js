// number

function animateValue(element, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        const currentValue = Math.floor(progress * (end - start) + start);

        if (element.classList.contains('number1')) {
            const valueString = currentValue.toLocaleString();
            element.innerHTML = valueString.replace(/,/g, '<i>,</i>');
        } else if (element.classList.contains('number2')) {
            element.innerHTML = currentValue + '<b>%</b>';
        } else if (element.classList.contains('number3')) {
            element.innerHTML = currentValue + '<b>+</b>';
        }

        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

// card

document.addEventListener('DOMContentLoaded', () => {
    const number1 = document.querySelector('.number1');
    const number2 = document.querySelector('.number2');
    const number3 = document.querySelector('.number3');

    animateValue(number1, 0, 100000, 3000);
    animateValue(number2, 0, 20, 3000);
    animateValue(number3, 0, 10, 3000);
});

document.addEventListener("DOMContentLoaded", function() {
    const cardCon = document.querySelector('.card_con');
    const cards = document.querySelectorAll('.main_card');
    let currentIndex = 0;

    function moveCards() {
        currentIndex++;
        if (currentIndex >= cards.length) {
            currentIndex = 0;
        }

        cards.forEach((card, index) => {
            card.style.transform = `translateX(-${currentIndex * (card.offsetWidth + 0)}px)`;
        });
    }

    setInterval(moveCards, 3000);

    // 롤링 배너 복제본 생성 index1
    let roller = document.querySelector('.rolling-list');
    roller.id = 'roller1'; // 아이디 부여

    let clone = roller.cloneNode(true);
    clone.id = 'roller2';
    document.querySelector('.rollingwrap').appendChild(clone); 

    document.querySelector('#roller1').style.left = '0px';
    document.querySelector('#roller2').style.left = document.querySelector('.rolling-list ul').offsetWidth + 'px';

    roller.classList.add('original');
    clone.classList.add('clone');

    // 애니메이션 일시 정지 및 재개
    document.querySelectorAll('.rolling-list').forEach((element) => {
        element.addEventListener('mouseover', () => {
            document.querySelectorAll('.rolling-list').forEach((el) => el.classList.add('paused'));
        });
        element.addEventListener('mouseout', () => {
            document.querySelectorAll('.rolling-list').forEach((el) => el.classList.remove('paused'));
        });
    });

    // 스크롤 애니메이션
    function handleScroll() {
        const siyear = document.getElementById('siyear');
        const siyearPosition = siyear.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (siyearPosition < screenPosition) {
            siyear.classList.add('show');
        }

        // 비디오 크기 애니메이션
        const video = document.getElementById('sivideo');
        const videoPosition = video.getBoundingClientRect().top;

        if (videoPosition < screenPosition) {
            video.style.transform = 'scale(1)';
            video.querySelector('iframe').style.width = '1128px';
            video.querySelector('iframe').style.height = '634px';
        } else {
            video.style.transform = 'scale(0.8)';
            video.querySelector('iframe').style.width = '1000px';
            video.querySelector('iframe').style.height = '170px';
        }
    }

    window.addEventListener('scroll', handleScroll);

    // 페이지 로드 시 intro 애니메이션 실행
    window.addEventListener('load', () => {
        document.getElementById('intro').classList.add('show');
    });
});

// index2
document.addEventListener('DOMContentLoaded', (event) => {
    const pins = document.querySelectorAll('#map-pin');
    const bubbles = document.querySelectorAll('.speech-bubble');

    pins.forEach((pin, index) => {
      const bubble = bubbles[index];
      if (!bubble) return;

      pin.addEventListener('mouseenter', (e) => {
        const rect = pin.getBoundingClientRect();
        bubble.style.left = `${rect.right + 40}px`;
        bubble.style.top = `${rect.top +10}px`;
        bubble.style.display = 'block';
      });

      pin.addEventListener('mouseleave', () => {
        bubble.style.display = 'none';
      });

      bubble.addEventListener('mouseenter', () => {
        bubble.style.display = 'block';
      });

      bubble.addEventListener('mouseleave', () => {
        bubble.style.display = 'none';
      });
    });
  });