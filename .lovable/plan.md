# Atualizar as seções Sobre e A solução

## Alterações
- Enviar a foto de perfil do Daniel e a arte da seção “A solução” para o CDN de assets do projeto.
- Na seção “Sobre”, substituir o placeholder pela foto real de Daniel, mantendo o enquadramento vertical e adicionando texto sobre seus mais de 10 anos de experiência em design e web design.
- Complementar o texto com sua dedicação, nos últimos três anos, ao estudo de IA e à criação de soluções para empresas locais, incluindo redes sociais, sites e aplicativos.
- Na seção “A solução”, substituir o placeholder pela arte enviada, preservando o espaço responsivo da composição.
- Manter a identidade visual, animações e acessibilidade existentes, com textos alternativos descritivos.

## Detalhes técnicos
- As imagens serão referenciadas por arquivos `.asset.json`, sem adicionar binários ao repositório.
- Os componentes `About.tsx` e `Solution.tsx` receberão imports dos assets e elementos `<img>` responsivos.
- A alteração será validada na prévia em viewport mobile e desktop.
