import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    html {
        font-size: 62.5%;
    }

    body {
        font-size: 1.6rem;
    }

    * {
        font-family: 'Inter', sans-serif;
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
    }

    .container {
        max-width: 1450px;
        margin: 0  auto;
    }

    :root{
        --color-primary:#27AE60;
        --color-primary-focus:#EB5757;
        --color-gray-0:#F5F5F5;
        --color-gray-1:#E0E0E0;
        --color-gray-2:#828282;
        --color-gray-3:#333333;
        --color-success:#168821;
        --color-information: #155BCB;
        --color-warning: #FFCD07;
        --color-negative:#E60000;

        --font-title: 1.6rem;
        --font-headline: 1.2rem;
    }
`;