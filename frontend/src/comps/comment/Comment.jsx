import { useState  } from 'react'
import { CommentContainer,Header, Wrapper, Text, Profile, Detail, Name, Container  } from './comment.style'
import Avatar from 'react-avatar'
const com = [1,2,3,4,5,6,7,8]
const Comment = () => {
    return(
        <CommentContainer>
            <Header> We are Comment </Header>
        <Container>
            {
                com.map((item) => (
                     <Wrapper>
            <Avatar size='50px' name="W" round/>
            <Profile>
                <Text>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Libero recusandae minus illo praesentium repellendus quia dolore, veritatis dicta numquam consequatur!</Text>
                <Detail>
                    <Avatar size='50px' name='W' round/>
                    <Name>person name</Name>
                </Detail>
            </Profile>
        </Wrapper>
                ))
            }
        </Container>
        </CommentContainer>
    )
}


export default Comment