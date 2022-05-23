# Multitemas 

Precisamos adicionar ao template um tema próprio, como foi feito no arquivo `src/components/templates/header.tsx`  
```tsx
<ThemeProvider
      theme={(theme) =>headerTheme(theme, mode)}
    >
```  
Também precisamos criar um arquivo de tema especifico para lidar com os novos temas `src/components/templates/theme.tsx`  
A estrutra desses temas de templates, foram pensados para dar suporte ao tema global que é tokenizado de acordo com o system design, recebendo o tema global e repassando para o tema do template;  

### Criando os temas
Os temas customizados devem seguir uma estrutura diferente de composição, para que os atomos, moleculas e organismos possam consumir os temas sem precisarem qual estilo está sendo aplicado

```tsx
const coffe = (theme: any) =>
  createTheme({
    ...theme,
    button: {
      primay: {
        color: "#007789",
        borderColor: "#225511",
      },
      color: "#eee",
      borderColor: "#228855",
    },
    headerContainer: {
      backgroundColor: theme.darkSecundaryColor,
    },
  } as any);
  ```

### Ajustando os styled components
`src/components/atoms/button/button.style.tsx` 
Os styleds components devem ser ajustados para lidarem com o systema de multitemas, para isso devemos:  
```tsx
 `
  background-color: ${
    props.theme.button?.backgroundColor || props.theme.neutralPrimaryColor
  };
    borderColor: ${
      props.theme.button?.borderColor || props.theme.darkPrimaryColor
    };
`
  ```
Os estilos passam a receber dois temas, damos prioridade para validar o tema customizado antes de acessar o tema global, outro ponto importante é a construção dos nomes, que devem representar o component e não a tokenização, por exemplo:

Um componente de tipografia chamado TEXTO deve ter em seu estilo a seguinte convenção:
```tsx
 `
  background-color: ${
    props.theme.texto?.backgroundColor || props.theme.neutralPrimaryColor
  };
`
  ```
Convenção: props.theme{nomeDoComponente}{propriedadeDoCSS} --- usar --- lowerCamelCase

### Lidando com variantes
Mesmo com o multitemas instalado e pronto, ainda devemos lidar com as variantes de cada component, para isso utilizei uma prop nova chamada "variante" como no exemplo dos botões no header `src/components/templates/header.tsx`  
Mas para as variantes funcionarem com o novo sistema de multitemas, foi desenvolvido uma util que deve ser usado.
```tsx
const Button = styled(Buttom)((props: any) => {
  setStyleVariants("button", props); // devemos chamar a util indicando qual componente estamos validando a variação
  return `
  background-color: ${
    props.theme.button?.backgroundColor || props.theme.neutralPrimaryColor
  };
    borderColor: ${
      props.theme.button?.borderColor || props.theme.darkPrimaryColor
    };
`;
})
  ```

  A util esta no arquivo `src/styles/utils/setStyleVariants.ts`  e basicamente ela valida a variação do componente pela props "variante" e repassa ao tema.

  ```tsx
const setStyleVariants = (component: string, props: any) => {
  if (props.theme?.[component]?.[props.variante]) {
    props.theme[component] = props.theme[component][props.variante];
  }
};
  ```

  O uso de variante ainda está em desenvolvimento, precisamos validar os cenarios a seguir, para estar pronto:
  * Quando meu componente tem atributos do css gerais indiferentes da variante
  * Uso das variantes para temas globais.


  