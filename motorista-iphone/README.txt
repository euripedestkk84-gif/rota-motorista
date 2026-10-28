MOTORISTA — APP INDEPENDENTE, VERSAO 3

Inspirado na navegacao e nas cores dos aplicativos de motorista. Perfil e corridas demonstrativos, sem vinculo com a 99.

FUNCOES
- Nome, foto, carro/moto, modelo, placa, cor e ano editaveis.
- Perfil publico local com veiculo e numero de simulacoes concluidas.
- Menu lateral, central de ganhos, historico e filtro de hoje.
- Preferencias de som, nome na tela inicial e ocultacao de ganhos.
- Conectar dispara duas chamadas: 2 e 4 segundos apos o mesmo toque.
- Segunda chamada fica na fila; nao interrompe a primeira.
- Aceitar > Cheguei ao embarque > Iniciar corrida > Finalizar simulacao.
- Desconectar cancela as chamadas e a corrida simulada ativa. Sair do aplicativo ou bloquear a tela desconecta para evitar eventos atrasados.
- Historico das ultimas 500 simulacoes e preferencias salvos neste navegador, junto ao perfil. Limpar dados do site pode apaga-los.
- Mapa ilustrativo, passageiros e ganhos ficticios. Sem pagamentos, saque ou corridas reais.

ATUALIZAR NA VERCEL
1. Extraia o ZIP.
2. Abra no GitHub a pasta motorista-iphone existente dentro do repositorio rota-motorista.
3. Add file > Upload files: envie os arquivos de DENTRO da pasta extraida, substituindo os antigos. Inclua rides.js.
4. Commit changes. Aguarde a Vercel publicar a alteracao automaticamente.
5. Root Directory: motorista-iphone. Output Directory: ponto (.). Framework: Other. Build Command vazio.
6. Abra o endereco no Safari, atualize e feche/reabra o aplicativo para carregar a nova versao.

IPHONE
Abra o endereco HTTPS publicado no Safari > Compartilhar > Adicionar a Tela de Inicio. O ZIP nao e um instalador IPA. Dados podem diferir entre Safari e aplicativo instalado; edite o perfil no aplicativo que pretende usar.
Para ouvir as chamadas, ligue o som nas configuracoes, confira o volume do aparelho e mantenha o app aberto. O navegador pode atrasar temporizadores ou bloquear audio em segundo plano. Nao foi testado em iPhone fisico.

VALIDACAO
Sintaxe JavaScript verificada. Teste de logica: disparos em 2s/4s, preservacao da fila e transicoes da viagem. Teste no navegador: conectar, duas chamadas, aceitar, chegar, iniciar, finalizar, valor no historico e persistencia apos recarregar. Nenhuma conta externa foi modificada nesta atualizacao.
