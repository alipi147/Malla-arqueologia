// Datos actualizados
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
    { id: "s3_4", name: "Etnoarqueología", sem: 3, credits: 8, req: ["s2_1", "s2_3"] },
    { id: "s3_5", name: "Estadística I", sem: 3, credits: 7, req: ["s2_5"] },
    { id: "s3_6", name: "Teoría Arqueológica I", sem: 3, credits: 7, req: ["s2_1", "s1_3"] },

    // --- SEMESTRE 4 ---
    { id: "s4_1", name: "Análisis de Material Arqueológico III: Cerámica", sem: 4, credits: 7, req: ["s2_1"] },
    { id: "s4_2", name: "Análisis de Material Arqueológico IV: Zooarqueología", sem: 4, credits: 7, req: ["s2_1"] },
    { id: "s4_3", name: "Arqueología del Norte Árido de Chile", sem: 4, credits: 7, req: ["s2_1", "s3_3"] },
    { id: "s4_4", name: "Métodos y Técnicas de Terreno II", sem: 4, credits: 7, req: ["s2_4"] },
    { id: "s4_5", name: "Estadística II", sem: 4, credits: 7, req: ["s3_5"] },
    { id: "s4_6", name: "Teoría Arqueológica II", sem: 4, credits: 7, req: ["s3_6"] },

    // --- SEMESTRE 5 ---
    { id: "s5_1", name: "Laboratorio de Arte Rupestre", sem: 5, credits: 8, req: ["s2_1"] },
    { id: "s5_2", name: "Arqueología de Chile Semiárido", sem: 5, credits: 7, req: ["s2_1", "s2_2"] },
    { id: "s5_3", name: "Arqueología de Chile Centro-Sur", sem: 5, credits: 7, req: ["s2_1", "s2_2"] },
    { id: "s5_4", name: "Métodos y Técnicas de Terreno III", sem: 5, credits: 10, req: ["s4_4"] },
    { id: "s5_5", name: "Ética Arqueológica", sem: 5, credits: 8, req: ["s2_1"] },

    // --- SEMESTRE 6 ---
    { id: "s6_1", name: "Laboratorio de Especialización I", sem: 6, credits: 10, req: ["s3_1", "s3_2"], reqMode: "OR" },
    { id: "s6_2", name: "Laboratorio de Bioarqueología", sem: 6, credits: 8, req: ["s2_1", "s5_5"] },
    { id: "s6_3", name: "Arqueología Histórica", sem: 6, credits: 8, req: ["s2_1", "s1_5"] },
    { id: "s6_4", name: "Arqueología de la Patagonia Chilena", sem: 6, credits: 7, req: ["s2_2"] },
    { id: "s6_5", name: "Gestión del Patrimonio", sem: 6, credits: 8, req: ["s2_1", "s5_5"] },
    { id: "s6_6", name: "Teoría Arqueológica III", sem: 6, credits: 8, req: ["s4_6"] },

    // --- SEMESTRE 7 ---
    { id: "s7_1", name: "Laboratorio de Especialización II", sem: 7, credits: 10, req: ["s4_1", "s4_2"], reqMode: "OR" },
    { id: "s7_2", name: "Arqueología Contemporánea", sem: 7, credits: 7, req: ["s6_3", "s4_6"] },
    { id: "s7_3", name: "Métodos y Técnicas de Terreno IV", sem: 7, credits: 8, req
