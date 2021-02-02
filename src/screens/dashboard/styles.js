import styled from 'styled-components'

export const HeaderDashboard = styled.header `
margin-left: 20px;
padding: 20px;

    img {
        width: 250px;
        height: 50px;

    }
`;

export const ContainerDashboard = styled.div `
background-color: #4EBBCB;
height: 100%;
padding: 0;`;

export const Title = styled.h1 `
max-width: 760px;
color: white;
padding-top: 60px;
padding-left: 20px;

font-size: 34px;
`;

export const Form = styled.form `
margin-top: 60px;
margin-left: 20px;
max-width: 700px;
display: flex;

input { 
    flex: 1;
    height: 70px;
    padding: 0 24px;
    border: 0px;
    border-radius: 5px;
    margin-right: 10px;

}

button {
width: 210px;
height: 70px;
background: #04d361;
color: #fff;
border: 0px;
border-radius: 5px;
font-weight: bold;
}
`;

export const ContainerList = styled.div `
    width: 720px;
    margin-left: 20px;
    margin-top: 40px;
    padding-bottom: 20px;
    border-radius: 5px;
    background-color: #f0f0f5;

    h1 {
        text-align: center;
        padding-top: 40px;
        color: #010202;
        font-size: 30px;
    }
`;

export const ListArticles = styled.div `
display: flex;
justify-content: space-between;
align-items: flex-start;
background-color: #fff;
margin: 10px 20px;
padding: 20px;
border-radius: 15px;

div:first-child {
   padding-bottom: 20px;
    h1 {
    font-size: 18px;
    color: #010202;
    }

    p{
        font-size: 14px;
        color: #010202;
        margin-top: 4px;
    }
}

section {
    margin-top: 10px;

    strong {
        font-size: 18px;
        color: #010202;
    }

    p {
        font-size: 14px;
        color: #010202;
        margin-top: 4px;
    }

    h2 {
        margin-top: 10px;
        font-size: 16px;
    }

    p:nth-of-type(2) {
        font-style: italic;
    }
}

button {
    border: none;
    width: 45px;
    height: 45px;
    background-color: #fff;
    border-radius: 10px;

}


`;

export const ContainerFavorites = styled.div ``;
