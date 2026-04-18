document.addEventListener('DOMContentLoaded', () => {
    // Initialize Lucide Icons
    lucide.createIcons();

    // Set Copyright Year
    const copyright = document.getElementById('copyright');
    if (copyright) {
        copyright.textContent = `© ${new Date().getFullYear()} Vedhamithran E | Designed for High-Performance`;
    }

    // Floating Code Fragments
    const codeFragments = [
        { text: "const developer = 'Vedhamithran';", x: "10%", y: "80%", delay: 0 },
        { text: "git commit -m 'initial orbit'", x: "85%", y: "20%", delay: 2 },
        { text: "npm install dreams", x: "70%", y: "70%", delay: 4 },
        { text: "import { vision } from 'future';", x: "15%", y: "30%", delay: 6 },
        { text: "while(learning) { create(); }", x: "40%", y: "90%", delay: 8 },
        { text: "<Project />", x: "60%", y: "15%", delay: 1 },
        { text: "export default Soul;", x: "5%", y: "50%", delay: 5 }
    ];

    const container = document.getElementById('floating-code-container');
    if (container) {
        codeFragments.forEach(frag => {
            const div = document.createElement('div');
            div.className = 'floating-code';
            div.textContent = frag.text;
            div.style.left = frag.x;
            div.style.top = frag.y;
            div.style.animation = `floatUp ${10 + Math.random() * 5}s linear infinite`;
            div.style.animationDelay = `${frag.delay}s`;
            container.appendChild(div);
        });
    }

    // Optional: Smooth scroll for anchors (already handled by scroll-smooth class)
});
