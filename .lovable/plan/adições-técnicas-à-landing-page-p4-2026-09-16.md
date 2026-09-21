# Adições técnicas à Landing Page P4

## Objetivo
Adicionar somente as três funcionalidades solicitadas e incorporar as novas fotos de drone, preservando o hero, o restante do conteúdo, a identidade visual e qualquer mapa existente sem alterações.

## Alterações

1. **Como funciona em timeline**
   - Manter as cinco etapas e seus textos atuais.
   - Trocar apenas a grade de cartões por uma linha do tempo horizontal conectada no desktop.
   - No mobile, usar a mesma timeline em fluxo vertical para manter leitura e acessibilidade.

2. **Comparação técnica**
   - Inserir uma seção limpa após os benefícios, com duas colunas: “Método P4” e “Tratamento convencional”.
   - Comparar somente aspectos técnicos: desinfecção, monitoramento, resíduos, constância e acompanhamento.
   - Usar os mesmos tokens, tipografia, ícones, bordas e animações já presentes no site.

3. **Calculadora de economia**
   - Inserir uma seção própria após a comparação, com os quatro campos solicitados.
   - Calcular:
     - conversão estimada = conversão atual × 0,93;
     - consumo antes = conversão atual × ganho médio × quantidade;
     - consumo depois = conversão estimada × ganho médio × quantidade;
     - economia = (consumo antes − consumo depois) × preço da ração.
   - Exibir conversão e consumo “Antes/Depois” em barras comparativas, além do total economizado.
   - Gerar um link de WhatsApp com todos os valores informados e calculados na mensagem.
   - Validar números positivos e manter o resultado atualizado conforme o preenchimento.

4. **Fotos de drone enviadas**
   - Publicar as seis imagens pelo armazenamento de mídia do projeto.
   - Usá-las apenas na galeria existente, escolhendo enquadramentos que mostrem granjas e estações sem tocar no hero.
   - Manter carregamento progressivo, textos alternativos e legendas coerentes com o site.

## Validação
- Conferir o cálculo com valores conhecidos e testar o link do WhatsApp.
- Verificar visualmente desktop e mobile, incluindo timeline, formulário, gráfico e galeria.
- Confirmar que hero, mapa e demais seções permanecem inalterados e que o site continua sem erros.

## Detalhes técnicos
- Implementação em componentes React pequenos e tipados, sem backend ou persistência.
- Gráfico feito com CSS sem nova dependência, seguindo os estilos semânticos atuais.
- Nenhuma alteração na navegação principal, conteúdo existente fora do escopo ou identidade visual.
