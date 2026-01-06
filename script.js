// Bouton retour en haut
const btn = document.getElementById('backToTop');

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        btn.style.display = "block";
    } else {
        btn.style.display = "none";
    }
};

btn.onclick = function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

// Quiz functionality
document.getElementById("submitQuiz").addEventListener("click", function() {
    let score = 0;
    for (let i = 1; i <= 5; i++) {
        let answer = document.querySelector(`input[name="q${i}"]:checked`);
        if (answer) score += parseInt(answer.value);
    }
    
    let resultText = "";
    if (score === 5) {
        resultText = "🌟 Parfait ! Tu me connais par cœur ! 🌟";
    } else if (score >= 3) {
        resultText = "😄 Pas mal ! Tu commences à bien me connaître !";
    } else {
        resultText = "😅 Oups… tu veux en apprendre un peu plus sur moi ?";
    }
    
    document.getElementById("result").textContent = resultText;
});

// Progress bars animation
const bars = document.querySelectorAll(".progress");
bars.forEach(bar => {
    const level = bar.getAttribute("data-level");
    setTimeout(() => {
        bar.style.width = level + "%";
    }, 300);
});

// Contact form handling
const contactForm = document.getElementById('contactForm');
const formMessage = document.getElementById('formMessage');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Simple form validation and display message
        formMessage.textContent = "Merci pour votre message ! Je vous répondrai bientôt.";
        formMessage.classList.remove('hidden');
        formMessage.style.color = '#c15b84';
        formMessage.style.fontWeight = 'bold';
        formMessage.style.textAlign = 'center';
        formMessage.style.marginTop = '1rem';
        
        // Reset form
        contactForm.reset();
        
        // Hide message after 5 seconds
        setTimeout(() => {
            formMessage.classList.add('hidden');
        }, 5000);
    });
}
