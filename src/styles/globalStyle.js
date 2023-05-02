import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
font-face {font-family: "Open-Sans-Regular";
src: url("./fonts/OpenSans.ttf")}

font-face {font-family: "Open-Sans-Bold";
src: url("./fonts/OpenSans-Bold.ttf")}


:root{
  --primary-color:grey; 
  --secondary-color:#110bb5;
  --third-color:white;
  --font-color:; 
  --primary-font:"Open-Sans-Regular";
  --secondary-font:"Open-Sans-Bold"; 
  --third-font:"PlayfairDisplay-Bold"; 
}

body, html {
  margin:0.5%; 
  padding:0;
  font-family: var(--primary-font),-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";;
 
    
}


}`;

export default GlobalStyle;
