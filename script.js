// Datos actualizados según archivo "Pre-requisitos malla 2024.docx"
const mallaData = [
    // --- SEMESTRE 1 ---
    { id: "s1_1", name: "Arqueología General I", sem: 1, credits: 8, req: [] },
    { id: "s1_2", name: "Pueblo Originarios de Chile", sem: 1, credits: 8, req: [] },
    { id: "s1_3", name: "Epistemología", sem: 1, credits: 8, req: [] },
    { id: "s1_4", name: "Expresión Escrita", sem: 1, credits: 8, req: [] },
    { id: "s1_5", name: "Introducción a las Ciencias Sociales", sem: 1, credits: 8, req: [] },
    { id: "s1_6", name: "Inglés I", sem: 1, credits: 10, req: [] },

    // --- SEMESTRE 2 ---
    { id: "s2_1", name: "Arqueología General II", sem: 2, credits: 8, req: ["s1_1"] },
    { id: "s2_2", name: "Arqueología de América I", sem: 2, credits: 8, req: ["s1_1"] },
    { id: "s2_3", name: "Etnografías Clásicas", sem: 2, credits: 7, req: [] },
    { id: "s2_4", name: "Métodos y Técnicas de Terreno I", sem: 2, credits: 8, req: ["s1_1"] },
    { id: "s2_5", name: "Matemática", sem: 2, credits: 8, req: [] },
    { id: "s2_6", name: "Inglés II", sem: 2, credits: 10, req: ["s1_6"] },

    // --- SEMESTRE 3 ---
    { id: "s3_1", name: "Análisis de Material Arqueológico I: Lítica", sem: 3, credits: 7, req: ["s2_1"] },
    { id: "s3_2", name: "Análisis de Material Arqueológico II: Botánica", sem: 3, credits: 7, req: ["s2_1"] },
    { id: "s3_3", name: "Arqueología de América II", sem: 3, credits: 7, req: ["s2_2"] },
    { id: "s3_4", name: "Etnoarqueología", sem: 3, credits: 8, req: ["s2_1", "s2_3"] }, // Gen II + Etnografías
    { id: "s3_5", name: "Estadística I", sem: 3, credits: 7, req: ["s2_5"] }, // Matemática
    { id: "s3_6", name: "Teoría Arqueológica I", sem: 3, credits: 7, req: ["s2_1", "s1_3"] }, // Gen II + Epistemología

    // --- SEMESTRE 4 ---
    { id: "s4_1", name: "Análisis de Material Arqueológico III: Cerámica", sem: 4, credits: 7, req: ["s2_1"] },
    { id: "s4_2", name: "Análisis de Material Arqueológico IV: Zooarqueología", sem: 4, credits: 7, req: ["s2_1"] },
    { id: "s4_3", name: "Arqueología del Norte Árido de Chile", sem: 4, credits: 7, req: ["s2_1", "s3_3"] }, // Gen II + América II
    { id: "s4_4", name: "Métodos y Técnicas de Terreno II", sem: 4, credits: 7, req: ["s2_4"] }, // Métodos I
    { id: "s4_5", name: "Estadística II", sem: 4, credits: 7, req: ["s3_5"] }, // Est I
    { id: "s4_6", name: "Teoría Arqueológica II", sem: 4, credits: 7, req: ["s3_6"] }, // Teoría I

    // --- SEMESTRE 5 ---
    { id: "s5_1", name: "Laboratorio de Arte Rupestre", sem: 5, credits: 8, req: ["s2_1"] },
    { id: "s5_2", name: "Arqueología de Chile Semiárido", sem: 5, credits: 7, req: ["s2_1", "s2_2"] }, // Gen II + América I
    { id: "s5_3", name: "Arqueología de Chile Centro-Sur", sem: 5, credits: 7, req: ["s2_1", "s2_2"] }, // Gen II + América I
    { id: "s5_4", name: "Métodos y Técnicas de Terreno III", sem: 5, credits: 10, req: ["s4_4"] }, // Métodos II
    { id: "s5_5", name: "Ética Arqueológica", sem: 5, credits: 8, req: ["s2_1"] },

    // --- SEMESTRE 6 ---
    { id: "s6_1", name: "Laboratorio de Especialización I", sem: 6, credits: 10, req: ["s3_1", "s3_2"], reqMode: "OR" }, // Lítica O Botánica
    { id: "s6_2", name: "Laboratorio de Bioarqueología", sem: 6, credits: 8, req: ["s2_1", "s5_5"] }, // Gen II + Ética
    { id: "s6_3", name: "Arqueología Histórica", sem: 6, credits: 8, req: ["s2_1", "s1_5"] }, // Gen II + Intro Cs Soc
    { id: "s6_4", name: "Arqueología de la Patagonia Chilena", sem: 6, credits: 7, req: ["s2_2"] }, // América I
    { id: "s6_5", name: "Gestión del Patrimonio", sem: 6, credits: 8, req: ["s2_1", "s5_5"] }, // Gen II + Ética
    { id: "s6_6", name: "Teoría Arqueológica III", sem: 6, credits: 8, req: ["s4_6"] }, // Teoría II

    // --- SEMESTRE 7 ---
    { id: "s7_1", name: "Laboratorio de Especialización II", sem: 7, credits: 10, req: ["s4_1", "s4_2"], reqMode: "OR" }, // Cerámica O Zooarq
    { id: "s7_2", name: "Arqueología Contemporánea", sem: 7, credits: 7, req: ["s6_3", "s4_6"] }, // Histórica + Teoría II
    { id: "s7_3", name: "Métodos y Técnicas de Terreno IV", sem: 7, credits: 8, req: ["s5_4"] }, // Métodos III
    { id: "s7_4", name: "Museología", sem: 7, credits: 7, req: ["s2_1"] },
    { id: "s7_5", name: "Teoría Arqueológica IV", sem: 7, credits: 8, req: ["s4_6"] }, // Teoría II

    // --- SEMESTRE 8 ---
    { id: "s8_1", name: "Interpretación Contextual", sem: 8, credits: 8, req: ["s6_1"] }, // Lab Esp I
    { id: "s8_2", name: "Taller de Diseño", sem: 8, credits: 8, req: ["s6_1"] }, // Lab Esp I
    { id: "s8_3", name: "Arqueología y Sociedad", sem: 8, credits: 7, req: ["s3_4"] }, // Etnoarqueología
    { id: "s8_4", name: "Sistema de Evaluación Ambiental", sem: 8, credits: 8, req: ["s5_5"] }, // Ética
    { id: "s8_5", name: "Teoría Arqueológica V", sem: 8, credits: 8, req: ["s6_6", "s7_5"] }, // Teoría III + IV

    // --- SEMESTRE 9 ---
    { id: "s9_1", name: "Seminario de Grado", sem: 9, credits: 15, req: ["TODO_S1_S8"] }, // Todo lo anterior
    { id: "s9_2", name: "Práctica Profesional", sem: 9, credits: 25, req: ["TODO_S1_S8"] }, // Todo lo anterior

    // --- SEMESTRE 10 ---
    { id: "s10_1", name: "Seminario de Título", sem: 10, credits: 50, req: ["TODO_S1_S9"] } // Todo
];

let progress = JSON.parse(localStorage.getItem('mallaArqueoProgress')) || {};

function init() {
    renderMalla();
    updateStatus();
}

function renderMalla() {
    const container = document.getElementById('malla-container');
    container.innerHTML = '';
    
    // Solo semestres con ramos en la nueva data
    const maxSem = Math.max(...mallaData.map(r => r.sem));

    for (let i = 1; i <= maxSem; i++) {
        const col = document.createElement('div');
        col.className = 'semestre-col';
        
        const title = document.createElement('div');
        title.className = 'semestre-title';
        title.textContent = `Sem ${i}`;
        col.appendChild(title);

        const ramosSemestre = mallaData.filter(r => r.sem === i);
        
        ramosSemestre.forEach(ramo => {
            const card = document.createElement('div');
            card.id = `card-${ramo.id}`;
            card.className = 'ramo-card locked';
            card.onclick = () => toggleRamo(ramo.id);
            
            card.innerHTML = `
                <span>${ramo.name}</span>
                <span class="creditos">${ramo.credits} cr.</span>
            `;
            col.appendChild(card);
        });

        container.appendChild(col);
    }
}

function checkPrerequisites(ramo) {
    if (ramo.req.length === 0) return true;

    // Prerrequisito especial: Todo hasta semestre 8
    if (ramo.req.includes("TODO_S1_S8")) {
        const ramosHastaSem8 = mallaData.filter(r => r.sem <= 8);
        return ramosHastaSem8.every(r => progress[r.id] === true);
    }
    
    // Prerrequisito especial: Todo hasta semestre 9 (para el sem 10)
    if (ramo.req.includes("TODO_S1_S9")) {
        const ramosHastaSem9 = mallaData.filter(r => r.sem <= 9);
        return ramosHastaSem9.every(r => progress[r.id] === true);
    }

    // Lógica OR
    if (ramo.reqMode === 'OR') {
        return ramo.req.some(reqId => progress[reqId] === true);
    }

    // Lógica AND (defecto)
    return ramo.req.every(reqId => progress[reqId] === true);
}

function updateStatus() {
    mallaData.forEach(ramo => {
        const card = document.getElementById(`card-${ramo.id}`);
        const isApproved = progress[ramo.id] === true;
        const canTake = checkPrerequisites(ramo);

        card.className = 'ramo-card';

        if (isApproved) {
            card.classList.add('approved');
        } else if (canTake) {
            card.classList.add('available');
        } else {
            card.classList.add('locked');
        }
    });
}

function toggleRamo(id) {
    const card = document.getElementById(`card-${id}`);
    
    // Si está bloqueado y no aprobado, no hacer nada
    if (card.classList.contains('locked') && !card.classList.contains('approved')) {
        return; 
    }

    if (progress[id]) {
        delete progress[id];
    } else {
        progress[id] = true;
    }

    localStorage.setItem('mallaArqueoProgress', JSON.stringify(progress));
    updateStatus();
}

function resetMalla() {
    if(confirm("¿Reiniciar progreso?")) {
        progress = {};
        localStorage.removeItem('mallaArqueoProgress');
        updateStatus();
    }
}

init();
