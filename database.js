// Este é o nosso "Banco de Dados" de moléculas.
// Todas as moléculas agora têm uma explicação para o quiz.

const database = [
    // --- OXIGENADAS ---
    { 
        nome: 'Etanol', 
        estrutura: 'CH3-CH2-OH', 
        funcao: 'Álcool', 
        categoria: 'Oxigenadas',
        explicacao: 'É um Álcool, pois possui a hidroxila (-OH) ligada a um carbono saturado (que só faz ligações simples).' 
    },
    { 
        nome: 'Propan-2-ol', 
        estrutura: 'CH3-CH(OH)-CH3', 
        funcao: 'Álcool', 
        categoria: 'Oxigenadas',
        explicacao: 'É um Álcool secundário, pois a hidroxila (-OH) está ligada a um carbono secundário (ligado a outros 2 carbonos).' 
    },
    { 
        nome: 'Propanona (Acetona)', 
        estrutura: 'CH3-CO-CH3', 
        funcao: 'Cetona', 
        categoria: 'Oxigenadas',
        explicacao: 'É uma Cetona, pois possui a carbonila (C=O) localizada entre dois outros átomos de carbono.'
    },
    { 
        nome: 'Butanona', 
        estrutura: 'CH3-CO-CH2-CH3', 
        funcao: 'Cetona', 
        categoria: 'Oxigenadas',
        explicacao: 'É uma Cetona, com a carbonila (C=O) posicionada no carbono 2, entre um grupo metil e um etil.'
    },
    { 
        nome: 'Ácido Etanóico', 
        estrutura: 'CH3-COOH', 
        funcao: 'Ácido Carboxílico', 
        categoria: 'Oxigenadas',
        explicacao: 'É um Ácido Carboxílico, pois apresenta o grupo funcional carboxila (-COOH) em sua estrutura.'
    },
    { 
        nome: 'Ácido Propanoico', 
        estrutura: 'CH3-CH2-COOH', 
        funcao: 'Ácido Carboxílico', 
        categoria: 'Oxigenadas',
        explicacao: 'É um Ácido Carboxílico, caracterizado pelo grupo carboxila (-COOH) na ponta de uma cadeia de 3 carbonos.'
    },
    { 
        nome: 'Metoximetano', 
        estrutura: 'CH3-O-CH3', 
        funcao: 'Éter', 
        categoria: 'Oxigenadas',
        explicacao: 'É um Éter, pois possui um átomo de oxigênio (heteroátomo) ligando duas cadeias de carbono (dois grupos metil).'
    },
    { 
        nome: 'Etóxietano', 
        estrutura: 'CH3-CH2-O-CH2-CH3', 
        funcao: 'Éter', 
        categoria: 'Oxigenadas',
        explicacao: 'É um Éter, com um átomo de oxigênio posicionado entre dois grupos etil.'
    },
    { 
        nome: 'Etanal', 
        estrutura: 'CH3-CHO', 
        funcao: 'Aldeído', 
        categoria: 'Oxigenadas',
        explicacao: 'É um Aldeído, pois possui o grupo carbonila (C=O) na extremidade da cadeia de carbono (grupo -CHO).'
    },
    { 
        nome: 'Propanal', 
        estrutura: 'CH3-CH2-CHO', 
        funcao: 'Aldeído', 
        categoria: 'Oxigenadas',
        explicacao: 'É um Aldeído, caracterizado pelo grupo funcional -CHO (carbonila na ponta) em uma cadeia de 3 carbonos.'
    },
    { 
        nome: 'Fenol', 
        estrutura: 'Anel Aromático-OH', 
        funcao: 'Fenol', 
        categoria: 'Oxigenadas',
        explicacao: 'É um Fenol, pois possui uma hidroxila (-OH) ligada diretamente a um carbono do anel aromático (benzênico).'
    },
    { 
        nome: 'Metil-fenol (Cresol)', 
        estrutura: 'Anel(CH3)-OH', 
        funcao: 'Fenol', 
        categoria: 'Oxigenadas',
        explicacao: 'É um derivado do Fenol, pois possui a hidroxila (-OH) ligada ao anel aromático, além de um grupo metil (-CH3).'
    },
    { 
        nome: 'Etanoato de Metila', 
        estrutura: 'CH3-COO-CH3', 
        funcao: 'Éster', 
        categoria: 'Oxigenadas',
        explicacao: 'É um Éster, pois possui o grupo funcional -COO- entre duas cadeias de carbono (derivado do ácido etanóico e metanol).'
    },
    { 
        nome: 'Propanoato de Etila', 
        estrutura: 'CH3-CH2-COO-CH2-CH3', 
        funcao: 'Éster', 
        categoria: 'Oxigenadas',
        explicacao: 'É um Éster, caracterizado pelo grupo -COO- (carbonila ligada a um oxigênio) conectando duas cadeias de carbono.'
    },

    // --- HIDROCARBONETOS ---
    { 
        nome: 'Benzeno', 
        estrutura: 'Anel Aromático', 
        funcao: 'Aromático', 
        categoria: 'Hidrocarbonetos',
        explicacao: 'É um Hidrocarboneto Aromático, a base para muitos compostos aromáticos, composto por 6 carbonos em anel com ligações pi ressonantes.'
    },
    { 
        nome: 'Tolueno', 
        estrutura: 'Anel-CH3', 
        funcao: 'Aromático', 
        categoria: 'Hidrocarbonetos',
        explicacao: 'É um Hidrocarboneto Aromático (derivado do benzeno), possuindo um grupo metil (-CH3) ligado ao anel.'
    },
    { 
        nome: 'Naftaleno', 
        estrutura: 'Dois Anéis Fundidos', 
        funcao: 'Aromático', 
        categoria: 'Hidrocarbonetos',
        explicacao: 'É um Hidrocarboneto Aromático policíclico, formado pela fusão de dois anéis benzênicos.'
    },
    { 
        nome: 'Propano', 
        estrutura: 'CH3-CH2-CH3', 
        funcao: 'Alcano', 
        categoria: 'Hidrocarbonetos',
        explicacao: 'É um Alcano, pois é um hidrocarboneto (só C e H) que possui apenas ligações simples entre os carbonos.'
    },
    { 
        nome: 'Butano', 
        estrutura: 'CH3-(CH2)2-CH3', 
        funcao: 'Alcano', 
        categoria: 'Hidrocarbonetos',
        explicacao: 'É um Alcano, um hidrocarboneto saturado (só ligações simples) com 4 átomos de carbono.'
    },
    { 
        nome: 'Eteno', 
        estrutura: 'CH2=CH2', 
        funcao: 'Alceno', 
        categoria: 'Hidrocarbonetos',
        explicacao: 'É um Alceno, pois é um hidrocarboneto que apresenta uma ligação dupla (=) entre dois átomos de carbono.'
    },
    { 
        nome: 'Propeno', 
        estrutura: 'CH3-CH=CH2', 
        funcao: 'Alceno', 
        categoria: 'Hidrocarbonetos',
        explicacao: 'É um Alceno, hidrocarboneto de 3 carbonos que possui uma ligação dupla entre os carbonos 1 e 2.'
    },
    { 
        nome: 'Etino (Acetileno)', 
        estrutura: 'CH≡CH', 
        funcao: 'Alcino', 
        categoria: 'Hidrocarbonetos',
        explicacao: 'É um Alcino, pois é um hidrocarboneto que apresenta uma ligação tripla (≡) entre dois átomos de carbono.'
    },
    { 
        nome: 'Propino', 
        estrutura: 'CH3-C≡CH', 
        funcao: 'Alcino', 
        categoria: 'Hidrocarbonetos',
        explicacao: 'É um Alcino, hidrocarboneto de 3 carbonos que possui uma ligação tripla entre os carbonos 1 e 2.'
    },
    { 
        nome: 'Cicloexano', 
        estrutura: 'C6H12 (Anel Simples)', 
        funcao: 'Cicloalcano', 
        categoria: 'Hidrocarbonetos',
        explicacao: 'É um Cicloalcano, um hidrocarboneto saturado (só ligações simples) que forma uma cadeia fechada (um anel).'
    },

    // --- NITROGENADAS ---
    { 
        nome: 'Metilamina', 
        estrutura: 'CH3-NH2', 
        funcao: 'Amina (Primária)', 
        categoria: 'Nitrogenadas',
        explicacao: 'É uma Amina primária, pois o Nitrogênio (derivado da amônia) está ligado a apenas um grupo de carbono (-CH3).'
    },
    { 
        nome: 'Dietilamina', 
        estrutura: '(CH3CH2)2-NH', 
        funcao: 'Amina (Secundária)', 
        categoria: 'Nitrogenadas',
        explicacao: 'É uma Amina secundária, pois o Nitrogênio está ligado a dois grupos de carbono (dois grupos etil).'
    },
    { 
        nome: 'Trimetilamina', 
        estrutura: '(CH3)3-N', 
        funcao: 'Amina (Terciária)', 
        categoria: 'Nitrogenadas',
        explicacao: 'É uma Amina terciária, pois o Nitrogênio está ligado a três grupos de carbono (três grupos metil).'
    },
    { 
        nome: 'Anilina', 
        estrutura: 'Anel-NH2', 
        funcao: 'Amina (Aromática)', 
        categoria: 'Nitrogenadas',
        explicacao: 'É uma Amina aromática (ou Fenilamina), pois o grupo amino (-NH2) está ligado diretamente ao anel benzênico.'
    },
    { 
        nome: 'Etanonitrila', 
        estrutura: 'CH3-CN', 
        funcao: 'Nitrila', 
        categoria: 'Nitrogenadas',
        explicacao: 'É uma Nitrila, pois possui o grupo funcional ciano (-C≡N), com uma ligação tripla entre Carbono e Nitrogênio.'
    },
    { 
        nome: 'Nitroetano', 
        estrutura: 'CH3-CH2-NO2', 
        funcao: 'Nitrocomposto', 
        categoria: 'Nitrogenadas',
        explicacao: 'É um Nitrocomposto, pois apresenta o grupo funcional nitro (-NO2) ligado à cadeia de carbono.'
    },
    { 
        nome: 'Propanamida', 
        estrutura: 'CH3-CH2-CONH2', 
        funcao: 'Amida', 
        categoria: 'Nitrogenadas',
        explicacao: 'É uma Amida, pois possui um grupo carbonila (C=O) ligado diretamente a um átomo de Nitrogênio (-NH2).'
    },
    { 
        nome: 'N-metil-etanamida', 
        estrutura: 'CH3-CO-NH-CH3', 
        funcao: 'Amida (Substituída)', 
        categoria: 'Nitrogenadas',
        explicacao: 'É uma Amida substituída (N-metil), pois o Nitrogênio do grupo amida está ligado a um grupo metil.'
    },

    // --- SULFURADAS ---
    { 
        nome: 'Etanotiol', 
        estrutura: 'CH3-CH2-SH', 
        funcao: 'Tiol', 
        categoria: 'Sulfuradas',
        explicacao: 'É um Tiol (ou mercaptana), o análogo sulfurado do álcool. Possui o grupo sulfidrila (-SH) no lugar da hidroxila.'
    },
    { 
        nome: 'Propanotiol', 
        estrutura: 'CH3-CH2-CH2-SH', 
        funcao: 'Tiol', 
        categoria: 'Sulfuradas',
        explicacao: 'É um Tiol, caracterizado pelo grupo funcional -SH (sulfidrila) na ponta de uma cadeia de 3 carbonos.'
    },
    { 
        nome: 'Sulfeto de Dimetila', 
        estrutura: 'CH3-S-CH3', 
        funcao: 'Sulfeto (Tioéter)', 
        categoria: 'Sulfuradas',
        explicacao: 'É um Sulfeto (ou Tioéter), o análogo sulfurado do éter. Possui um átomo de Enxofre (heteroátomo) entre dois carbonos.'
    },
    { 
        nome: 'Tiofenol', 
        estrutura: 'Anel-SH', 
        funcao: 'Tiofenol', 
        categoria: 'Sulfuradas',
        explicacao: 'É um Tiofenol, o análogo sulfurado do fenol. Possui o grupo -SH ligado diretamente ao anel aromático.'
    },

    // --- MISTAS (Múltiplas funções) ---
    { 
        nome: 'Glicina', 
        estrutura: 'H2N-CH2-COOH', 
        funcao: 'Aminoácido', 
        categoria: 'Mistas',
        explicacao: 'É uma Função Mista (Aminoácido), pois possui na mesma molécula um grupo Amina (-NH2) e um grupo Ácido Carboxílico (-COOH).'
    },
    { 
        nome: 'Alanina', 
        estrutura: 'H2N-CH(CH3)-COOH', 
        funcao: 'Aminoácido', 
        categoria: 'Mistas',
        explicacao: 'É uma Função Mista (Aminoácido), contendo os grupos Amina e Ácido Carboxílico ligados ao mesmo carbono (carbono alfa).'
    },
    { 
        nome: 'Cisteína', 
        estrutura: 'H2N-CH(CH2SH)-COOH', 
        funcao: 'Aminoácido (com Tiol)', 
        categoria: 'Mistas',
        explicacao: 'É uma Função Mista. É um Aminoácido (Amina + Ácido Carboxílico) que também contém uma função Tiol (-SH) em sua cadeia lateral.'
    },
    { 
        nome: 'Paracetamol', 
        estrutura: 'Anel(OH)-NH-CO-CH3', 
        funcao: 'Amida, Fenol', 
        categoria: 'Mistas',
        explicacao: 'É uma Função Mista, pois apresenta uma função Fenol (anel com -OH) e uma função Amida (-NH-CO-).'
    },
    { 
        nome: 'Adrenalina', 
        estrutura: 'Anel(OH)2-CH(OH)-CH2-NH-CH3', 
        funcao: 'Amina, Álcool, Fenol', 
        categoria: 'Mistas',
        explicacao: 'É uma Função Mista complexa, contendo grupos Fenol (anel com -OH), um grupo Álcool (-CH(OH)-) e um grupo Amina secundária.'
    }
];