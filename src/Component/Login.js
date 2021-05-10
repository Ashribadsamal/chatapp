import React from 'react'
import styled from 'styled-components'
import {auth,provider} from '../firebase'


function Login(props) {
    const signIn=()=>{
        auth.signInWithPopup(provider)
        .then((result)=>{
            //console.log(result.user) which give all data
            const newUser={
                name:result.user.displayName,
                photo:result.user.photoURL,
            }
            //console.log(newUser)
           // console.log(result.user)
           
            localStorage.setItem('user',JSON.stringify(newUser));
            props.setUser(newUser); //set the user in app
        })
        .catch((error)=>{
            alert(error.message)
        })
    }
    return (
        <Container>
            <Content>
                <SlackImg src="https://i.postimg.cc/bwx0QwPh/chat-logo-design-93835-108.jpg"/>
                <HeadingH1>Sign In Chat App</HeadingH1>
                <SignInButton onClick={()=>
                    signIn()
                }>
                    Sign in With Google
                </SignInButton>
            </Content>
        </Container>
    )
}

export default Login;


const Container=styled.div`
   width:100%;
   height:100vh;
   background-color:hsl(147, 28%, 75%);;
   display:flex;
   justify-content:center;
   align-items:center;
`
const HeadingH1 = styled.h1`
color:green;

`

const Content=styled.div`
  background-color:white;
  padding:100px;
  border-radius: 5px;
  display:flex;
  flex-direction:column;
  justify-content:center;
  align-items:center;
  box-shadow:0 1px 3px rgb(0 0 0 / 12%),0 1px 2px rgb(0 0 0 / 24%);
`
const SlackImg=styled.img`
  height:100px;
`

const SignInButton=styled.button`
    margin-top:50px;
    background-color:#0a8d48;
    color:white;
    border:none;
    height:40px;
    border-radius:4px;
    cursor:pointer;
    font-size:15px;
`