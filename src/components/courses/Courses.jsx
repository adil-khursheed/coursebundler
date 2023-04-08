import { Button, Container, Heading, HStack, Image, Input, Stack, Text, VStack } from '@chakra-ui/react'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'

const Course = ({views, title, imageSrc, id, addToPlaylistHandler, creator, description, lectureCount}) => {
    return(
        <VStack
            className='course'
            alignItems={["center", 'flex-start']}
        >
            <Image
                src={imageSrc}
                boxSize='60'
                objectFit={'contain'}
            />

            <Heading
                textAlign={['center', 'left']}
                maxW='200px'
                fontFamily={'sans-serif'}
                noOfLines={3}
                children={title}
                size={'sm'}
            />

            <Text
                children={description}
                noOfLines={2}
            />

            <HStack>
                <Text
                    children={"Creator"}
                    fontWeight={'bold'}
                    textTransform='uppercase'
                />
                <Text
                    children={creator}
                    fontFamily={'body'}
                    textTransform='uppercase'
                />
            </HStack>

            <Heading
                textAlign={'center'}
                size="xs"
                children={`Lectures - ${lectureCount}`}
                textTransform="uppercase"
            />
            <Heading
                size="xs"
                children={`Views - ${views}`}
                textTransform="uppercase"
            />

            <Stack
                direction={['column', 'row']}
                alignItems='center'
            >

                <Link to={`/course/${id}`}>
                    <Button
                    colorScheme={'yellow'}
                    >
                        Watch Now
                    </Button>
                </Link>
                <Button
                    colorScheme={'yellow'}
                    variant={'ghost'}
                    onClick={()=>addToPlaylistHandler(id)}
                >
                    Add to Playlist
                </Button>
            </Stack>
        </VStack>
    )
}

const Courses = () => {

    const [keyword, setKeyword] = useState("")
    const [category, setCategory] = useState("")

    const addToPlaylistHandler = () => {
        console.log("Added to Playlist");
    }

    const categories = [
        'Web Development', 'Artificial Intelligence', 'Data Science', 'Data Structure and Algorithm', 'App Development', 'Game Development'
    ]
  return (
      <Container minH={'95vh'} maxW="container.lg" paddingY={"8"}>
          <Heading children="All Courses" m={'8'} />
          <Input
              value={keyword}
              onChange={e => setKeyword(e.target.value)}
              placeholder='Search a course...'
              type={'text'}
              focusBorderColor='yellow.500'
          />

          <HStack
              overflowX={'auto'}
              paddingY='8'
              css={{
                  '&::-webkit-scrollbar': {
                  display:'none',
              }}}
          >
              {
                  categories.map((item, index) => (
                    <Button key={index} onClick={()=> setCategory(item)} minW={'60'}>
                        <Text children={item} />
                    </Button>
                  ))
              }
          </HStack>

          <Stack
              direction={['column', 'row']}
              flexWrap='wrap'
              justifyContent={['flex-start', 'space-evenly']}
              alignItems={['center', 'flex-start']}
          >
              <Course
                  title={"Sample"}
                  description={"Sample"}
                  views={23}
                  imageSrc={"https://cdn.pixabay.com/photo/2017/10/31/19/05/web-design-2906159__340.jpg"}
                  id={"SampleId"}
                  creator={"Sample Boy"}
                  lectureCount={2}
                  addToPlaylistHandler={addToPlaylistHandler}
              />
          </Stack>
    </Container>
  )
}

export default Courses