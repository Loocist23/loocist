// ===== Dev'AZ OS Terminal Emulator v2.0 =====

// Updated Data from GitHub (Loocist23 - 49 repos) - September 2026
const DATA = {
    identity: {
        name: 'Anthony – Loocist23',
        alias: 'Loocist23',
        company: 'Dev\'AZ',
        founded: '15 juillet 2025',
        location: 'Gard (30), France',
        email: 'loocist@proton.me',
        description: 'Développeur Full-Stack & Freelance | Fondateur de Dev\'AZ | Expert en solutions web, mobile et automatisation.'
    },
    about: {
        intro: 'Passionné de développement avec +49 projets open-source sur GitHub. Je crée des applications robustes, modernes et innovantes en combinant expertise technique et vision produit.',
        objective: 'Livrer des solutions qui résolvent de vrais problèmes, avec du code propre, maintenable et scalable.',
        services: [
            '🏗️ Développement Full-Stack (Web & Mobile)',
            '🔧 Solutions d\'automatisation et scripts métiers',
            '🤖 Projets IA/ML et traitement de données',
            '📱 Applications mobile cross-platform (Flutter)',
            '🌐 Plateformes web modernes (React, Next.js, Vue)',
            '🛡️ Solutions de cybersécurité et audit système',
            '📊 Outils internes et dashboards pour entreprises',
            '🎯 Consulting technique et accompagnement projet'
        ],
        frontend: ['React', 'Next.js', 'Vue.js', 'TypeScript', 'JavaScript', 'HTML5/CSS3', 'TailwindCSS'],
        backend: ['Node.js', 'Express', 'Python (FastAPI/Flask/Django)', 'C# (.NET)', 'PHP', 'Groovy'],
        mobile: ['Flutter (Dart)', 'React Native'],
        desktop: ['PyQt5', 'Tkinter', 'Electron'],
        ai: ['YOLOv5', 'OpenCV', 'Pillow', 'Computer Vision', 'NLP', 'LLM Integration', 'ChatGPT API'],
        scripting: ['Bash', 'PowerShell', 'Python Scripting', 'WebExtensions (Chrome/Firefox)'],
        devops: ['Docker', 'Jenkins (Groovy)', 'CI/CD Pipelines', 'Linux System', 'Audit & Monitoring'],
        database: ['PocketBase', 'MongoDB', 'PostgreSQL', 'MySQL', 'SQLite', 'Firebase'],
        cloud: ['Vercel', 'OVH', 'GitHub Actions'],
        tools: ['GitHub', 'Git', 'JIRA', 'Postman', 'Figma (basics)']
    },
    projects: [
        {
            id: 1,
            emoji: '🔒',
            name: 'CyberSec Platform',
            description: 'Plateforme complète de cybersécurité avec gestion des vulnérabilités, monitoring et alertes en temps réel. Solution professionnelle pour les entreprises.',
            stack: 'TypeScript • Node.js • React • Security APIs • Real-time Monitoring',
            link: 'https://github.com/Loocist23/cybersec-platform',
            year: '2026',
            highlight: true
        },
        {
            id: 2,
            emoji: '🚀',
            name: 'MinimalistLauncher',
            description: 'Lanceur d\'applications minimaliste et ultra-rapide. Conçu pour une expérience utilisateur fluide avec un design épuré et des performances optimales.',
            stack: 'HTML • CSS • JavaScript • PWA • Performance Optimized',
            link: 'https://github.com/Loocist23/MinimalistLauncher',
            year: '2026',
            highlight: true
        },
        {
            id: 3,
            emoji: '🧮',
            name: 'Calculators Suite',
            description: 'Suite complète de calculatrices en ligne avec frontend moderne et API backend. Architecture microservices avec plusieurs implémentations (JS & Python).',
            stack: 'JavaScript • TypeScript • Python • FastAPI • React • Microservices',
            link: 'https://github.com/Loocist23/calculators',
            year: '2026',
            highlight: true
        },
        {
            id: 4,
            emoji: '🤖',
            name: 'Stat-GPT',
            description: 'Projet intégrant des capacités d\'IA générative pour l\'analyse statistique et la visualisation de données. Interface intuitive avec traitement en temps réel.',
            stack: 'JavaScript • AI APIs • Data Visualization • Statistical Analysis • ChatGPT Integration',
            link: 'https://github.com/Loocist23/Stat-GPT',
            year: '2025',
            highlight: true
        },
        {
            id: 5,
            emoji: '🔍',
            name: 'Hackathon IA - Voyages',
            description: 'Solution full-stack développée lors d\'un hackathon : système de recommandation de voyages intelligente utilisant l\'IA pour personnaliser les itinéraires.',
            stack: 'TypeScript • JavaScript • AI/ML • Recommendation Engine • Full-Stack',
            link: 'https://github.com/Loocist23/IA_GROUP_VOYAGE',
            year: '2026',
            highlight: false
        },
        {
            id: 6,
            emoji: '🧩',
            name: 'FakeInfo-Filler',
            description: 'Extension Chrome/Firefox open-source (⭐1) pour générer et remplir automatiquement des formulaires avec des données réalistes. Idéal pour les tests et le développement.',
            stack: 'JavaScript • WebExtension API • HTML/CSS • Fake Data Generation',
            link: 'https://github.com/Loocist23/FakeInfo-Filler',
            year: '2025',
            highlight: false
        },
        {
            id: 7,
            emoji: '📊',
            name: 'PowerAudit (Shell Edition)',
            description: 'Script Bash open-source (⭐1) ultra-léger pour auditer des machines Linux. Génère des rapports détaillés en CSV/JSON sans dépendances. Compatible avec toutes les distributions.',
            stack: 'Bash • Shell • Linux CLI • System Audit • CSV/JSON Export',
            link: 'https://github.com/Loocist23/PowerAudit-Shell-Edition',
            year: '2025',
            highlight: false
        }
    ],
    featuredProject: {
        name: 'CyberSec Platform',
        description: 'Plateforme de cybersécurité professionnelle avec monitoring en temps réel, détection des vulnérabilités et système d\'alertes automatisées. Projet le plus abouti et technique.',
        stack: 'TypeScript • React • Node.js • Security APIs • Real-time Data Processing',
        link: 'https://github.com/Loocist23/cybersec-platform'
    },
    contact: {
        email: 'loocist@proton.me',
        linkedin: 'https://www.linkedin.com/in/anthony-zegnal',
        github: 'https://github.com/Loocist23',
        message: 'Intéressé par une collaboration ? Besoin d\'un développeur Full-Stack pour votre prochain projet ? Contactez-moi !'
    },
    stats: {
        totalRepos: 49,
        totalStars: 2,
        mainLanguages: ['JavaScript', 'TypeScript', 'Python', 'Dart', 'HTML', 'C++', 'Shell', 'Groovy'],
        recentActivity: 'Septembre 2026'
    },
    legal: {
        editor: 'Anthony Zegnal (alias Loocist23)',
        status: 'Développeur freelance',
        host: 'OVH',
        hostAddress: '2 rue Kellermann, 59100 Roubaix, France',
        copyright: 'Tous les contenus sont la propriété exclusive de Loocist23. Toute reproduction est interdite sans autorisation.',
        responsibility: 'L\'éditeur ne saurait être tenu responsable des dommages causés à l\'utilisateur.',
        privacy: 'Respect du RGPD. Aucune donnée personnelle collectée sans consentement.'
    }
};

// ===== Terminal State =====
const terminal = {
    output: document.getElementById('output'),
    inputLine: document.getElementById('input-line'),
    commandInput: document.getElementById('command-input'),
    prompt: document.getElementById('prompt'),
    cursor: document.getElementById('cursor'),
    history: [],
    historyIndex: -1
};

// ===== Boot Sequence =====
function bootSequence() {
    terminal.commandInput.disabled = true;
    terminal.cursor.style.display = 'none';
    
    const bootLines = [
        { text: '[Dev\'AZ OS v2.0]', delay: 300, class: 'success' },
        { text: 'Initializing kernel...', delay: 200 },
        { text: '[   OK   ] Started system services', delay: 150, class: 'success' },
        { text: '[   OK   ] Mounted filesystem', delay: 150, class: 'success' },
        { text: '[   OK   ] Loaded user profile: Loocist23', delay: 150, class: 'success' },
        { text: '[   OK   ] Initialized terminal emulator', delay: 150, class: 'success' },
        { text: '[   OK   ] Loaded ' + DATA.stats.totalRepos + ' repositories from GitHub', delay: 150, class: 'success' },
        { text: '', delay: 500 },
        { text: '╔════════════════════════════════════════════════════════════╗', delay: 100 },
        { text: '║                                                           ║', delay: 50 },
        { text: '║           ██████╗ ██████╗ ███████╗██╗  ██╗                  ║', delay: 50, class: 'accent-green' },
        { text: '║          ██╔═══██╗██╔══██╗██╔════╝██║ ██╔╝                  ║', delay: 50, class: 'accent-green' },
        { text: '║          ██║   ██║██████╔╝█████╗  █████╔╝                   ║', delay: 50, class: 'accent-green' },
        { text: '║          ██║   ██║██╔══██╗██╔══╝  ██╔═██╗                  ║', delay: 50, class: 'accent-green' },
        { text: '║          ╚██████╔╝██║  ██║███████╗██║  ██║                  ║', delay: 50, class: 'accent-green' },
        { text: '║           ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝                  ║', delay: 50, class: 'accent-green' },
        { text: '║                                                           ║', delay: 50 },
        { text: '║         Dev\'AZ Operating System - Terminal Portfolio          ║', delay: 100, class: 'header' },
        { text: '║           Full-Stack Developer | ' + DATA.stats.totalRepos + ' GitHub Repos              ║', delay: 100, class: 'header' },
        { text: '║                Welcome to Loocist23 Terminal                 ║', delay: 100, class: 'header' },
        { text: '║                                                           ║', delay: 50 },
        { text: '╚════════════════════════════════════════════════════════════╝', delay: 100 },
        { text: '', delay: 500 },
        { text: 'System ready. ' + DATA.stats.totalRepos + ' projects loaded.', delay: 200, class: 'success' },
        { text: 'Type "help" for available commands. Try "github" for stats!', delay: 200, class: 'info' }
    ];
    
    let cumulativeDelay = 0;
    bootLines.forEach((line, index) => {
        setTimeout(() => {
            const lineElement = document.createElement('div');
            lineElement.className = line.class || '';
            lineElement.textContent = line.text;
            terminal.output.appendChild(lineElement);
            terminal.output.scrollTop = terminal.output.scrollHeight;
            
            if (index === bootLines.length - 1) {
                setTimeout(() => {
                    terminal.commandInput.disabled = false;
                    terminal.cursor.style.display = 'inline-block';
                    terminal.commandInput.focus();
                    updatePrompt();
                }, line.delay);
            }
        }, cumulativeDelay);
        cumulativeDelay += line.delay;
    });
}

// ===== Update Prompt =====
function updatePrompt() {
    terminal.prompt.textContent = `${DATA.identity.alias}@dev-az:~$ `;
}

// ===== Print to Terminal =====
function print(text, className = '', newline = true) {
    const lineElement = document.createElement('div');
    lineElement.className = className;
    lineElement.innerHTML = text;
    terminal.output.appendChild(lineElement);
    
    if (newline) {
        const br = document.createElement('div');
        terminal.output.appendChild(br);
    }
    
    terminal.output.scrollTop = terminal.output.scrollHeight;
}

// ===== Clear Terminal =====
function clearTerminal() {
    terminal.output.innerHTML = '';
    print('Terminal cleared. Type "help" for available commands.', 'info');
}

// ===== Command Handlers =====
const commands = {
    help: () => {
        print('Dev\'AZ OS v2.0 - Available Commands:', 'header');
        print('');
        const cmdList = [
            { cmd: 'help', desc: 'Display this help message' },
            { cmd: 'whoami', desc: 'Show current user identity' },
            { cmd: 'about', desc: 'Display detailed information about Loocist23' },
            { cmd: 'github', desc: 'Show GitHub statistics and profile info' },
            { cmd: 'skills', desc: 'List all skills and technologies (updated)' },
            { cmd: 'projects', desc: 'List all ' + DATA.projects.length + ' featured projects' },
            { cmd: 'project <id>', desc: 'Show details of a specific project (1-' + DATA.projects.length + ')' },
            { cmd: 'featured', desc: 'Show featured project (CyberSec Platform)' },
            { cmd: 'contact', desc: 'Display contact information' },
            { cmd: 'services', desc: 'List available professional services' },
            { cmd: 'legal', desc: 'Display legal information' },
            { cmd: 'neofetch', desc: 'Display system information with ASCII art' },
            { cmd: 'clear', desc: 'Clear the terminal screen' },
            { cmd: 'exit', desc: 'Exit the terminal (reload page)' },
            { cmd: 'date', desc: 'Show current date and time' },
            { cmd: 'echo <text>', desc: 'Display custom text' },
            { cmd: 'languages', desc: 'List all programming languages used' }
        ];
        
        cmdList.forEach(item => {
            print(`  <span class="info">${item.cmd.padEnd(15)}</span> ${item.desc}`);
        });
        print('');
        print('Easter eggs: Try "recruiter", "hire", "devaz", "stats", "cybersec"', 'text-secondary');
    },
    
    whoami: () => {
        print('┌─────────────────────────────────────────────────────────────────┐', 'header');
        print(`│ User:    <span class="accent-cyan">${DATA.identity.name}</span>`, '');
        print(`│ Alias:   <span class="accent-green">${DATA.identity.alias}</span>`, '');
        print(`│ Company: <span class="accent-yellow">${DATA.identity.company}</span>`, '');
        print(`│ Email:   <span class="accent-magenta">${DATA.identity.email}</span>`, '');
        print(`│ Location: ${DATA.identity.location}`, '');
        print(`│ Status:  <span class="success">Available for freelance missions</span>`, '');
        print('└─────────────────────────────────────────────────────────────────┘', 'header');
    },
    
    about: () => {
        print(DATA.identity.name, 'header');
        print('─'.repeat(DATA.identity.name.length), 'divider');
        print('');
        print(DATA.identity.description);
        print('');
        print('Based in ' + DATA.identity.location, 'info');
        print('Founder of ' + DATA.identity.company + ' since ' + DATA.identity.founded, 'info');
        print('');
        print('"' + DATA.about.intro + '"');
        print('');
        print('🎯 Mission: ' + DATA.about.objective, 'success');
    },
    
    github: () => {
        print('═══════════════════════════════════════════════════════════', 'header');
        print('                      GITHUB PROFILE STATS', 'header');
        print('═══════════════════════════════════════════════════════════', 'header');
        print('');
        print(`Username:    <span class="accent-cyan">Loocist23</span>`, '');
        print(`Total Repos:  <span class="accent-green">${DATA.stats.totalRepos}</span>`, '');
        print(`Total Stars:  <span class="accent-yellow">${DATA.stats.totalStars}★</span>`, '');
        print(`Main Languages: ${DATA.stats.mainLanguages.join(', ')}`, 'info');
        print(`Last Activity: ${DATA.stats.recentActivity}`, 'info');
        print('');
        print('GitHub Profile: <a href="' + DATA.contact.github + '" target="_blank" class="contact-link">' + DATA.contact.github + '</a>');
    },
    
    skills: () => {
        print('═══════════════════════════════════════════════════════════', 'header');
        print('                    SKILL SET & TECHNOLOGIES', 'header');
        print('═══════════════════════════════════════════════════════════', 'header');
        print('');
        
        const categories = [
            { name: '🌐 Frontend', items: DATA.about.frontend },
            { name: '🏗️ Backend', items: DATA.about.backend },
            { name: '📱 Mobile', items: DATA.about.mobile },
            { name: '💻 Desktop', items: DATA.about.desktop },
            { name: '🤖 AI/ML', items: DATA.about.ai },
            { name: '📜 Scripting', items: DATA.about.scripting },
            { name: '🗄️ Databases', items: DATA.about.database },
            { name: '☁️ DevOps/Cloud', items: DATA.about.devops.concat(DATA.about.cloud) },
            { name: '🔧 Tools', items: DATA.about.tools }
        ];
        
        categories.forEach(cat => {
            print(`${cat.name}:`, 'accent-cyan');
            const tags = cat.items.map(item => `<span class="skill-tag">${item}</span>`).join('');
            print(tags);
            print('');
        });
        
        print('💡 Proficient in ' + DATA.stats.mainLanguages.length + '+ programming languages across ' + DATA.stats.totalRepos + ' repositories', 'success');
    },
    
    languages: () => {
        print('Programming Languages Used:', 'header');
        print('');
        DATA.stats.mainLanguages.forEach((lang, index) => {
            print(`  [${index + 1}] ${lang}`);
        });
        print('');
        print('Total: ' + DATA.stats.mainLanguages.length + ' languages across ' + DATA.stats.totalRepos + ' repositories', 'info');
    },
    
    projects: () => {
        print('═══════════════════════════════════════════════════════════', 'header');
        print('                      FEATURED PROJECTS (' + DATA.projects.length + ')', 'header');
        print('═══════════════════════════════════════════════════════════', 'header');
        print('');
        
        DATA.projects.forEach((project, index) => {
            const highlight = project.highlight ? '<span class="success">★ </span>' : '';
            const year = project.year ? ` <span class="text-secondary">(${project.year})</span>` : '';
            print(`[${project.id}] ${project.emoji} ${highlight}<span class="project-name">${project.name}</span>${year}`, 'project-item');
            print(`   └─ ${project.description}`, 'text-secondary');
            print(`   └─ Stack: ${project.stack}`, 'text-secondary');
            print(`   └─ <a href="${project.link}" target="_blank" class="contact-link">${project.link}</a>`);
            print('');
        });
        
        print('Type "project <id>" for details. Try "featured" for the CyberSec Platform!', 'info');
    },
    
    project: (args) => {
        if (!args[0]) {
            print('Usage: project <id> (1-' + DATA.projects.length + ')', 'error');
            return;
        }
        
        const id = parseInt(args[0]);
        if (isNaN(id) || id < 1 || id > DATA.projects.length) {
            print(`Error: Project ID must be between 1 and ${DATA.projects.length}`, 'error');
            return;
        }
        
        const project = DATA.projects[id - 1];
        const highlight = project.highlight ? '<span class="success">★ Featured Project</span>' : '';
        const year = project.year ? ` | ${project.year}` : '';
        
        print('═══════════════════════════════════════════════════════════', 'header');
        print(`  ${project.emoji} ${project.name} ${highlight}${year}`, 'header');
        print('═══════════════════════════════════════════════════════════', 'header');
        print('');
        print(project.description);
        print('');
        print(`Stack: ${project.stack}`, 'accent-cyan');
        print(`Repository: <a href="${project.link}" target="_blank" class="contact-link">${project.link}</a>`);
        print('');
    },
    
    featured: () => {
        const p = DATA.featuredProject;
        print('═══════════════════════════════════════════════════════════', 'header');
        print('                   ★ FEATURED PROJECT ★', 'header');
        print('═══════════════════════════════════════════════════════════', 'header');
        print('');
        print(p.name, 'accent-cyan');
        print('─'.repeat(p.name.length), 'divider');
        print('');
        print(p.description);
        print('');
        print(`🔧 Technologies: ${p.stack}`, 'info');
        print(`🌐 Repository: <a href="${p.link}" target="_blank" class="contact-link">${p.link}</a>`);
        print('');
        print('This is the most recent and technically advanced project.', 'success');
    },
    
    contact: () => {
        print('═══════════════════════════════════════════════════════════', 'header');
        print('                     CONTACT INFORMATION', 'header');
        print('═══════════════════════════════════════════════════════════', 'header');
        print('');
        print(DATA.contact.message);
        print('');
        print('📧 Email:   ' + DATA.contact.email, 'accent-cyan');
        print('🔗 LinkedIn: <a href="' + DATA.contact.linkedin + '" target="_blank" class="contact-link">' + DATA.contact.linkedin + '</a>');
        print('💻 GitHub:   <a href="' + DATA.contact.github + '" target="_blank" class="contact-link">' + DATA.contact.github + '</a>');
        print('');
        print('✅ Open for: Freelance missions | Full-time opportunities | Technical consulting', 'success');
        print('✅ Specialties: Full-Stack Development | AI Integration | System Automation', 'success');
    },
    
    services: () => {
        print('Professional Services:', 'header');
        print('');
        DATA.about.services.forEach((service, index) => {
            print(`  [${index + 1}] ${service}`);
        });
        print('');
        print('Need something custom? Let\'s discuss your project!', 'info');
    },
    
    legal: () => {
        print('═══════════════════════════════════════════════════════════', 'header');
        print('                      LEGAL INFORMATION', 'header');
        print('═══════════════════════════════════════════════════════════', 'header');
        print('');
        print('Editor: ' + DATA.legal.editor);
        print('Status: ' + DATA.legal.status);
        print('Email: ' + DATA.identity.name.split(' – ')[0] + ' <' + DATA.contact.email + '>');
        print('');
        print('Hosting:', 'info');
        print('  Provider: ' + DATA.legal.host);
        print('  Address: ' + DATA.legal.hostAddress);
        print('');
        print(DATA.legal.copyright);
    },
    
    neofetch: () => {
        const ascii = `
  ██████╗ ██████╗ ███████╗██╗  ██╗
 ██╔═══██╗██╔══██╗██╔════╝██║ ██╔╝
 ██║   ██║██████╔╝█████╗  █████╔╝
 ██║   ██║██╔══██╗██╔══╝  ██╔═██╗
 ╚██████╔╝██║  ██║███████╗██║  ██║
  ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝
        `;
        print(ascii, 'accent-green');
        print('');
        print('User: ' + DATA.identity.alias, '');
        print('Name: ' + DATA.identity.name, '');
        print('Company: ' + DATA.identity.company, '');
        print('Founded: ' + DATA.identity.founded, '');
        print('Location: ' + DATA.identity.location, '');
        print('Email: ' + DATA.contact.email, '');
        print('');
        print('GitHub: ' + DATA.stats.totalRepos + ' repositories | ' + DATA.stats.totalStars + ' stars', 'info');
        print('OS: Dev\'AZ Terminal Portfolio v2.0', 'info');
        print('Terminal: xterm-256color', 'info');
        print('Shell: /bin/dev-az', 'info');
        print('Uptime: Since 2025', 'info');
    },
    
    clear: () => {
        clearTerminal();
    },
    
    exit: () => {
        print('Logging out...', 'warning');
        print('');
        setTimeout(() => {
            window.location.reload();
        }, 500);
    },
    
    date: () => {
        const now = new Date();
        const options = { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric',
            hour: '2-digit',
            minute: '2-digit',
            second: '2-digit'
        };
        print(now.toLocaleDateString('fr-FR', options), 'info');
    },
    
    echo: (args) => {
        if (args.length > 0) {
            print(args.join(' '));
        } else {
            print('Usage: echo <text>', 'error');
        }
    }
};

// ===== Handle Command =====
function handleCommand() {
    const input = terminal.commandInput.value.trim();
    
    if (input === '') {
        terminal.commandInput.value = '';
        return;
    }
    
    // Add to history
    terminal.history.push(input);
    terminal.historyIndex = terminal.history.length;
    
    // Print command
    print(terminal.prompt.textContent.trim() + input);
    terminal.commandInput.value = '';
    
    // Parse command
    const parts = input.split(' ');
    const command = parts[0].toLowerCase();
    const args = parts.slice(1);
    
    // Execute command
    if (commands[command]) {
        commands[command](args);
    } else {
        print(`Command not found: ${command}`, 'error');
        print('Type "help" for available commands.', 'info');
    }
    
    // Scroll to bottom
    terminal.output.scrollTop = terminal.output.scrollHeight;
}

// ===== Keyboard Events =====
terminal.commandInput.addEventListener('keydown', (e) => {
    // Handle Enter
    if (e.key === 'Enter') {
        e.preventDefault();
        handleCommand();
    }
    
    // Handle Up Arrow (history)
    if (e.key === 'ArrowUp' && terminal.historyIndex > 0) {
        e.preventDefault();
        terminal.historyIndex--;
        terminal.commandInput.value = terminal.history[terminal.historyIndex];
    }
    
    // Handle Down Arrow (history)
    if (e.key === 'ArrowDown' && terminal.historyIndex < terminal.history.length - 1) {
        e.preventDefault();
        terminal.historyIndex++;
        terminal.commandInput.value = terminal.history[terminal.historyIndex];
    }
    
    // Handle Tab (auto-complete)
    if (e.key === 'Tab') {
        e.preventDefault();
        const input = terminal.commandInput.value;
        const availableCommands = Object.keys(commands);
        const matching = availableCommands.filter(cmd => cmd.startsWith(input));
        
        if (matching.length === 1) {
            terminal.commandInput.value = matching[0];
        } else if (matching.length > 1) {
            print('');
            print('Suggestions:', 'info');
            matching.forEach(cmd => print('  ' + cmd, 'text-secondary'));
            print('');
        }
    }
});

// ===== Focus Events =====
terminal.commandInput.addEventListener('focus', () => {
    terminal.cursor.style.display = 'inline-block';
});

terminal.commandInput.addEventListener('blur', () => {
    terminal.cursor.style.display = 'none';
});

// ===== Initialize =====
window.onload = () => {
    bootSequence();
    updatePrompt();
};

// ===== Easter Eggs =====
const easterEggs = [
    { trigger: 'secret', response: '🤫 Shhh... You found a secret! But there\'s nothing here. Yet. Keep exploring!' },
    { trigger: 'hire', response: '🎯 <span class="success">I\'m ready to work!</span> Contact me at <span class="accent-cyan">' + DATA.contact.email + '</span> or check my <a href="' + DATA.contact.linkedin + '" target="_blank" class="contact-link">LinkedIn</a>.' },
    { trigger: 'recruiter', response: '👀 <span class="success">Welcome, recruiter!</span> I have <span class="accent-green">49 repositories on GitHub</span> with experience in <span class="accent-cyan">Full-Stack, AI, and Automation</span>. Type "skills" or "projects" to see my expertise!' },
    { trigger: 'devaz', response: '🚀 <span class="accent-yellow">Dev\'AZ:</span> Development solutions from A to Z! Founded in July 2025.' },
    { trigger: 'loocist', response: '👨‍💻 That\'s me! <span class="accent-cyan">Anthony</span>, aka <span class="accent-green">Loocist23</span>, Full-Stack Developer and founder of <span class="accent-yellow">Dev\'AZ</span>.' },
    { trigger: 'stats', response: '📊 <span class="success">GitHub Stats:</span> ' + DATA.stats.totalRepos + ' repos | ' + DATA.stats.totalStars + '★ | ' + DATA.stats.mainLanguages.length + ' languages | Last activity: ' + DATA.stats.recentActivity },
    { trigger: 'Anthony', response: '😊 Yes, that\'s my name! Nice to meet you. I\'m a Full-Stack Developer based in France.' },
    { trigger: '49', response: '🎉 Yes! I have <span class="accent-green">49 public repositories</span> on GitHub. Type "projects" to see the highlights!' },
    { trigger: 'cybersec', response: '🔒 <span class="success">CyberSec Platform</span> is my latest major project! A professional cybersecurity platform with real-time monitoring. Type "featured" for details.' },
    { trigger: 'fullstack', response: '💻 <span class="success">Full-Stack Expert!</span> I work with: ' + DATA.about.frontend.slice(0, 3).join(', ') + ' (frontend) + ' + DATA.about.backend.slice(0, 3).join(', ') + ' (backend) + Databases + Cloud.' },
    { trigger: 'python', response: '🐍 <span class="success">Python is one of my main languages!</span> Used in: PowerAudit, FakeInfo-Filler, Echo Assistant, IoT projects, and many scripts.' }
];

// Override command handler to include easter eggs
terminal.commandInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        const input = terminal.commandInput.value.trim().toLowerCase();
        const egg = easterEggs.find(ee => input === ee.trigger);
        if (egg) {
            e.preventDefault();
            print(terminal.prompt.textContent.trim() + terminal.commandInput.value);
            terminal.commandInput.value = '';
            print(egg.response, 'success');
            terminal.output.scrollTop = terminal.output.scrollHeight;
        }
    }
});
