function toggleContent(id) {
    var content = document.getElementById(id);
    if (content.classList.contains('show')) {
        content.classList.remove('show');
    } else {
        document.querySelectorAll('.hidden-content').forEach(section => section.classList.remove('show'));
        content.classList.add('show');
    }
}


document.querySelectorAll('.faq-question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const isOpen = answer.style.display === 'block';
        
        document.querySelectorAll('.faq-answer').forEach(ans => ans.style.display = 'none');
        document.querySelectorAll('.faq-question').forEach(q => q.classList.remove('open'));
        
        if (!isOpen) {
            answer.style.display = 'block';
            item.classList.add('open');
        }
    });
});


let stats = document.querySelectorAll('.stat-item');
let index = 0;

function showNextStat() {
    stats.forEach(stat => stat.classList.remove('active'));
    stats[index].classList.add('active');
    index = (index + 1) % stats.length;
}

setInterval(showNextStat, 1500);




function toggleMenu() {
    var menu = document.getElementById("dropdownMenu");
    menu.classList.toggle("active");
}