// Установите начальное количество секунд
let totalSeconds = 59;

// Функция для форматирования времени в формат mm:ss
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60);
    const secondsLeft = seconds % 60;
    return `${String(minutes).padStart(2, '0')}:${String(secondsLeft).padStart(2, '0')}`;
}

// Функция для обновления таймера на странице
function updateTimer() {
    const timerElement = document.getElementById('timer');
    timerElement.textContent = formatTime(totalSeconds);

    if (totalSeconds <= 0) {
        clearInterval(timerInterval);
        alert('Вы победили в конкурсе!');
        // Повышенный уровень сложности #2: Загрузка файла
        // window.location.href = 'path/to/your/file.ext';
    }
    totalSeconds--;
}

// Запуск таймера
const timerInterval = setInterval(updateTimer, 1000);
updateTimer(); // Для немедленного обновления таймера при загрузке страницы
