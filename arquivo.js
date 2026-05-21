//informações dos times
const times = {
    palmeiras: {
        nome: "Sociedade Esportiva Palmeiras",
        fundacao: "1914",
        cidade: "São Paulo",
        estadioNome: "Allianz Parque",
        corHeader: "#00590d",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/10/Palmeiras_logo.svg",
        historia: `
            <h3>Início do Século XX</h3>
            <p>A História da Sociedade Esportiva Palmeiras começa no dia 26 de agosto de 1914, quando o clube foi fundado por imigrantes italianos
             na cidade de São Paulo com o nome de Palestra Italia. A primeira partida da equipe foi disputada em 24 de janeiro de 1915 contra 
             o Savoia, do atual município de Votorantim, à época distrito de Sorocaba, no interior paulista, e contou com a vitória palestrina por 
             2 a 0, com gols de Bianco e Alegretti.</p>
             <p>Depois de colecionar nas décadas de 20 e 30 do século XX uma série de títulos paulistas e conquistar uma quantidade relevante de 
             torcedores, o clube foi obrigado a mudar seu nome para Sociedade Esportiva Palmeiras em 1942, por ocasião da Segunda Guerra Mundial, 
             já que o Brasil, governado pelo então presidente Getúlio Vargas, declarou guerra aos países do "Eixo" (Alemanha, Itália e Japão) e 
             se alinhou aos países "Aliados", (Estados Unidos, União Soviética, Reino Unido, França, e outros).</p>
             <p>Na sua primeira partida com o novo nome de Palmeiras, em 20 de setembro de 1942, sagrou-se campeão paulista com uma vitória sobre 
             o São Paulo no Estádio do Pacaembu, no episódio histórico que ficou conhecido como "Arrancada Heroica". Nas décadas seguintes, 
             com grandes jogadores, como Oberdan Cattani, Waldemar Fiúme, Villadoniga, Jair Rosa Pinto, Liminha e Rodrigues, ampliou seu acervo 
             de títulos e se consolidou com uma das equipes mais importantes do Brasil.</p>
            <h3>Segunda Metade do Século XX</h3>
            <p>Na virada da primeira para a segunda metade do século, o alviverde atingiu um grande momento, conquistando seu primeiro e um dos 
            mais importantes títulos internacionais. O clube paulistano venceu a Juventus, da Itália, no Estádio do Maracanã, para um público de 
            mais de 100 mil pessoas, na final da Copa Rio de 1951, competição que foi reconhecida posteriormente pela FIFA com um Mundial de Clubes.
            Entre 1958 e 1970, nos "anos de ouro" do futebol brasileiro, quando o País conquistou seus três primeiros títulos mundiais de futebol 
            e encantou o planeta, o Palmeiras era um dos poucos times que conseguiam ser páreo para o Santos de Pelé, considerado um dos maiores 
            times do mundo em todos os tempos.</p>
            <p>Em 1965, foi inaugurado o Estádio Magalhães Pinto, o "Mineirão", e, para coroar os festejos da inauguração, organizou-se um amistoso entre 
            a Seleção Brasileira e a do Uruguai. Pela primeira vez na história do futebol brasileiro, um time, a Sociedade Esportiva Palmeiras, foi 
            convidado para compor toda a delegação, do técnico ao massagista, do goleiro ao ponta-esquerda, incluindo os reservas. A partida foi realizada 
            no dia 7 de setembro (data da independência brasileira), e o Palmeiras derrotou o Uruguai por 3 a 0. Durante essas décadas de ouro do futebol 
            brasileiro, por conta da técnica apurada e pelo toque de bola refinado de seus jogadores, o Palmeiras foi comparado durante anos a uma 
            "Academia de Futebol", que teve entre os principais protagonistas, em duas fases distintas e consecutivas, grandes nomes do futebol, como Ademir 
            da Guia, Dudu, Julinho Botelho, Djalma Santos, Servílio, Tupãzinho, Luís Pereira, Leivinha, César e Leão.</p>
            <p>Coincidentemente, após o maior ícone da Academia, o meia Ademir da Guia, encerrar a carreira em 1977, o Palmeiras ficou durante um longo período 
            sem conquistar títulos. Conhecido como "Divino" por conta da grande classe no trato da bola e pela eficiência, Ademir é considerado o maior 
            jogador da história do alviverde, com a impressionante marca de 901 jogos disputados, 153 gols marcados e dezenas de títulos conquistados, entre 
            campeonatos oficiais e torneios amistosos nacionais e internacionais.</p>
            <p>O jejum de títulos entre 1976 e 1993 foi o mais longo da história do clube e exigiu paciência da torcida, que viu seus maiores rivais dominarem as 
            conquistas da década de 1980. O martírio alviverde foi sepultado depois que a diretoria idealizou uma inédita parceria para a gestão do futebol 
            com a empresa multinacional de origem italiana Parmalat. Tal acordo, possibilitou a contratação de grandes jogadores e técnicos competentes, 
            que recolocaram o Palmeiras na trilha das conquistas.</p>
            <p>Sob o comando de Vanderlei Luxemburgo, o time formado por craques, como Evair, Edmundo, Roberto Carlos, César Sampaio, Mazinho, Edílson e Zinho, 
            goleou o arquirrival Corinthians por 4 a 0 na final do Campeonato Paulista de 1993, encerrando o incômodo tabu. O mesmo time conquistaria o Torneio 
            Rio-São Paulo daquele ano e o Campeonato Brasileiro. No ano seguinte, o alviverde obteve ainda os bicampeonatos paulista e brasileiro, com o meia 
            Rivaldo sendo o destaque na conquista nacional.</p>
            <p>Na segunda metade do período de parceria com a Parmalat e sob o comando de Luiz Felipe Scolari, o Palmeiras chegou a três conquistas inéditas: a Copa
            do Brasil e a Copa Mercosul, ambas de 1998, e a Copa Libertadores da América de 1999. Nestes três títulos, alguns dos destaques da equipe foram os 
            jogadores Arce, Alex, Cléber, Oséas, Paulo Nunes, Júnior, Euller, além dos já citados Zinho, Evair e César Sampaio, e dos goleiros Velloso e Marcos, 
            este último que se transformou num dos maiores ídolos da história alviverde.</p>
            <h3>Século XXI</h3>
            <p>Depois do novo período de alegria, que além de títulos contou com duas eliminações históricas do Corinthians na Copa Libertadores da América, e já com 
            o término da parceria com a Parmalat, a torcida alviverde conviveu com a enorme tristeza do rebaixamento no Campeonato Brasileiro de 2002. Numa demonstração 
            de paixão e fidelidade, apoiou o Palmeiras na conquista da Série B de 2003. A primeira década do século XXI foi um período de tentativas de reestruturação 
            política e administrativa para o clube, que voltou a levantar um título de primeira divisão somente em 2008, quando conquistou o Campeonato Paulista.</p>
            <p>Em 2012, ano no qual o ídolo Marcos encerrou a carreira, o Palmeiras voltou a levantar um título nacional após 12 anos. Comandada novamente por Luiz Felipe Scolari,
            a equipe alviverde conquistou a Copa do Brasil de 2012, de forma invicta, depois de levar a melhor contra o Coritiba na final da competição. No mesmo ano 
            que ratificou a marca de maior campeão nacional da história, o alviverde amargou um novo rebaixamento para a Série B do Campeonato Brasileiro, depois de uma campanha 
            marcada por uma série de contusões de jogadores, mau planejamento, elenco limitado e uma administração bastante questionada de seu presidente Arnaldo Tirone.</p>
            <p>No ano seguinte, já sob a administração do presidente Paulo Nobre e com uma campanha com clara superioridade da equipe ante as demais, o Palmeiras subiu novamente 
            à primeira divisão com 6 rodadas de antecedência, garantindo a participação na Série A de 2014, ano de seu centenário, quando escapou por pouco de um novo 
            rebaixamento e quando teve a inauguração de sua nova arena como grande motivo de festa.</p>
            <p>Em 2015, quando a nova Arena teve seu primeiro ano completo de existência, o local foi palco de vários jogos com recorde de público e renda e fechou o ano com a 
            conquista palmeirense do tricampeonato da Copa do Brasil, disputa que teve o goleiro Fernando Prass como grande herói. Em 2016, sob o comando do técnico Cuca e 
            com jogadores decisivos, como Dudu, Gabriel Jesus, Moisés e Zé Roberto, o alviverde confirmou seu retorno às conquistas de grande porte e chegou ao seu nono título 
            do Campeonato Brasileiro, depois de liderar 26 das 38 rodadas da competição e realizar a segunda melhor campanha da história dos pontos corridos até aquela temporada. 
            Após obter o vice-campeonato em 2017, o Palmeiras obteve o décimo título da competição em 2018, com mais marcas históricas, como a maior invencibilidade e o melhor 
            turno da história da era do Brasileirão de pontos corridos até então, tendo como destaques os jogadores Dudu, Willian e Bruno Henrique, sob o comando novamente de Felipão.</p>
            <p>Na temporada de 2020, em meio à pandemia de COVID-19, o Palmeiras conquistou o bicampeonato da Copa Libertadores da América, com uma equipe comandada pelo técnico português 
            Abel Ferreira e com jogadores decisivos, como Weverton, Gustavo Gómez, Viña, Raphael Veiga, Rony e Luiz Adriano, além de revelações vindas da base, como os jogadores Gabriel Menino,
            Danilo e Patrick de Paula. Após a competição de 2020 ter sido atrasada em virtude da doença que atingiu o planeta, a fase semifinal e a final foram disputadas em janeiro do ano seguinte. 
            A equipe eliminou o favorito River Plate nas semifinais e, na decisão em jogo único, disputada no Estádio do Maracanã, derrotou o Santos, sagrando-se campeã com a melhor campanha da competição. 
            O segundo título do Palmeiras na Libertadores veio 21 anos após a conquista de 1999. Além da conquista da Libertadores, a temporada marcou a tríplice coroa alviverde, já que ainda foram 
            conquistados os títulos do Campeonato Paulista e da Copa do Brasil, quando o clube chegou ao tetracampeonato.</p>
            <p>Ainda em novembro de 2021, com o retorno do atacante Dudu à equipe e com o lateral Piquerez e o meia Gustavo Scarpa somados à base vencedora titular da edição de 2020, o Palmeiras conquistou a
            Copa Libertadores da América de 2021, tornando-se tricampeão da competição ao derrotar o Flamengo na final disputada em Montevideo, no Uruguai. Com o título, a equipe paulistana se transformou
            no clube brasileiro com melhor desempenho na história da Libertadores, com uma série de recordes à frente de clubes compatriotas e o único time na história a ter conquistado a Copa Libertadores
            duas vezes no mesmo ano.</p>
            <p>No ano seguinte, menos de um mês de perder a decisão do Copa do Mundo de Clubes da FIFA de 2021 para o Chelsea e ficar com o vice-campeonato mundial, o alviverde conquistou o título inédito da
            Recopa Sul-Americana de 2022, ao derrotar o Athletico Paranaense, campeão da Copa Sul-Americana de 2021, em finalíssima disputada no Allianz Parque, na primeira decisão internacional da arena alviverde.
            Ainda em 2022, o alviverde conquistou o título do Campeonato Brasileiro pela 11ª vez. Em 2023, logo no início da temporada, o Palmeiras conquistou mais um título nacional, desta vez a sua primeira 
            Supercopa Rei, ao vencer o Flamengo por 4 a 3 em jogo eletrizante.No final da temporada, tendo o jovem Endrick como principal destaque, o Palmeiras conquistou o Campeonato Brasileiro pelo segundo
            ano consecutivo, chegando ao 12º título da competição e ampliando seu recorde no País como o maior vencedor nacional. Em 2024, ao vencer o Santos na final do Campeonato Paulista, alcançou um histórico
            tricampeonato consecutivo na competição, repetindo o feito de 1932–1934.</p>

        `,
        titulos: `
            <li>Copa Libertadores: 1999, 2020, 2021</li>
            <li>Campeonato Brasileiro: 12 títulos</li>
            <li>Copa do Brasil: 1998</li>
            <li>Campeonato Paulista: 26 títulos</li>`,
        
        estadio: `
        <p>Allianz Parque</p><img src="estadiopalmeiras.jpeg" style="max-width:100%;height:auto;">
        `
    },

    corinthians: {
        nome: "Sport Club Corinthians Paulista",
        fundacao: "1910",
        cidade: "São Paulo",
        estadioNome: "Neo Química Arena",
        corHeader: "#e40000",
        logo: "https://upload.wikimedia.org/wikipedia/pt/b/b4/Corinthians_simbolo.png",
        historia: `
            <h3>Fundação (1910-1912)</h3>
            <p>Em 1 de setembro de 1910, um grupo de cinco operários (Joaquim Ambrósio, Antônio Pereira, Rafael Perrone, Anselmo Correa e Carlos Silva) do bairro paulistano Bom Retiro, sob a luz de um lampião, às
            oito e meia da noite, decidiram criar um novo time de futebol, além de mais oito pessoas que contribuíram com 20 mil réis e também foram considerados sócios-fundadores. A ideia surgiu depois de assistirem
            à atuação do Corinthian FC, equipe inglesa de futebol fundada em 1882, que excursionava pelo Brasil.</p>
            <p>Os ingleses eram chamados pela imprensa da época de "Corinthian's Team", mas o time brasileiro só seria batizado "Sport Club Corinthians Paulista" depois de muita discussão e algumas reuniões.
            O presidente escolhido por eles foi o alfaiate Miguel Battaglia, que já no primeiro momento afirmou, "O Corinthians vai ser o time do povo e o povo é quem vai fazer o time". Da primeira arrecadação de recursos
            à compra da primeira bola de futebol do clube pouco tempo se passou, na verdade, apenas uma semana. Um terreno alugado na Rua José Paulino foi aplainado e virou campo, e foi lá que, já no dia 14 de setembro,
            o primeiro treino foi realizado diante de uma plateia entusiasmada que garantiu: "Este veio para ficar". De partida em partida o time foi se tornando famoso, mas era ainda um time de várzea.</p>
            <h3>Primeiros títulos (1913-1919)</h3>            
            <p>Em 1913, uma dissidência entre três clubes que disputavam o Campeonato Paulista abriu a oportunidade para que clubes de origem popular, conhecidos à época como "varzeanos", disputassem a competição organizada
            pela LPF, e o Corinthians ganhou o direito de disputar pela primeira vez essa competição após vencer uma seletiva contra o Minas Gerais, representante do bairro do Brás, e o FC São Paulo, do bairro do Bixiga.
            A estreia corintiana no Campeonato Paulista foi contra o Germânia, no dia 20 de abril de 1913, em duelo que terminou com vitória adversária, pelo placar de 3–1. Nos quatro jogos seguintes, foram três derrotas
            (para Internacional, Americano e Santos) e um empate (Ypiranga). A primeira vitória ocorreu no dia 7 de setembro, um 2–0 contra o Germânia. Nas três partidas seguintes, mais três empates (com Internacional,
            Ypiranga e Americano).
            Ao final do Paulista de 1913, o Corinthians terminou na quarta colocação, com seis pontos ganhos (uma vitória, quatro empates e três derrotas, oito gols a favor e 16 contra). De positivo, o timerevelaria dois futuros ídolos: Neco e Amílcar.</p>
            <p>A temporada seguinte seria marcante para a história corintiana. Com apenas quatro anos de existência, o time conquistou seu primeiro título, o Campeonato Paulista de 1914 (organizado pela LPF). O Corinthians
            sagrou-se campeão de forma invicta, com 10 vitórias em 10 partidas, 37 gols marcados e 9 gols sofridos. Com 12 gols, Neco foi o artilheiro da competição. A equipe que conquistou o primeiro
            título da história corintiana era formada por: Aristides, Fúlvio e Casemiro González; Police, Bianco e César Nunes; Américo, Peres, Amílcar, Apparício e Neco. Ainda naquele ano, o Corinthians realizou sua primeira partida
            contra uma equipe estrangeira, o Torino. Os italianos venceram por 3–0.</p>
            <h3>Duas décadas vitoriosas (1920-1940)</h3>
            <p>Nas décadas de 1920 e 1930, o Corinthians firmou-se como uma das equipes mais importantes de São Paulo, rivalizando com o Clube Atlético Paulistano e o Palestra Itália (futuro SE Palmeiras).
            No período, o clube arrematou nove títulos paulistas (sendo três tricampeonatos, feito jamais alcançado por outro clube paulista). Além de Neco, que jogou no clube até 1930, Rato, Del Debbio,
            Tuffy, Grané, Teleco, Brandão, e Servílio de Jesus despontaram como grandes ídolos do clube no período.</p>
            <h3>Tempos de jejum (1941-1950)</h3>
            <p>Em 1941, o Corinthians novamente conquistou o Campeonato Paulista. O título só não foi de maneira invicta por conta de uma derrota, na última rodada, contra o Palestra Itália. O time era ótimo, e a linha média
            — Jango, Brandão e Dino — impecável. A festa do título corintiano foi realizada no recém-inaugurado estádio do Pacaembu.</p>
            <p>Contudo, nos nove anos seguintes, o Corinthians viveu um jejum de títulos paulistas. Sem conquistas estaduais, o clube do Parque São Jorge consolou-se em levar por quatro vezes a Taça São Paulo (em 1942, 1943, 1947 e 1948)
            - torneio que reunia os três primeiros colocados do ano anterior. Sem ter a disposição seu poderio técnico dos últimos cinco anos, o Corinthians foi vice-campeão paulista cinco vezes, sendo três delas seguidas, entre 1942 e 1950,
            numa época de ascensão do São Paulo, liderado pelo atacante Leônidas da Silva, como nova força no futebol paulista.</p
            <p>Mesmo com a contratação de nomes de peso no futebol nacional, como a do zagueiro Domingos da Guia, aos 32 anos, em 1944, ou dos atacantes Milani e Hércules em anos seguintes, o Corinthians amargaria quase uma década sem conquistas
            importantes. A situação só começaria a mudar a partir de 1949, quando uma nova geração de pratas-da-casa foi conduzida pelo técnico Rato (o mesmo Rato campeão como jogador na década de 1920) ao time principal. Os frutos seriam
            colhidos na primeira metade da década seguinte.</p>
            <h3>Era de Ouro (1951-1960)</h3>
            <p>Após um período sem grandes êxitos futebolísticos, o clube renovou sua equipe para a década de 1950. Jovens formados nas "categorias de base" do Corinthians, como Luizinho, Cabeção, Roberto Belangero e Idário, juntaram-se
            a jogadores como Baltazar, Carbone, Cláudio e Gilmar, formando um dos melhores times da história corintiana e do Brasil. Essa equipe foi campeã do Campeonato Paulista (1951 e 1952), do Torneio Rio-São Paulo (1950, 1952 e 1953) e da
            Pequena Taça do Mundo de 1953.</p>
            <p>Foi também com essa geração que o clube saiu do Brasil pela primeira vez em sua história, tendo vencido um amistoso no Uruguai contra um combinado local, por 4–1, em junho de 1951. No ano seguinte, o time excursionou pela primeira
            vez à Europa, com partidas amistosas na Turquia, Suécia, Dinamarca e Finlândia (o saldo foi de nove vitórias, um empate e uma derrota). Sendo vice Campeão Mundial ao perder na final para o Fluminense na Copa Rio Internacional de 1953,
            o time deixou a disputa do Campeonato Paulista daquele ano, preparando-se para o torneio do ano seguinte, que celebraria o "IV Centenário da Fundação" da cidade de São Paulo. Naquele ano, o clube disputou a Pequena Taça do Mundo,
            que acabou sendo campeão.</p>
            <p>Em 1954, o Campeonato Paulista daquela temporada despertou grande interesse em todos os clubes e torcedores, porque comemorava o "IV Centenário da Fundação" da cidade de São Paulo. Para a época, era considerado o título paulista mais importante da história.
            Um empate contra o Palmeiras garantiu a conquista de um dos títulos mais importantes da história alvinegra, que coroou a geração vitoriosa dos anos cinquenta. A década de 1950 ainda marcou internacionalmente o clube. Entre 1951 e 1959,
            o Corinthians disputou 64 partidas contra equipes estrangeiras, com 47 vitórias, dez empates e apenas sete derrotas. Ficou invicto por 32 jogos, de 1952 e 1954.
            No final da década de 1950, assumiu a presidência do clube por voto direto dos associados Vicente Matheus, que comandou o Corinthians durante oito mandatos.</p>
            <h3>Jejum e a era Rivellino (1961-1975)</h3>
            <p>No Campeonato Paulista de 1961, o time fez uma campanha tão pífia que foi apelidado por torcedores rivais de "Faz-Me-Rir". O clube apostou na contratação de craques que chegavam ao Parque São Jorge como "salvadores da pátria",
            mas que acabaram não vingando no time (como Almir Pernambuquinho em 1960 e Mané Garrincha em 1966). Mas aquela década também marcava o surgimento de Roberto Rivellino, "O Reizinho do Parque". Embora tenha vencido apenas um grande título pelo Timão
            (o Torneio Rio-São Paulo de 1966), é considerado o maior jogador da história corintiana.</p>
            <p>Em 1966, na tentativa de acabar com o "jejum" de títulos no Campeonato Paulista, a diretoria corintiana contratou o zagueiro Ditão e o volante Nair, que vieram da Associação Portuguesa de Desportos, além do atacante Garrincha, que chegou ao Parque São Jorge com 32 anos de idade.
            Na época, a verba destinada ao departamento de futebol foi recorde e o jornal "A Gazeta Esportiva" passou a tratar o time como o "Timão do Corinthians", e assim nasceu o apelido que acompanha o clube até hoje. Ainda no final da década, o Corinthians venceria o Santos,
            após quase 11 anos sem vitórias sobre a equipe de Pelé em edições do Campeonato Paulista. Paulo Borges e Flavio fizeram os gols dessa vitória corintiana.</p>
            <p>Em 1970, depois de uma conturbada negociação com a Portuguesa, o Corinthians contratou o lateral Zé Maria. O jogador havia sido campeão mundial com o Seleção Brasileira de Futebol na Copa do Mundo de 1970, no México, na reserva de Carlos Alberto Torres. Para sair da fila,
            a diretoria corintiana trouxe nos anos seguintes nomes como Vaguinho (em 1971) e Geraldão, além de promover jogadores da base como Wladimir. Além da interminável fila de grandes conquistas, o Corinthians também não conseguia chegar, com frequência, a finais de grandes torneios.
            Ficou de 1957 a 1974 sem decidir o Campeonato Paulista. Em 1974, havia grande esperança de se quebrar o jejum na final estadual contra o Palmeiras. Mas o rival acabou vencendo os corintianos, o que precipitou a saída de Rivellino para o Fluminense.</p>
            <h3>"Invasão corintiana" e fim da angústia (1976-1980)</h3>
            <p>Corinthians e Rivellino acabariam encontrando-se na semifinal do Campeonato Brasileiro de 1976, contra o Fluminense, em 5 de dezembro, naquela que é uma das partidas mais marcantes da história corintiana. Dezenas de milhares de torcedores alvinegros viajaram para o Rio de Janeiro
            para assistir o duelo no Estádio do Maracanã, que acabou dividido entre os corintianos e fluminenses. Aquele momento acabou conhecido como "A invasão corintiana ao Maracanã". A consagração daquele dia célebre para os corintianos veio como a vitória sobre o clube carioca nos pênaltis,
            após empate de 1–1 no tempo regulamentar. Na decisão do Brasileiro, o Internacional derrotou o Corinthians em Porto Alegre.</p>
            <p>No começo de 1977, o presidente corintiano Vicente Matheus trouxe Palhinha, do Cruzeiro, por uma quantia recorde para a época: 7 milhões de cruzeiros. O jogador tornaria-se um dos ídolos da "Fiel" naquele período. Menos de um ano depois de "invadir" o Maracanã, o Corinthians viveria uma de
            suas noites mais inesquecíveis em 13 de outubro, com a conquista do Campeonato Paulista, que se tornou um dos títulos mais importantes da história corintiana, pois representava o fim de quase 23 anos sem ganhar competições oficiais. Na última das três partidas, contra a Associação Atlética Ponte Preta,
            o título veio com o gol de Basílio, no segundo tempo.</p>
            <p>Para 1978, a diretoria do clube contratou Sócrates, que pertencia ao Botafogo de Ribeirão Preto e acabaria por ser considerado um dos maiores craques da história do alvinegro. Outro que chegava naquele ano ao clube e seria ídolo no Timão era Biro-Biro. Em 1979, o Corinthians voltaria a vencer o Campeonato Paulista contra a mesma Ponte Preta.</p>
            <h3>Democracia Corintiana (1981-1984)</h3>
            <p>No início de 1981, o presidente Vicente Matheus foi buscar pessoalmente na Arábia Saudita o meio-campo Zenon, que havia se destacado no Guarani Futebol Clube em temporadas anteriores e assumiria a camisa 10 do Corinthians, no lugar de Palhinha. Mas após não conseguir um bom desempenho no Campeonato Paulista daquele ano
            (que era classificatório para o Campeonato Brasileiro do ano seguinte), o clube teve de jogar a Taça de Prata, espécie de "segunda divisão" do Campeonato Brasileiro, em 1982.</p>
            <p>Os resultados ruins em campo levaram a mudanças na diretoria com a saída de Vicente Matheus, e os jogadores passaram a ter papel ativo nas decisões do clube. Tudo era resolvido pelo voto, das contratações ao local de concentração. O período ficou marcado como a "Democracia corintiana". As mudanças surtiram efeito. Em 1982,
            quando liderados pelos ídolos Sócrates, Wladimir, Casagrande, Biro-Biro e Zenon, o clube conquistou o Campeonato Paulista em cima do São Paulo, que tentava o tricampeonato na competição. No ano seguinte, o Corinthians repetiria a final contra o rival e uma vez mais conquistaria o torneio. Ainda naquele ano, o Corinthians havia
            aplicado a maior goleada da história do Campeonato Brasileiro, um acachapante 10–1 sobre o Tiradentes, do Piauí, com quatro gols de Sócrates.</p>
            <p>No ano seguinte, a equipe corintiana não conseguiu o seu quarto tricampeonato paulista, tendo perdido o título para o Santos. Já pelo Campeonato Brasileiro, o time do Parque São Jorge fez sua melhor campanha desde o vice-campeonato da edição de 1976 e chegou à semifinal. O plantel alvinegro foi eliminado pelo Fluminense,
            mas a campanha é também lembrada pela goleada por 4–1 sobre o Flamengo de Zico e companhia.</p>
            <h3>Aposta na base e primeiro título brasileiro (1985-1992)</h3>
            <p>Em 1985, já sem Sócrates em seu plantel e com o fim da Democracia Corintiana, a nova diretoria corintiana apostou na consolidação de uma grande equipe, com as contratações de De León, que deixou o Grêmio como o jogador mais caro do futebol brasileiro até então, Serginho Chulapa e Dunga, que se somavam a reforços do ano anterior,
            como Carlos, Édson e Juninho, contratados da Ponte Preta, e aos bem estabelecidos Wladimir, Biro-Biro, Zenon e Casagrande. O grande time, porém, só ficou no "papel": no Campeonato Brasileiro, o Timão foi eliminado antes das semifinais, e no Campeonato Paulista, a equipe ficou apenas em quinto lugar.</p>
            <p>Nos anos seguintes, o clube renovou-se com um elenco de jogadores como o volante Wilson Mano, e o zagueiro Marcelo, além de apostar em jogadores formados nas categorias de base corintiana, como o goleiro Ronaldo, o volante Márcio Bittencourt e o atacante Viola. Assim, o Corinthians voltaria à conquista do Campeonato Paulista.</p>
            <p>Em 1990, o Corinthians conquistaria um dos títulos mais importantes de sua história. Com uma equipe dirigida pelo técnico Nelsinho e liderada em campo por Neto (que se consagraria como grande ídolo corintiano), o clube faturou seu primeiro Campeonato Brasileiro, vencendo na decisão o São Paulo.</p>
            <p>Em janeiro de 1991, o Corinthians ganhou a Supercopa do Brasil, tendo enfrentado o Flamengo, vencedor da Copa do Brasil de 1990, ganhando por 1 a 0, gol de Neto. No final do mesmo ano, Vicente Matheus deixava a presidência corintiana. Sua esposa, Marlene Matheus, assumiu o clube e ficaria no cargo até 1993.</p>
            <h3>Era Dualib, o período das parcerias (1993-2006)</h3>
            <p>Em 1993, em nova eleição, o presidente escolhido seria Alberto Dualib, e o clube conquistaria nos anos seguintes o Campeonato Paulista de 1995 e o seu primeiro título da Copa do Brasil, de forma invicta, cuja vaga conquistou após vencer a Copa Bandeirantes, no ano anterior. O meia-atacante Marcelinho Carioca foi um dos grandes destaques
            dessas conquistas e despontaria a partir dali como grande ídolo do clube.</p>
            <p>A Era Dualib foi marcada por parcerias com grupos privados: Banco Excel (1997), Hicks, Muse, Tate & Furst Incorporated (de 1999 a 2001) e MSI (de 2005 a 2007), que levaram muitos recursos financeiros ao clube, conquistas e polêmicas. Entre grandes nomes que defenderam o clube, destacam-se Gamarra, Rincón, Vampeta, Edílson, Ricardinho,
            Kléber e Dida no elenco entre 1998 e 2000 e Carlitos Tevez, Mascherano e Nilmar no time de 2005 e 2006, entre outros nomes.</p>
            <p>Já em relação a títulos, o clube conquistou mais três edições do Campeonato Brasileiro de Futebol (1998, 1999 e 2005), quatro do Campeonatos Paulistas (1997, 1999, 2001 e 2003), a Copa Bandeirantes (na sua única edição, em 1994), uma Copa do Brasil (em 2002), além do primeiro Campeonato Mundial de Clubes (em 2000), a maior conquista desse período.
            Primeiro torneio do gênero organizado pela FIFA, o Corinthians superou os rivais de chave Raja Casablanca, Real Madrid e Al Nassr, e venceu a final contra o Vasco da Gama, na disputa por penais, sagrando-se o primeiro campeão mundial pela FIFA.</p>
            <h3>Fim das parcerias, o rebaixamento e a volta por cima (2007-2010)</h3>
            <p>Em 2007, a MSI deixou o clube, juntamente com seus principais jogadores: Tevez, Mascherano, Roger e Gustavo Nery. Pressionado, Alberto Dualib, que ocupava a presidência corintiana havia mais de uma década, também deixou o cargo. Após eleição ainda naquele ano, Andrés Sanchez foi eleito o novo presidente. A saída do MSI criou-se um período de instabilidade,
            que culminou do clube para a Série B do Campeonato Brasileiro.</p>
            <p>Com investimentos em projetos de marketing, reformulação da equipe de futebol e comissão técnica (comandada por Mano Menezes), o Corinthians deu a volta por cima com o vice-campeonato da Copa do Brasil e o título da Série B, que garantiu a volta para a divisão principal do futebol do país.</p>
            <p>No final daquele ano, a diretoria corintiana acertou a contratação de Ronaldo Fenômeno, que se tornou o principal atleta do elenco nas duas temporadas seguintes, marcado pelos títulos Paulista (invicto) e da Copa do Brasil de 2009, além do centenário do clube, em setembro de 2010, quando foi anunciada a construção de seu novo estádio, no bairro de Itaquera.</p>
            <h3>Conquista da América, segundo Mundial e novo estádio (2011-presente)</h3>
            <p>A temporada 2011 começou com uma eliminação precoce na Copa Libertadores da América, mas o clube se recuperou com um vice-campeonato no Campeonato Paulista e sua quinta conquista no Campeonato Brasileiro de 2011.</p>
            <p>Com a manutenção do elenco base do título nacional, o Corinthians fez uma das mais importantes temporadas de sua história, ao se sagrar pela primeira vez campeão da Copa Libertadores - e de maneira invicta, vencendo o Boca Juniors na final - e do Campeonato Mundial de Clubes da FIFA pela segunda vez, com uma vitória contra o campeão europeu Chelsea, com um gol de Paolo Guerrero.</p>
            <p>Apesar da conquista do Campeonato Paulista e da Recopa Sul-Americana (ao bater o São Paulo), ganhando também o título honorífico da Tríplice Coroa Internacional de Futebol. O alvinegro não foi bem nos principais torneios da temporada 2013, sendo eliminado nas oitavas-de-final da Libertadores, nas quartas de final da Copa do Brasil e terminado apenas uma décima colocação no
            Campeonato Brasileiro. Ao final daquele ano, com a saída de Tite, Mano Menezes foi contratado como novo treinador e com a missão de reformular o elenco corintiano consagrado de 2012. O grande acontecimento do ano de 2014 foi a inauguração do novo estádio de futebol alvinegro, construído no bairro de Itaquera, com uma partida entre Corinthians e Figueirense pelo Campeonato Brasileiro.
            Logo depois, o estádio foi entregue a FIFA, onde foi palco da abertura da Copa do Mundo daquele ano e outros cinco duelos. O time encerrou a temporada sem títulos, tendo sido eliminado ainda na primeira fase do Paulista, nas quartas-de-final da Copa do Brasil e terminado em quarto lugar no Brasileiro.</p>
            <p>Para a temporada de 2015, o técnico Tite retorna ao clube pela terceira vez. Inicia a preparação para a temporada disputando a primeira edição do torneio amistoso internacional Florida Cup, nos Estados Unidos. Destaque para a vitória por 2 a 1 sobre o clube alemão Bayer Leverkusen. No Campeonato Paulista foi eliminado nas semifinais, pela Copa Libertadores e Copa do Brasil ficou nas oitavas-de-finais.
            Já no Campeonato Brasileiro, sagrou-se campeão pela sexta vez. No ano de 2016 o alvinegro iniciou a preparação da temporada disputado a segunda edição da Florida Cup, destaque para a vitória de 3 a 2 sobre a equipe ucraniana Shakhtar Donetsk. Com o desmanche do elenco campeão brasileiro do ano anterior e a saída do técnico Tite para a Seleção Brasileira, foi eliminado nas semifinais do Campeonato Paulista,
            eliminado nas oitavas-de-finais da Copa Libertadores e nas quartas-de-finais da Copa do Brasil. No Campeonato Brasileiro ficou na sétima posição, cuja classificação assegurou vaga na Copa Sul-Americana do ano seguinte após dez anos de ausência na competição. O ano de 2017 iniciou com um vice-campeonato no torneio amistoso internacional da Florida Cup. Ainda no primeiro semestre ficou na quarta fase da Copa do Brasil,
            além da 28° conquista do Campeonato Paulista. No segundo semestre ficou nas oitavas-de-finais na Copa Sul-Americana e encerrando o ano com a sétima conquista do Campeonato Brasileiro.</p>
            <p>O ano de 2018 teve um feito histórico, com a 29° conquista do Campeonato Paulista, sobre o arquirrival Palmeiras, ainda mais na arena deles, depois de perder o primeiro na Neo Química Arena, o Coringão conseguiu reverter o placar por 1 a 0 e vencer a decisão nos pênaltis. Já o ano de 2019, reservou outra marca histórica, a 30° conquista do Campeonato Paulista, sobre o São Paulo, jogando em casa,
            depois de muito tempo o Corinthians conquistava novamente um tricampenato estadual. Para o ano de 2020 foram realizadas diversas novas contratações como Luan, Léo Natel entre outras. Iniciou o ano sendo vice-campeão paulista perdendo a final nos pênaltis para o seu rival Palmeiras. Com um elenco extremamente frágil, foi eliminado precocemente da Copa do Brasil e Libertadores,
            além de brigar contra o rebaixamento durante grande parte do campeonato.</p> 
            <p>Com o novo presidente eleito Duílio Monteiro Alves assumiu o clube com o objetivo de abater as grandes dívidas que foram impostas sobre o Corinthians principalmente por causa de seu antecessor Andrés Sanchez. No ano de 2021, o clube passou por diversas dificuldades ao longo da temporada sendo eliminado precocemente do Campeonato Paulista, Copa do Brasil e Sul-Americana.
            Após a dispensa de diversos jogadores e com a contratação de nomes de peso como Willian , Róger Guedes, Renato Augusto e Giuliano o clube voltou a apresentar um bom futebol, terminando a temporada classificado para a Libertadores. Para a temporada 2022, com alguns novos reforços e com um início conturbado nas competições após a demissão do técnico Sylvinho e a contratação do técnico Vítor Pereira o clube voltou
            a apresentar um bom desempenho dentro de campo. Foi eliminado precocemente no Campeonato Paulista, entretanto retornou as quartas de final da Libertadores após 10 anos e foi finalista da Copa do Brasil sendo vice-campeão na competição. Encerrou a temporada classificado para a Libertadores. No início de 2023, teve um início de temporada excelente. Entretanto foi eliminado precocemente no Campeonato Paulista.
            Foi eliminado na fase de grupos da Libertadores, e foi eliminado na semifinal da copa sul-americana e copa do brasil. No campeonato Brasileiro flertou contra o rebaixamento a temporada inteira, porém escapou da zona de rebaixamento.</p>
            <p>Nas novas eleições presidenciais do clube, Augusto Melo foi eleito o novo presidente do clube e prometeu reformulações no clube.</p>
            <p>Em 2025, o Corinthians conquistou seu 31º título do Campeonato Paulista e seu quarto título da Copa do Brasil.</p>
            <p>Em 2026, o Corinthians conquistou seu 2° título da Supercopa Rei, ganhando do Flamengo por 2 a 0, com gols de Gabriel Paulista aos 26 minutos do primeiro tempo, e de Yuri Alberto aos 52 minutos do segundo tempo.</p>

            `,
        titulos: `
            <li>Copa Libertadores: 2012</li>
            <li>Mundial de Clubes FIFA: 2000, 2012</li>
            <li>Campeonato Brasileiro: 7 títulos</li>
            <li>Campeonato Paulista: 30 títulos</li>`,
        estadio: `
        <p>Neo Química Arena</p><img src="estadiocorinthians.jpeg" style="max-width:100%;height:auto;">
        `
    },

    flamengo: {
        nome: "Clube de Regatas do Flamengo",
        fundacao: "1895",
        cidade: "Rio de Janeiro",
        estadioNome: "Maracanã",
        corHeader: "#cc0000",
        logo: "https://upload.wikimedia.org/wikipedia/commons/9/96/Clube_de_Regatas_do_Flamengo_logo.svg",
        historia: `
            <h3>Século XIX</h3>
            <p>Em fins do século XIX o remo dominava o Rio de Janeiro. O futebol começava apenas a aparecer em alguns clubes, mas ainda era olhado com certo temor, pois não estava sendo recebido com entusiasmo pela sociedade carioca.
            A criação de um grupo organizado com o objetivo de disputar competições de remo com clubes de outros bairros surgiu entre jovens do bairro do Flamengo, no Café Lamas, no Largo do Machado.</p>
            <p>Um novo barco foi comprado e recebeu o nome de "Scyra". Na noite de 17 de novembro de 1895, muita gente estava em um dos corredores da casa número 22 da Praia do Flamengo, onde Nestor de Barros morava num dos quartos.
            Lá, há muito tempo, já haviam abrigado "Pherusa", e agora guardavam "Scyra". A reunião teve por objetivo a fundação do Grupo de Regatas do Flamengo. Além dos eleitos, foram destacados como sócios-fundadores,
            José Agostinho Pereira da Cunha, Napoleão Coelho de Oliveira, Mário Espínola, José Maria Leitão da Cunha, Carlos Sardinha, Maurício Rodrigues Pereira, Desidério Guimarães, Eduardo Sardinha, Emido José Barbosa,
            José Félix Cunha Meneses, George Leuzinger, Augusto Lopes da Silveira, João de Almeida Lustosa e José Augusto Chairéo, sendo que os três últimos faltaram à reunião, mas foram considerados sócios-fundadores.
            Na oportunidade ficou estabelecido que a data oficial da fundação do clube seria 15 de novembro, feriado nacional.</p>
            <p>As cores iniciais foram azul e ouro em listras horizontais bem largas, entretanto, em 1898, por proposta de Nestor de Barros, houve mudança para as atuais: vermelho e preto. Novos barcos foram sendo comprados e o Mengo começou a destacar-se nas competições.
            Na I Regata do Campeonato Náutico do Brasil, no dia 5 de junho de 1898, conquistou a sua primeira vitória, com "Irerê", uma baleeira a dois remos. Anteriormente o Flamengo só havia obtido colocações secundárias e muitos segundos lugares, o que lhe valeu, inclusive,
            o apelido de "Clube de Bronze". Em 1902, diante de seu crescimento, houve a transformação para Clube de Regatas do Flamengo.</p>
            <p>Uma curiosidade na história do Clube de Regatas do Flamengo é que seus atletas já haviam se arriscado a praticar o futebol. No dia 25 de outubro de 1903, antes da fundação do departamento de futebol do Flamengo, os remadores flamenguistas se reuniram com os colegas de esporte do Botafogo para a disputa de um amistoso</p>

            <h3>Século XX</h3>
            <p>Em 1927, um concurso promovido pela água mineral Salutaris e pelo Jornal do Brasil objetivou eleger o "clube mais querido do Brasil". O torcedor deveria escrever o nome do seu time favorito no rótulo da garrafa d'água, ou no cupom impresso no jornal, e envia-lo preenchido para a sede do Jornal do Brasil, no Rio de Janeiro.
            O vencedor levaria para sua sede a portentosa Taça Salutaris e o "título" de clube mais querido do Brasil. Ao final da apuração, o Flamengo somou 254 850 votos e venceu a disputa. Atualmente, a Taça Salutaris é exibida em local de destaque na sala de troféus do Clube de Regatas do Flamengo,
            ladeada pela Copa Libertadores da América e pela Taça Intercontinental de 1981.</p>
            <p>A partir de 1902 o remo passou a dividir com o futebol a preferência popular. Assim, os associados do Flamengo tornaram-se sócios também do Fluminense para acompanhar o futebol, e os do clube das Laranjeiras vieram para o rubro-negro a fim de acompanhar as regatas. Alberto Borgerth representava bem o exemplo, pois pela manhã remava pelo Flamengo e à tarde jogava pelo seu clube, o Fluminense.</p>
            <p>Outro fator que ajudou a popularizar a força do Flamengo pelo país foi a Segunda Guerra Mundial. Com o posicionamento do Brasil como aliado dos Estados Unidos, foram construídas nas cidades de Natal-RN e Belém-PA, pelos americanos, duas antenas de alta captação para pegar sinais enviados dos navios inimigos. Só que as mesmas antenas também permitiram a transmissão de jogos, via rádio,
            para o Norte e o Nordeste do país. Na época, com o Rio de Janeiro como a capital do país, a importância do que acontecia em terras cariocas era muito alta. Além disso, o rádio era o meio de comunicação mais utilizado para notícias e, claro, transmissão de esportes. Dessa forma, as vitoriosas campanhas rubro-negras nos estaduais do começo da década de 40 se alastrou, ajudando a popularizar o clube.</p>
            <p>Entretanto, em 1911, houve a cisão no Fluminense e muitos jogadores do tricolor vieram para o Rubro-negro, resolvendo em assembleia do dia 8 de novembro de 1911 fundar um departamento de esportes terrestres, com Alberto Borgerth na direção. A briga entre Oswaldo Gomes e muitos dos jogadores do primeiro quadro do Fluminense foi a razão da discórdia. Originalmente pensou-se em uma simples adesão ao Botafogo,
            mas como o alvinegro, na época, era o grande rival do Tricolor Carioca, a ideia foi logo descartada. Em seguida consideraram a ideia de reforçar o já estabelecido Paissandu, mas também foi vetado, uma vez que o clube era composto exclusivamente de ingleses. Finalmente, surgiu a ideia de Borgerth, de se criar uma seção de futebol no Flamengo. A proposta foi aprovada e consagrada na assembleia do clube, realizada no dia 8.</p>
            `
            ,
        titulos: `
            <li>Copa Libertadores: 1981, 2019, 2022</li>
            <li>Campeonato Brasileiro: 8 títulos</li>
            <li>Copa do Brasil: 2006, 2013, 2022</li>
            <li>Campeonato Carioca: 37 títulos</li>`,

        estadio: `
         <p>Marananã</p>
        <img src="estadioflamengo.jpeg" alt="Estádio Flamengo - Maracanã" style="max-width:100%; height:auto;">
        `
    },

    santos: {
        nome: "Santos Futebol Clube",
        fundacao: "1908",
        cidade: "Santos",
        estadioNome: "Vila Belmiro",
        corHeader: "#a0a0a0",
        logo: "https://upload.wikimedia.org/wikipedia/commons/1/15/Santos_Logo.png",
        historia: `
            <h3>Século XX</h3>
            <p>O Santos Futebol Clube foi fundado no dia 14 de abril de 1912, por iniciativa de três esportistas da cidade, Francisco Raymundo Marques, Mário Ferraz de Campos e Argemiro de Souza Júnior, que convocaram uma assembleia na sede do Clube Concórdia para a criação de um time de futebol. Durante a reunião, surgiu a dúvida quanto ao nome que seria dado a essa agremiação, várias sugestões apareceram como, Brasil Atlético,
            Euterpe e Concórdia, mas os participantes da reunião decidiram por unanimidade a proposta de Edmundo Jorge de Araújo: a denominação Santos Foot-Ball Club.</p>
            <p>As cores iniciais do Santos FC eram o branco, o azul e o dourado, mas como era difícil na época a confecção de um uniforme nessas cores, ficou decidido no dia 31 de março de 1913 que o clube passaria a ser alvinegro.</p>
            <p>A primeira apresentação do time considerada como jogo-treino, ocorreu no dia 23 de junho de 1912, no campo da Vila Macuco, contra um combinado local chamado Thereza Team, o confronto foi vencido pelo Santos pelo placar de 2 a 1, com gols de Anacleto Ferramenta e Geraule Ribeiro. O time entrou em campo com a seguinte formação: Julien Fauvel (goleiro francês); Simon e Ari; Bandeira, Ambrósio e Oscar;
            Bulle, Geraule, Esteves, Fontes e Anacleto Ferramenta. O primeiro jogo tido como oficial aconteceu apenas em 15 de setembro de 1912, o Santos FC venceu o Santos Athletic Club (time formado por ingleses) por 3 a 2, no campo da Avenida Ana Costa, local onde hoje se encontra a Igreja Coração de Maria. O primeiro gol do confronto foi marcado por Arnaldo Silveira, o tento é considerado o primeiro da história do clube,
            os outros dois gols foram anotados pelo próprio Arnaldo e por Adolpho Millon Júnior.</p>
            <p>No início de 1913, o Santos recebeu um convite da Liga Paulista de Futebol para disputar o campeonato estadual daquele ano, esta foi a primeira competição oficial disputada pelo clube. A estreia aconteceu no dia 1 de junho, diante do Germânia, ainda sem experiência, o time santista foi derrotado por 8 a 1. Devido ao alto custo das viagens na época, o Santos desistiu do campeonato,
            a única vitória do time foi contra o rival Corinthians (que também estava estreando) pelo placar de 6 a 3. Após desistir de disputar a competição estadual, o Santos conquistaria o seu primeiro título na história, o Campeonato Santista de 1913 invicto.</p>
            <p>Em 1915, o Santos voltou a disputar o Campeonato Santista, conseguindo o segundo título embora tenha usado o nome de União FC, devido a APEA (liga no qual permaneceu afiliado) não o ter permitido participar com o nome oficial. Em 1916, o Alvinegro retornaria a disputa do Campeonato Paulista, a competição estadual desse ano ficou marcada na história do clube, pois foi nela que aconteceu a inauguração do estádio da Vila Belmiro.</p>
            <p>O Santos foi vice-campeão nas edições do Campeonato Paulista de 1927, 1928 e 1929, sempre tendo como destaque a linha de ataque que tinha Araken Patusca e Feitiço, grandes futebolistas da época. Em 1927, o Santos atingiu a marca de 100 gols no campeonato estadual, com a linha de ataque formada por Siriri, Camarão, Feitiço, Araken e Evangelista.</p>
            <p>O primeiro título paulista veio em 1935, após o Santos vencer por 2 a 0 a equipe do Corinthians em pleno Parque São Jorge. A escalação santista para a partida foi: Cyro, Neves e Agostinho; Ferreira, Marteletti e Jango; Saci, Mário Pereira, Raul Cabral Guedes, Araken Patusca e Junqueirinha. Raul Cabral Guedes e Araken Patusca foram os autores dos gols da partida.</p>
            <p>Após 20 anos do primeiro título paulista, o Santos voltou a ser campeão estadual apenas em 1955. O jogo do título foi contra o Taubaté, vitória santista por 2 a 1, sob o comando do vitorioso técnico Luís Alonso Pérez, a competição ainda terminou com o atacante santista Emmanuele Del Vecchio como artilheiro, 23 gols.</p>
            <p>No ano seguinte, chegaria ao clube trazido pelas mãos de Waldemar de Brito, o menino Pelé de 15 anos, que posteriormente se tornaria o maior ídolo da história do clube. O primeiro título oficial de Pelé no Santos, aconteceu em 1958, quando o clube conquistou o seu quarto Campeonato Paulista, ali começava a história do camisa 10 pelo clube praiano.</p>
            <p>Ao lado de Pepe, Coutinho e Dorval, Pelé formou um ataque poderoso no Santos, com destaque para as duas conquistas da Copa Intercontinental e da Copa Libertadores da América, vencidas nos anos de 1962 e 1963.</p>
            <p>Ainda nessa década, no ano de 1969, o Santos ficou famoso por ter sido o time que parou a guerra, fato que ocorreu graças a uma excursão do clube no continente africano, em que o time paralisou os conflitos entre República do Congo e República Democrática do Congo e também a Guerra de Biafra, na Nigéria, para que as pessoas pudessem ver o Santos jogar.</p>
            <p>Após Pelé sair do Santos em 1974 para jogar no New York Cosmos dos Estados Unidos, o Santos formaria em 1978 um time que era chamado de "Meninos da Vila", devido a juventude dos atletas da equipe, os destaques desse time eram Juary, Pita, Aílton Lira e João Paulo que se sagrariam campeões paulista de 1978.</p>
            <p>O Santos chegaria a final do Campeonato Brasileiro de 1983, mas seria superado pelo Flamengo de Zico. Um ano depois, em 1984, o Santos seria campeão paulista tendo o artilheiro Serginho Chulapa como destaque. O Santos voltaria a fazer boas campanhas apenas em 1995, quando chegou na decisão do Campeonato Brasileiro daquele ano, porém em uma final muito polêmica com o Botafogo, o time de Giovanni e cia foi superado,
            e ficou com o vice-brasileiro. Dois anos depois, em 1997, o Alvinegro conquistaria o seu quinto Torneio Rio-São Paulo. No ano seguinte, em 1998, veio a conquista internacional da Copa Conmebol.</p>
            <h3>Século XXI</h3>
            <p>Em 2002, ano em que o clube completou 90 anos, o Santos conquistou o Campeonato Brasileiro no sistema de mata-mata, vencendo o Corinthians nos dois jogos da decisão, sendo esse o sétimo título nacional do clube. O time campeão foi basicamente formado por jogadores revelados pelo clube, os destaques eram a dupla Diego e Robinho e o técnico responsável pelo título foi Emerson Leão. No ano seguinte, com a base mantida,
            o Peixe chegou aos vice-campeonatos da Libertadores e do Campeonato Brasileiro.</p>
            <p>Em 2004, ainda com os ídolos Robinho, Elano e Léo, e tendo no banco o experiente técnico Vanderlei Luxemburgo, o Santos voltou a ser campeão brasileiro, desta vez no sistema de pontos corridos.</p>
            <p>Nos anos de 2006 e 2007 veio o bicampeonato paulista. O primeiro foi levantado na Vila Belmiro, com a vitória de 2 a 0 contra a Portuguesa. No ano seguinte, a taça foi erguida após decisão de 180 minutos contra o São Caetano, as duas partidas ocorreram no Morumbi, no primeiro jogo 2 a 0 para os adversários, no segundo, o Alvinegro devolveu o placar e ficou com o título por ter tido melhor campanha na competição.</p>
            <p>Em 2009, começou aparecer a geração de Neymar e Ganso, que naquela temporada ficou com o vice-campeonato paulista. Já em 2010, comandada por Dorival Júnior, com o retorno de Robinho, presença marcante de Arouca, Wesley, e um ataque arrasador comandado por Ganso, Neymar, Robinho e André, o time conquistou o Campeonato Paulista e a primeira Copa do Brasil do clube, com um futebol arrasador e seguidas goleadas, nessa que ficaria conhecido como a terceira geração de Meninos da Vila.</p>
            <p>Depois de 48 anos, o Santos voltou a ser campeão da Libertadores, desta vez em 2011 após superar o Penãrol do Uruguai na final, conseguindo assim, o tricampeonato do clube na competição continental. Antes dessa conquista, o Santos ainda seria campeão paulista. Com a conquista da América, o Santos se credenciou a disputar o Mundial de Clubes no Japão, contudo o time não conseguiu segurar a histórica equipe do Barcelona na final e ficou com o vice. Em 2012, veio o vigésimo Campeonato Paulista do clube e a primeira Recopa Sul-Americana. Depois de dois vices em 2013 e 2014, o Alvinegro chegou a mais uma final no estadual, a sétima consecutiva, e conquistou o Campeonato Paulista de 2015 após superar o Palmeiras nos pênaltis, o ano de 2015 terminou com o vice-campeonato da Copa do Brasil e o sétimo lugar no Campeonato Brasileiro. Em 2016, o Santos chegou no seu 22º título paulista, após chegar na sua oitava final seguida no campeonato. No Campeonato Brasileiro, ficou com o vice-campeonato, melhor colocação do clube desde a edição de 2007.</p>
            <p>Após uma campanha irregular no Campeonato Brasileiro de 2023, o Santos terminou na 17ª colocação e foi rebaixado para a Série B pela primeira vez em sua história. A partida que culminou na queda aconteceu no dia 6 de dezembro, na Vila Belmiro, e o Peixe perdeu por 2 a 1 para o Fortaleza. Nesse cenário adverso, o clube praiano contrata Fábio Carrille, que comandou o time por toda a temporada de 2024. Nessa passagem, o time foi vice-campeão do Campeonato Paulista e campeão da Série B, assim, retornando para a primeira divisão em 2025.</p>

            `,
        titulos: `
            <li>Copa Libertadores: 1962, 1963, 2011</li>
            <li>Mundial de Clubes: 1962, 1963</li>
            <li>Campeonato Brasileiro: 8 títulos</li>
            <li>Campeonato Paulista: 22 títulos</li>`,

        estadio: `
        <p>Vila Belmiro</p>
        <img src="estadiosantos.jpeg" alt="Estádio Santos - Vila Belmiro" style="max-width:100%; height:auto;">
        `    
    },

    saopaulo: {
        nome: "São Paulo Futebol Clube",
        fundacao: "1930",
        cidade: "São Paulo",
        estadioNome: "MorumBIS",
        corHeader: "#cc0000",
        logo: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Brasao_do_Sao_Paulo_Futebol_Clube.svg",
        historia: `
            <h3>Século XX</h3>
            
            <p>No dia 25 de janeiro de 1930 foi assinada a ata de fundação do São Paulo Futebol Clube, nascido da união entre a Associação Atlética das Palmeiras e uma grande parte dos jogadores e alguns membros da diretoria do Club Athletico Paulistano (que resolveu fechar o departamento de futebol em 1929), ficando como data magna do clube o dia 25 de janeiro de 1930, dia e mês em que foi fundada a cidade de São Paulo. Conservando as tradições do passado, o uniforme da nova equipe estamparia as faixas vermelhas e pretas em homenagem aos dois times fundadores.</p>
            <p>O São Paulo ainda herdaria o campo pertencente à Associação Atlética das Palmeiras, a chamada Chácara da Floresta, razão pela qual essa fase (1930–1935) passou a ser conhecida, apenas recentemente e de modo informal, como São Paulo da Floresta.</p>
            <p>Como conquistas, o Tricolor Paulista venceu o Campeonato Paulista de 1931 em seu segundo ano de existência e conseguiu sagrar-se vice em 1930, 1932, 1933 e 1934. Foi também vice-campeão do Torneio Rio-São Paulo de 1933. Portanto, o São Paulo FC, clube recém fundado, estava no topo do futebol local. Um fato extraordinário, mas nem tanto se levadas em consideração suas origens vencedoras.</p>
            <p>O São Paulo comprou, então, uma nova e suntuosa sede localizada na Rua Conselheiro Crispiniano, centro de São Paulo. O imóvel era um pequeno palácio conhecido como "Trocadero", adquirido ao custo de 190 contos de réis. Essa dívida era grande para a época, porém o clube, detentor de um campo como o da Chácara da Floresta e um quadro de jogadores que valia muito, não se deixava abalar. Entretanto, alguns dirigentes andavam descontentes com os rumos do futebol no país e resolveram fundir-se com o Clube de Regatas Tietê, acabando de vez com o departamento de futebol. Outro grupo, favorável à continuidade da esquadra e liderados pelo Dr. Paulo Sampaio, foi à Justiça e em 23 de abril de 1935 impugnou o direito da diretoria fundir o Tricolor com o Tietê sem que a opinião dos sócios fosse ouvida.</p>
            <p>Os sócios obtiveram ganho de causa mesmo após a defesa da diretoria, esta que não teve outra saída senão convocar uma assembleia geral. Porém, o artigo 2º dos estatutos da agremiação, à época, dizia que somente os "sócios fundadores" considerados "proprietários" do clube e que somavam 200, poderiam compor a assembleia. Como a maioria deles era ligada à diretoria, a fusão foi aprovada no dia 14 de maio de 1935. Nesse dia, debaixo de chuva, o departamento de futebol foi oficialmente extinto e desfiliado da APEA. Com a fusão, a parte administrativa foi fundida ao Clube de Regatas Tietê, que incorporou todos os patrimônios físicos e que, em troca, quitaria os créditos do São Paulo e não poderia usar as cores, uniformes ou símbolos do mesmo. Surgia assim o Tietê-São Paulo.</p>
            <p>Após a fusão com o CR Tietê, alguns antigos sócios do Tricolor Paulista, inconformados com tudo o que ocorrera, decidiram restabelecer a equipe de futebol, surgindo assim, no dia 4 de junho de 1935, o Clube Atlético São Paulo. No dia 16 de dezembro de 1935 ressurgiria o São Paulo Futebol Clube, que depois de tantos empecilhos e ressurreições, ganhou a alcunha de "Clube da Fé" do jornalista Tomás Mazzoni. O São Paulo Futebol Clube recebeu o título de "O Mais Querido" durante o período da ditadura Vargas, no qual eram proibidas as ostentações das bandeiras estaduais. Na ocasião da inauguração do Estádio do Pacaembu, em 27 de abril de 1940, o Tricolor Paulista entrou ostentando o nome e as cores do time, que são as mesmas do estado de São Paulo. O estádio inteiro e os locutores de todas as rádios, revoltados com a censura, driblaram-na aplaudindo de pé o time que carrega até hoje as cores vermelho, branco e preto.</p>
            <p>No dia seguinte, o jornal A Gazeta Esportiva estampava em sua capa a manchete "O Clube Mais Querido da Cidade". Passado mais um tempo, o DEIP (Departamento Estadual de Imprensa e Propaganda) promoveu um concurso público entre torcedores de todas as agremiações da época, com Corinthians e Palestra Italia sendo favoritos, pois possuíam as maiores torcidas. O vencedor acabou sendo o São Paulo com 5 523 votos, mais que a soma de votos dos seus dois principais concorrentes. Até hoje o slogan "O Mais Querido" figura entre os impressos de correspondência do clube.</p>
            <p>Mas foi somente em 1942 que tudo mudou para o São Paulo, com a negociação mais cara do futebol na época: Leônidas da Silva. Ele foi contratado para que o clube conquistasse seu segundo título paulista. E deu certo. Na reunião que definiria o calendário do Paulista de 1943 na sede da Federação Paulista, um dirigente do Corinthians disse que o encontro não era necessário, pois ao lançar uma moeda no ar, o campeão seria definido: se desse cara o campeão seria o Corinthians e se desse coroa, o Palmeiras (antigo Palestra Italia). Ao ser questionado sobre o São Paulo pelo representante tricolor, o dirigente respondeu que se a moeda parasse em pé o campeão seria o São Paulo, e ainda brincou, dizendo que se parasse no ar a campeã seria a Portuguesa. Realmente até aquele momento o Tricolor era tratado com um time mediano que não rivalizava com os rivais supracitados. Dessa maneira se iniciou o campeonato, com o São Paulo disposto a quebrar a hegemonia de Corinthians e Palmeiras. Até que no último jogo, contra o Palmeiras, o São Paulo segura um empate sem gols e conquista o título no ano em que a moeda caiu em pé. Por conta dessa conquista o então Grêmio são-paulino fez uma marcha à noite com um carro alegórico que continha uma moeda em pé somente para ir buscar a Taça dos Invictos no prédio da Gazeta Esportiva.</p>
            <p>A partir daí o Tricolor do Morumbi faturou cinco títulos na década de 1940, com o Paulista de 1943, e os bicampeonatos de 1945/46 e 1948/49. Em 1950, o craque do clube, Leônidas, se aposentou. Junto a isso começou a tomar força um movimento para a construção de um estádio. Então a agremiação sanou suas dívidas e partiu em busca de um terreno para a construção. No terreno da área do que é hoje o bairro do Jardim Leonor, na região do Morumbi, a pedra fundamental foi lançada e em 1953 teve início a construção do estádio, com o futebol sendo relegado a segundo plano. Mesmo assim, o clube conseguiu os Paulistas de 1953 e 57. Em 1958, o clube fez uma campanha de busca de sócio pelo interior.</p>
            <p>Em 1960 o Estádio Cícero Pompeu de Toledo foi parcialmente inaugurado, de modo a aumentar a arrecadação do clube. Com todos os esforços sendo desviados para o estádio ainda inacabado, a equipe de futebol ficou o período entre 1957 e 1970 sem conquistar títulos oficiais. Somente após a inauguração total, em 1970, é que vieram os títulos com os Paulistas de 1970, 1971 e 1975 e o inédito Campeonato Brasileiro de 1977. Houve ainda os vice-campeonatos dos Brasileiros de 1971, 1973 e da Libertadores de 1974.</p>
            <p>A década de 1980 se inicia com o bicampeonato paulista de 1980/1981. Em 1984 o time forma os chamados Menudos do Morumbi, com a liderança do técnico Cilinho, em alusão à banda porto-riquenha Menudo, com vários jogadores vindos da base, entre eles Müller. Com esse time conquista-se o bicampeonato brasileiro em 1986 e os Paulistas de 1985 e 87. Já sem os "Menudos", o clube ganha o Paulista de 1989.</p>
            <p>Em 1990 o São Paulo começa mal e coube a Telê Santana recuperar o time. Já em 1991 o time vence o Paulista e o tricampeonato Brasileiro. Logo após, conquista o bicampeonato da Copa Libertadores da América em 1992 e 1993 e o bicampeonato da Copa Intercontinental (antiga concorrência máxima de clubes) também em 1992 e 1993. O São Paulo levou ainda o Paulista de 1992, a Supercopa Libertadores de 1993, as Recopas Sul-Americanas de 1993 e 1994, a Copa Conmebol de 1994, a Copa Master da Conmebol de 1996 e o Paulista de 1998.</p>
            <h3>Século XXI</h3>
            <p>Tendo êxitos no Campeonato Paulista de 2000, no Rio-São Paulo de 2001 e no Supercampeonato Paulista de 2002 o time parecia engrenado, mas foi somente com uma reformulação no elenco que conquistou, em 2005, o Campeonato Paulista, o tri da Libertadores e o Mundial da FIFA. Após essa conquista o desmanche no elenco foi inevitável.</p>
            <p>Durante os anos de 2006, 2007 e 2008 o time tentou a conquista da América novamente, mas sem sucesso. Então coube à equipe se esforçar para a conquista de um feito inédito no futebol nacional, o tricampeonato brasileiro consecutivo na era dos pontos corridos, nos mesmos anos, sob o comando do técnico Muricy Ramalho.</p>
            <p>Após essa geração vitoriosa que conquistou o tricampeonato brasileiro, o São Paulo venceu a inédita Copa Sul-Americana de 2012 contra o Tigre da Argentina sob o brilho do atacante Lucas Moura.</p>
            <p>Após o triunfo frente aos argentinos, o clube sofreu um hiato de oito temporadas sem títulos, mesmo montando bons times nos anos de 2014 (vice-campeão do Brasileirão) e 2016 (semifinalista da Libertadores), vindo a conquistar, sob a batuta do argentino Hernán Crespo, o Campeonato Paulista de 2021 frente ao rival Palmeiras, sendo este período o segundo maior jejum de títulos na sua história.</p>
            <p>Em 2022, o São Paulo foi vice-campeão da Copa Sul-Americana, perdendo para o Independiente del Valle, do Equador.</p>
            <p>O São Paulo foi campeão da Copa do Brasil de Futebol de 2023, título inédito para o clube, superando o Flamengo nas finais. Em 2024 o time foi campeão da Supercopa Rei, vencendo o Palmeiras no Estádio Mineirão em Belo Horizonte e obtendo um título inédito, o que fez dele o único clube do futebol brasileiro que conquistou todos os títulos que estão atualmente em disputa.</p>
            <p>A década de 2020 no São Paulo iniciou-se com uma dualidade entre títulos históricos e uma profunda deterioração financeira e administrativa. Sob a presidência de Julio Casares (2021–2026), o clube encerrou um jejum de quase nove anos sem títulos, mas, apesar do sucesso esportivo pontual, a gestão foi marcada pela explosão da dívida total, que saltou de aproximadamente R$ 600 milhões em 2021 para mais de R$ 1,1 bilhão no início de 2026. O clube passou a operar com déficits sucessivos (R$ 287 milhões apenas em 2024) e recorreu a Fundos de Investimentos em Direitos Creditórios (FIDCs) para manter o fluxo de caixa, o que foi criticado por especialistas como uma "antecipação de futuro" perigosa.</p>
            <p>A política de contratações alternou entre acertos (como Jonathan Calleri e Lucas Moura) e desastres financeiros com atletas de alto custo e baixo retorno técnico, como a repatriação do meia Oscar em 2025, que não entregou o desempenho esperado frente aos altos vencimentos. No campo, o ano de 2025 foi considerado melancólico, culminando em uma derrota histórica por 6 a 0 contra o Fluminense, a segunda pior do século.</p>
            <h3>Crise Institucional, Impeachment e Renúncia de Julio Casares (2026)</h3>
            <p>A estabilidade política do São Paulo foi severamente abalada em janeiro de 2026. Em 16 de janeiro, o Conselho Deliberativo aprovou o pedido de impeachment do presidente Julio Casares por 188 votos favoráveis (de 223 possíveis). Diante da pressão e para preservar seus direitos políticos, Casares protocolou sua renúncia oficial em 21 de janeiro de 2026.</p>
            <p>As denúncias que fundamentaram a queda do mandatário envolveram:</p>
            <p><b>Escândalo dos Camarotes:</b> Um suposto esquema de comercialização irregular do "Camarote 3A" (sala da presidência) no MorumBIS durante grandes shows, como o da cantora Shakira. Gravações revelaram o envolvimento de diretores próximos e de Mara Casares (ex-esposa do presidente) na exploração comercial indevida do espaço.</p>
            <p><b>Investigação do COAF:</b> Relatórios do Conselho de Controle de Atividades Financeiras apontaram depósitos de R$ 1,5 milhão em dinheiro vivo na conta pessoal de Casares entre 2023 e 2025, prática conhecida como smurfing, além de saques de R$ 11 milhões em espécie das contas do clube sem correlação clara com as despesas oficiais.</p>
            <p>A articulação jurídica que permitiu o afastamento e garantiu a transparência no processo foi liderada pela advogada Amanda Nunes Costa, presidente do movimento <b>São Paulo PCD</b>, que obteve vitórias judiciais decisivas contra a diretoria.</p>
            <h3>Gestão Harry Massis Júnior (2026–presente)</h3>
            <p>Com a vacância do cargo, o vice-presidente Harry Massis Júnior, conselheiro vitalício desde 1964 e então com 80 anos, assumiu a presidência definitiva até o final de 2026. Encontrando um clube com dívida bilionária e fluxo de caixa asfixiado, Massis adotou uma política de austeridade radical, descrita como "fé e base". Sem recursos para grandes contratações, a gestão anunciou que o foco do futebol profissional seria a promoção intensiva de atletas das categorias de base de Cotia.</p>
            `,
        titulos: `
            <li>Copa Libertadores: 1992, 1993, 2005</li>
            <li>Mundial de Clubes FIFA: 1992, 1993, 2005</li>
            <li>Campeonato Brasileiro: 6 títulos</li>
            <li>Campeonato Paulista: 22 títulos</li>`,

        estadio: `
        <p>MorumBIS</p>
        <img src="estadiosaopaulo.jpeg" alt="Estádio São Paulo - MorumBIS" style="max-width:100%; height:auto;">` // max-width:100%; height:auto;" faz com que a imagem se ajuste ao layout

            
    }
};

// Função principal que troca todo o conteúdo da página
function carregarTime(slug) {
    const time = times[slug];
    if (!time) return;

    //muda o nome na aba do navegador
    document.title = `${time.nome} - Wikipédia`;

    //muda a cor do header
    document.querySelector('.barra').style.backgroundColor = time.corHeader;

    //muda o conteúdo da página
    document.querySelector('.content').innerHTML = `
        <h1>${time.nome}</h1>
        <div class="toc">
            <b>Índice</b>
            <ul>
                <li><a href="#historia">1 História</a></li>
                <li><a href="#titulos">2 Títulos</a></li>
                <li><a href="#estadio">3 Estádio</a></li>
            </ul>
        </div>
        <p>A história do <b>${time.nome}</b> é marcada por diversos momentos importantes no futebol brasileiro.</p>
        <h2 id="historia">História</h2>
        ${time.historia}
        <br>
        <h2 id="titulos">Títulos</h2>
        <ul>${time.titulos}</ul>
        <br>
        <h2 id="estadio">Estádio</h2>
        <div>${time.estadio}</div>
    `;

    //muda a caixinha lateral
    document.querySelector('.infobox').innerHTML = `
        <h3>${time.nome}</h3>
        <img src="${time.logo}" alt="Escudo do ${time.nome}">
        <p><b>Fundação:</b> ${time.fundacao}</p>
        <p><b>Cidade:</b> ${time.cidade}</p>
        <p><b>Estádio:</b> ${time.estadioNome}</p>
    `;

    //muda a URL mas não recarrega a página
    history.pushState({}, '', `#${slug}`);

    // Fecha o dropdown e limpa o input
    document.querySelector('.itens').style.display = 'none';
    document.getElementById('EntradaPesquisa').value = '';
}

//Carrega o time pela URL ao entrar na página
function carregarPelaURL() {
    const slug = window.location.hash.replace('#', '');
    if (slug && times[slug]) {
        carregarTime(slug);
    }
}

//barra de pesquisa
const pesquisaInput = document.getElementById('EntradaPesquisa');

pesquisaInput.addEventListener('input', (event) => {
    const value = formatString(event.target.value);
    const itens = document.querySelectorAll('.itens .iten');
    const lista = document.querySelector('.itens');
    const sem_resultados = document.getElementById('sem_resultados');

    lista.style.display = value ? 'block' : 'none';

    let temResultados = false;

    //para não aparecer a mensagem de nenhum resultado o tempo todo
    itens.forEach(iten => {
        if (formatString(iten.textContent).indexOf(value) !== -1) {
            iten.style.display = 'flex';
            temResultados = true;
        } else {
            iten.style.display = 'none';
        }
    });

    sem_resultados.style.display = temResultados ? 'none' : 'block';
});

//fecha o dropdown quando clica fora
document.addEventListener('click', (event) => {
    const pesquisa = document.querySelector('.pesquisa');
    if (!pesquisa.contains(event.target)) {
        document.querySelector('.itens').style.display = 'none';
    }
});

function formatString(value) {
    return value.toLowerCase().trim().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
//trim = passa o que for perquisado para minúsculo e remove espaços em branco no início e no final da pesquisa
//normalize = transforma os acentos em caracteres normais sem os acentos
//toLowerCase = autoexplicativo 
}

//roda quando carrega a página
carregarPelaURL();