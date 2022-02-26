import styled from 'styled-components'

export const WhatContainer = styled.div`
    width: 100%;
    height: auto;
    background: url('assets/img/desc-header.svg');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
padding: 20px;
`

 export const Wrapper = styled.div`
    width: 90%;
    margin: 0 auto;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    place-items: center;
    /* gap: 2rem; */
 `
 export const Container = styled.div`
 max-width: 200px;
 cursor: pointer;
    display: flex;
    gap: 1rem;
    flex-direction: column;
    transition: all 1s linear ;
    transform: scale(1);

    &:hover{
        transform: scale(1.2);
        background: lightgray;
        padding: 10px;
        border-radius: 20px;
    }
 `
export const  ImageWrapper = styled.div`
width: 100%;
width: 100%;
height: 140px;
padding: 5px;
    background: #C7D2FE66;
    border-radius: 10px;
`
export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: center;
`
 export const Content = styled.div`
    display: flex;
    gap: .5rem;
    flex-direction: column;
 `
 export const Title = styled.h2`
    font-size: 17px;
    font-weight: 700;
    text-transform: capitalize;
    font-family: 'Source Code Pro', monospace;
 `
 export const  Desc = styled.p`
 max-width: 90%;
    font-family: 'Montserrat', sans-serif;
    font-size: 12px;
 `