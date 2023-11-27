const data = [
    {
      category: "Fácil",
      questions: [
        {
          question: "De acordo com Peter Drucker, qual dos critérios é mais importante, eficácia ou eficiência?",
          options: [
            "Eficácia", 
            "Eficiência", 
            "Nenhum dos dois", 
            "Ambos são igualmente importantes"],
          answer: "Eficácia",
        },
        {
          question: "Dentre as razões que demonstram o quão é indispensável ter objetivos claros dentro de uma empresa, qual não se encaixa?",
          options: [
            "Guiam nossos planos e decisões", 
            "Focalizam nossos esforços", 
            "Desviam nosso senso de direção", 
            "Nos ajudam a avaliar nosso progresso"],
          answer: "Desviam nosso senso de direção",
        },
        {
          question: "Quais são os dois tipos principais de planos, utilizados pelas organizações?",
          options: [
            "Planos Estratégicos e Planos Funcionais", 
            "Planos Funcionais e Planos Operacionais", 
            "Planos Situacionais e planos Visuais", 
            "Planos Estratégicos e Planos Operacionais"],
          answer: "Planos Estratégicos e Planos Operacionais",
        },
        {
          question: "As estratégias são importantes na hora do planejamento?",
          options: [
            "Não, tem nenhuma importancia", 
            "Só as vezes", 
            "Sim, é muito importante pro planejamento", 
            "Só quando o administrador pedir"],
          answer: "Sim, é muito importante pro planejamento",
        },
        {
          question:"Marque qual alternativa não é uma Variável de contingência que afetam a estrutura:",
          options: [
            "Ambiente",
            "Tamanho",
            "Visual",
            "Tecnologia"],
          answer: "Visual",
        },
        {
          question: "Assinale a alternativa que tem três características de cultura organizacional:",
          options:[
            "Controle , Tolerância a risco , Tolerância a conflitos ",
            "Controle , Tolerância a conflitos , Método de valorização do negócio",
            "Critério de recompensa , Reconhecimento de situações de crise , Integração da unidade ",
            "Método de valorização do negócio, Reconhecimento de situações de crise, Integração da unidade"],
          answer: "Controle , Tolerância a risco , Tolerância a conflitos ",
        },
        {
          question:"O que caracteriza uma organização Mecanística ?",
          options:[
            "Alta flexibilidade nas decisões e comunicação informal",
            "Estrutura hierárquica, centralização de autoridade e regras rígidas",
            "Ênfase na invocação e descentralização de poder ",
            "Equipes autogerenciadas e poucas camadas de gestão "],
           answer: "Estrutura hierárquica, centralização de autoridade e regras rígidas",
        },
        {
          question:"Dentre as variáveis de contingência que determinarão a amplitude de controle apropriada, qual opção não se encaixa:",
          options:[
            "Similaridade das tarefas dos funcionários",
            "Complexidade das tarefas",
            "Sofisticação do sistema de informação administrativa da organização",
            "Ramo de atuação da empresa"],
          answer: "Ramo de atuação da empresa",
        },
        {
          question:"Na organização de uma empresa, o que é uma estrutura simples?",
          options:[
            "Uma abordagem altamente burocrática e hierárquica.",
            "É a estrutura onde a grande maioria (senão todos) os funcionários, respondem ao proprietário",
            "Um modelo que promove a centralização do poder e decisões complexas.",
            "Um sistema que enfatiza a diversificação de funções e departamentos."],
          answer: "É a estrutura onde a grande maioria (senão todos) os funcionários, respondem ao proprietário",
        },
        {
          question: "O que é controle em um contexto gerencial?",
          options: [
            "Um botão que liga e desliga dispositivos eletrônicos.",
            "Um programa de treinamento para funcionários.",
            "Uma técnica de marketing.",
            "Função administrativa que monitora as atividades para ter certeza que estão sendo feitas conforme o planejado"],
          answer: "Função administrativa que monitora as atividades para ter certeza que estão sendo feitas conforme o planejado",
        },
        {
          question: "A melhor estratégia de crescimento é aquela bem planejada. Dito isso, como devem ser feitos os planos para um empreendimento seja bem-sucedido?",
          options: [
            "Planos suficientemente flexíveis, para explorar oportunidades inesperadas,experiência pessoal.",
            "Planos suficientemente flexíveis, para explorar oportunidades inesperadas.",
            "Planos focados apenas no curto prazo, sem considerar a sustentabilidade e o crescimento a longo prazo do empreendimento.",
            "Planos baseados apenas na intuição ou experiência pessoal, sem análise de dados ou pesquisa de mercado adequadas."],
          answer: "Planos suficientemente flexíveis, para explorar oportunidades inesperadas.",
        },
        {
          question: "O que seria Reconhecimentos de Situações de Crise ?",
          options: [
            "Uma habilidade de valorização de fluxo de caixa",
            "Uma habilidade de se comunicar melhor com seus funcionários",
            "Uma técnica de culinária",
            "Uma habilidade de identificar e avaliar rapidamente eventos ou circunstâncias que representam uma ameaça à segurança ou estabilidade."],
          answer: "Uma habilidade de identificar e avaliar rapidamente eventos ou circunstâncias que representam uma ameaça à segurança ou estabilidade.",
        },
        {
        question: "O que seria o roubo por funcionário ?",
        options: [
          "É definido como qualquer retirada não-autorizada de bens da empresa, realizada por funcionários para o seu uso pessoal.",
          "A prioridade de todo empreendedor deve ser manter bons registros e controle financeiros sobre o fluxo de caixa",
          "Os principais desafios para um empreendedor incluem em encontrar o capital, encontrar as pessoas e fortalecer a cultura organizacional",
          "Um sistema de controle que gera informações imprecisas resulta no fracasso da gerência em tomar decisões"],
        answer: "É definido como qualquer retirada não-autorizada de bens da empresa, realizada por funcionários para o seu uso pessoal.",
        },
        {
          question: "Como a aprendizagem com os erros pode ser benéfica para um empreendedor após uma recaída?",
          options: [
            "Aprender com os erros é inútil, já que os erros são inevitáveis.",
            "Aprendendo com os erros, um empreendedor pode evitar futuras recaídas.",
            "Aprender com os erros só é relevante para empreendedores despreparados",
            "ignorar os erros e seguir em frente"],
          answer: "Aprendendo com os erros, um empreendedor pode evitar futuras recaídas.",
        },
        {
          question: "Esse modelo usa um instrumento chamado questionário do colega de trabalho menos preferido (CTMP). De qual modelo estamos falando?",
          options: [
            "Modelo Fiedler",
            "Líder-Participação",
            "Líderança Situacional",
            "Teoria caminho-meta"],
          answer: "Modelo Fiedler",
        },
        {
          question: "Qual das alternativas a seguir não fazem parte das abordagens emergentes para a liderança?",
          options: [
            "Liderança carismática",
            "Liderança visionária",
            "Liderança transacional versus liderança transformacional",
            "Liderança flexível"],
          answer: "Liderança flexível",
        },
        {
          question: "O que é Poder de Posição?",
          options: [
            "É o poder de fala, se posicionar em determinados assuntos e dar ideias divergentes.",
            "É o grau de influência que um líder tem sobre as variáveis de poder, como contratar,demitir,disciplinar, promover e aumentar os salários.",
            "É competência técnica e conhecimento especializado.",
            "É por meio da persuasão e da habilidade de influenciar os outros."],
          answer: "É o grau de influência que um líder tem sobre as variáveis de poder, como contratar,demitir,disciplinar, promover e aumentar os salários.",
        },
        {
          question: "Qual dos seguintes princípios melhor descreve o funcionamento da liderança situacional?",
          options: [
            "Líderes mantêm um estilo de liderança consistente, independentemente da situação.",
            "Líderes ajustam seu estilo de liderança com base no comportamento e na maturidade dos membros da sua equipe.",
            "Líderes delegam todas as decisões aos membros da equipe, sem intervenção.",
            "Líderes mantêm um estilo autoritário independentemente das circunstâncias."],
          answer: "Líderes ajustam seu estilo de liderança com base no comportamento e na maturidade dos membros da sua equipe.",
        },
        {
          question: "Qual é uma das principais diferenças entre líderes transacionais e líderes transformacionais na dinâmica de liderança?",
          options: [
            "Líderes transacionais focam na inspiração e no desenvolvimento pessoal dos membros da equipe.",
            "Líderes transformacionais se concentram na recompensa e no castigo para motivar os liderados.",
            "Líderes transacionais priorizam a inovação e a mudança constante em suas equipes.",
            "Líderes transformacionais se baseiam em recompensas e punições para gerenciar a equipe."],
          answer: "Líderes transformacionais se concentram na recompensa e no castigo para motivar os liderados.",
        },
        {question: " Quais são os dois pilares em que o marketing é focado ?",
        options: [
          "pilar de finanças e outro de transação e relacionamento",
          "pilar de valor e outro de transação e relacionamento",
          "pilar de valor e outro de transação e operações",
          "pilar de finanças e outro de transação e operações"],
        answer: "pilar de valor e outro de transação e relacionamento",
        },
        {question: "Quais são as três decisões que podem ser divididas pelo administrador financeiro ?",
        options: [
          "Decisões de investimento; decisões de financiamento e remuneração; decisões de Planejamento.",
          "Decisões de Estrutura; decisões de financiamento e remuneração; decisões de Planejamento.",
          "Decisões de Estrutura; decisões de financiamento e remuneração; decisões de controle.",
          "Decisões de investimento; decisões de financiamento e remuneração; decisões de controle."],
        answer: "Decisões de investimento; decisões de financiamento e remuneração; decisões de controle.",
        },
        {question: "Quais as quatro funções que podem ser encontradas em quase todas as organizações a partir de certo porte ?",
        options: [
          "marketing, gestão de pessoas, finanças , operações",
          "marketing, gestão de pessoas, finanças , Planejamento",
          "Estrutura, gestão de pessoas, finanças , operações",
          "Estrutura, gestão de pessoas, finanças , Planejamento"],
        answer: "marketing, gestão de pessoas, finanças , operações",
        },
        {question: "Qual a função das finanças em uma organização ?",
        options: [
          "As finanças em uma organização existem principalmente para organizar festas e eventos corporativos. Quanto mais extravagantes e caros, melhor, pois isso ajuda a motivar os funcionários.",
          "A função financeira é responsável por gerir o dinheiro da organização, visando a criar valor para os acionistas. Pode-se dividir as decisões a serem tomadas pelo administrador financeiro",
          "A principal função das finanças em uma organização é garantir que todos os funcionários recebam salários astronômicos, independentemente do desempenho ou das metas alcançadas. Quanto mais alto o salário, melhor a saúde financeira da empresa.",
          "A função principal das finanças em uma organização é criar enigmas financeiros complexos para manter os funcionários entretidos. Quanto mais complicados os relatórios financeiros, mais satisfeitos ficam os colaboradores, mesmo que não compreendam completamente as finanças da empresa."],
        answer: "A função financeira é responsável por gerir o dinheiro da organização, visando a criar valor para os acionistas. Pode-se dividir as decisões a serem tomadas pelo administrador financeiro",
        },
      ],
    },
    {
      category: "Média",
      questions: [
        {
          question: "O que são premissas de planejamento?",
          options: [
            "Suposições sobre os recursos financeiros disponíveis para um projeto ou plano, sem considerar outros aspectos como recursos humanos ou tecnológicos.", 
            "Suposições básicas sobre o propósito de uma organização.", 
            "Estimativas precisas sobre o tempo necessário para concluir um projeto, sem levar em conta possíveis atrasos ou imprevistos.", 
            "Hipóteses sobre as preferências dos clientes, sem realizar pesquisas de mercado ou análises adequadas para validar essas suposições."],
          answer: "Suposições básicas sobre o propósito de uma organização.",
        },
        {
          question: "Sobre o ZapMail, quando a Federal Perdeu 50 milhões de dólares?",
          options: [
            "1988-1989", 
            "1990-1992", 
            "2000-2001e", 
            "1987-1988"],
          answer: "1988-1989",
        },
        {
          question: "Quais são os níveis de estratégias ?",
          options: [
            "Estratégia de nível corporativo , Estratégia de Unidade de negócios, Estratégia de nível Funcional.", 
            "Estratégia de nível corporativo , Estratégia de Unidade de negócios, Estratégia de nível Gerente.", 
            "Estratégia de nível Funcionário , Estratégia de Unidade de negócios, Estratégia de nível Funcional.", 
            "Estratégia de nível Funcionário , Estratégia de Unidade de negócios, Estratégia de nível Gerente."],
          answer: "Estratégia de nível corporativo , Estratégia de Unidade de negócios, Estratégia de nível Funcional.",
        },
        {
          question:"O que é a especialização do trabalho?",
          options: [
            "Um termo que se refere ao processo de criar produtos personalizados para clientes individuais.",
            "Um conceito que desencoraja a divisão de tarefas para aumentar a eficiência na produção.",
            "Uma estratégia que busca aprofundar a colaboração entre diferentes departamentos de uma organização.",
            "Uma prática que envolve a concentração em tarefas específicas para aumentar a produtividade.",],
          answer: "Uma prática que envolve a concentração em tarefas específicas para aumentar a produtividade.",
        },
        {
          question:"Qual das alternativas abaixo sobre centralização/descentralização está incorreta?",
          options: [
            "A centralização está nos níveis mais próximos dos problemas",
            "Toda organização deve ser completamente centralizada ou completamente descentralizada",
            "A descentralização está nos níveis mais baixos da organização",
            "Centralização/descentralização é um fenômeno de grau"],
          answer: "Toda organização deve ser completamente centralizada ou completamente descentralizada",
        },
        {
          question:"Escolha a alternativa correta. Em uma estrutura de organização baseada em equipes:",
          options: [
            "Em uma estrutura de organização baseada em equipes, é dispensada a comunicação eficaz, pois as equipes funcionam de forma independente.",
            "Não há necessidade de dar treinamentos em qualificações multifuncionais aos funcionários.",
            "Os membros das equipes têm autoridade para tomar decisões, pois não há uma cadeia rígida de comando.",
            "Não há perigo de perda dos benefícios dessa estrutura se não houver anteriormente uma implementação de um plano de ação baseado em equipes."],
          answer: "Os membros das equipes têm autoridade para tomar decisões, pois não há uma cadeia rígida de comando.",
        },
        {
          question: "Como o crescimento rápido de uma organização pode influenciar sua estrutura e quais ajustes podem ser necessários para acomodar esse crescimento?",
          options: [
            "O crescimento rápido geralmente não afeta a estrutura organizacional",
            "O crescimento rápido pode exigir uma estrutura mais hierárquica e rígida",
            "O crescimento rápido pode demandar uma estrutura mais plana e flexível",
            "O crescimento rápido sempre leva a uma estrutura descentralizada"],
          answer: "O crescimento rápido pode demandar uma estrutura mais plana e flexível",
        },
        {
          question: "Qual a qualidade da organização Orgânicas ?",
          options: [
            "Coordenação",
            "Padronização",
            "Profissionais  Autodirigidos",
            "Comunicação Aberta"],
          answer:"Comunicação Aberta",
        },
        {
          question: "Quais são as características das 3 abordagens para os sistemas de controle ?",
          options: [
            "Estrutura, Comunicação e Tecnologia.",
            "Organização, Metodologia e Planejamento.",
            "Mercado, Burocrático, Clã",
            "Controle Burocrático, Controle de Feedback e Controle de Feedforward."],
          answer: "Mercado, Burocrático, Clã",
        },
        {
          question: "Qual das seguintes medidas é eficaz para deter ou reduzir o roubo de funcionários em uma empresa ?",
          options: [
            "Ignorar o problema,já que todos os funcionários são confiáveis por padrão.",
            "Realizar verificações rigorosas de antecedentes de todos os funcionários durante o processo de contratação",
            "Oferecer incentivos financeiros aos funcionários para que não cometam roubos.",
            "Não monitorar as atividades dos funcionários e confiar na honestidade  deles"],
          answer: "Realizar verificações rigorosas de antecedentes de todos os funcionários durante o processo de contratação",
        },
        {
          question: "O Método de valorização de negócio é um método que tem várias técnicas, que geralmente se encaixam em três categorias. Quais seriam elas ?",
          options: [
            "Valorização dos ativos , Valorização do fluxo de caixa , Valorização dos funcionários",
            "Valorização dos ativos , Valorização do fluxo de clientes , Valorização dos funcionários",
            "Valorização dos ativos , Valorização do fluxo de caixa , Valorização dos ganhos",
            "Valorização dos ativos , valorização do fluxo de clientes , valorização dos ganhos"],
          answer: "Valorização dos ativos , Valorização do fluxo de caixa , Valorização dos ganhos",
        },
        {
          question: "Quais os principais desafios para um empreendedor na organização para o crescimento?",
          options: [
            "Encontrar o capital; encontrar as pessoas; fortalecer a cultura organizacional",
            "Gerenciar a concorrência; estabelecer parcerias estratégicas; manter a inovação constante.",
            "Identificar oportunidades de mercado; desenvolver um plano de marketing eficaz; aprimorar a comunicação com os clientes.",
            "Estabelecer metas claras e alcançáveis; monitorar o desempenho da equipe; cultivar relacionamentos duradouros com fornecedores."],
          answer: "Encontrar o capital; encontrar as pessoas; fortalecer a cultura organizacional",
        },
        {
          question: "O que um empreendedor pode fazer para se preparar melhor para recaídas?",
          options: [
            "Não se preocupar com antecedência, já que as recaídas são inevitáveis.",
            "Desenvolver um plano de contingência e criar reservas financeiras.",
            "Acreditar que a sorte é a única coisa que importa nos negócios",
            "Isolar-se e não compartilhar informações com outros empreendedores"],
          answer: "Desenvolver um plano de contingência e criar reservas financeiras.",
        },
        {
          question: "O que caracteriza o modelo de Liderança Técnica?",
          options: [
            "Um modelo de liderança que enfatiza a competição e a rivalidade entre a equipe.",
            "Um modelo de liderança em que o líder é escolhido por eleição popular entre os membros da equipe.",
            "Um modelo de liderança em que o líder exerce autoridade com base em sua competência e conhecimento técnico em uma área específica.",
            "Um modelo de liderança que se concentra na hierarquia organizacional e na obediência dos membros da equipe."],
          answer: "Um modelo de liderança em que o líder exerce autoridade com base em sua competência e conhecimento técnico em uma área específica.",
        },
        {
          question: "Qual é a principal diferença entre um líder e um gerente?",
          options: [
            "Ambos são termos intercambiáveis e não têm diferenças significativas.",
            "Um gerente é nomeado e tem poderes legítimos para recompensar ou punir, enquanto um líder tem um desempenho além das ações autoritárias, e inspira e motiva a equipe.",
            "Um líder toma decisões táticas, enquanto um gerente define a visão e a direção estratégica.",
            "Um líder é designado para a posição de liderança, enquanto um gerente deve ganhar a confiança da equipe."],
          answer: "Um gerente é nomeado e tem poderes legítimos para recompensar ou punir, enquanto um líder tem um desempenho além das ações autoritárias, e inspira e motiva a equipe.",
        },
        {
          question: "Mostra como um líder deve ajustar seu estilo de liderança para refletir o que os seguidores precisam. A liderança bem-sucedida é alcançada pela seleção do estilo de liderança correto. De qual modelo estamos falando?",
          options: [
            "Modelo Fiedler",
            "Líder-Participação",
            "Liderança Situacional",
            "Teoria Caminho-meta"],
          answer: "Liderança Situacional",
        },
        {
          question: "Quais são os cinco principais componentes que os grandes líderes devem demonstrar ao usar sua Inteligência Emocional?",
          options: [
            "Autoconhecimento; Autogerenciamento; Autodisciplina; Empatia e Habilidades Técnicas.",
            "Autoconsciência; Autodisciplina; Automotivação; Empatia e Habilidades Linguísticas.",
            "Autoconsciência; Auto-administração; Auto motivação; Empatia e Habilidades Sociais.",
            "Autocontrole; Autogerenciamento; Automotivação; Empatia e Habilidades Cognitivas."],
          answer: "Autoconsciência; Auto-administração; Auto motivação; Empatia e Habilidades Sociais.",
        },
        {
          question: "Quais são os três tipos de Confiança?",
          options: [
            "Confiança baseada na repressão, Confiança baseada no Conhecimento , Confiança baseada na identificação",
            "Confiança baseada na agressão, Confiança baseada no Conhecimento , Confiança baseada na identificação",
            "Confiança baseada na agressão , Confiança baseada no fanatismo  , Confiança baseada na identificação",
            "Confiança baseada na repressão, Confiança baseada no Conhecimento , Confiança baseada nos Negócios"],
          answer: "Confiança baseada na repressão, Confiança baseada no Conhecimento , Confiança baseada na identificação",
        },
        {
          question: "Qual a função de Gestão de Pessoas?",
          options: [
            "A gestão de pessoas é responsável por garantir que todos os funcionários tenham acesso irrestrito aos suprimentos de café no escritório, garantindo assim níveis adequados de cafeína para aumentar a produtividade.",
            "A principal função da gestão de pessoas é organizar competições de dança entre os funcionários, promovendo assim um ambiente de trabalho mais descontraído e divertido.",
            "A função gestão de pessoas tem como objetivo reduzir os custos das empresas, olhando os empregados como fator de produção, buscando extrair a máxima produtividade possível dos recursos humanos.",
            "A gestão de pessoas é encarregada de criar estratégias secretas para transformar todos os colaboradores em super-heróis durante as horas de expediente, visando aumentar a eficiência e a resolução de problemas no ambiente de trabalho."],
          answer:"A função gestão de pessoas tem como objetivo reduzir os custos das empresas, olhando os empregados como fator de produção, buscando extrair a máxima produtividade possível dos recursos humanos.",
        },
        {
          question: "Qual a função do marketing ?",
          options: [
            "A função de marketing procura estabelecer e manter as relações entre dois entes: de um lado, a organização; do outro, o cliente.",
            "O marketing é responsável por cuidar da distribuição gratuita de produtos para consumidores, promovendo a ideia de que os negócios podem prosperar sem a necessidade de venda",
            "A função principal do marketing é desenvolver estratégias para tornar os produtos invisíveis no mercado, incentivando as empresas a adotarem a abordagem esconde-esconde para aumentar a demanda.",
            "A verdadeira função do marketing é criar confusão entre os consumidores, promovendo informações contraditórias sobre os produtos e serviços, a fim de manter um ambiente de incerteza e suspense no mercado."],
          answer:"A função de marketing procura estabelecer e manter as relações entre dois entes: de um lado, a organização; do outro, o cliente.",
        },
        {
          question: "O que seria o marketing societal segundo Philip Kotler ?",
          options: [
            "O marketing societal é simplesmente uma estratégia para maximizar os lucros das empresas, sem considerar o impacto social ou ambiental.",
            "O marketing societal sustenta que a tarefa da organização é determinar as necessidades, os desejos e os interesse dos mercados-alvo, e oferecer as satisfações desejadas mais eficaz e eficientemente do que a concorrência, de uma maneira que preserve ou melhore o bem-estar do consumidor e da sociedade",
            "O marketing societal é visto como aplicável apenas a organizações sem fins lucrativos, ignorando a ideia de que todas as empresas, independentemente do setor, têm a responsabilidade de contribuir positivamente para a sociedade.",
            "O marketing societal é visto como uma tática de manipulação das emoções do público para promover causas específicas, sem considerar a integridade e a autenticidade na promoção de práticas socialmente responsáveis."],
          answer:"O marketing societal sustenta que a tarefa da organização é determinar as necessidades, os desejos e os interesse dos mercados-alvo, e oferecer as satisfações desejadas mais eficaz e eficientemente do que a concorrência, de uma maneira que preserve ou melhore o bem-estar do consumidor e da sociedade",
        },
        {
          question: "(Nessa onda de produção sustentável que se propaga no século XXI, outro conjunto de normas ISO* criadas na década de 1990 tem tido aplicação mais intensa, a ISO ***). Qual ISO se refere ao texto anterior ?",
          options: [
            "ISO 2000",
            "ISO 3000",
            "ISO 9000",
            "ISO 14000"],
          answer:"ISO 14000",
        },
        {
          question: "O que seria administração Multifuncional ?",
          options: [
            "A administração multifuncional ou de cúpula, presente nos níveis hierárquicos mais altos, engloba um elenco de atribuições que exigem conhecimentos gerais de todas as áreas da empresa.",
            "A administração multifuncional é um modelo que preconiza a contratação de funcionários com habilidades limitadas em diversas áreas, com o objetivo de economizar custos de treinamento e desenvolvimento.",
            "Na administração multifuncional, cada funcionário é responsável por todas as funções da empresa, desde a produção até o marketing, sem a necessidade de especialização em uma área específica.",
            "A administração multifuncional é uma abordagem que sugere que os líderes devem evitar delegar tarefas e tomar todas as decisões operacionais sozinhos para garantir maior eficiência."],
          answer: "A administração multifuncional ou de cúpula, presente nos níveis hierárquicos mais altos, engloba um elenco de atribuições que exigem conhecimentos gerais de todas as áreas da empresa.",
        },
      ],
    },
    {
      category: "Difícil",
      questions: [
        {
          question: "De acordo com o texto acima, o que fez minar o novo serviço da ZapMail em 1986?",
          options: [
            "Consequências da Guerra Fria", 
            "Mal planejamento ao não analisar o ambiente e ver que as empresas poderiam comprando suas próprias máquinas de Fax", 
            "Falta de formulação de objetivos", 
            "Falta de análise de recursos, o que causou minando o serviço"],
          answer: "Mal planejamento ao não analisar o ambiente e ver que as empresas poderiam comprando suas próprias máquinas de Fax",
        },
        {
          question: "Qual o conceito de estratégia que o historiador de negócios Alfred D. Chandler propôs?",
          options: [
            "A determinação dos objetivos e metas básicas de longo prazo de uma empresa, e a adoção de linhas de ação e a alocação de recursos necessários para alcançar objetivos.", 
            "A busca deliberada de um plano de ação para desenvolver uma vantagem competitiva sustentável.", 
            "Padrão de decisões e ações que se desenvolvem ao longo do tempo e refletem a identidade, os valores e os objetivos da organização.", 
            "O ajuste entre as capacidades internas de uma organização e as oportunidades externas em constante mudança."],
          answer: "A determinação dos objetivos e metas básicas de longo prazo de uma empresa, e a adoção de linhas de ação e a alocação de recursos necessários para alcançar objetivos.",
        },
        {
          question: "Qual dos seguintes elementos é essencial para o planejamento de longo prazo na Federal Express (FedEx)?",
          options: [
            "Estabelecer metas de lucro trimestrais", 
            "Investir em tecnologias de entrega de última geração", 
            "Ignorar as tendências de mercado atuais", 
            "Manter operações estáticas sem adaptação às mudanças"],
          answer: "Investir em tecnologias de entrega de última geração",
        },
        {
          question: "O que são hiatos de desempenho?",
          options: [
            "É a disparidade entre os objetivos de longo prazo da empresa e as metas de curto prazo estabelecidas pelos funcionários, sem considerar a viabilidade realista.", 
            "É a diferença entre as metas estabelecidas no processo de formulação dos objetivos e os resultados que provavelmente serão alcançados se prosseguir com a estratégia atual.", 
            "Refere-se à incongruência entre as metas estabelecidas e os recursos disponíveis para alcançá-las, sem levar em conta as limitações financeiras ou de pessoal.", 
            "Indica a diferença entre as metas definidas pela alta administração e as expectativas dos clientes, sem considerar a satisfação do cliente como um fator chave para o sucesso."],
          answer: "É a diferença entre as metas estabelecidas no processo de formulação dos objetivos e os resultados que provavelmente serão alcançados se prosseguir com a estratégia atual.",
        },
        {
          question:"Qual é a diferença entre autoridade e poder?",
          options:[
            "Autoridade refere-se à habilidade de influenciar os outros, enquanto poder é a capacidade de tomar decisões importantes.",
            "Poder é a capacidade de comandar, enquanto autoridade é a legitimidade do direito de exercer influência sobre os outros.",
            "Autoridade é o controle sobre recursos, enquanto poder é a capacidade de liderar equipes de forma eficaz.",
            "Poder é a capacidade de impor regras, enquanto autoridade é a habilidade de motivar os outros."],
          answer: "Poder é a capacidade de comandar, enquanto autoridade é a legitimidade do direito de exercer influência sobre os outros.",
        },
        {
          question: "Como a autoridade e o poder se afetam?",
          options:[
            "A autoridade é inerente, enquanto o poder é concedido pelas organizações.",
            "A autoridade aumenta o poder, mas o poder não afeta a autoridade.",
            "O poder é a base da autoridade, pois autoridade é simplesmente uma forma específica de poder.",
            "A autoridade e o poder são independentes e não se afetam mutuamente."],
          answer: "O poder é a base da autoridade, pois autoridade é simplesmente uma forma específica de poder.",
        },
        {
          question: "O que é correto sobre uma organização de aprendizagem?",
          options: [
            "É uma organização que desenvolveu a capacidade de, continuamente, adaptar-se e mudar porque todos os membros têm uma participação ativa na identificação e resolução de questões do trabalho.",
            "Em uma organização de aprendizagem, os funcionários se mantêm fixos aos conhecimentos mais antigos e primordiais.",
            "Nesse tipo de organização, as equipes de funcionários sempre esperam a decisão de seus superiores para poder tomar decisões sobre como fazer seus trabalhos ou resolver problemas.",
            "Os gerentes atuam de forma autocrática, fazendo o papel oposto a facilitadores, apoiadores e defensores para as equipes de funcionários.",],
          answer: "É uma organização que desenvolveu a capacidade de, continuamente, adaptar-se e mudar porque todos os membros têm uma participação ativa na identificação e resolução de questões do trabalho.",
        },
        {
          question:"Quais são os cinco modos de departamentalização ?",
          options: [
            "Funcional, Por produto , Por fornecedor, Geográfica , Por processo",
            "Por produto , Por fornecedor , Por cliente, Por processo , Funcional",
            "Geográfica, Por fornecedor , Por cliente , Por processo , Funcional",
            "Funcional , Por produto, Por cliente , Geográfica, Por processo"],
          answer: "Funcional , Por produto, Por cliente , Geográfica, Por processo",
        },
        {
          question: "Sobre os fatores de contingência no projeto dos sistemas de controle, qual dessas a seguir aborda as variáveis de contingência?",
          options: [
            "Nível de experiência dos colaboradores; Estilo de liderança adotado na empresa; Preferência de vestimenta no ambiente de trabalho.",
            "Localização geográfica dos escritórios; Políticas de benefícios para os funcionários; Frequência de reuniões de equipe.",
            "Grau de automação dos processos internos; Preferência dos funcionários por trabalho remoto ou presencial; Nível de acessibilidade das instalações físicas.",
            "Tamanho da organização; Posição e nível; Grau de descentralização; Cultura organizacional; Importância de uma atividade."],
          answer: "Tamanho da organização; Posição e nível; Grau de descentralização; Cultura organizacional; Importância de uma atividade.",
        },
        {
          question: "Quais são os 3 tipos de controle e o que eles fazem?",
          options: [
            "Controle de Qualidade - Garante a excelência dos produtos ou serviços; Controle de Acesso - Regula quem pode acessar determinadas áreas ou informações; Controle Remoto - Permite operar dispositivos à distância.",
            "Controle preventivo de alimentação de fluxo - Antecipa os problemas; Controle simultâneo - Corrige os problemas conforme ocorrem; Controle de Feedback - Corrige os problemas depois que ocorrem",
            "Controle Preventivo - Antecipa e previne problemas antes que ocorram; Controle Corretivo - Corrige falhas após sua ocorrência; Controle Preditivo- Usa dados e análises para prever tendências futuras.",
            "Controle Estratégico - Avalia o desempenho em relação às metas de longo prazo; Controle Tático - Monitora o desempenho em nível departamental; Controle Operacional  - Supervisiona as atividades diárias."],
          answer: "Controle preventivo de alimentação de fluxo - Antecipa os problemas; Controle simultâneo - Corrige os problemas conforme ocorrem; Controle de Feedback - Corrige os problemas depois que ocorrem",
        },
        {
          question: "Quais são as Qualidades de um Sistema eficaz de controle?",
          options: [
            "Precisão, Oportunidade, Economia, Flexibilidade, Compreensão, Critérios razoáveis, Colocação estratégica, Ênfase na exceção, Critérios múltiplos, Ação corretiva",
            "Adaptação, Complexidade, Eficiência, Simplificação, Integração, Centralização, Ambiguidade, Relevância, Inovação e Dinâmica.",
            "Compatibilidade, Simplificação, Efetividade, Redundância, Centralização, Inovação, Flexibilidade, Relevância, Automação e Descentralização.",
            "Adaptação, Eficiência, Relevância, Redundância, Integração, Inovação, Flexibilidade, Compatibilidade, Simplificação e Dinâmica."],
          answer: "Precisão, Oportunidade, Economia, Flexibilidade, Compreensão, Critérios razoáveis, Colocação estratégica, Ênfase na exceção, Critérios múltiplos, Ação corretiva",
        },
        {
          question: "Qual é um exemplo do lado disfuncional do controle em uma organização?",
          options: [
            "Monitorar de perto o desempenho dos funcionários para garantir a conformidade com as políticas da empresa.",
            "Fornecer feedback regular aos funcionários para ajudá-los a melhorar seu desempenho.",
            "Imposição de regras e regulamentos excessivamente rígidos que inibem a criatividade e a inovação.",
            "Estabelecer metas e objetivos claros para orientar os esforços dos funcionários."],
          answer: "Imposição de regras e regulamentos excessivamente rígidos que inibem a criatividade e a inovação.",
        },
        {
          question: "Quais são as 6 particularidades que diferenciam os líderes dos não-líderes ?",
          options: [
            "Impulso, desejo de liderar, honestidade e integridade, autoconfiança, conhecimento do cargo, inteligência",
            "Carisma, idade, altura, riqueza, educação, experiência.",
            "Caráter, comunicação, habilidades interpessoais, idiomas, tomada de decisão, conhecimento acadêmico.",
            "Simpatia, gênero, habilidades técnicas, traços de personalidade, conhecimento especializado, estilo de vestuário."],
          answer: "Impulso, desejo de liderar, honestidade e integridade, autoconfiança, conhecimento do cargo, inteligência",
        },
        {
          question: "O que é modelo Líder-Participação",
          options: [
            "Um modelo de liderança que enfatiza a colaboração, envolvimento e contribuição dos membros da equipe nas decisões e processos",
            "Um modelo de liderança em que o líder toma todas as decisões importantes e impõe seu controle sobre a equipe.",
            "Um modelo de liderança que se baseia na hierarquia organizacional, onde o líder é a autoridade máxima e não há espaço para a participação dos outros.",
            "Um modelo de liderança que prioriza a competição entre os membros da equipe para determinar quem tem mais influência nas decisões."],
          answer: "Um modelo de liderança que enfatiza a colaboração, envolvimento e contribuição dos membros da equipe nas decisões e processos",
        },
        {
          question: "Quais são as principais características de líderes carismáticos segundo Jay Conger e rabindra Kanungo :",
          options: [
            "Autoconfiança, Visão , habilidade de articular a visão , Fortes convicções sobre a Visão , comportamento fora do comum , Aparência de agência de mudanças , Sensibilidade Ambiental",
            "Autoconfiança, Visão , habilidade de articular a visão , Fortes convicções sobre a Visão , comportamento fora do comum , Aparência de agência de mudanças , Tolerância a Conflitos",
            "Autoconfiança, Visão , habilidade de articular a visão , Fortes convicções sobre a Visão , comportamento fora do comum , Critério  de Recompensa  , Tolerância a Conflitos",
            "Autoconfiança, Visão , habilidade de articular a visão , Fortes convicções sobre a Visão , comportamento fora do comum , Reconhecimento de Situação de crise  , Sensibilidade Ambiental"],
          answer: "Autoconfiança, Visão , habilidade de articular a visão , Fortes convicções sobre a Visão , comportamento fora do comum , Aparência de agência de mudanças , Sensibilidade Ambiental",
        },
        {
          question: "O que seria o marketing social segundo Vaz",
          options: [
            "A modalidade de ação mercadológica institucional tem como objetivo principal atenuar ou eliminar os problemas sociais, as carências da sociedade relacionadas principalmente às questões de higiene e saúde pública, de trabalho, educação, habitação, transportes e nutrição.",
            "O marketing social é uma estratégia para promover a venda de produtos exclusivamente em redes sociais, ignorando completamente outros canais de comunicação e distribuição.",
            "O marketing social é um método revolucionário que envolve a criação de perfis falsos em mídias sociais para disseminar informações enganosas sobre uma marca, acreditando que isso aumentará sua popularidade.",
            "O marketing social é um novo tipo de terapia psicológica que utiliza redes sociais como ferramenta principal, incentivando as pessoas a compartilharem seus problemas pessoais em troca de descontos em produtos e serviços."],
          answer:"A modalidade de ação mercadológica institucional tem como objetivo principal atenuar ou eliminar os problemas sociais, as carências da sociedade relacionadas principalmente às questões de higiene e saúde pública, de trabalho, educação, habitação, transportes e nutrição.",
        },
        {
          question: "Qual a função das Operações ?",
          options: [
            "As Operações são responsáveis por organizar festas e eventos corporativos, garantindo que todos os funcionários estejam constantemente engajados em atividades sociais para promover um ambiente de trabalho descontraído.",
            "A função das Operações é exclusivamente lidar com questões de espionagem industrial, monitorando as atividades de concorrentes para obter vantagens estratégicas no mercado.",
            "A área de Operações em uma empresa tem como principal função gerenciar a estética do escritório, escolhendo as cores das paredes, disposição dos móveis e decoração para garantir um ambiente agradável.",
            " A função das Operações em uma empresa está relacionada à gestão eficiente dos processos e recursos necessários para produzir bens ou serviços. Isso envolve a supervisão da cadeia de suprimentos, controle de qualidade, gestão de estoque, logística e outros aspectos operacionais para garantir a eficiência e a entrega de produtos ou serviços conforme as expectativas."],
          answer:" A função das Operações em uma empresa está relacionada à gestão eficiente dos processos e recursos necessários para produzir bens ou serviços. Isso envolve a supervisão da cadeia de suprimentos, controle de qualidade, gestão de estoque, logística e outros aspectos operacionais para garantir a eficiência e a entrega de produtos ou serviços conforme as expectativas.",
        },
        {
          question: "Qual foi a primeria certificação que influenciou bastante a parte de Operações ?",
          options: [
            "ISO 9000",
            "ISO 4000",
            "ISO 14000",
            "ISO 1001"],
          answer: "ISO 9000",
        },
        {
          question: "O que seria administração Funcional ?",
          options: [
            "Administração funcional refere-se à prática de delegar todas as responsabilidades e decisões importantes a um único indivíduo na empresa, ignorando a necessidade de equipes e departamentos especializados.",
            "Na administração funcional, as decisões são tomadas exclusivamente com base na intuição do gestor, sem a necessidade de análise de dados ou consulta a informações relevantes.",
            "A administração funcional envolve a aplicação de métodos de gestão ultrapassados, sem levar em consideração as inovações tecnológicas e as mudanças no ambiente de negócios.",
            "A administração funcional enfoca especificamente cada uma das áreas de trabalho com atribuições mais especializadas e diretamente relacionadas com a área de atuação, exigindo expertises mais profundas em determinados assuntos."],
          answer: "A administração funcional enfoca especificamente cada uma das áreas de trabalho com atribuições mais especializadas e diretamente relacionadas com a área de atuação, exigindo expertises mais profundas em determinados assuntos.",
        },
      ],
    },
  ];
  
  export default data;