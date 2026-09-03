// ===== Dev'AZ OS Terminal Emulator =====

// Data from DOCUMENTATION_SITE_LOOCIST23.md
const DATA = {
    identity: {
        name: 'Anthony – Loocist23',
        alias: 'Loocist23',
        company: 'Dev\'AZ',
        founded: '15 juillet 2025',
        location: 'Gard (30), France',
        email: 'loocist@proton.me',
        description: 'Développeur freelance passionné qui aide à créer des projets solides, fonctionnels et stylés.'
    },
    about: {
        intro: 'Passionné de développement depuis plusieurs années, j\'ai appris à créer des applications robustes et modernes en utilisant des technologies variées.',
        objective: 'Livrer des solutions utiles, propres et bien pensées.',
        services: [
            'Sites vitrines et portfolios modernes',
            'Applications web ou mobile sur mesure',
            'Outils internes pour entreprises (dashboard, connecteurs, etc.)',
            'Automatisation, scraping, IA, assistants vocaux',
            'Suivi technique, conseils et accompagnement'
        ],
        frontend: ['React', 'Next.js', 'Flutter', 'HTML/CSS', 'JavaScript/TypeScript'],
        backend: ['Node.js', 'Python', 'C#', 'API custom'],
        mobile: ['Flutter (applications cross-platform)'],
        desktop: ['PyQt5', 'Tkinter'],
        ai: ['YOLOv5', 'OpenCV', 'Pillow', 'traitement d\'images'],
        scripting: ['Bash', 'Python', 'WebExtensions'],
        database: ['PocketBase'],
        devops: ['Audit système', 'scripts Linux'],
        tools: ['GitHub', 'Git', 'gestion de projets']
    },
    projects: [
        {
            id: 1,
            emoji: '🎞️',
            name: 'onebyone – Extracteur de Frames Vidéo',
            description: 'Application graphique en Python avec Tkinter et OpenCV pour extraire toutes les frames d\'une vidéo, les renommer et afficher des statistiques.',
            stack: 'Python • OpenCV • Tkinter',
            link: 'https://github.com/Loocist23/onebyone'
        },
        {
            id: 2,
            emoji: '🖼️',
            name: 'takeitout – Visualiseur avec suppression de métadonnées',
            description: 'Application pour visualiser des images, inspecter et supprimer leurs métadonnées avant sauvegarde en lot avec renommage.',
            stack: 'Python • Tkinter • Pillow (PIL)',
            link: 'https://github.com/Loocist23/takeitout'
        },
        {
            id: 3,
            emoji: '🧩',
            name: 'FakeInfo-Filler – Extension de remplissage de formulaires',
            description: 'Extension Chrome/Firefox qui permet de générer et remplir intelligemment des champs de formulaires avec de fausses données réalistes. Idéal pour le test, le debug ou les démonstrations.',
            stack: 'JavaScript • WebExtension API • HTML/CSS',
            link: 'https://github.com/Loocist23/FakeInfo-Filler'
        },
        {
            id: 4,
            emoji: '🍉',
            name: 'Fruit Slash Saga Beater – Détection d\'objets avec YOLOv5',
            description: 'Projet complet pour capturer, annoter, convertir et entraîner un modèle YOLOv5 à détecter des fruits et bombes dans le jeu Fruit Slash Saga. Inclut scripts de traitement et de test en direct.',
            stack: 'Python • YOLOv5 • LabelImg • Dataset Augmentation',
            link: 'https://github.com/Loocist23/fruit-slash-saga-beater'
        },
        {
            id: 5,
            emoji: '🖥️',
            name: 'PowerAudit (Shell Edition) – Audit matériel Linux en Bash',
            description: 'Script Bash ultra-léger et rapide permettant d\'auditer une machine Linux (hardware, OS, sécurité, apps) et de générer des rapports CSV/JSON. Aucune dépendance, compatible multi-distributions.',
            stack: 'Bash • Shell • Linux CLI',
            link: 'https://github.com/Loocist23/PowerAudit-Shell-Edition'
        },
        {
            id: 6,
            emoji: '🎤',
            name: 'Echo – Assistant vocal intelligent avec interface graphique',
            description: 'Assistant vocal en Python avec interface PyQt5 permettant d\'effectuer des recherches, lire de la musique, gérer des tâches ou consulter la météo à la voix. Contrôle vocal, reconnaissance, synthèse et plus.',
            stack: 'Python • PyQt5 • SpeechRecognition • yt-dlp • Pytube',
            link: 'https://github.com/Loocist23/echo-assistant'
        },
        {
            id: 7,
            emoji: '🍽️',
            name: 'MealMaster – Planification de repas & gestion intelligente des courses',
            description: 'App mobile Flutter permettant de planifier ses repas, générer automatiquement des listes de courses, suivre son garde-manger et comparer les prix des aliments. Connectée à PocketBase pour la gestion des données.',
            stack: 'Flutter • PocketBase • Mobile',
            link: 'https://github.com/Loocist23/MealMaster'
        }
    ],
    featuredProject: {
        name: 'Miam n\'Good – App de gestion de repas',
        description: 'Une application moderne pour aider à planifier les repas, faire les courses et gagner du temps.',
        stack: 'Flutter • Pocketbase • API custom • Authentification • UI/UX',
        link: 'https://github.com/Loocist23'
    },
    contact: {
        email: 'loocist@proton.me',
        linkedin: 'https://www.linkedin.com/in/anthony-zegnal',
        github: 'https://github.com/Loocist23',
        message: 'Tu as un projet en tête ? Une question ? Une idée de collaboration ? Remplis le formulaire ci-dessous, et je te répondrai rapidement !'
    },
    legal: {
        editor: 'Anthony Zegnal (alias Loocist23)',
        status: 'Développeur freelance',
        host: 'OVH',
        hostAddress: '2 rue Kellermann, 59100 Roubaix, France',
        copyright: 'Tous les contenus présents sur ce site (textes, images, code) sont la propriété exclusive de Loocist23, sauf mention contraire. Toute reproduction totale ou partielle est interdite sans autorisation préalable.',
        responsibility: 'L\'éditeur ne saurait être tenu responsable des dommages directs ou indirects causés au matériel de l\'utilisateur lors de l\'accès au site.',
        privacy: 'Aucune donnée personnelle n\'est collectée sans le consentement de l\'utilisateur. Les données envoyées via le formulaire de contact ne sont utilisées que pour traiter les demandes. Respect du RGPD et confidentialité des informations.'
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
        { text: '[Dev\'AZ OS v1.0]', delay: 300, class: 'success' },
        { text: 'Initializing kernel...', delay: 200 },
        { text: '[   OK   ] Started system services', delay: 150, class: 'success' },
        { text: '[   OK   ] Mounted filesystem', delay: 150, class: 'success' },
        { text: '[   OK   ] Loaded user profile: Loocist23', delay: 150, class: 'success' },
        { text: '[   OK   ] Initialized terminal emulator', delay: 150, class: 'success' },
        { text: '', delay: 500 },
        { text: '╔════════════════════════════════════════════════════════════╗', delay: 100 },
        { text: '║                                                           ║', delay: 50 },
        { text: '║           ██████╗ ██████╗ ███████╗██╗  ██╗                  ║', delay: 50, class: 'accent-green' },
        { text: '║          ██╔═══██╗██╔══██╗██╔════╝██║ ██╔╝                  ║', delay: 50, class: 'accent-green' },
        { text: '║          ██║   ██║██████╔╝█████╗  █████╔╝                   ║', delay: 50, class: 'accent-green' },
        { text: '║          ██║   ██║██╔══██╗██╔══╝  ██╔═██╗                  ║', delay: 50, class: 'accent-green' },
        { text: '║          ╚██████╔╝██║  ██║███████╗██║  ██╗                  ║', delay: 50, class: 'accent-green' },
        { text: '║           ╚═════╝ ╚═╝  ╚═╝╚══════╝╚═╝  ╚═╝                  ║', delay: 50, class: 'accent-green' },
        { text: '║                                                           ║', delay: 50 },
        { text: '║         Dev\'AZ Operating System - Terminal Portfolio          ║', delay: 100, class: 'header' },
        { text: '║                Welcome to Loocist23 Terminal                 ║', delay: 100, class: 'header' },
        { text: '║                                                           ║', delay: 50 },
        { text: '╚════════════════════════════════════════════════════════════╝', delay: 100 },
        { text: '', delay: 500 },
        { text: 'System ready.', delay: 200, class: 'success' },
        { text: 'Type "help" for available commands.', delay: 200, class: 'info' }
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
        print('Dev\'AZ OS - Available Commands:', 'header');
        print('');
        const cmdList = [
            { cmd: 'help', desc: 'Display this help message' },
            { cmd: 'whoami', desc: 'Show current user identity' },
            { cmd: 'about', desc: 'Display information about Loocist23' },
            { cmd: 'skills', desc: 'List all skills and technologies' },
            { cmd: 'projects', desc: 'List all realized projects' },
            { cmd: 'project <id>', desc: 'Show details of a specific project (1-7)' },
            { cmd: 'featured', desc: 'Show featured project' },
            { cmd: 'contact', desc: 'Display contact information' },
            { cmd: 'legal', desc: 'Display legal information' },
            { cmd: 'services', desc: 'List available services' },
            { cmd: 'neofetch', desc: 'Display system information' },
            { cmd: 'clear', desc: 'Clear the terminal' },
            { cmd: 'exit', desc: 'Exit the terminal (reload page)' },
            { cmd: 'date', desc: 'Show current date' },
            { cmd: 'echo <text>', desc: 'Display text' }
        ];
        
        cmdList.forEach(item => {
            print(`  <span class="info">${item.cmd.padEnd(15)}</span> ${item.desc}`);
        });
        print('');
    },
    
    whoami: () => {
        print('┌─────────────────────────────────────────────────────────┐', 'header');
        print(`│ User:    <span class="accent-cyan">${DATA.identity.name}</span>`, '');
        print(`│ Alias:   <span class="accent-green">${DATA.identity.alias}</span>`, '');
        print(`│ Company: <span class="accent-yellow">${DATA.identity.company}</span>`, '');
        print(`│ Email:   <span class="accent-magenta">${DATA.identity.email}</span>`, '');
        print(`│ Location: ${DATA.identity.location}`, '');
        print('└─────────────────────────────────────────────────────────┘', 'header');
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
        print(DATA.about.objective, 'success');
    },
    
    skills: () => {
        print('═══════════════════════════════════════════════════════════', 'header');
        print('                    SKILL SET & TECHNOLOGIES', 'header');
        print('═══════════════════════════════════════════════════════════', 'header');
        print('');
        
        const categories = [
            { name: 'Frontend', items: DATA.about.frontend },
            { name: 'Backend', items: DATA.about.backend },
            { name: 'Mobile', items: DATA.about.mobile },
            { name: 'Desktop', items: DATA.about.desktop },
            { name: 'Data/IA', items: DATA.about.ai },
            { name: 'Scripting', items: DATA.about.scripting },
            { name: 'Database', items: DATA.about.database },
            { name: 'DevOps', items: DATA.about.devops },
            { name: 'Tools', items: DATA.about.tools }
        ];
        
        categories.forEach(cat => {
            print(`${cat.name}:`, 'accent-cyan');
            const tags = cat.items.map(item => `<span class="skill-tag">${item}</span>`).join('');
            print(tags);
            print('');
        });
    },
    
    projects: () => {
        print('═══════════════════════════════════════════════════════════', 'header');
        print('                      REALIZED PROJECTS', 'header');
        print('═══════════════════════════════════════════════════════════', 'header');
        print('');
        
        DATA.projects.forEach((project, index) => {
            print(`[${project.id}] ${project.emoji} <span class="project-name">${project.name}</span>`, 'project-item');
            print(`   └─ ${project.description}`, 'text-secondary');
            print(`   └─ Stack: ${project.stack}`, 'text-secondary');
            print(`   └─ <a href="${project.link}" target="_blank" class="contact-link">${project.link}</a>`);
            print('');
        });
        
        print('Type "project <id>" for details on a specific project.', 'info');
    },
    
    project: (args) => {
        if (!args[0]) {
            print('Usage: project <id> (1-7)', 'error');
            return;
        }
        
        const id = parseInt(args[0]);
        if (isNaN(id) || id < 1 || id > DATA.projects.length) {
            print(`Error: Project ID must be between 1 and ${DATA.projects.length}`, 'error');
            return;
        }
        
        const project = DATA.projects[id - 1];
        print('═══════════════════════════════════════════════════════════', 'header');
        print(`  ${project.emoji} ${project.name}`, 'header');
        print('═══════════════════════════════════════════════════════════', 'header');
        print('');
        print(project.description);
        print('');
        print(`Stack: ${project.stack}`, 'accent-cyan');
        print(`Link: <a href="${project.link}" target="_blank" class="contact-link">${project.link}</a>`);
        print('');
    },
    
    featured: () => {
        const p = DATA.featuredProject;
        print('═══════════════════════════════════════════════════════════', 'header');
        print('                   FEATURED PROJECT', 'header');
        print('═══════════════════════════════════════════════════════════', 'header');
        print('');
        print(p.name, 'accent-cyan');
        print('─'.repeat(p.name.length), 'divider');
        print('');
        print(p.description);
        print('');
        print(`Technologies: ${p.stack}`, 'info');
        print(`GitHub: <a href="${p.link}" target="_blank" class="contact-link">${p.link}</a>`);
    },
    
    contact: () => {
        print('═══════════════════════════════════════════════════════════', 'header');
        print('                     CONTACT INFORMATION', 'header');
        print('═══════════════════════════════════════════════════════════', 'header');
        print('');
        print(DATA.contact.message);
        print('');
        print('Email:   ' + DATA.contact.email, 'accent-cyan');
        print('LinkedIn: <a href="' + DATA.contact.linkedin + '" target="_blank" class="contact-link">' + DATA.contact.linkedin + '</a>');
        print('GitHub:   <a href="' + DATA.contact.github + '" target="_blank" class="contact-link">' + DATA.contact.github + '</a>');
        print('');
        print('Open for freelance missions, collaborations, and technical discussions.', 'success');
    },
    
    services: () => {
        print('Available Services:', 'header');
        print('');
        DATA.about.services.forEach((service, index) => {
            print(`  [${index + 1}] ${service}`);
        });
    },
    
    legal: () => {
        print('═══════════════════════════════════════════════════════════', 'header');
        print('                      LEGAL INFORMATION', 'header');
        print('═══════════════════════════════════════════════════════════', 'header');
        print('');
        print('Editor: ' + DATA.legal.editor);
        print('Status: ' + DATA.legal.status);
        print('Email: ' + DATA.legal.editor.split('(')[0].trim() + ' <' + DATA.contact.email + '>');
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
        print('OS: Dev\'AZ Terminal Portfolio v1.0', 'info');
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
            // Show suggestions
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
    { trigger: 'secret', response: '🤫 Shhh... You found a secret! But there\'s nothing here. Yet.' },
    { trigger: 'hire', response: '🎯 Ready to work! Contact me at ' + DATA.contact.email },
    { trigger: 'recruiter', response: '👀 Welcome, recruiter! I\'m available for freelance missions. Type "contact" or "skills" to learn more.' },
    { trigger: 'devaz', response: '🚀 Dev\'AZ: Development solutions from A to Z!' },
    { trigger: 'loocist', response: '👨‍💻 That\'s me! Anthony, aka Loocist23, developer and founder of Dev\'AZ.' },
    { trigger: ' Anthony', response: '😊 Yes, that\'s my name. Nice to meet you!' }
];

// Override command handler to include easter eggs
const originalHandleCommand = handleCommand;
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
