import { useState  } from 'react'
import { CommentContainer,Header, Wrapper, Text, Profile, Detail, Name, Container, Arrow, ArrowWrapper  } from './comment.style'
import { FcExpand, FcCollapse } from 'react-icons/fc'
import Avatar from 'react-avatar'
import { LightSpeed } from 'react-reveal'
const com = [1,2,3,4,5,6,7,8]
const Comment = () => {
    return(
        <LightSpeed>
        <CommentContainer>
            <Header> Project Comment </Header>
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
        <ArrowWrapper>
        <Arrow>{'<'}</Arrow>
           <Arrow>{'>'}</Arrow>
           </ArrowWrapper>
        </CommentContainer>
        </LightSpeed>
    )
}


export default Comment