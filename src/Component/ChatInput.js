import React ,{useState} from 'react'
import styled from 'styled-components';
import SendIcon from '@material-ui/icons/Send';

function ChatInput({sendMessage}) {

  const [input,setInput]=useState("");


    const send=(e)=>{
        e.preventDefault();
      if(!input)return;
        sendMessage(input)
        setInput("");
    }

    return (
        <Container>
           <InputContainer>
              <form>
                  <input 
                  onChange={(e)=>setInput(e.target.value)}
                  type="text" value={input} placeholder="Message here...."/>
                  <SendButton type="submit" onClick={send}>
                      <SendIcon/>
                  </SendButton>
              </form>
           </InputContainer>
        </Container>
    )
}

export default ChatInput;


const Container=styled.div`
  width:100%;
  padding-left:20px;
  padding-right:20px;
  padding-bottom:24px;
`
const InputContainer=styled.div`
  
  border-radius:4px;
  border:1px solid #8D8D8E;
    

      form{
        display: flex;
        height: 42px;
        justify-content:space-between;
        align-items: center;
        padding-left: 10px;
        input {
            flex: 1;
            border:none;
            font-size:13px;
            margin-right:9px;
          }
          input:focus{
              outline:none;
            }
      }
  
`
const SendButton=styled.button`
background: #007a5a;
border-radius:2px;
width:32px;
height:32px;
display:flex;
justify-content:center;
align-items:center;
margin-right:8px;

cursor:pointer;
border:none;
     :hover{
       background:#148567;
     }
    
`